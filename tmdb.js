
// Constants
let currentPage = 1;
let currentSearchPage = 1;
let currentBrowsePage = 1;
let isLoading = false;
let searchTimeout = null;
let currentSearchQuery = '';
let hasMoreHomeContent = true;
let currentHomePage = 1;
let activeCard = null;

// Server List
const playerServers = [
   { key: "vidvip", name: "vidsrc.to", url: "vidsrc.to" }, { key: "vidlink", name: "vidsrc.vip", url: "vidsrc.vip" },
    { key: "letsembed", name: "vidsrc.icu", url: "vidsrc.icu" },
    { key: "flixindia", name: "vidsrc.cc/v2", url: "vidsrc.cc/v2" },
    { key: "vidify", name: "embed.su", url: "embed.su" },
    { key: "uembed", name: "vidsrc.me", url: "vidsrc.me" },
    { key: "autoembed", name: "autoembed.pro", url: "autoembed.pro" },
{ key: "111movies", name: "vidfast.pro", url: "vidfast.pro" },
    { key: "vidsrcx", name: "player.videasy.net", url: "player.videasy.net" },
    { key: "streamtape", name: "player.autoembed.cc", url: "player.autoembed.cc" },    
    { key: "vidcloud", name: "uembed.site", url: "uembed.site" },
    { key: "moviehive", name: "111movies.com", url: "111movies.com" },
    { key: "streamlare", name: "hyhd.org", url: "hyhd.org" },
    
];
let customServers = [];

// Current player state
let currentServerKey = "vidvip";
let currentSeason = 1;
let currentEpisode = 1;
let currentData = null;
let isSandboxEnabled = false;

// Categories for browse page
const categories = [
    { name: "Trending", category: "trending", type: "all", letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/sItIskd5xpiE64bBWYwZintkGf3.jpg" },
    { name: "Popular Movies", category: "popular_movies", type: "movie", letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg" },
    { name: "Top Rated", category: "top_rated", type: "movie", letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg" },
    { name: "Upcoming", category: "upcoming_movies", type: "movie", letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg" },
    { name: "Now Playing", category: "now_playing_movies", type: "movie", letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg" },
    { name: "Popular TV", category: "popular_tv", type: "tv", letsembedEmbedType: "tv", bgImage: "https://image.tmdb.org/t/p/w780/2meX1nMdScFOoV4370rqHWKmXhY.jpg" },
    { name: "Top Rated TV", category: "top_rated_tv", type: "tv", letsembedEmbedType: "tv", bgImage: "https://image.tmdb.org/t/p/w780/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg" },
    { name: "On The Air", category: "on_the_air_tv", type: "tv", letsembedEmbedType: "tv", bgImage: "https://image.tmdb.org/t/p/w780/vno2LrEQr3lTOk3U1G1ihZsy64b.jpg" },
    { name: "Airing Today", category: "airing_today_tv", type: "tv", letsembedEmbedType: "tv", bgImage: "https://image.tmdb.org/t/p/w780/kkfqNkGQR5og5sDjJTxTVmI9PW.jpg" },
    { name: "Anime", category: "anime", type: "tv", genreId: 16, letsembedEmbedType: "anime", bgImage: "https://image.tmdb.org/t/p/w780/xuJ0F9RfKvVSJNDg2usurQ9WvY5.jpg" },
    { name: "Hentai", category: "hentai", type: "tv", keywords: "210024|222930", letsembedEmbedType: "hentai", bgImage: "https://image.tmdb.org/t/p/w780/eH2E2Lq6vy0oVMDOR2IdpnRP9kK.jpg" },
    { name: "Action", category: "genre_action_movie", type: "movie", genreId: 28, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Adventure", category: "genre_adventure_movie", type: "movie", genreId: 12, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Animation", category: "genre_animation_movie", type: "movie", genreId: 16, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Comedy", category: "genre_comedy_movie", type: "movie", genreId: 35, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Crime", category: "genre_crime_movie", type: "movie", genreId: 80, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Documentary", category: "genre_documentary_movie", type: "movie", genreId: 99, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Drama", category: "genre_drama_movie", type: "movie", genreId: 18, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Family", category: "genre_family_movie", type: "movie", genreId: 10751, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Fantasy", category: "genre_fantasy_movie", type: "movie", genreId: 14, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "History", category: "genre_history_movie", type: "movie", genreId: 36, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Horror", category: "genre_horror_movie", type: "movie", genreId: 27, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Music", category: "genre_music_movie", type: "movie", genreId: 10402, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Mystery", category: "genre_mystery_movie", type: "movie", genreId: 9648, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Romance", category: "genre_romance_movie", type: "movie", genreId: 10749, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Sci-Fi", category: "genre_scifi_movie", type: "movie", genreId: 878, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Thriller", category: "genre_thriller_movie", type: "movie", genreId: 53, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "War", category: "genre_war_movie", type: "movie", genreId: 10752, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" },
    { name: "Western", category: "genre_western_movie", type: "movie", genreId: 37, letsembedEmbedType: "movie", bgImage: "https://image.tmdb.org/t/p/w780/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg" }
];

// Initialize the app
window.addEventListener('DOMContentLoaded', () => {
    showPage('homePage');
    loadHomeCategoryGrid();
    loadHeroSlider();
    setupInfiniteScroll();
});

// Filter content based on dropdown selections
function filterContent() {
    const year = document.getElementById('yearFilter').value;
    const genre = document.getElementById('genreFilter').value;
    const type = document.getElementById('typeFilter').value;
    
    let url = `https://api.themoviedb.org/3/discover/${type}?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`;
    
    if (year) {
        url += `&primary_release_year=${year}`;
    }
    
    if (genre) {
        url += `&with_genres=${genre}`;
    }
    
    // For Hindi movies specifically
    if (type === 'movie') {
        url += '&with_original_language=hi';
    }
    
    showLoader();
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const grid = document.getElementById("homeCategoryGrid");
            if (!grid) return;
            grid.innerHTML = "";
            
            data.results.forEach(item => {
                const img = item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "https://placehold.co/200x300/333/fff?text=No+Image";

                const title = item.title || item.name || "Untitled";
                const mediaType = type;
                
                const card = document.createElement("div");
                card.className = "card";
                card.onclick = () => {
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
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

                grid.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error filtering content:", error);
            showMessage("Failed to filter content. Please try again.");
        })
        .finally(() => {
            hideLoader();
        });
}

// --- Server Selector Functions ---
function renderServerSelector(selectedKey) {
    const sel = document.getElementById("playerServerSelector");
    if (!sel) return;
    sel.innerHTML = "";
    [...playerServers, ...customServers].forEach(s => {
        const opt = document.createElement("option");
        opt.value = s.key;
        opt.textContent = s.name;
        if (s.key === selectedKey) opt.selected = true;
        sel.appendChild(opt);
    });
}

function renderServerList(selectedKey) {
    const list = document.getElementById("playerServerOptions");
    if (!list) return;
    list.innerHTML = "";
    [...playerServers, ...customServers].forEach(s => {
        const div = document.createElement("div");
        div.className = "server-option-btn" + (s.key === selectedKey ? " active" : "");
        div.dataset.server = s.key;
        div.innerHTML = `<i class="bx bx-server"></i> Server ${s.name}`;
        div.onclick = () => selectPlayerServer(s.key);
        list.appendChild(div);
    });
}

function selectPlayerServer(key) {
    currentServerKey = key;
    renderServerSelector(key);
    renderServerList(key);
    playCurrentVideo();
}

function updatePlayerServer() {
    const sel = document.getElementById("playerServerSelector");
    if (!sel) return;
    const key = sel.value;
    selectPlayerServer(key);
}

// --- Season/Episode Selectors ---
function renderSeasonOptions(data) {
    const sel = document.getElementById("playerSeasonSelector");
    if (!sel) return;
    sel.innerHTML = '<option value="">Select Season</option>';
    (data.seasons || []).forEach(s => {
        if (s.season_number > 0) {
            const opt = document.createElement("option");
            opt.value = s.season_number;
            opt.textContent = s.name || `Season ${s.season_number}`;
            sel.appendChild(opt);
        }
    });
    sel.value = 1;
    renderEpisodeOptions(1, data);
}

function renderEpisodeOptions(seasonNum, data) {
    const sel = document.getElementById("playerEpisodeSelector");
    if (!sel) return;
    sel.innerHTML = '<option value="">Select Episode</option>';
    let episodes = [];
    if (data.seasons) {
        const season = data.seasons.find(s => s.season_number == seasonNum);
        if (season && season.episode_count) {
            for (let i = 1; i <= season.episode_count; i++) {
                episodes.push({ ep: i, name: `E${i}` });
            }
        }
    }
    if (!episodes.length) {
        for (let i = 1; i <= 20; i++) episodes.push({ ep: i, name: `E${i}` });
    }
    episodes.forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.ep;
        opt.textContent = e.name;
        sel.appendChild(opt);
    });
    sel.value = 1;
}

function updatePlayerSeason() {
    const sel = document.getElementById("playerSeasonSelector");
    if (!sel) return;
    const val = sel.value;
    currentSeason = Number(val) || 1;
    renderEpisodeOptions(currentSeason, currentData);
    playCurrentVideo();
}

function updatePlayerEpisode() {
    const sel = document.getElementById("playerEpisodeSelector");
    if (!sel) return;
    const val = sel.value;
    currentEpisode = Number(val) || 1;
    playCurrentVideo();
}

// --- Play Video Functions ---
function playCurrentVideo() {
    if (!currentData) return;
    const server = [...playerServers, ...customServers].find(s => s.key === currentServerKey);
    if (!server) return;
    
    let src = "";
    let imdb = currentData.external_ids?.imdb_id;
    let tmdb = currentData.id;
    let type = currentData.media_type || (currentData.seasons ? "tv" : "movie");
    
    if (type === "movie") {
        if (server.url.includes("uembed.site")) {
            src = `https://${server.url}/?id=${tmdb}`;
        } else if (server.url.includes("111movies.com")) {
            src = `https://${server.url}/movie/${tmdb}`;
        } else if (server.url.includes("vidsrc.cc")) {
            src = `https://${server.url}/v2/embed/movie/${tmdb}`;
        } else if (server.url.includes("vidfast.pro") || server.url.includes("player.videasy.net")) {
            src = `https://${server.url}/movie/${tmdb}`;
        } else if (server.url.includes("hyhd.org")) {
            src = `https://${server.url}/embed/${tmdb}`;
        } else {
            src = `https://${server.url}/embed/movie/${tmdb}`;
        }
    } else {
        // Season and Episode as number only
        const season = currentSeason.toString().replace(/[^0-9]/g, '');
        const episode = currentEpisode.toString().replace(/[^0-9]/g, '');

        if (
            server.url.includes("vidfast.pro") ||
            server.url.includes("flickembed.com") ||
            server.url.includes("vidsrc.to") ||
            server.url.includes("vidsrc.net") ||
            server.url.includes("vidsrc.icu") ||
            server.url.includes("embed.su") ||
            server.url.includes("vidsrc.vip") ||
            server.url.includes("player.videasy.net") ||
            server.url.includes("hyhd.org")
        ) {
            src = `https://${server.url}/embed/tv/${tmdb}/${season}/${episode}`;
        } else if (server.url.includes("111movies.com")) {
            src = `https://${server.url}/tv/${tmdb}/season/${season}/episode/${episode}`;
        } else {
            // Default fallback
            src = `https://${server.url}/embed/tv/${tmdb}/${season}/${episode}`;
        }
    }
    
    // Add sandbox parameter if enabled
    if (isSandboxEnabled) {
        src += (src.includes('?') ? '&' : '?') + 'sandbox=1';
    }
    
    const player = document.getElementById("videoPlayer");
    if (player) {
        player.src = src;
    }
}

function toggleSandbox() {
    isSandboxEnabled = !isSandboxEnabled;
    const toggle = document.getElementById("sandboxToggle");
    if (toggle) {
        toggle.classList.toggle("active", isSandboxEnabled);
    }
    playCurrentVideo();
}

// --- Modal Functions ---
function getMoreTabHTML(data) {
    let genres = (data.genres || []).map(g =>
        `<span class="category-card" style="width:auto;height:auto;display:inline-block;margin:4px 8px 4px 0;background-image:none;background:var(--accent);color:#fff;padding:4px 12px;">${g.name}</span>`
    ).join("");
    
    return `<div style="margin-bottom:10px;"><b>Categories:</b> ${genres}</div>`;
}

function renderDownloadOptions(data) {
    const container = document.getElementById("downloadOptions");
    if (!container) return;
    container.innerHTML = "";

    const tmdb = data.id;
    const imdb = data.external_ids?.imdb_id;
    const type = data.media_type || (data.seasons ? "tv" : "movie");

    if (type === "movie") {
        // Movie download option - prefer IMDb if available
        const movieOption = document.createElement("a");
        movieOption.href = imdb 
            ? `https://dl.vidsrc.vip/movie/${imdb}`
            : `https://dl.vidsrc.vip/movie/${tmdb}`;
        movieOption.className = "download-option";
        movieOption.target = "_blank";
        movieOption.innerHTML = `<i class='bx bx-download'></i> Download Movie`;
        container.appendChild(movieOption);
    } else {
        // TV Show download options - prefer IMDb if available
        const seasons = data.seasons || [];
        seasons.forEach(season => {
            const seasonNum = season.season_number;
            if (seasonNum > 0) {
                // Season link (defaults to episode 1)
                const seasonOption = document.createElement("a");
                seasonOption.href = imdb
                    ? `https://dl.vidsrc.vip/tv/${imdb}/${seasonNum}/1`
                    : `https://dl.vidsrc.vip/tv/${tmdb}/${seasonNum}/1`;
                seasonOption.className = "download-option";
                seasonOption.target = "_blank";
                seasonOption.innerHTML = `<i class='bx bx-download'></i> Season ${seasonNum}`;
                container.appendChild(seasonOption);

                // Up to 10 episodes
                for (let ep = 1; ep <= 10; ep++) {
                    const epOption = document.createElement("a");
                    epOption.href = imdb
                        ? `https://dl.vidsrc.vip/tv/${imdb}/${seasonNum}/${ep}`
                        : `https://dl.vidsrc.vip/tv/${tmdb}/${seasonNum}/${ep}`;
                    epOption.className = "download-option";
                    epOption.target = "_blank";
                    epOption.innerHTML = `<i class='bx bx-download'></i> S${seasonNum}E${ep}`;
                    container.appendChild(epOption);
                }
            }
        });
    }
}

function renderDownloadBtn(data) {
    let imdb = data.external_ids?.imdb_id;
    let tmdb = data.id;
    let type = data.media_type || (data.seasons ? "tv" : "movie");
    let url = "";
    
    if (type === "movie") {
        url = imdb
            ? `https://dl.vidsrc.vip/movie/${imdb}`
            : `https://dl.vidsrc.vip/movie/${tmdb}`;
    } else {
        // For TV shows, you might want to link to the first season/episode
        const firstSeason = data.seasons?.find(s => s.season_number > 0)?.season_number || 1;
        url = imdb
            ? `https://dl.vidsrc.vip/tv/${imdb}/${firstSeason}/1`
            : `https://dl.vidsrc.vip/tv/${tmdb}/${firstSeason}/1`;
    }
    
    // Return or use the URL as needed
    return url;
}

function renderSimilarContent(similar) {
    const container = document.getElementById("similarContent");
    if (!container) return;
    container.innerHTML = "";
    
    similar.results.slice(0, 10).forEach(item => {
        const img = item.poster_path
            ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
            : "https://placehold.co/200x300/333/fff?text=No+Image";
        
        const title = item.title || item.name || "Untitled";
        const mediaType = item.media_type || (item.first_air_date ? "tv" : "movie");
        
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = (e) => {
            e.stopPropagation();
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
        
        container.appendChild(card);
    });
}

function renderCast(credits) {
    const container = document.getElementById("castContent");
    if (!container) return;
    container.innerHTML = "";
    
    credits.cast.slice(0, 15).forEach(person => {
        const img = person.profile_path
            ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
            : "https://placehold.co/200x300/333/fff?text=No+Image";
        
        const card = document.createElement("div");
        card.className = "cast-card";
        card.innerHTML = `
            <img src="${img}" alt="${person.name}" loading="lazy">
            <p>${person.name}</p>
            <p style="color:#aaa;">${person.character || ''}</p>
        `;
        container.appendChild(card);
    });
}

async function showPlayerPage(data) {
    currentData = data;
    const playerTitle = document.getElementById("playerTitle");
    const playerDescription = document.getElementById("playerDescription");
    if (playerTitle) playerTitle.textContent = data.title || data.name || "Untitled";
    if (playerDescription) playerDescription.textContent = data.overview || "No description.";
    
    // Update watchlist button state
    updateWatchlistButtonState(data);
    
    renderServerSelector("vidlink");
    renderServerList("vidlink");
    
    const episodesSection = document.getElementById("playerEpisodesSection");
    if (episodesSection) {
        if (data.seasons && data.seasons.length) {
            episodesSection.style.display = "block";
            renderSeasonOptions(data);
        } else {
            episodesSection.style.display = "none";
        }
    }
    
    // Render download options
    renderDownloadOptions(data);
    
    currentServerKey = "vidlink";
    currentSeason = 1;
    currentEpisode = 1;
    playCurrentVideo();
    
    const playerPage = document.getElementById("videoPlayerPage");
    if (playerPage) {
        playerPage.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

async function showMovieDetails(id, type) {
    showLoader();
    try {
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${TMDB_API_KEY}&append_to_response=videos,credits,similar,external_ids,genres,seasons`;
        const res = await fetch(url);
        const data = await res.json();
        currentData = data;
        
        const modalTitle = document.getElementById("movieModalTitle");
        const modalImage = document.getElementById("modalVideoImage");
        const modalDesc = document.getElementById("movieModalDesc");
        const modalMeta = document.getElementById("movieModalMeta");
        
        if (modalTitle) modalTitle.textContent = data.title || data.name || "Untitled";
        if (modalImage) {
            modalImage.src = data.backdrop_path
                ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                : "https://placehold.co/1280x720/333/fff?text=No+Image";
        }
        if (modalDesc) modalDesc.textContent = data.overview || "No description.";
        if (modalMeta) {
            // Convert runtime to hours and minutes format
            let runtime = data.runtime || data.episode_run_time?.[0] || 0;
            let hours = Math.floor(runtime / 60);
            let minutes = runtime % 60;
            let runtimeFormatted = `${hours}h ${minutes}m`;
            if (hours === 0) runtimeFormatted = `${minutes}m`;
            
            modalMeta.innerHTML = `
                <span>⭐ ${data.vote_average?.toFixed(1) || 0}</span>
                <span class="runtime"> <i class='bx bx-time'></i> ${runtimeFormatted}</span>
                <span> ${data.release_date || data.first_air_date || ""}</span>
            `;
        }
        
        // Update watchlist button state
        updateWatchlistButtonState(data);
        
        // Load trailer if available
        const trailerContent = document.getElementById("trailerContent");
        if (trailerContent) {
            if (data.videos && data.videos.results.length > 0) {
                const trailer = data.videos.results.find(v => v.type === "Trailer") || data.videos.results[0];
                trailerContent.innerHTML = `
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen></iframe>
                `;
            } else {
                trailerContent.innerHTML = "No trailers available";
            }
        }
        
        const moreContent = document.getElementById("moreContent");
        if (moreContent) {
            moreContent.innerHTML = getMoreTabHTML(data);
            
            // Load similar content
            if (data.similar) {
                renderSimilarContent(data.similar);
            }
            
            // Load cast
            if (data.credits) {
                renderCast(data.credits);
            }
        }
        
        const playBtn = document.getElementById("playBtn");
        if (playBtn) {
            playBtn.onclick = () => showPlayerPage(data);
        }
        
        const movieModal = document.getElementById("movieModal");
        if (movieModal) {
            movieModal.style.display = "flex";
        }
    } catch (error) {
        console.error("Error loading movie details:", error);
        showMessage("Failed to load movie details. Please try again.");
    } finally {
        hideLoader();
    }
}

function closeModal() {
    const modal = document.getElementById("movieModal");
    if (modal) {
        modal.style.display = "none";
    }
}

function closeVideoPlayer() {
    const playerPage = document.getElementById("videoPlayerPage");
    const player = document.getElementById("videoPlayer");
    if (playerPage) playerPage.style.display = "none";
    if (player) player.src = "";
    document.body.style.overflow = "auto";
}

function switchTab(tab) {
    document.querySelectorAll(".tabs span").forEach(el => el.classList.remove("active"));
    const activeTab = document.querySelector(`.tabs span[onclick="switchTab('${tab}')"]`);
    if (activeTab) activeTab.classList.add("active");
    
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    const tabContent = document.getElementById(tab + "Tab");
    if (tabContent) tabContent.classList.add("active");
}

// --- Watchlist Functions ---
function toggleWatchlist(item) {
    if (!item) return;
    
    let list = JSON.parse(localStorage.getItem("dkstream_watchlist") || "[]");
    const existingIndex = list.findIndex(w => w.id === item.id && w.type === (item.media_type || (item.seasons ? "tv" : "movie")));
    
    if (existingIndex >= 0) {
        list.splice(existingIndex, 1);
        showMessage("Removed from watchlist");
    } else {
        list.unshift({
            id: item.id,
            type: item.media_type || (item.seasons ? "tv" : "movie"),
            title: item.title || item.name,
            poster: item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : null,
            desc: item.overview
        });
        showMessage("Added to watchlist");
    }
    
    localStorage.setItem("dkstream_watchlist", JSON.stringify(list));
    updateWatchlistButtonState(item);
    
    if (document.getElementById("watchlistPage")?.style.display === "block") {
        renderWatchlist();
    }
}

function updateWatchlistButtonState(item) {
    if (!item) return;
    
    const type = item.media_type || (item.seasons ? "tv" : "movie");
    const list = JSON.parse(localStorage.getItem("dkstream_watchlist") || "[]");
    const isInWatchlist = list.some(w => w.id === item.id && w.type === type);
    
    // Update modal button
    const modalBtn = document.getElementById("watchlistBtn");
    if (modalBtn) {
        modalBtn.innerHTML = isInWatchlist ? "✓ Watchlist" : "+ Watchlist";
    }
    
    // Update player button
    const playerBtn = document.getElementById("addRemoveVideoBtn");
    if (playerBtn) {
        playerBtn.innerHTML = isInWatchlist ? "✓ In Watchlist" : "+ Add to Watchlist";
    }
}

function renderWatchlist() {
    const container = document.getElementById("watchlistContent");
    const emptyState = document.getElementById("watchlistEmptyState");
    if (!container || !emptyState) return;
    
    let list = JSON.parse(localStorage.getItem("dkstream_watchlist") || "[]");
    
    if (!list.length) {
        emptyState.style.display = "";
        container.innerHTML = "";
        return;
    }
    
    emptyState.style.display = "none";
    container.innerHTML = list.map(item => `
        <div class="history-item" onclick="showMovieDetails('${item.id}','${item.type}')">
            <img src="${item.poster || "https://placehold.co/80x120/333/fff?text=No+Image"}" alt="${item.title}">
            <div class="history-info">
                <h3>${item.title}</h3>
                <button class="download-btn" onclick="event.stopPropagation();toggleWatchlist({id:'${item.id}',media_type:'${item.type}'})">
                    Remove
                </button>
            </div>
        </div>
    `).join("");
}

// --- History Functions ---
function saveHistory(item) {
    let history = JSON.parse(localStorage.getItem("dkstream_history") || "[]");
    history = history.filter(h => h.id !== item.id || h.type !== item.type);
    history.unshift(item);
    if (history.length > 30) history = history.slice(0, 30);
    localStorage.setItem("dkstream_history", JSON.stringify(history));
}

function renderHistory() {
    const container = document.getElementById("historyContent");
    const emptyState = document.getElementById("historyEmptyState");
    if (!container || !emptyState) return;
    
    let history = JSON.parse(localStorage.getItem("dkstream_history") || "[]");
    
    if (!history.length) {
        emptyState.style.display = "";
        container.innerHTML = "";
        return;
    }
    
    emptyState.style.display = "none";
    container.innerHTML = history.map(item => `
        <div class="history-item" onclick="showMovieDetails('${item.id}','${item.type}')">
            <img src="${item.poster || "https://placehold.co/80x120/333/fff?text=No+Image"}" alt="${item.title}">
            <div class="history-info">
                <h3>${item.title}</h3>
                <p>${item.desc?.substring(0, 100) || ""}${item.desc?.length > 100 ? "..." : ""}</p>
            </div>
        </div>
    `).join("");
}

// --- Home Page Functions ---
async function loadHeroSlider() {
    try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=popularity.desc`;
        const res = await fetch(url);
        const data = await res.json();
        
        const slidesContainer = document.getElementById("slides");
        if (!slidesContainer) return;
        slidesContainer.innerHTML = "";
        
        data.results.slice(0, 5).forEach(item => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`;
            
            const title = item.title || item.name || "Untitled";
            const mediaType = item.media_type || (item.first_air_date ? "tv" : "movie");
            
            slide.innerHTML = `
                <div class="slide-overlay"></div>
                <div class="slide-info">
                    <h1>${title}</h1>
                    <p>${item.overview?.substring(0, 150) || "No description available"}${item.overview?.length > 150 ? "..." : ""}</p>
                    <div class="slide-buttons">
                        <button onclick="event.stopPropagation();showMovieDetails('${item.id}','${mediaType}')">
                            <i class='bx bx-info-circle'></i> Details
                        </button>
                        <button onclick="event.stopPropagation();saveHistory({id:'${item.id}',title:'${title}',type:'${mediaType}',poster:'https://image.tmdb.org/t/p/w200${item.poster_path}',desc:'${item.overview}');showPlayerPage(${JSON.stringify(item)})">
                            <i class='bx bx-play'></i> Play Now
                        </button>
                    </div>
                </div>
            `;
            
            slidesContainer.appendChild(slide);
        });
        
        // Auto slide every 5 seconds
        let currentSlide = 0;
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slidesContainer.children.length;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 5000);
    } catch (error) {
        console.error("Error loading hero slider:", error);
    }
}

async function loadHomeCategoryGrid(page = 1) {
    showLoader();
    try {
        // Use discover/movie instead of trending, for Hindi + release_date sorting
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&with_original_language=hi&sort_by=popularity.desc&page=${page}`;
        const res = await fetch(url);
        const data = await res.json();
        
        const grid = document.getElementById("homeCategoryGrid");
        if (!grid) return;
        
        // Only clear on first page load
        if (page === 1) {
            grid.innerHTML = "";
        }

        // Append new cards
        data.results.forEach(item => {
            const img = item.poster_path
                ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                : "https://placehold.co/200x300/333/fff?text=No+Image";

            const title = item.title || item.name || "Untitled";
            const mediaType = "movie"; // Since discover/movie returns only movies
            
            const card = document.createElement("div");
            card.className = "card";
            card.onclick = () => {
                document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
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

            grid.appendChild(card);
        });

        // Update global page tracker & content flag
        currentHomePage = page;
        hasMoreHomeContent = data.page < data.total_pages;
    } catch (error) {
        console.error("Error loading home category grid:", error);
        showMessage("Failed to load content. Please try again.");
    } finally {
        hideLoader();
    }
}
  
// --- Browse Page Functions ---
function renderCategorySlider() {
    const slider = document.getElementById("categorySliderContainer");
    if (!slider) return;
    slider.innerHTML = '';
    
    categories.forEach((cat, idx) => {
        let card = document.createElement("div");
        card.className = "category-card" + (idx === 0 ? " active" : "");
        card.dataset.category = cat.category;
        card.dataset.type = cat.type;
        card.dataset.letsembedEmbedType = cat.letsembedEmbedType;
        if (cat.genreId) card.dataset.genreId = cat.genreId;
        if (cat.keywords) card.dataset.keywords = cat.keywords;
        card.style.backgroundImage = `url('${cat.bgImage}')`;
        
        card.innerHTML = `
            <div class="category-card-overlay">
                <span class="category-card-title">${cat.name}</span>
            </div>
        `;
        
        card.onclick = () => switchCategoryTab(idx);
        slider.appendChild(card);
    });
}

async function switchCategoryTab(idx) {
    document.querySelectorAll(".category-card").forEach(el => el.classList.remove("active"));
    const cards = document.querySelectorAll(".category-card");
    if (idx >= 0 && idx < cards.length) {
        cards[idx].classList.add("active");
    }
    
    const cat = categories[idx];
    currentBrowsePage = 1;
    
    showSkeletonGrid("contentBrowseGrid");
    await loadBrowseCategoryContent(cat, 1);
}

async function loadBrowseCategoryContent(category, page = 1) {
    showLoader();
    try {
        let url = "";
        
        if (category.category === "trending") {
            url = `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&page=${page}`;
        } else if (category.genreId) {
            url = `https://api.themoviedb.org/3/discover/${category.type}?api_key=${TMDB_API_KEY}&with_genres=${category.genreId}&page=${page}`;
        } else if (category.keywords) {
            url = `https://api.themoviedb.org/3/discover/${category.type}?api_key=${TMDB_API_KEY}&with_keywords=${category.keywords}&page=${page}`;
        } else {
            // Handle other category types (popular, top_rated, etc.)
            const categoryMap = {
                'popular_movies': 'movie/popular',
                'top_rated': 'movie/top_rated',
                'upcoming_movies': 'movie/upcoming',
                'now_playing_movies': 'movie/now_playing',
                'popular_tv': 'tv/popular',
                'top_rated_tv': 'tv/top_rated',
                'on_the_air_tv': 'tv/on_the_air',
                'airing_today_tv': 'tv/airing_today'
            };
            
            if (categoryMap[category.category]) {
                url = `https://api.themoviedb.org/3/${categoryMap[category.category]}?api_key=${TMDB_API_KEY}&page=${page}`;
            } else {
                url = `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}&page=${page}`;
            }
        }
        
        const res = await fetch(url);
        const data = await res.json();
        
        const grid = document.getElementById("contentBrowseGrid");
        if (!grid) return;
        
        // Only clear on first page load
        if (page === 1) {
            grid.innerHTML = "";
        }
        
        data.results.forEach(item => {
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
            
            grid.appendChild(card);
        });
        
        currentBrowsePage = page;
    } catch (error) {
        console.error("Error loading browse category content:", error);
        showMessage("Failed to load content. Please try again.");
    } finally {
        hideLoader();
    }
}

// --- Navigation Functions ---
function showPage(pageId) {
    document.querySelectorAll(".main-content").forEach(el => el.style.display = "none");
    const page = document.getElementById(pageId);
    if (page) page.style.display = "block";
    
    // Update bottom nav active state
    document.querySelectorAll(".bottom-nav .icon").forEach(el => el.classList.remove("active"));
    if (pageId === "homePage") {
        const homeIcon = document.querySelector(".bottom-nav .icon:nth-child(1)");
        if (homeIcon) homeIcon.classList.add("active");
    } else if (pageId === "contentBrowsePage") {
        const browseIcon = document.querySelector(".bottom-nav .icon:nth-child(2)");
        if (browseIcon) browseIcon.classList.add("active");
    } else if (pageId === "watchlistPage") {
        const watchlistIcon = document.querySelector(".bottom-nav .icon:nth-child(3)");
        if (watchlistIcon) watchlistIcon.classList.add("active");
    } else if (pageId === "historyPage") {
        const historyIcon = document.querySelector(".bottom-nav .icon:nth-child(4)");
        if (historyIcon) historyIcon.classList.add("active");
    }
    
    // Load specific content when page is shown
    if (pageId === "historyPage") renderHistory();
    if (pageId === "watchlistPage") renderWatchlist();
    if (pageId === "homePage") {
        if (document.getElementById("homeCategoryGrid")?.children.length === 0) {
            loadHomeCategoryGrid();
        }
        if (document.getElementById("slides")?.children.length === 0) {
            loadHeroSlider();
        }
    }
}

function showContentBrowsePage() {
    showPage("contentBrowsePage");
    if (document.getElementById("categorySliderContainer")?.children.length === 0) {
        renderCategorySlider();
        switchCategoryTab(0);
    }
}

function goBack() {
    showPage("homePage");
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute("data-theme") === "dark";
    body.setAttribute("data-theme", isDark ? "light" : "dark");
    const themeIcon = document.querySelector(".theme-toggle i");
    if (themeIcon) themeIcon.className = isDark ? "bx bx-sun" : "bx bx-moon";
}

// --- Utility Functions ---
function showSkeletonGrid(containerId, count = 20) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const card = document.createElement("div");
        card.className = "skeleton-card";
        
        card.innerHTML = `
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
        `;
        
        el.appendChild(card);
    }
}

function showLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "block";
}

function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
}

function showMessage(text) {
    const box = document.getElementById("messageBox");
    const textEl = document.getElementById("messageBoxText");
    if (box && textEl) {
        textEl.textContent = text;
        box.style.display = "block";
    }
}

function hideMessageBox() {
    const box = document.getElementById("messageBox");
    if (box) box.style.display = "none";
}

// --- Infinite Scroll Setup ---
function setupInfiniteScroll() {
    window.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        // Check if we're near the bottom of the page (with 500px buffer)
        if (scrollTop + clientHeight >= scrollHeight - 500) {
            const visiblePage = document.querySelector(".main-content[style='display: block;']");
            if (!visiblePage) return;
            
            const currentPage = visiblePage.id;
            
            if (currentPage === "homePage" && !isLoading && hasMoreHomeContent) {
                isLoading = true;
                const loader = document.getElementById("homeCategoryLoader");
                if (loader) loader.style.display = "block";

                const nextPage = currentHomePage + 1;

                loadHomeCategoryGrid(nextPage).finally(() => {
                    isLoading = false;
                    const loader = document.getElementById("homeCategoryLoader");
                    if (loader) loader.style.display = "none";

                    // Important: Update the page number
                    currentHomePage = nextPage;
                });
            }
            // Browse Page
            else if (currentPage === "contentBrowsePage" && !isLoading) {
                const activeCategory = document.querySelector(".category-card");
                if (!activeCategory) return;
                
                isLoading = true;
                const loader = document.getElementById("contentBrowseLoader");
                if (loader) loader.style.display = "block";
                const category = categories.find(c => c.category === activeCategory.dataset.category);
                if (category) {
                    loadBrowseCategoryContent(category, currentBrowsePage + 1).finally(() => {
                        isLoading = false;
                        const loader = document.getElementById("contentBrowseLoader");
                        if (loader) loader.style.display = "none";
                    });
                }
            }
        }
    });
}

// --- Expose Functions to Window ---
window.showPage = showPage;
window.showContentBrowsePage = showContentBrowsePage;
window.toggleTheme = toggleTheme;
window.switchTab = switchTab;
window.closeModal = closeModal;
window.closeVideoPlayer = closeVideoPlayer;
window.goBack = goBack;
window.updatePlayerServer = updatePlayerServer;
window.updatePlayerSeason = updatePlayerSeason;
window.updatePlayerEpisode = updatePlayerEpisode;
window.selectPlayerServer = selectPlayerServer;
window.showMovieDetails = showMovieDetails;
window.toggleWatchlist = toggleWatchlist;
