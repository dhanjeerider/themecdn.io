function externalLinks() {
 for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
  var b = c[a];
  b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank", b.rel = "nofollow")
 }
}
externalLinks();
window.addEventListener('DOMContentLoaded', function() {
  try {
    // Get all the image elements in the blog post content
    var images = document.querySelectorAll('img');

    // Get the post title
    var postTitleElement = document.querySelector('.entry-title');
    
    if (!postTitleElement) {
      console.error('Post title element not found');
      return;
    }

    var postTitle = postTitleElement.textContent;

    // Loop through each image and set the alt text if it's not already set
    for (var i = 0; i < images.length; i++) {
      if (!images[i].hasAttribute('alt') || images[i].getAttribute('alt').trim() === '') {
        images[i].setAttribute('alt', postTitle);
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

var codeElements = document.querySelectorAll("pre");
    codeElements.forEach(function(element) {
        element.addEventListener("dblclick", function() {
            copyToClipboard(element);
        });
    });
    function copyToClipboard(element) {
        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = element.textContent;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        
        showBottomAlert();
    }
    function showBottomAlert() {
        var bottomAlert = document.getElementById("bottomAlert");
        bottomAlert.style.display = "block";
        setTimeout(function() {
            bottomAlert.style.display = "none";
        }, 3000);
    }



var allowedURLs = [
  "https://dkhek.blogspot.com",
  "file:///storage/emulated/0/Android/data/com.teejay.trebedit/files/TrebEdit%20user%20files/auther%20.html",
  "https://www.desiremovies.store"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
  if (window.location.href.startsWith(allowedURLs[i])) {
    foundMatch = true;
    break;
  }
}

if (foundMatch) {
  // Create a link element for the CDN CSS file
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://dhanjeerider.github.io/themecdn.io/main.css';  // Replace with your actual CDN URL

  // Append the link element to the head
  document.head.appendChild(link);
} else {
  console.log('script is not working');
}

