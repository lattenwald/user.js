// ==UserScript==
// @name       Style modifications for inoreader.com with support for bigger images from shorpy.com
// @namespace  q.alexander.inoreader
// @version    0.8.6
// @description  Minor style changes
// @match      http://www.inoreader.com/*
// @match      https://www.inoreader.com/*
// @copyright  2017+, Alexaner Q
// @grant none
// ==/UserScript==

(function() {
  var head;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }

  var metaref = $('meta[name=referrer]');
  if (metaref.length) {
    metaref.attr('content', 'never');
    console.log('meta referrer modified');
  } else {
    var meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'never';
    head.appendChild(meta);
    console.log('meta referrer added');
  }
})();

document.addEventListener("DOMNodeInserted", function(e) {
  // Uploadvr icons -> images
  $(e.relatedNode)
    .find('img[data-original-src^="https://uploadvr.com/wp-content/uploads/"]')
    .each(function(_idx, el) {
      var s = el.getAttribute('data-original-src');
      var n = s.replace(/-\d+x\d+.([^\.]+)$/, '.$1');
      if (s == n) {
        return;
      }
      console.log("Replacing image url " + s + " with " + n);
      el.src = n;
    });

  // Shorpy bigger images
  $(e.relatedNode)
    .find('img[data-original-src*="https://www.shorpy.com/files/images/"]')
    .each(function(_idx, el) {
      var s = el.getAttribute('data-original-src');
      var n = s.replace(/^.*(www\.shorpy\.com.*)\.preview(\.\w+).*$/, "https://$1$2");
      if (el.src == n) {
        return;
      }
      console.log("Replacing image url " + s + " with " + n);
      el.src = n;
    });

  // LiveJournal uncensor
  $(e.relatedNode)
    .find('img[data-original-src*="https://ic.pics.livejournal.com/"]')
    .each(function(_idx, el) {
      var s = el.getAttribute('data-original-src');
      if (el.src == s) {
        return;
      }
      console.log("Replacing image url " + el.src + " with " + s);
      el.src = s;
    });

  // Original images for vrfocus
  $(e.relatedNode)
    .find('img[data-original-src*="https://www.vrfocus.com/wp-content/uploads/"]')
    .each(function(_idx, el) {
      var s = el.getAttribute('data-original-src');
      if (el.src == s) {
        return;
      }
      console.log("Replacing image url " + el.src + " with " + s);
      el.src = s;
    });

  // Iframe height for embedded twitter posts
  $(e.relatedNode)
    .find('iframe[src^="https://platform.twitter.com/embed/"]')
    .each(function(_idx, el) {
      el.height = '650px';
    });

  // AndroidPolice hide non-functional image galleries
  $(e.relatedNode)
    .find('strong:contains("Image Gallery")')
    .parent()
    .css('display', 'none');
}, false);
