// ====== 1. Title Styling ======
document.addEventListener('DOMContentLoaded', function () {
    function styleTitle() {
        var titles = document.querySelectorAll('.main-title .title');
        titles.forEach((title) => {
            title.style.position = 'relative';       
            title.style.fontWeight = 'bold';
        });

        // Create and inject styles
        const style = document.createElement('style');
        style.innerHTML = `
          .main-title .title {
            font-size: 18px;
            position: relative;
          }
          .main-title h3 {
            height: 25px;
            padding:6px 0 0 6px;
            margin-top: 0px !important;
            margin-left: -3px !important;
            z-index: 3 !important;
          }
          .main-title .title::before {
            content: "";
            position: absolute;
            left: -2px;
            top: 26%;
            transform: translateY(-50%);
            height: 13px;
            width: 13px;
            border-radius: 50%;
            background: linear-gradient(125deg, var(--keycolor) 5%, black 100%);
            z-index: -1;
          }
          @media (min-width: 768px) {
            .main-title .title {
              font-size: 30px;
              padding:10px 0;
            }
            .main-title .title::before {      
               left: 0;
               top: 28%;
               height: 20px;
               width: 20px;
            }
          }
        `;
        document.head.appendChild(style);
    }
    styleTitle();
});

// ====== 2. Celebrities and Playlist Functions ======
function createCelebList() {
  const celebList = document.createElement('div');
  celebList.className = 'temabanua-celeb-list';
  celebrities.forEach(celeb => {
    const item = document.createElement('div');
    item.className = 'temabanua-celeb-item';
    const img = document.createElement('img');
    img.className = 'temabanua-celeb-avatar';
    img.alt = celeb.name;
    img.loading = 'lazy';
    img.src = celeb.photo || defaultThumbnail;
    img.onerror = function() { this.onerror=null; this.src=defaultThumbnail; };
    item.appendChild(img);
    const name = document.createElement('div');
    name.className = 'temabanua-celeb-name';
    name.textContent = celeb.name;
    const title = document.createElement('div');
    title.className = 'temabanua-celeb-title';
    title.textContent = celeb.title;
    item.appendChild(name);
    item.appendChild(title);
    celebList.appendChild(item);
  });
  return celebList;
}

function createVideoPlayer(videoUrl) {
  const videoDiv = document.createElement('div');
  videoDiv.className = 'temabanua-post-video';
  videoDiv.innerHTML = `<iframe src="${videoUrl}" allowfullscreen="true"></iframe>`;
  return videoDiv;
}

function createPlaylistHeadline(current, total, onPrev, onNext) {
  const headline = document.createElement('div');
  headline.className = 'temabanua-ep-headline';
  headline.innerHTML = `
    <span>Total Videos: ${total}</span>
    <div class="temabanua-ep-controls">
      <button class="temabanua-ep-btn" id="temabanuaPrevEp" ${current === 0 ? 'disabled' : ''}>&lt;</button>
      <span>Episode ${episodes[current].episode}</span>
      <button class="temabanua-ep-btn" id="temabanuaNextEp" ${current === total-1 ? 'disabled' : ''}>&gt;</button>
    </div>
  `;
  setTimeout(() => {
    document.getElementById('temabanuaPrevEp').onclick = onPrev;
    document.getElementById('temabanuaNextEp').onclick = onNext;
  }, 0);
  return headline;
}

function createPlaylistCards(currentIdx, onSelect) {
  const list = document.createElement('div');
  list.className = 'temabanua-ep-list';
  episodes.forEach((ep, idx) => {
    const card = document.createElement('div');
    card.className = 'temabanua-ep-card' + (idx === currentIdx ? ' active' : '');

    // Thumb with fallback
    const thumbDiv = document.createElement('div');
    thumbDiv.style.position = 'relative';
    thumbDiv.style.width = '100%';

    const img = document.createElement('img');
    img.className = 'temabanua-ep-thumb';
    img.alt = `Episode ${ep.episode}`;
    img.loading = 'lazy';
    img.src = ep.thumb || defaultThumbnail;
    img.onerror = function() { this.onerror=null; this.src=defaultThumbnail; };

    // Play icon
    const playIcon = document.createElement('span');
    playIcon.className = 'temabanua-ep-playicon';
    playIcon.innerHTML = `<svg viewBox="0 0 32 32"><polygon points="10,7 26,16 10,25"></polygon></svg>`;

    thumbDiv.appendChild(img);
    thumbDiv.appendChild(playIcon);

    card.appendChild(thumbDiv);

    // Title with season info
    const title = document.createElement('div');
    title.className = 'temabanua-ep-title';
    title.textContent = `S  ${ep.season} - Ep ${ep.episode}`;
    card.appendChild(title);

    card.onclick = () => onSelect(idx);
    list.appendChild(card);
  });
  return list;
}

// ====== 3. Main Auto-Append Logic ======
(function(){
  // Find the correct video container
  const videoContainer = document.querySelector('.temabanua-post-video');
  if(!videoContainer) return;
  const postBody = document.getElementById('post-body');
  if(!postBody) return;

  // Main container for everything except video
  const container = document.createElement('div');
  container.className = 'temabanua-main-block';

  // 1. Artists
  container.appendChild(createCelebList());

  // 2. Playlist controls and list
  let currentEpIdx = 0;
  function rerenderPlaylist() {
    // Remove old headline, playlist if exist
    const oldHeadline = container.querySelector('.temabanua-ep-headline');
    if(oldHeadline) oldHeadline.parentNode.removeChild(oldHeadline);
    const oldList = container.querySelector('.temabanua-ep-list');
    if(oldList) oldList.parentNode.removeChild(oldList);

    // Headline + controls
    container.appendChild(createPlaylistHeadline(
      currentEpIdx,
      episodes.length,
      () => { if(currentEpIdx>0){ currentEpIdx--; rerenderPlaylist(); setVideo(); } },
      () => { if(currentEpIdx<episodes.length-1){ currentEpIdx++; rerenderPlaylist(); setVideo(); } }
    ));

    // Playlist
    container.appendChild(createPlaylistCards(currentEpIdx, idx => {
      if(currentEpIdx !== idx) {
        currentEpIdx = idx;
        rerenderPlaylist();
        setVideo();
      }
    }));
  }

  function setVideo() {
    videoContainer.innerHTML = '';
    videoContainer.appendChild(createVideoPlayer(episodes[currentEpIdx].video));
  }

  rerenderPlaylist();
  setVideo();

  // Append everything after #post-body
  postBody.parentNode.insertBefore(container, postBody.nextSibling);
})();

// ====== 4. Image Alt Text ======
window.addEventListener('DOMContentLoaded', function() {
  // Get all the image elements in the blog post content
  var images = document.querySelectorAll('img');

  // Get the post title
  var postTitle = document.querySelector('.entry-title').textContent;

  // Loop through each image and set the alt text if it's not already set
  for (var i = 0; i < images.length; i++) {
    if (!images[i].hasAttribute('alt') || images[i].getAttribute('alt').trim() === '') {
      images[i].setAttribute('alt', postTitle);
    }
  }
});

// ====== 5. Live Search Script ======
(function(){
  var input = document.getElementById("custom-search-input");
  if (!input) return;

  // create or reuse dropdown
  var dropdown = document.getElementById("live-search-dropdown");
  if (dropdown) dropdown.parentNode.removeChild(dropdown);
  dropdown = document.createElement("div");
  dropdown.id = "live-search-dropdown";
  document.body.appendChild(dropdown);

  // Get the blog URL dynamically
  var blogUrl = location.protocol + "//" + location.host;
  var feedUrl = blogUrl + "/feeds/posts/summary?alt=json-in-script&max-results=150&callback=searchCallback";

  var posts = [];

  function loadFeed() {
    var s = document.createElement("script");
    s.src = feedUrl;
    document.body.appendChild(s);
  }

  window.searchCallback = function(data) {
    if (!data.feed || !data.feed.entry) return;
    posts = data.feed.entry.map(function(entry){
      return {
        title: entry.title.$t,
        link: (entry.link||[]).find(l=>l.rel==="alternate").href,
        thumb: entry.media$thumbnail
                ? entry.media$thumbnail.url.replace(/\/s[0-9]+(?:-c)?\//, "/s0/")
                : "https://via.placeholder.com/200x300",
        labels: entry.category ? entry.category.map(c=>c.term) : []
      };
    });
  };

  input.addEventListener("input", function(){
    var q = this.value.trim().toLowerCase();
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
    if (q.length < 1 || !posts.length) return;

    var matches = posts.filter(p =>
      p.title.toLowerCase().indexOf(q) !== -1
    ).slice(0, 7);
    if (!matches.length) return;

    var rect = input.getBoundingClientRect();
    dropdown.style.top = (window.scrollY + rect.bottom) + "px";

    var ul = document.createElement("ul");
    matches.forEach(function(p){
      var li = document.createElement("li");

      var a = document.createElement("a");
      a.href = p.link;

      var img = document.createElement("img");
      img.src = p.thumb;

      var textContainer = document.createElement("div");
      textContainer.className = "text-container";

      var span = document.createElement("span");
      span.textContent = p.title;

      var labelsDiv = document.createElement("div");
      labelsDiv.className = "labels";

      p.labels.forEach(function(label){
        var badge = document.createElement("span");
        badge.className = "label-item";
        badge.textContent = label;
        labelsDiv.appendChild(badge);
      });

      textContainer.appendChild(span);
      textContainer.appendChild(labelsDiv);
      a.appendChild(img);
      a.appendChild(textContainer);
      li1.appendChild(a);
      ul.appendChild(li1);
    });

    dropdown.appendChild(ul);
    dropdown.style.display = "block";
  });

  document.addEventListener("click", function(e){
    if (!input.contains(e.target) && !dropdown.contains(e.target))
      dropdown.style.display = "none";
  });

  loadFeed();
})();

// ====== 6. Dynamic Label Colors ======
document.addEventListener("DOMContentLoaded", function () {
    let allLabels = new Set();

    // Collect all unique label names
    document.querySelectorAll(".label-link").forEach(link => {
        let labelText = link.textContent.trim().toLowerCase();
        allLabels.add(labelText);
    });

    // Apply colors
    applyDynamicLabelColors([...allLabels]);

    function applyDynamicLabelColors(labels) {
        document.querySelectorAll(".label-link").forEach(link => {
            let labelText = link.textContent.trim().toLowerCase();
            let color = getLabelColor(labelText, labels);

            // Apply dynamic colors
            link.style.setProperty("color", color, "important");
            link.style.setProperty("background-color", color.replace("rgb", "rgba").replace(")", ", 0.2)"), "important");
            link.style.setProperty("padding", "2px 5px", "important");
            link.style.setProperty("border-radius", "3px", "important");
            link.style.setProperty("display", "inline-block", "important");
            link.style.setProperty("font-weight", "bold", "important"); // Optional bold text
        });
    }

    function getLabelColor(label, labels) {
        const colors = [
            "rgb(255, 0, 127)",  // Pink
            "rgb(0, 128, 255)",  // Blue
            "rgb(255, 165, 0)",  // Orange
            "rgb(255, 0, 0)",    // Red
            "rgb(0, 255, 0)",    // Green
            "rgb(128, 0, 128)",  // Purple
            "rgb(75, 0, 130)",   // Indigo
            "rgb(255, 20, 147)", // Deep Pink
            "rgb(255, 140, 0)",  // Dark Orange
            "rgb(46, 139, 87)"   // Sea Green
        ];

        let index = labels.indexOf(label);
        return index !== -1 ? colors[index % colors.length] : "rgb(128, 128, 128)"; // Default gray if not found
    }
});

// ====== 7. Genre Label Styling ======
document.addEventListener("DOMContentLoaded", function () {

    // Function to darken a color and add transparency
    function darkenColorWithTransparency(color, percent, alpha) {
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);

        r = Math.floor(r * (1 - percent));
        g = Math.floor(g * (1 - percent));
        b = Math.floor(b * (1 - percent));

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Get all genre label links
    var genreLinks = document.querySelectorAll('.Label li a, .Label span.label-size, .byline.post-labels a');

    var textColors = [
        '#FFFFFF', '#FFB6C1', '#FFD700', '#B0E0E6', '#ADD8E6',
        '#F0E68C', '#F5FFFA', '#D3D3D3', '#FF69B4', '#FF6347',
        '#98FB98', '#FF4500', '#32CD32', '#00FFFF', '#FF1493',
        '#F0F8FF', '#F5F5F5', '#7FFFD4', '#FF8C00', '#FFDAB9',
        '#FF6347', '#F0E68C', '#C71585', '#F7C1C1', '#B0E0E6',
        '#FFE4B5', '#FFFACD', '#FFDAB9', '#E6E6FA'
    ];

    genreLinks.forEach((element, i) => {
        var lightTextColor = textColors[i % textColors.length];  
        element.style.color = lightTextColor;

        var darkerBackgroundColor = darkenColorWithTransparency(lightTextColor, 0.5, 0.5);
        element.style.backgroundColor = darkerBackgroundColor;  
        element.style.padding = '3px 5px';
        element.style.borderRadius = '5px';
        element.style.margin = '0px';
        element.style.fontSize = '13px';

        element.addEventListener('mouseenter', function () {
            this.style.backgroundColor = darkenColorWithTransparency(this.style.backgroundColor, 0.5, 0.9);
            this.style.color = '#FFFFFF';
        });

        element.addEventListener('mouseleave', function () {
            this.style.backgroundColor = darkerBackgroundColor;
            this.style.color = lightTextColor;
        });
    });

});

// ====== 8. Sitemap Filtering ======
document.querySelectorAll('.filter-buttons').forEach(group => {
    group.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            let buttons = group.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            filterSitemap();
        }
    });
});

document.getElementById("sitemapSearch").addEventListener("input", filterSitemap);

function filterSitemap() {
    const searchInput = document.getElementById("sitemapSearch").value.trim().toLowerCase();
    const posts = document.querySelectorAll("#bp_toc .post-row");

    // Get selected filters from buttons
    const selectedType = document.querySelector("#typeFilter .active")?.getAttribute("data-filter") || "";
    const selectedStatus = document.querySelector("#statusFilter .active")?.getAttribute("data-filter") || "";
    const selectedGenre = document.querySelector("#genreFilter .active")?.getAttribute("data-filter") || "";
    const selectedFilters = [selectedType, selectedStatus, selectedGenre].filter(f => f && f !== "all");

    posts.forEach(post => {
        const title = post.querySelector(".post-title").innerText.toLowerCase().trim();
        const summary = post.querySelector(".post-summary").innerText.toLowerCase().trim();
        const labels = Array.from(post.querySelectorAll(".post-label")).map(label => label.innerText.toLowerCase().trim());

        // Check if search input is empty and no filters are applied
        if (searchInput === "" && selectedFilters.length === 0) {
            post.style.display = "flex";
            return;
        }

        const matchesSearch = searchInput === "" || title.includes(searchInput) || summary.includes(searchInput);
        const matchesFilters = selectedFilters.length === 0 || selectedFilters.every(filter => labels.includes(filter));

        post.style.display = (matchesSearch && matchesFilters) ? "flex" : "none";
    });
}

// Modal functions
function exploreOpenModal() {
    let modal = document.getElementById("explore-modal");
    let header = document.querySelector(".explore-head");
    modal.classList.add("show");
    header.classList.add("show");
}

function exploreCloseModal() {
    let modal = document.getElementById("explore-modal");
    let header = document.querySelector(".explore-head");
    modal.classList.remove("show");
    header.classList.remove("show");
}

// Dropdown toggle functions
function toggleFilterDropdown() {
    const dropdown = document.getElementById("filterDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function exploreToggleFilterDropdown() {
    const dropdown = document.getElementById("explore-filterDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Load blog posts dynamically
let allLabels = [];

function loadtoc(json) {
    const container = document.getElementById("bp_toc");
    container1.innerHTML = '';
    allLabels = [];

    const posts = json.feed.entry || [];
    
    posts.forEach(post => {
        const labels = post.category ? post.category.map(cat => cat.term.toLowerCase()) : [];
        labels.forEach(label => {
            if (!allLabels.includes(label)) {
                allLabels.push(label);
            }
        });

        const postTitle = post.title ? post.title.$t : "Untitled Post";
        const postUrl = post.link ? post.link.find(link => link.rel === "alternate").href : "#";
        const postThumbnail = post.media$thumbnail ? post.media$thumbnail.url.replace(/s72-c/, 's400') : 'https://via.placeholder.com/400x400';
        let postSummary = post.summary ? post.summary.$t.replace(/<[^>]+>/g, '').trim() : "No summary available.";

        postSummary = postSummary.replace(/\bWatch Now\b/gi, '').trim();
        postSummary = postSummary.replace(/^\.+|\.+$/g, '');

        const labelsHTML = labels.map(label => {
            let color = getLabelColor(label, allLabels);
            let bgColor = color.replace("rgb", "rgba").replace(")", ", 0.2)");
            let capitalizedLabel = label.charAt(0).toUpperCase() + label.slice(1);
            return `<span class="post-label" style="background-color: ${bgColor}; color: ${color}; padding: 1px 3px!important; border-radius: 3px; display: inline-block; font-weight: bold;">${capitalizedLabel}</span>`;
        }).join(" ");

        const postRow = document.createElement("div");
        postRow.className = "post-row";
        postRow.innerHTML = `
            <div class="post-thumbnail">
                <img src="${postThumbnail}" alt="${postTitle}">
            </div>
            <div class="post-content">
                <div class="post-title"><a href="${postUrl}">${postTitle}</a></div>
                <div class="post-labels">${labelsHTML}</div>
                <div class="post-summary">${postSummary}</div>
            </div>
        `;
        container.appendChild(postRow);
    });

    // Reset search and filters when new posts load
    filterSitemap();
}

// Function to generate dynamic label colors
function getLabelColor(label, allLabels) {
    return generateDynamicColor(label);
}

function generateDynamicColor(label) {
    let hash = 0;
    for (let i = 0; i < label.length; i++) {
        hash = label.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash into an RGB color
    const r = (hash & 0xFF);
    const g = ((hash >> 8) & 0xFF);
    const b = ((hash >> 16) & 0xFF);

    return `rgb(${r}, ${g}, ${b})`;
}

// Fetch posts dynamically
const script = document.createElement('script');
script.src = '/feeds/posts/summary?alt=json-in-script&max-results=999&callback=loadtoc';
document.body.appendChild(script);

// ====== 9. Episode Player ======
document.addEventListener('DOMContentLoaded', function () {
    const episodes = document.querySelectorAll(".epi.btn");
    const iframe = document.querySelector(".youtube-responsive iframe");

    function removeActiveClass() {
        episodes.forEach(epi => {
            epi.classList.remove("active");
        });
    }

    if (episodes.length > 0) {
        iframe.src = episodes[0].getAttribute("data-src");
        episodes[0].classList.add("active");
    }

    episodes.forEach((epi) => {
        epi.addEventListener("click", (e) => {
            e.preventDefault();
            const epiUrl = epi.getAttribute("data-src");
            removeActiveClass();
            epi.classList.add("active");
            iframe.src = epiUrl;
        });
    });
});
