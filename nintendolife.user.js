// ==UserScript==
// @name         Apps list navigation for NintendoLife
// @namespace    q.alexander.nintendolife.navigation
// @version      0.1.1
// @description  enter something useful
// @author       You
// @match        https://www.nintendolife.com/*
// @grant        none
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
    var h2s = jQuery('section.text>h2').prev();
    var idx = -1;
    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106) { //next
            idx++;
            if (idx >= h2s.length) {
                idx = 0;
            }
            doit = true;
        } else if (e.which == 107) { //prev
            idx--;
            if (idx < 0) {
                idx = h2s.length;
            }
            doit = true;
        }
        if (doit) {
            console.log('scrolling to ' + idx);
            jQuery('html, body').animate({
                scrollTop: jQuery(h2s[idx]).offset().top
            }, 500);
        }
    });
})();
//}, false);
