// ==UserScript==
// @name         Apps list navigation for AndroidPolice
// @namespace    q.alexander.androidpolice.navigation
// @version      0.5.0
// @description  enter something useful
// @author       You
// @match        http://www.androidpolice.com/*
// @match        https://www.androidpolice.com/*
// @grant        none
// @require      https://code.jquery.com/jquery-latest.min.js
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
    var h3s = jQuery('section#article-body h3')
    var idx = -1;
    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106 || e.which == 1086) { //next
            idx++;
            if (idx >= h3s.length) {
              idx = 0;
            }
            doit = true;
        } else if (e.which == 107 || e.which == 1083) { //prev
            idx--;
            if (idx < 0) {
              idx = h3s.length;
            }
            doit = true;
        }
        if (doit) {
            if (url) {
                console.log('going to ' + url);
                document.location.href = url;
            } else {
                console.log('scrolling to ' + idx);
                jQuery('html, body').animate({
                  scrollTop: jQuery(h3s[idx]).offset().top
              }, 500);
            }
        }
    });
})();
//}, false);
