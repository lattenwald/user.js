// ==UserScript==
// @name         Pikabu enhancement script
// @namespace    q.alexander.pikabu
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://pikabu.ru/*
// @grant        none
// @require https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function(){
    var articles = document.getElementsByTagName('article');
    var idx = -1;
    var doit;

    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106) { //next
            idx++;
            if (idx >= articles.length) {
                idx = 0;
            }
            doit = true;
        } else if (e.which == 107) { //prev
            idx--;
            if (idx < 0) {
                idx = articles.length;
            }
            doit = true;
        } else if (e.which == 120) { // x, read more
            $(articles[idx]).find('.story__read-more-label').click();
        } else {
            console.log("key: " + e.which);
        }
        if (doit) {
            console.log('scrolling to ' + idx);
            jQuery('html, body').animate({
	            scrollTop: jQuery(articles[idx]).offset().top
	        }, 500);
        }
    });
})();

