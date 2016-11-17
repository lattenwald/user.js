// ==UserScript==
// @name       Shorpy large images at Feedly
// @namespace  q.alexander.feedly.shorpy
// @version    0.6
// @description  Replace small Shorpy.com previews with large images in Feedly
// @match      http://feedly.com/*
// @match      https://feedly.com/*
// @copyright  2014+, Alexaner Q
// @grant none
// ==/UserScript==

(function() {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML =
    '.entryholder .u100Entry {margin-left: 20px !important; margin-right: 0 !important; max-width: none !important;}' +
      '.content img[style] {max-height: 650px !important; height: auto !important; max-width: 100% !important; width: auto !important; }' +
    '.entryBody a {font-weight: normal !important;}' +
    'div .fx-button.primary.small {background-color: #aaa !important;}' +
    'div .entryBody {max-width: 100% !important;}';
  head.appendChild(style);
  console.log('styles added');
})();

document.addEventListener("DOMNodeInserted", function (ev) {
	el = document.querySelector('img[data-original^="http://www.shorpy.com/files/images/"]');
    if(!el) {return;}
	var s = el.getAttribute('data-original');
    var n = s.replace('.preview.jpg', '.jpg');
    if(s == n) {return;}
    console.log("Replacing image url " + s + " with " + n);
	el.setAttribute('src', n);
}, false);
