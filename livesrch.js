function liveSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch();
    }, 500);
}

async function performSearch() {
    const query = document.getElementById("searchInput")?.value.trim();
    if (!query) {
        document.getElementById("searchResults").innerHTML = "";
        return;
    }
    
    currentSearchQuery = query;
    currentSearchPage = 1;
    
    showLoader();
    try {
        let url;
        
        // Check if it's an IMDB ID (starts with tt)
        if (query.startsWith("tt")) {
            url = `https://api.themoviedb.org/3/find/${query}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
        } else {
            url = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=1`;
        }
        
        const res = await fetch(url);
        const data = await res.json();
        
        const resultsContainer = document.getElementById("searchResults");
        if (!resultsContainer) return;
        resultsContainer.innerHTML = "";
        
        // Handle IMDB ID search (different response format)
        if (query.startsWith("tt")) {
            const items = [];
            if (data.movie_results.length) items.push(...data.movie_results);
            if (data.tv_results.length) items.push(...data.tv_results);
            
            if (!items.length) {
                resultsContainer.innerHTML = "<p>No results found for this IMDB ID</p>";
                return;
            }
            
            items.forEach(item => {
                const img = item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "https://placehold.co/200x300/333/fff?text=No+Image";
                
                const title = item.title || item.name || "Untitled";
                const mediaType = item.media_type || (item.first_air_date ? "tv" : "movie");
                
                const card = document.createElement("div");
                card.className = "card";
                card.onclick = () => {
                    // Remove active class from all cards
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
                    // Add active class to clicked card
                    card.classList.add('active');
                    
                    saveHistory({ 
                        id: item.id, 
                        title, 
                        type: mediaType, 
                        poster: img, 
                        desc: item.overview 
                    });
                    showMovieDetails(item.id, mediaType);
                };
                
                card.innerHTML = `
                    <img src="${img}" alt="${title}" loading="lazy">
                    <div class="card-title">${title}</div>
                    ${item.vote_average ? `<div class="card-rating">⭐ ${item.vote_average.toFixed(1)}</div>` : ''}
                `;
                
                resultsContainer.appendChild(card);
            });
        } else {
            // Handle regular search
            if (!data.results.length) {
                resultsContainer.innerHTML = "<p>No results found</p>";
                return;
            }
            
            data.results.forEach(item => {
                // Skip people and other media types
                if (item.media_type !== "movie" && item.media_type !== "tv") return;
                
                const img = item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "https://placehold.co/200x300/333/fff?text=No+Image";
                
                const title = item.title || item.name || "Untitled";
                const mediaType = item.media_type;
                
                const card = document.createElement("div");
                card.className = "card";
                card.onclick = () => {
                    // Remove active class from all cards
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
                    // Add active class to clicked card
                    card.classList.add('active');
                    
                    saveHistory({ 
                        id: item.id, 
                        title, 
                        type: mediaType, 
                        poster: img, 
                        desc: item.overview 
                    });
                    showMovieDetails(item.id, mediaType);
                };
                
                card.innerHTML = `
                    <img src="${img}" alt="${title}" loading="lazy">
                    <div class="card-title">${title}</div>
                    ${item.vote_average ? `<div class="card-rating">⭐ ${item.vote_average.toFixed(1)}</div>` : ''}
                `;
                
                resultsContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error performing search:", error);
        showMessage("Failed to perform search. Please try again.");
    } finally {
        hideLoader();
    }
}

async function loadMoreSearchResults() {
    if (!currentSearchQuery || isLoading) return;
    
    isLoading = true;
    currentSearchPage++;
    const searchLoader = document.getElementById("searchLoader");
    if (searchLoader) searchLoader.style.display = "block";
    
    try {
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(currentSearchQuery)}&page=${currentSearchPage}`;
        const res = await fetch(url);
        const data = await res.json();
        
        const resultsContainer = document.getElementById("searchResults");
        if (!resultsContainer) return;
        
        data.results.forEach(item => {
            // Skip people and other media types
            if (item.media_type !== "movie" && item.media_type !== "tv") return;
            
            const img = item.poster_path
                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                : "https://placehold.co/200x300/333/fff?text=No+Image";
            
            const title = item.title || item.name || "Untitled";
            const mediaType = item.media_type;
            
            const card = document.createElement("div");
            card.className = "card";
            card.onclick = () => {
                // Remove active class from all cards
                document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
                // Add active class to clicked card
                card.classList.add('active');
                
                saveHistory({ 
                    id: item.id, 
                    title, 
                    type: mediaType, 
                    poster: img, 
                    desc: item.overview 
                });
                showMovieDetails(item.id, mediaType);
            };
            
            card.innerHTML = `
                <img src="${img}" alt="${title}" loading="lazy">
                <div class="card-title">${title}</div>
                ${item.vote_average ? `<div class="card-rating">⭐ ${item.vote_average.toFixed(1)}</div>` : ''}
            `;
            
            resultsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading more search results:", error);
        currentSearchPage--;
    } finally {
        isLoading = false;
        const searchLoader = document.getElementById("searchLoader");
        if (searchLoader) searchLoader.style.display = "none";
    }
}

// Add this to your setupInfiniteScroll function:
function setupInfiniteScroll() {
    window.addEventListener('scroll', () => {
        
        
        // Search Page infinite scroll
        if (currentPage === "searchPage" && !isLoading && currentSearchQuery) {
            loadMoreSearchResults();
        }
        
        // ... rest of existing code ...
    });
}

// Add these to your window exports:
window.liveSearch = liveSearch;
window.performSearch = performSearch;
