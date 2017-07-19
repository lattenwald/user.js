// ==UserScript==
// @name       Style modifications for inoreader.com with support for bigger images from shorpy.com
// @namespace  q.alexander.inoreader
// @version    0.5
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
}, false);
