var allowedURLs = [
  "https://dkhek.blogspot.com",
  "https://fletrothemes.blogspot.com/"
];

var foundMatch = false;

for (var i = 0; i < allowedURLs.length; i++) {
  if (window.location.href.startsWith(allowedURLs[i])) {
    foundMatch = true;
    break;
  }
}

if (foundMatch) {
  // Insert your CSS code here
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
    /* Example CSS code */

    
:root {
--bs-font-sans-serif: $(body.text.family);
--bs-body-bg: $(body.background);
--bs-body-color: $(body.text.color);
--jt-primary: $(keycolor);
--jt-heading-color: $(posts.title.color);
--jt-heading-link: $(posts.title.color);
--jt-heading-hover: $(keycolor);
--jt-link-color: $(body.link.color);
--jt-link-hover: $(body.hover.color);
--jt-blockquote: $(posts.text.color);
--jt-btn-primary: $(posts.icons.color);
--jt-btn-primary-hover: $(labels.background.color);
--jt-btn-light-hover: $(posts.title.color);
--jt-border-light: $(border.color);
--jt-bg-light: #f3f7f9;
--jt-archive-bg: #ffffff;
--jt-nav-color: $(tabs.color);
--jt-nav-hover: $(tabs.hover);
--jt-nav-selected: $(tabs.selected.color);
--jt-dropdown-bg: $(dropdown.bg);
--jt-dropdown-color: $(dropdown.color);
--jt-dropdown-hover: $(dropdown.hover);
--jt-dropdown-selected: $(dropdown.selected);
--jt-header-bg: $(header.bg);
--jt-header-color: $(header.color);
--jt-header-border: $(header.border);
--jt-footer-bg: $(footer.bg);
--jt-footer-color: $(footer.color);
--jt-footer-link: $(footer.link);
--jt-footer-border: $(footer.border);
--jt-socket-bg: $(socket.bg);
--jt-socket-color: $(socket.color);
}
.dark-mode{
--jt-primary: yellow;
--bs-body-bg:#00162c;
--bs-body-color: white;
--jt-heading-color:white;
--jt-heading-link:#fff;
--jt-btn-light-hover:hsl(210,11%,85%);
--jt-link-color:#00ff57;
--jt-border-light:hsl(210,11%,20%);--jt-bg-light:hsl(210,11%,20%);--jt-archive-bg:#000921;--jt-nav-color:#fff;--jt-dropdown-bg:hsl(210,11%,18%);--jt-dropdown-color:#ffffff;--jt-header-bg:hsl(210,11%,15%);--jt-header-color:#ffffff;--jt-header-border:hsl(210,11%,20%);--jt-footer-bg:hsl(210,11%,15%);--jt-footer-color: white;--jt-footer-border:hsl(210,11%,20%);--jt-socket-bg: transparent;--jt-socket-color:#ffffff;}body{font:$(body.text);color:var(--bs-body-color);background-color:var(--bs-body-bg);line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}.d-block{display:none}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font:$(posts.title)}a{transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;text-decoration:none;color:var(--jt-link-color)}a:hover{color:var(--jt-link-hover)}.fs-7{font-size:.875rem}.fs-8{font-size:.75rem}.fs-9{font-size:.7rem}.btn{box-shadow:none!important}.btn-sm{min-width:32px;min-height:32px}img,svg,iframe{max-width:100%}img{height:auto;object-fit:cover}label{cursor:pointer}.visually-hidden{position:unset!important}.form-control:focus{box-shadow:none;border-color:var(--jt-primary)}.form-control::placeholder{opacity:.5}.dropdown-toggle::after{border-width:.25em .25em 0}.dropdown-menu{margin:0;padding:0}.px-3{padding-right:1rem;padding-left:1rem}.ratio:before{content:none}.ratio-1x1{padding-bottom:100%}.ratio-4x3{padding-bottom:75%}.ratio-16x9{padding-bottom:56.25%}.ratio-21x9{padding-bottom:43%}.object-cover{object-fit:cover}.jt-text-primary,.hover-text-primary:hover,input:checked~.check-text-primary{color:var(--jt-primary)!important}.jt-btn-primary,.jt-btn-outline-primary:hover{color:#fff;background-color:var(--jt-btn-primary);border-color:var(--jt-btn-primary)}.jt-btn-light{color:var(--bs-body-color);background-color:var(--jt-bg-light);border-color:var(--jt-bg-light)}.jt-btn-light:hover{color:var(--jt-btn-light-hover)}.jt-btn-primary:hover,.hover-btn-primary:hover,input:checked+.jt-btn-outline-primary{color:#fff!important;background-color:var(--jt-btn-primary-hover)!important;border-color:var(--jt-btn-primary-hover)!important}.jt-btn-outline-primary{color:var(--jt-btn-primary);border-color:var(--jt-btn-primary)}.jt-bg-primary{background-color:var(--jt-primary)}.jt-bg-light{background-color:var(--jt-bg-light)}.bg-archive{background-color:var(--jt-archive-bg)}.jt-border-light{border-color:var(--jt-border-light)!important}input:checked~.d-block-check{display:block!important}input:checked~.d-none-check{display:none!important}.dropdown-menu,.accordion-item,.accordion-header{background-color:var(--bs-body-bg);color:var(--bs-body-color);border-color:var(--jt-border-light)}.lazyload{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;opacity:0}.lazyload.loaded{opacity:1}pre{background-color:var(--jt-bg-light);margin-bottom:1rem;padding:1rem;font-size:.75rem}blockquote{border-left:5px solid var(--jt-blockquote);color:inherit;font-size:1.125rem;margin-bottom:1.5rem;margin-top:1.5rem;padding-left:1rem}.header-animate.header-hidden{transform:translateY(-100%);box-shadow:none!important}#header{background-color:var(--jt-header-bg);color:var(--jt-header-color);transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;min-height:50px;border-bottom:1px solid var(--jt-header-border)}.header-social{border-right:1px solid var(--jt-header-border)}




body {
font: $(body.text);
color: var(--bs-body-color);
background-color: var(--bs-body-bg);
line-height: 1.5;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
font-size:15px;
}
.d-block {
display:none;
}
.h1,.h2,.h3,.h4,.h5,.h6,
h1,h2,h3,h4,h5,h6 {
font: $(posts.title);
}
a {
transition-property: background-color, border-color, color, fill, stroke;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
text-decoration: none;
color: var(--jt-link-color);
cursor:pointer;
}
a:hover {
color: var(--jt-link-hover);
}
.fs-7 {
font-size: 0.875rem;
}
.fs-8 {
font-size: 0.75rem;
}
.fs-9 {
font-size: 0.7rem;
}
.btn{
box-shadow: none !important
}
.btn-sm {
min-width: 32px;
min-height: 32px;
}
img,
svg,
iframe {
max-width:100%
}
img {
height:auto;
object-fit:cover;
}
label {
cursor: pointer;
}
.visually-hidden {
position: unset !important;
}
.form-control:focus {
box-shadow: none;
border-color: var(--jt-primary);
}
.form-control::placeholder {
opacity: .5;
}
.dropdown-toggle::after {
border-width: 0.25em 0.25em 0;
}
.dropdown-menu {
margin: 0;
padding: 0;
}
.px-3 {
padding-right: 1rem;
padding-left: 1rem;
}
.ratio:before{
content: none;
}
.ratio-1x1 {
padding-bottom: 100%;
}
.ratio-4x3 {
padding-bottom: 56.25%;
}
.ratio-16x9 {
padding-bottom: 56.25%;
}
.ratio-21x9 {
padding-bottom: 56.25%;
}
.object-cover {
object-fit: cover;
}
.jt-text-primary,
.hover-text-primary:hover,
input:checked ~ .check-text-primary {
color: var(--jt-primary)!important
}
.jt-btn-primary,
.jt-btn-outline-primary:hover {
color: #fff;
background-color: var(--jt-btn-primary);
border-color: var(--jt-btn-primary);
}
.jt-btn-light {
color: var(--bs-body-color);
background-color: var(--jt-bg-light);
border-color: var(--jt-bg-light);
}
.jt-btn-light:hover {
color: var(--jt-btn-light-hover);
}
.jt-btn-primary:hover,
.hover-btn-primary:hover,
input:checked + .jt-btn-outline-primary {
color: #fff !important;
background-color: var(--jt-btn-primary-hover)!important;
border-color: var(--jt-btn-primary-hover)!important
}
.jt-btn-outline-primary {
color: var(--jt-btn-primary);
border-color: var(--jt-btn-primary);
}
.jt-bg-primary {
background-color: var(--jt-primary)
}
.jt-bg-light {
background-color: var(--jt-bg-light)
}
.bg-archive {
background-color: var(--jt-archive-bg)
}
.jt-border-light {
border-color: var(--jt-border-light)!important;
}
input:checked ~ .d-block-check {
display: block !important;
}
input:checked ~ .d-none-check {
display: none !important;
}
.dropdown-menu,
.accordion-item,
.accordion-header {
background-color: var(--bs-body-bg);
color: var(--bs-body-color);
border-color: var(--jt-border-light);
}
.lazyload {
transition-property: opacity;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
opacity: 0;
}
.lazyload.loaded {
opacity: 1;
}

/* JetTheme Style */

pre {
background-color: var(--jt-bg-light);
margin-bottom: 1rem;
padding: 1rem;
font-size: 0.75rem;
}
blockquote {
border-left:  5px solid var(--jt-blockquote);
color: inherit;
font-size: 1.125rem;
margin-bottom: 1.5rem;
margin-top: 1.5rem;
padding-left: 1rem;
}
.header-animate.header-hidden {
transform: translateY(-100%);
box-shadow: none !important;
}
#header {
background-color: var(--jt-header-bg);
color: var(--jt-header-color);
transition-property: transform;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: .3s;
min-height: 50px;
border-bottom: 1px solid var(--jt-header-border);
}

.jt-icon {
display: inline-block;
height: 1em;
vertical-align: -0.15em;
width: 1em;
fill:none;
stroke:currentColor;
stroke-linecap:round;
stroke-linejoin:round;
stroke-width:2;
}
.jt-icon-center {
font-family: sans-serif;
}
.icon-dark,
.dark-mode .icon-light {
display: none;
}
.dark-mode .icon-dark {
display: block;
}
#dark-toggler,
#search-toggler,
#navbar-toggler {
line-height: 1;
}
#dark-toggler {
font-size: 17px;
}
#footer {
background-color: var(--jt-footer-bg);
color: var(--jt-footer-color);
border-top: 1px solid var(--jt-footer-border);
}
#socket {
background-color: var(--jt-socket-bg);
color: var(--jt-socket-color);
}
#navbar {
z-index: 9999;
}
#navbar .menu-item {
position: relative;
}
#navbar .nav-link {
min-height: 40px;
}
#navbar .dropdown-toggle {
cursor: pointer;
align-items: center;
display: flex;
}
#navbar.d-block,
#navbar .dropdown-menu,
#navbar .nav-link,
#navbar .dropdown-toggle {
-webkit-transition: .3s;
-ms-transition: .3s;
-o-transition: .3s;
transition: .3s;
}
#navbar .navbar-nav > .menu-item > .nav-link {
font: $(tabs.font);
line-height: 1.5;
color: var(--jt-nav-color);
}
#navbar .navbar-nav > .menu-item:hover > .nav-link,
#navbar .navbar-nav > .menu-item:hover > .dropdown-toggle {
color: var(--jt-nav-hover);
}
#navbar .navbar-nav > .menu-item > .nav-link.active,
#navbar .navbar-nav > .menu-item > .active ~ .dropdown-toggle {
color: var(--jt-nav-selected);
}
.logo-wrap {
width: $(logo.width);
}
#search-header .dropdown-menu {
background-color:var(--jt-dropdown-bg);
color: var(--jt-dropdown-color);
border-color: var(--jt-header-border);
min-width: 300px;
right:0;
top:100%
}
.blog-admin {
display: none;
}
#pagination li + li {
margin-left: 5px;
}
.no-items {
display: none;
}
.feature-image,
.separator,
.tr-caption-container {
margin-bottom: 1rem;
}
.tr-caption-container {
width: 100%;
}
.separator a,
.tr-caption-container a {
margin: 0 !important;
padding: 0 !important;
}
.tr-caption {
font-size: 12px;
font-style: italic;
}
.widget:last-child {
margin-bottom: 0 !important;
}
#post-body .widget {
margin-top: 1.5rem;
}
.item-title {
color: var(--jt-heading-link);
}
.item-title:hover {
color: var(--jt-heading-hover);
}
#comment-editor{
width:100%
}
#primary .widget-title {
font-weight: 300;
text-transform: uppercase;
}
#footer .widget-title {
text-transform: uppercase;
}
#footer .widget-title,
#sidebar .widget-title {
font-size: 13px !important;
}
#footer .widget-title:after {
content: "";
display: block;
width: 50px;
border-bottom: 2px solid var(--jt-primary);
margin-top: 10px;
}
#primary .widget-title > span {
background-color: var(--bs-body-bg);
padding-right: 5px;
position: relative;
}
#main .widget-title:before,
#sidebar .widget-title:before {
background-color:  var(--jt-bg-light);
content: "";
height: 1px;
display: block;
position: absolute;
top: 50%;
transform: translateY(-50%);
width: 100%;
}
#main .widget-title:before {
border-right: 30px solid var(--jt-primary);
height: 5px;
}
.send-success:not(.loading) .contact-form-msg,
.send-error:not(.loading) .contact-form-msg {
display:block !important;
}
.send-success .contact-form-msg{
border-color: rgba(25,135,84,.3) !important;
}
.send-error .contact-form-msg{
border-color: rgba(255,193,7,.3) !important;
}
.send-success .contact-form-msg:before{
content: attr(data-success);
}
.send-error .contact-form-msg:before{
content: attr(data-error);
}
hr.example-ads:before {
content: "Advertisement here";
}
hr.example-ads {
background-color: var(--jt-bg-light);
border-radius: 0.25rem;
font-size: 0.875rem;
height: auto;
margin: 0;
opacity: 1;
padding: 1.5rem 0;
text-align: center;
}
body > .google-auto-placed {
margin: 0 auto 1.5rem;
max-width: 1108px;
}
.google-auto-placed > ins {
margin: 0 !important;
}


/* TYPOGRAPY */

.h1,h1{font-size:calc(1.375rem + 1.5vw)}
.h2,h2{font-size:calc(1.325rem + .9vw)}
.h3,h3{font-size:calc(1.3rem + .6vw)}
.h4,h4{font-size:calc(1.275rem + .3vw)}
.h5,h5{font-size:$(title.h5)}
.h6,h6{font-size:$(title.h6)}

.entry-title {
color: var(--jt-heading-color);
}
.entry-text h1,
.entry-text h2,
.entry-text h3,
.entry-text h4,
.entry-text h5,
.entry-text h6 {
color: var(--jt-heading-color);
padding-top: 1em;
margin-bottom: 1rem;
}

.entry-text li {
margin-bottom: 0.5rem;
}

/* Responsive Style */

@media (min-width: 576px) {
.ratio-sm-4x3 {
padding-bottom: 75%;
}
.ratio-sm-16x9 {
padding-bottom: 56.25%;
}
.border-sm-end {
border-right-width: 1px !important;
border-right-style: solid;
}
#post-pager .next-page {
border-left: 1px solid;
}
}
@media (min-width: 768px) {
.position-md-relative {
position: relative;
}
.border-md-end {
border-right-width: 1px !important;
border-right-style: solid;
}
}
@media (min-width: 992px) {
.d-lg-flex {
display: flex;
}
.col-lg-4 {
flex: 0 0 auto;
width: 33.33333333%;
}
.col-lg-8 {
flex: 0 0 auto;
width: 66.66666667%;
}
.border-lg-end {
border-right-width: 1px !important;
border-right-style: solid;
}
#navbar .navbar-nav > .menu-item {
display: flex;
}
#navbar .dropdown-menu {
background-color:var(--jt-dropdown-bg);
border-color: var(--jt-header-border);
margin-top: -10px;
display: block;
opacity: 0;
visibility: hidden;
pointer-events: none;
box-shadow: 5px 10px 10px -5px rgba(0, 0, 0, 0.14);
top:100%;
min-width: 150px;
}
#navbar .dropdown-menu .nav-link {
padding-right: 20px;
font-size: $(dropdown.font);
color: var(--jt-dropdown-color);
}
#navbar .dropdown-menu .dropdown-toggle {
position: absolute;
right: 10px;
top: 20px;
}
#navbar .dropdown-menu .dropdown-menu {
left: 100%;
top: -1px;
}
#navbar .dropdown-menu .menu-item:hover > .nav-link,
#navbar .dropdown-menu .menu-item:hover > .dropdown-toggle {
color:  var(--jt-dropdown-hover);
}
#navbar .dropdown-menu .menu-item > .nav-link.active,
#navbar .dropdown-menu .menu-item > .active ~ .dropdown-toggle {
color:  var(--jt-dropdown-selected);
}
#navbar .menu-item:hover > .dropdown-menu {
opacity: 1;
visibility: visible;
pointer-events: unset;
margin: 0;
}
#navbar .navbar-nav > .menu-item > .nav-link {
padding: 1.5rem 1.2rem;
white-space:nowrap;
}
#navbar .navbar-nav > .menu-item > .dropdown-toggle {
bottom: 0;
pointer-events: none;
position: absolute;
right: 5px;
top: 3px;
}
#sidebar {
border-left: 1px solid var(--jt-border-light);
}
#footer-widget .widget {
margin-bottom: 0 !important;
}
}
@media (min-width: 1200px){
.container {
max-width: 1140px;
}
.h1,h1{font-size:$(posts.title.size)}
.h2,h2{font-size:$(title.h2)}
.h3,h3{font-size:$(title.h3)}
.h4,h4{font-size:$(title.h4)}
}
@media (min-width: 1400px) {
.container {
max-width: 1320px;
}
}
@media (max-width: 991.98px) {
input:checked ~ .dropdown-menu {
display: block;
}
input:checked + .dropdown-toggle {
color: var(--jt-dropdown-selected);
}
.logo-wrap {
width: $(logo.width.mobile);
}
#search-header .dropdown-menu{
width: 100%;
}
#navbar {
background-color: var(--jt-header-bg);
padding-top: 70px;
padding-bottom: 30px;
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: auto;
}
#navbar.d-block {
opacity: 0;
transform: translateX(-20%);
}
#navbar.show {
transform: translateX(0);
opacity: 1;
}
#navbar .navbar-nav {
max-height: 100%;
overflow-y: auto;
}
#navbar-toggle:checked ~ #header-main #navbar {
display:block;
}
#navbar .nav-link {
border-bottom: 1px solid var(--jt-header-border);
font-size: 16px !important;
color: var(--jt-dropdown-color);
}
#navbar .menu-item:hover > .nav-link {
color: var(--jt-dropdown-hover);
}
#navbar .active > .nav-link {
color: var(--jt-dropdown-selected);
}
#navbar .dropdown-toggle {
border-left: 1px solid var(--jt-header-border);
height: 2.5rem;
padding: 0 1rem;
position: absolute;
right: 0;
top: 0;
}
#navbar .dropdown-menu {
background-color: var(--jt-dropdown-bg);
border: none;
padding-left: 10px;
}
#sidebar {
border-top: 1px solid var(--jt-border-light);
}
}
@media (max-width: 575.98px) {
.feature-posts .item-thumbnail {
margin-bottom: -150px;
}
.feature-posts .item-thumbnail a {
border-radius: 0 !important;
box-shadow: none !important;
padding-bottom: 75%;
}
.feature-posts .item-content {
background-color: var(--bs-body-bg);
border: 5px solid;
border-radius: 0.25rem;
}
#post-pager .prev-page + .next-page {
border-top: 1px solid;
}
.full-width,
.px-3 .google-auto-placed {
margin-left: -1rem;
margin-right: -1rem;
width: auto !important;
}
#footer-widget .widget {
padding-left: 3rem;
padding-right: 3rem;
}
}
.demo{
border-radius: 6px;
background: #0081ff;
padding: 9px;
font-size: 15px;
color: white;
text-decoration: none;
font-weight: bold;
box-shadow: 0px 0px 4px #0000007c;
text-transform: uppercase;
margin-left: 20px;}
.demo:hover{color:white;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 9px 12px;
transition: all .5s;   }.nt{position:relative;padding:16px 20px 16px 50px; background: lightblue;;
color:#3c4043; font-size:.85rem;font-family:inherit;line-height:1.6em;border-radius:20px;overflow:hidden;box-shadow:rgb(100 100 111 / 20%) 0px 4px 5px 0px} .nt::before{content:'';width:60px;height:60px;background:#81b4dc;display:block;border-radius:50%;position:absolute;top:-12px;left:-12px;opacity:.1} .nt::after{content:'\002A';position:absolute;left:18px;top:16px; font-size:20px; min-width:15px;text-align:center} .nt.wr{background:#ffdfdf;color:#48525c} .nt.wr::before{background:#e65151} .nt.wr::after{content:'\0021'}
.joinbtn{ text-align: center; } .joinbtn a img{ width: 96%; Height:100%; margin-top: 15px; border-radius: 80px; border: 1px solid blue; box-shadow: 3px 3px 0px blue; } .joinbtn img:hover{ box-shadow: 0px 0px 30px blue; transition: box-shadow .7s ease; }
.ttn {display: flex; justify-content: center; align-items: center; transition: all 1s ease; text-decoration: none; background: #0088cc; padding: 8px 8px; color: #fff; font-weight: bold; border-radius: 4px; } .ttn:hover { background: #00c0ff; color: white; box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 30px; }
.note{position:relative;padding:16px 20px 16px 50px; background:#e1f5fe;color:#3c4043; font-size:.85rem;font-family:inherit;line-height:1.6em;border-radius:10px;overflow:hidden} .note::before{content:'';width:60px;height:60px;background:#81b4dc;display:block;border-radius:50%;position:absolute;top:-12px;left:-12px;opacity:.1} .note::after{content:'\002A';position:absolute;left:18px;top:16px; font-size:20px; min-width:15px;text-align:center} .note.wr{background:#ffdfdf;color:#48525c} .note.wr::before{background:#e65151} .note.wr::after{content:'\0021'} .ap{ background: linear-gradient(248deg,#AF40FF, #5B42F3 50%,#00DDEB); padding: 10px 10px; color: white; text-decoration: none; text-transform: uppercase; border-radius: 5px; box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; font-weight: bold; } .ap:hover{ box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; transition: all .5s ; background: linear-gradient(248deg,#AF40FF, #5B42F3 50%,#00DDEB); Color: white; }.btn1,.btn2,.btn3,.btn6,.btn7,.btn8,.btn9,.btn10{ background:linear-gradient(28deg,#AF40FF, #5B42F3 50%,#00DDEB); padding: 10px 10px; color: white; text-decoration: none; text-transform: uppercase; border-radius: 5px; font-weight: bold; }
.disabled{pointer-events:none}.hidden{display:none}#header-main .jt-icon{width:1.4em;height:1.4em;}#header{background: linear-gradient(135deg,#ff1a75 0%,#7d2ae8 40%,#00c4cc 95%);}

 h1,h2,h3,li{text-transform: capitalize;} 
.item-thumbnail:hover{ transform: scale(1.04); transition: .7s ease;} .popSc{position:fixed;z-index:999;top:0;bottom:0;left:0;right:0;padding:20px;background:#f3f5fe;display:flex;justify-content:center;align-items:center} 

.popSc.hidden{display:none} .popSc .popBo{position:relative;background:#fff;max-width:400px;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:30px;border-radius:30px} .popSc .popBo svg{display:block;width:50px;height:50px;fill:none !important;stroke:#08102b;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5} .popSc .popBo h2{margin:10px 0 15px 0;font-size:1.2rem;font-weight:800;color:#08102b} .popSc .popBo p{margin:0;line-height:1.7em;font-size:0.9rem;color:#08102b} .darkMode .popSc{background:#1f1f1f} .darkMode .popSc .popBo{background:#2c2d31} .darkMode .popSc .popBo svg{stroke:#fefefe} .darkMode .popSc .popBo p, .darkMode .popSc .popBo h2{color:#fefefe}
.pre{background:#f6f6f6;color:#2f3337;direction: ltr;position:relative;border-radius:3px;overflow:hidden;margin:1.7em auto} .pre pre{margin:0;color:inherit;background:inherit;display:block;position:relative;font-size:13px;line-height:1.6em;border-radius:3px;padding:30px 20px 20px;-moz-tab-size:2;tab-size:2;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none; overflow:auto;direction:ltr;white-space:pre}.pre.adv{border-radius:10px} .pre.adv::before{display:none} .pre:not(.str) .prCd{display:none} .pre.str .prTl{display:none;} .pre.adv pre{padding-top:60px}.preM{position:absolute;top:0;right:0;left:0;width:100%; background: #FF00FF18;padding:10px 10px 10px 20px;
display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;z-index:2} .preT{font-size:12px;font-family: var(--fontC);line-height:1rem;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:10px;} .preA{display:flex;gap:8px;white-space:nowrap;} .preA button{outline:none;border:none;width:30px;height:30px;background:#d9d9d9;padding:0;margin:0;border-radius:50%;transition:border-radius .2s ease;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;} .preA button:hover{border-radius:40%;} .preA button >svg{width:18px;height:18px;stroke:none;fill:#2e2e2e;transition: all .5s ease;} .pre.cpd .prCp svg, .pre.pnd .prDl svg, .pre.dwn .prDl svg{animation: jiggle 1s} .pre.cpd .prCp svg .a,.pre:not(.cpd) .prCp svg .b{opacity:0} .pre.dwn .prDl svg .a, .pre.pnd .prDl svg .a,.pre:not(.pnd) .prDl svg .b,.pre:not(.dwn) .prDl svg .c{opacity:0} @keyframes jiggle{0%{transform:rotate(0)}20%{transform:rotate(26deg)}40%{transform:rotate(-26deg)}60%{transform:rotate(26deg)}80%{transform:rotate(-26deg)}100%{transform:rotate(0)}} @-webkit-keyframes jiggle{0%{transform:rotate(0)}20%{transform:rotate(26deg)}40%{transform:rotate(-26deg)}60%{transform:rotate(26deg)}80%{transform:rotate(-26deg)}100%{transform:rotate(0)}}
 pre{height: 200px;}.disabled{pointer-events:none}.hidden{display:none}
 .youtube-player{position:relative;padding-bottom:56.25%;height:0;overflow:hidden;max-width:100%;background:#000;margin:0;border:1px solid blue;border-radius:10px}.youtube-player iframe{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;background:0 0}.youtube-player img{object-fit:cover;display:block;left:0;bottom:0;margin:auto;max-width:100%;width:100%;position:absolute;right:0;top:0;border:none;height:auto;cursor:pointer;-webkit-transition:.4s all;-moz-transition:.4s all;transition:.4s all}.youtube-player img:hover{-webkit-filter:brightness(75%);-moz-filter:brightness(75%);filter:brightness(75%)}.youtube-player .play{height:72px;width:72px;left:50%;top:50%;margin-left:-36px;margin-top:-36px;position:absolute;background:url(https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg) no-repeat;cursor:pointer}.scrollable-tabs-container { 
 background: transparent; width: 100%; margin: -20px -16px; border-radius: 2px; overflow: hidden; position: relative;} 
  .scrollable-tabs-container ul { display: flex; gap: 9px; padding: 9px 24px; margin: 0; list-style: none; overflow-x: scroll; -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; } .scrollable-tabs-container ul.dragging a { pointer-events: none; } .scrollable-tabs-container ul.dragging { scroll-behavior: auto; } .scrollable-tabs-container ul::-webkit-scrollbar { display: none; } 

.scrollable-tabs-container a { color: var(--jt-heading-link); text-decoration: none;  text-transform: capitalize;
 padding: 4px 8px; display: inline-block; border-radius: 10px; user-select: none; white-space: nowrap;
  font-weight: bold; 
Border: 1px solid #ccc;

font-size: 14px;
}
#navbar{width:70%;}
.scrollable-tabs-container a:hover{
   
box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}
.scrollable-tabs-container a:active{
    background: #8eaef3;}

@media screen and (min-width: 485px) {
  .scrollable-tabs-container{
   Width: 100%;
Margin: 0; } }
 #ckAcptBtn{
        background: blue;
    }
.ckWrap{position:fixed;right:20px;left:20px; margin-bottom: 10px; bottom:-600px;z-index:10;padding:10px;background:rgba(255, 255, 255, 0.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:10px 30px;box-shadow:0 -10px 25px -5px rgba(0,0,0,.1);align-items:center;justify-content:center;text-align:left;animation:ckUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckUp 2.5s forwards;-webkit-animation-delay:1s}
.ckWrap.acptd{animation:ckDn 1.5s backwards;animation-delay:.3s;-webkit-animation:ckDn 1.5s backwards;-webkit-animation-delay:.3s}
.ckWrap.hidden{display:none}
.ckCont h2{margin: 0; font-size: 15px; font-weight: 700; font-family: var(--fontCo);}
.ckCont h2::after {content: ''; display: inline-block; vertical-align: middle; width: var(--widgetTa); margin: 0 10px; border-bottom: 1px solid var(--widgetTac); opacity: .5;}
.ckCont p{margin:10px 0;line-height:1.4rem;color:#08102b;font-size: 14px;font-weight:400;font-family: var(--fontCo);}
.ckF{margin-top: 15px; display: flex; justify-content: center;}
.ckB { display: inline-flex; align-items: center; cursor: pointer; padding: 10px 15px; outline: 0; border: 0; border-radius: var(--buttonR); line-height: 20px; color: rgba(0,0,0,.8); background: #e9e9e9; font-size: 14px; font-family: var(--fontB); white-space: nowrap; overflow: hidden;}
.ckF >*:first-child {margin-right: 10px; border-radius: 8px; background: var(--linkB); color: #fffdfc;}
.ckF >*:last-child {flex: 0 0 auto; border-radius: 8px;}
.ckF >* {flex-grow: 1; justify-content: center;}
@media screen and (min-width:768px){.ckWrap{max-width:400px; left: 20px; right: 20px; margin-bottom:20px; border-radius:10px; bottom:-600px;box-shadow:0 5px 35px rgba(0,0,0,.1);animation:ckdeskUp 2.5s forwards;animation-delay:1s;-webkit-animation:ckdeskUp 2.5s forwards;-webkit-animation-delay:1s}.ckWrap.acptd{animation:ckdeskDn 2.5s backwards;animation-delay:.3s;-webkit-animation:ckdeskDn 2.5s backwards;-webkit-animation-delay:0.3s}}
@-webkit-keyframes ckUp{100%{bottom:0}}
@keyframes ckUp{100%{bottom:0}}
@-webkit-keyframes ckdeskUp{100%{bottom:30px}}
@keyframes ckdeskUp{100%{bottom:30px}}
@-webkit-keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@keyframes ckDn{0%{bottom:0}100%{bottom:-600px}}
@-webkit-keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
@keyframes ckdeskDn{0%{bottom:30px}100%{bottom:-600px}}
.darkMode .ckWrap{background:rgba(50, 50, 50, 0.8)}
.darkMode .ckCont h2, .darkMode .ckCont p, .darkMode{color:#fefefe}
footer {margin:-30px auto;}
.item-tag a{
background: linear-gradient(135deg,#ff1a75 0%,#7d2ae8 40%,#00c4cc 95%);;
padding:5px 9px;
color:#fff !important;
border-radius: 1px 100px / 120px;
margin-right:3px; font-weight:500;
}
/* source css: median-ui.blogspot.com modified by wendycode.com */
.slideB {
--indicator: #f89000;
--sliderBd-radius: 4px;
--sliderRatio: 56.25%;
}
  
@-webkit-keyframes fade{from{opacity:.4;}to{opacity:1;}}
@keyframes fade{from{opacity:.4;}to{opacity:1;}}
.slider .item{-webkit-animation-name:fade;-webkit-animation-duration:1.5s;animation-name:fade;animation-duration:1.5s;}
.slideI .i.active{width:10px;background-color:var(--indicator);}
.slideB .next,.slideB .prev{position:absolute;top:40%;font-size:2.5em;border-radius:50%;user-select:none;border:1px solid #e4e3e1;background:#fffdfc;opacity:.5;padding:0 20px 5px;outline:0;}
.slideB .next:hover,.slideB .prev:hover{opacity:.9;}
.slideB .prev{left:10px;}
.slideB .next{right:10px;}
.slideB{position:relative;border-radius:var(--sliderBd-radius);overflow:hidden;}
.slideB:hover .slideI svg{opacity:1;visibility:visible;}
.slideI.active svg .pause{display:block;}
.slideI.active svg .play,.slideI svg .pause{display:none;}
.slider.no-items~.slideI{display:none;}
.slideI .i{width:4px;height:4px;border-radius:10px;background-color:rgb(0 0 0 / 15%);transition:width .1s ease,background-color .1s ease;}
.slideI svg{right:0;}
.slideI svg{position:absolute;top:0;opacity:0;visibility:hidden;transition:opacity .1s ease .4s,visibility .1s ease .4s;}
.slider{position:relative;width:400%;}
.slider >*{flex-shrink:0;width:calc(100% / 4);}
.slider .item{display:none;position:relative;border-radius:var(--sliderBd-radius);overflow:hidden;}
.slider .img{display:block;padding-top:var(--sliderRatio);color:#d9e2f0;background-color:#f9f9fb;background-position:center;background-size:cover;background-repeat:no-repeat;}
.slider .cap{display:block;position:absolute;left:0;bottom:0;right:0;padding:20px;padding-block-start:40px;background-image:linear-gradient(0deg,rgb(45 49 56 / 90%) 0%,rgb(45 49 56 / 50%) 60%,rgb(45 49 56 / 0%) 100%);}
.slideB >*{-webkit-tap-highlight-color:transparent;tap-highlight-color:transparent;}
.slideB:hover .slider .cap{background-image:none;}
.slideB a:hover{filter:none;}
.slider .img{position:relative;border-radius:var(--sliderBd-radius);}
.slider .cap{background-image:linear-gradient(0deg,rgb(45 49 56 / 55%) 0%,rgb(45 49 56 / 22%) 60%,rgb(45 49 56 / 0%) 100%);border-radius:var(--sliderBd-radius);font-size:0.9em;line-height:1.2em;font-weight:600;text-shadow:0 2px 10px #272733,0 1px 1px rgba(10,10,10,.5);color:#f9f9fb;}
.slider .category{top:0;right:0;position:absolute;padding:10px;}
.slideB a.button{display:inline-flex;text-decoration:none;outline:0;border:0;padding:2px 10px;font-size:12px;border-radius:15px;color:#0e2045;background-color:#fffdfc;box-shadow:5px 5px 15px 0 rgb(0 0 0 / 10%);}
.slideI{display:flex;gap:5px;position:relative;height:12px;margin-block:5px calc(40px - 12px - 4px)) align-items:center;justify-content:center;margin-top:5px;}
@media screen and (max-width:640px){.slideB a.button{font-size:10px;padding:0 10px;}.slideB .next,.slideB .prev{font-size:1em;border-radius:50%;padding:0 10px 3px;}}
.item-post.mb-3{ border: 1px solid #ccc; padding: 5px; border-radius: 7px;}
.rounded{border-radius:.6rem!important;}
.p-4{padding:1rem!important;}
 .bx{ position:relative;margin:40px 2px;padding:40px 15px 15px;border:1px solid rgba(230,230,230,1);border-radius:5px;box-shadow:0 10px 20px 0 rgba(30,30,30,.07)}
.bx h2{background-image:linear-gradient(to right,#25aae1,#4481eb,#04befe,#3f86ed);box-shadow:0 4px 15px 0 rgba(65,132,234,0.75);Color:white;padding:10px;border-radius:7px;padding:8px 20px!important;position:absolute;margin:0!important;font-size:17px!important;;top:-20px;font-weight:bold;left:30px;text-transform:uppercase}.bx.yellow h2{background-image:linear-gradient(to right,#0ba360,#3cba92,#30dd8a,#2bb673);box-shadow:0 4px 15px 0 rgba(23,168,108,0.75);Color:white;padding:10px;border-radius:7px}.bx.blue h2{background-image:linear-gradient(to right,#f5ce62,#e43603,#fa7199,#e85a19);box-shadow:0 4px 15px 0 rgba(229,66,10,0.75);Color:white;padding:10px;border-radius:7px}.bx.box-red h2{background:#f7176a}table.tr-caption-container{min-width:inherit;width:auto;margin:0 auto;border:0;position:relative}table.tr-caption-container tr td{background-color:transparent;border:0;padding:0}table.tr-caption-container tr:nth-child(2n+1) td,table.tr-caption-container tr:nth-child(2n+1) td:first-child{border:0;background-color:transparent}table.tr-caption-container .tr-caption{display:block;font-size:12px;font-style:italic;color:#767676;background-color:transparent;border:0}table{width:100%;margin:20px 0;border:1px solid rgba(230,230,230,1);border-radius:7px;overflow:hidden;font-size:14px}table th{background-color:transparent;padding:15px 20px;border:1px solid #ddd;border-left:0;font-family:Noto Sans;font-size:13px} table th:pink-child,table tr td:pink-child,table tr:nth-child(2n) td:pink-child{border-right:0}table td{ text-transform: capitalize;padding:15px 20px;border:1px solid #ddd;border-left:0;border-top:0;vertical-align:middle}table tr:nth-child(2n + 1) td{background-color:rgba(0,0,0,.025)}.table{display:block;overflow-y:hidden;overflow-x:auto;border-radius:3px;scroll-behavior:smooth} .drK .bx{background-color:#2d2d30;color:#fefefe}.drK .bx table,.drK .bx table td, .drK .bx{border-color:rgba(255,255,255,.15);color:#fefefe}  .bx.pink h2{background-image:linear-gradient(to right,#7f00ff, #00FFFF);box-shadow:0 4px 15px 0 rgba(116,79,168,0.75);Color:white;padding:10px;border-radius:7px}  /*number listing */ ol.style1{counter-reset:numbers;list-style:none;padding:0}ol.style1>li{counter-increment:numbers;margin-bottom:25px;position:relative;margin-left:55px}ol.style1>li img{margin:15px 0;width:100%;display:block}ol.style1>li::before{content:counter(numbers);line-height:23px;font-weight:bold;left:-45px;width:32px;height:32px;text-align:center;position:absolute;color: #00bfff;border:4px solid cyan;border-radius:50%;top:0px}
  ol.style1 li ul li{margin-bottom:15px}ol.style1 li ul{margin-top:15px}.drK ol.style1>li::before{color:rgb(220, 226, 224);border-color:rgba(220, 226, 224)}.drK ol.style1>li::before{color:#00bfff} 
/* h2 */
.bx h2{background-image:linear-gradient(to right,#25aae1,#4481eb,#04befe,#3f86ed);box-shadow:0 4px 15px 0 rgba(65,132,234,0.75);Color:white;padding:10px;border-radius:7px;padding:8px 20px!important;position:absolute;margin:0!important;font-size:17px!important;top:-20px;font-weight:bold;left:30px;text-transform:uppercase}.bx.yellow h2{background-image:linear-gradient(to right,#0ba360,#3cba92,#30dd8a,#2bb673);box-shadow:0 4px 15px 0 rgba(23,168,108,0.75);Color:white;padding:10px;border-radius:7px}.bx.blue h2{background-image:linear-gradient(to right,#f5ce62,#e43603,#fa7199,#e85a19);box-shadow:0 4px 15px 0 rgba(229,66,10,0.75);Color:white;padding:10px;border-radius:7px}.bx.box-red h2{background:#f7176a} .bx.pink h2{background-image:linear-gradient(to right,#7f00ff, #00FFFF);box-shadow:0 4px 15px 0 rgba(116,79,168,0.75);Color:white;padding:10px;border-radius:7px}

.wcSafeShow{position:relative;display:flex;margin:auto} 
.safeWrap{position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.5);z-index:999999;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.panel-primary{background:#fff;text-align:center;display:block;overflow:hidden;width:100%;max-width:80%;padding:0 0 25px 0;border-radius:5px;margin:15% auto;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24)}.panel-body{position:relative;margin:0 25px}.panel-heading h2{background:#ff0088;color:#fff;margin:0 auto 25px auto;font-weight:400;padding:15px;font-size:20px}.panel-body input{background:rgba(0,0,0,0.04);width:100%;padding:15px;border-radius:15px;border:1px solid transparent;font-size:16px;color:#000;outline:none;text-indent:60px;transition:all .3s}.panel-body input:focus{background:#fff;color:#000;border-color:#ff0088;outline:none;box-shadow:0 0 5px rgba(0,0,0,0.1)}.panel-body .input-group-btn{position:absolute;top:0;right:0}.panel-body button{border-radius:0 5px 5px 0;background:#ff0088;color:#fff;border:0;padding:17px 52px;font-weight:500;outline:none;transition:all .3s}.panel-body button:hover,.panel-body button:focus{background:#ff0088;outline:none}#generatelink{margin:20px auto 0 auto}#generatelink button{background:#ff0088;border-radius:15px;font-size:14px;padding:14px 32px}#generatelink button:hover,#generatelink button:focus{background:#ff0088;border-radius:5px;font-size:14px}#generatelink input{background:rgba(0,0,0,0.05);text-indent:0}#generatelink input:hover,#generatelink input:focus{background:#ff0088;border-color:transparent;box-shadow:none}#generateloading{margin:20px auto 0 auto;font-size:20px;color:#ff0088;font-weight:normal}
.panel-body:before{content:'\279C';background:rgba(0,0,0,0.05);position:absolute;left:0;top:0;color:#888;padding:17px 20px;border-radius:15px 0 0 5px;border-right:1px solid transparent;transition:all .6s}.panel-body:focus-within:before{content:'\279C';background:#ff0088;color:#fff}.bt-success{display:inline-flex;align-items:center;margin:15px 15px;padding:10px 20px;outline:0;border:0;border-radius:5px;color:#fefefe;background-color:#ff0088;font-size:14px;white-space:nowrap;overflow:hidden;max-width:100%;line-height:2em}.bt-success:hover{color:#ff0088;background-color:transparent;border:1px solid #ff0088}.hidden,.bt-success.hidden{display:none}.wcSafeClose{display:inline-flex;align-items:center;margin:15px auto -15px;padding:5px 15px;outline:0;border:0;border-radius:12px;color:#fefefe;background-color:#ff0088;font-size:14px;white-space:nowrap;overflow:hidden;max-width:100%;line-height:2em}.copytoclipboard{margin:10px auto 5px}
#timer{margin:0 auto 20px auto;width:80px;text-align:center}.pietimer{position:relative;font-size:200px;width:1em;height:1em}.pietimer > .percent{position:absolute;top:25px;left:12px;width:3.33em;font-size:18px;text-align:center;display:none}.pietimer > .slice{position:absolute;width:1em;height:1em;clip:rect(0px,1em,1em,0.5em)}.pietimer >.slice.gt50{clip:rect(auto,auto,auto,auto)}.pietimer > .slice > .pie{border:0.06em solid #c0c0c0;position:absolute;width:80px;height:80px;clip:rect(0em,0.5em,1em,0em);border-radius:50%}.pietimer > .slice > .pie.fill{-moz-transform:rotate(180deg)!important;-webkit-transform:rotate(180deg)!important;-o-transform:rotate(180deg)!important;transform:rotate(180deg)!important}.pietimer.fill > .percent{display:none}.pietimer.fill > .slice > .pie{border:transparent;background-color:#c0c0c0;width:1em;height:1em}
.wcSafeShow svg{fill:none!important;stroke:#48525c;stroke-linecap:round;stroke-linejoin:round;}
#generateloading svg{width:22px;height:22px;fill:#ff0088}
.btn-primary svg,.darkMode .btn-primary svg{fill:none;stroke:#fff;stroke-width:1.5;width:22px;height:22px;vertical-align:-5px;margin-right:10px}
@media screen and (max-width:768px){.panel-body .input-group-btn{display:block;position:relative;overflow:hidden;margin:20px auto 0 auto}.panel-body button{border-radius:15px;width:100%}}
@media screen and (max-width:480px){.panel-primary{margin-top:30%}}
  
.darkMode .panel-primary{background:#2d2d30;color:yellow;}
.darkMode .panel-body input,.darkMode .panel-body input:focus{background:#2d2d30;color:#fefefe}
.darkMode .wcSafeClose{color:yellow}
 .item-snippet{display: none;}
    

/*Your custom CSS is here*/

.dm{
       display: block;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 10px 10px;
    text-align: center;
    font-weight: bold;
   text-decoration: none;    
   color: white;
   text-transform: uppercase;
    background: linear-gradient(to left, #df00c0, #ffb200);;
    border-radius: 35px;
    font-size: 20px;
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
    text-shadow: 1px 1px 0px black;    }
   
    .dn{
       display: block;
    width: 100%;
    max-width: 300px;
    margin: 10px auto;
    padding: 10px 10px;
    text-align: center;
position: relative;
text-transform: uppercase;
    text-decoration: none;
    color: #fff;
  background: linear-gradient(156deg, #00ddb9, #00dd15) ;
    border-radius: 45px;
    font-size: 20px;
    font-weight: bold;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
   text-shadow: 1px 1px 0px black;
   position: relative;
    }
  .dn:hover{color: white;
  box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px; 
  bottom: 3px;
   
   }
   
    .dm:hover{
   bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  Color:white;}

  .dark-mode body,.dark-mode .item-content{
 background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top,  rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg,  #670d10 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg,  #670d10 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.2) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom,  rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg,  #670d10 0%,#092756 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=&#39;#3E1D6D&#39;, endColorstr=&#39;#092756&#39;,GradientType=1 );background-attachment: fixed;
}
 .dark-mode #header-main{  
     background: rgb(0,0,0,.35);
     }
                
 .entry-meta .me-3{color:var(--jt-heading-color);} 
    
pre{height:300px;}
.item-meta {display:flex; justify-content:space-around; font-size:1em; }
.dhanjeerdr{color:var(--hero-color);text-align:center;margin:0 0 30px} .dhanjeerdr h1{display:block;font-size:35px;font-weight:700;margin:0 0 13px} .dhanjeerdr p{display:block;font-size:16px;color:var(--jt-heading-color);margin:0} .hero-search{text-align:center;margin:0 0 13px} .hero-search .search-form{display:inline-block;position:relative;width:480px;max-width:100%;height:50px;border:0} .hero-search .search-input{background: transparent;float:left;width:100%;height:50px; overflow:hidden;font-size:14px;color:var(--jt-heading-color);font-family:inherit;font-weight:400;line-height:51px;padding:0 20px;border:2px solid #ccc;border-radius:4px}  .hero-search .search-input:focus{box-shadow:0 2px 8px rgba(0,0,0,0.1)} .hero-search .search-button{position:absolute;top:0;right:0;height:50px;background-color:transparent;overflow:hidden;font-size:14px;color:var(--jt-heading-color);text-align:center;line-height:51px;cursor:pointer;opacity:.85;padding:0 20px;border:0;border-radius:0 6px 6px 0} .hero-search .search-button:hover{background-color:rgba(155,155,155,0.1)}
 .rown{width:100%;max-width:100%;margin:0} .cntne{padding:0 15px}} @media screen and (max-width: 640px){ .dhanjeerdr h1 { font-size: 31px;}}
  .htitle{background: var(--gd-bg); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-transform: capitalize; filter: drop-shadow(1px 2px 1px #b5b5b5):}
.padding{padding-right:4px;}
.navbar-collapse{
   margin: 10px; 
 border-radius: 10px;    
}
@font-face{font-family:'Google Sans Text';font-style:normal;font-weight:500;font-display:swap;src:local('Google Sans Text'),local('Google-Sans-Text'),url(https://fonts.gstatic.com/s/googlesanstext/v16/5aUu9-KzpRiLCAt4Unrc-xIKmCU5qEp2iw.woff2) format('woff2')} @font-face{font-family:'Google Sans Text';font-style:normal;font-weight:900;font-display:swap;src:local('Google Sans Text'),local('Google-Sans-Text'),url(https://fonts.gstatic.com/s/googlesanstext/v16/5aUp9-KzpRiLCAt4Unrc-xIKmCU5oPFTnmhjtg.woff2) format('woff2')} @font-face{font-family:'Google Sans Mono';font-style:normal;font-weight:400;font-display:swap;src:local('Google Sans Mono'),local('Google-Sans-Mono'),url(https://fonts.gstatic.com/s/googlesansmono/v4/P5sUzYWFYtnZ_Cg-t0Uq_rfivrdYH4RE8-pZ5gQ1abT53wVQGrk.woff2) format('woff2')}
.entry-title,p,li,j2,h3,h4,a,*{font-family:Google Sans Text;}
body{display:block;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}
pre{
-webkit-user-select: text !important;
-moz-user-select: text !important;
-ms-user-select: text !important;
user-select: text !important;
}
.entry-text h1,h2,h3,h4{font-family:Google Sans Text; }
   .lota{
      position: fixed;
      top: 50%;
      right: 0px;
      animation: bola 13s;
     width: 70px;
      Z-index:999;     
   }
   
   @keyframes bola {
     0%{
     top: 10px;
      right: 0px;   
     }     
     100%{
     bottom: -20px;
      right: 0px;   
     }
   }
   .bottom-alert {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #204ecf;
            color: #fff;
            padding: 10px;
            text-align: center;
            display: none;
            width: 200px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
           z-index: 999999999999;
        }
	@media screen and (min-width: 485px) {
  .scrollable-tabs-container{
   Width: 100%;
Margin: 0; }

 }
.item-snippet{display: none;}
.item-post.mb-3{ border: 1px solid #ccc; 
Padding: 5px;
Border-radius:8px;}

.item-thumbnail:hover{
transform: scale(1.04);
transition: .7s ease;}
.bt{
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        padding: 10px 10px;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
 border-radius: 5px;
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        font-weight: bold;
    }
    .bt:hover{
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      transition: all .5s ;   background: linear-gradient(248deg,#AF40FF, #5B42F3 50%,#00DDEB);
   Color: white;    }
footer{ background-image: radial-gradient(circle at 39% 47%, rgba(107, 107, 107,0.08) 0%, rgba(107, 107, 107,0.08) 33.333%,rgba(72, 72, 72,0.08) 33.333%, rgba(72, 72, 72,0.08) 66.666%,rgba(36, 36, 36,0.08) 66.666%, rgba(36, 36, 36,0.08) 99.999%),radial-gradient(circle at 53% 74%, rgba(182, 182, 182,0.08) 0%, rgba(182, 182, 182,0.08) 33.333%,rgba(202, 202, 202,0.08) 33.333%, rgba(202, 202, 202,0.08) 66.666%,rgba(221, 221, 221,0.08) 66.666%, rgba(221, 221, 221,0.08) 99.999%),radial-gradient(circle at 14% 98%, rgba(184, 184, 184,0.08) 0%, rgba(184, 184, 184,0.08) 33.333%,rgba(96, 96, 96,0.08) 33.333%, rgba(96, 96, 96,0.08) 66.666%,rgba(7, 7, 7,0.08) 66.666%, rgba(7, 7, 7,0.08) 99.999%),linear-gradient(45deg, rgb(97, 14, 117),rgb(20, 32, 127));
  color:white;}

  #google_translate_element{padding:0;}
body{top:0!important}
font{background:transparent!important;box-shadow:none!important}
.goog-te-gadget-simple img,.goog-te-gadget-simple .VIpgJd-ZVi9od-xl07Ob-lTBxed span,#goog-gt-tt,.VIpgJd-ZVi9od-ORHb-OEVmcd{display:none!important}
iframe.skiptranslate{border-left:none!important;border-top:none!important;border-bottom:none!important;border-right:none!important;border:none;box-shadow:none}
.goog-te-gadget-simple{background-color:transparent!important;background:url(&quot;https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg&quot;) center / 12px no-repeat;-webkit-transition:all .2s ease;transition:all .2s ease;background-size: 20px 20px;display:inline-block;font-weight:400;line-height: 1.8;padding:0 6px;text-align:center;white-space:nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select: none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-left:none!important;border-top:none!important;border-bottom:none!important;border-right:none!important;border-radius: 4px}

.dark-mode .goog-te-gadget-simple{background-color:transparent!important;background:url(&quot;https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg&quot;) center / 12px no-repeat;-webkit-transition:all .2s ease;transition:all .2s ease;background-size: 20px 20px;}
  `;
  document.head.appendChild(style);
} else {
  console.log('your website domain is not registered please msg to t.me/dhaneerider to purchase licence key');
}