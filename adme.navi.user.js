// ==UserScript==
// @name         Pictures navigation for Adme.Ru
// @namespace    q.alexander.adme.navigation
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.adme.ru/*
// @grant        none
// ==/UserScript==

(function(){
    var pics = jQuery('span.article-pic');
    var idx = -1;
    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106) { //next
            idx++;
            if (idx >= pics.length) {
                idx = 0;
            }
            doit = true;
        } else if (e.which == 107) { //prev
            idx--;
            if (idx < 0) {
                idx = pics.length;
            }
            doit = true;
        }
        if (doit) {
            console.log('scrolling to ' + idx);
            jQuery('html, body').animate({
	            scrollTop: jQuery(pics[idx]).offset().top
	        }, 500);
        }
    });
})();
