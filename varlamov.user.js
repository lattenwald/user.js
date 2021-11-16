// ==UserScript==
// @name         Photos navigation for varlamov.ru
// @namespace    q.alexander.varlamov.navigation
// @version      0.1.0
// @description  enter something useful
// @author       You
// @match        https://varlamov.ru/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

(function(){
  var imgs = jQuery('article.article__content div.wrap')
  var idx = -1;
  console.log("found " + imgs.length + " images");
  jQuery(document).keypress(function(e){
    var doit=false;
    if (e.which == 106 || e.which == 1086) { //next
      idx++;
      if (idx >= imgs.length) {
        idx = 0;
      }
      doit = true;
    } else if (e.which == 107 || e.which == 1083) { //prev
      idx--;
      if (idx < 0) {
        idx = imgs.length;
      }
      doit = true;
    }
    if (doit) {
      console.log('scrolling to ' + idx);
      jQuery('html, body').animate({
        scrollTop: jQuery(imgs[idx]).offset().top - 60
      }, 500);
    }
  });
})();
