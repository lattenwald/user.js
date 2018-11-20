// ==UserScript==
// @name       Style modifications for inoreader.com with support for bigger images from shorpy.com
// @namespace  q.alexander.inoreader
// @version    0.7.5
// @description  Minor style changes
// @match      http://www.inoreader.com/*
// @match      https://www.inoreader.com/*
// @copyright  2017+, Alexaner Q
// @grant none
// ==/UserScript==

(function() {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML =
    '#sb_rp_upgrade_button {background-color: #efefef !important; border-color: #efefef !important;}';
  head.appendChild(style);
  console.log('styles added');
})();

document.addEventListener("DOMNodeInserted", function (e) {
  // Uploadvr icons -> images
  $(e.relatedNode)
    .find('img[src^="https://uploadvr.com/wp-content/uploads/"]')
    .each(function(idx, el) {
      var s = el.src;
      var n = s.replace(/-\d+x\d+.([^\.]+)$/, '.$1');
      if (s == n) {return;}
      console.log("Replacing image url " + s + " with " + n);
      el.src = n;
    });

  $(e.relatedNode)
    .find('img[src*="http://www.shorpy.com/files/images/"]')
    .each(function(idx, el) {
      var s = el.src;
      var n = s.replace(/^.*(www\.shorpy\.com.*)\.preview(\.\w+).*$/, "https://$1$2");
      if (s == n) {return;}
      console.log("Replacing image url " + s + " with " + n);
      el.src = n;
    });

  $(e.relatedNode)
    .find('img[alt^="SHORPY-"]')
    .each(function(idx, el) {
	  var s = el.alt;
	  var n = "https://www.shorpy.com/files/images/" + s.replace("\.preview", "");
      if (el.src == n) {return;}
      console.log("Replacing image url " + el.src + " with " + n);
      el.src = n;
    });
}, false);
