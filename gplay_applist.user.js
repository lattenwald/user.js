// ==UserScript==
// @name         gplay apps list
// @namespace    q.alexander.kribrum.builder
// @version      0.2
// @description  Copy developer's apps list in JSON format to clipboard
// @author       You
// @match        https://play.google.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

(function() {
  'use strict';

  jQuery(document).keypress(function(e){
    if(e.keyCode == 113) {
      var links = jQuery('a[href^="/store/apps/details?"').toArray();
      var hrefs = links.map(function(l){return l.href});
      var apps = hrefs.map(function(h){return h.match(/\bid=([^/?&]+)/)[1]});
      var uniqueApps = Array.from(new Set(apps));
      var str = JSON.stringify(uniqueApps);
      copyToClipboard(str);
      alert("apps list copied to clipboard");
    }
  });
})();
