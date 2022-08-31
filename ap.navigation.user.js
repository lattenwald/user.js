// ==UserScript==
// @name         Apps list navigation for AndroidPolice
// @namespace    q.alexander.androidpolice.navigation
// @version      0.6
// @description  something useful
// @author       You
// @match        http://www.androidpolice.com/*
// @match        https://www.androidpolice.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
  var head, style;
  head = document.getElementsByTagName('head')[0];
  style = document.createElement('style')
  style.type = 'text/css';
  style.innerHTML =
    '#article-directory-list-cta {opacity: 0.2;} #article-directory-list-cta:hover {opacity: 1;}';
  head.appendChild(style);

  var items = jQuery('section#article-body h3,section#article-body h2')
  var idx = -1;
  jQuery(document).keypress(function(e){
    var doit=false;
    if (e.which == 106 || e.which == 1086) { //next
      idx++;
      if (idx >= items.length) {
        idx = 0;
      }
      doit = true;
    } else if (e.which == 107 || e.which == 1083) { //prev
      idx--;
      if (idx < 0) {
        idx = items.length;
      }
      doit = true;
    }
    if (doit) {
      console.log('scrolling to ' + idx);
      jQuery('html, body').animate({
        scrollTop: jQuery(items[idx]).offset().top
      }, 500);
    }
  });
})();
//}, false);
