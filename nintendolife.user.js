// ==UserScript==
// @name         Apps list navigation for NintendoLife
// @namespace    q.alexander.nintendolife.navigation
// @version      0.2.0
// @description  enter something useful
// @author       You
// @match        https://www.nintendolife.com/*
// @grant        none
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
    var items = jQuery('div.list>div.list-item');
    var idx = -1;
    var pageNum = Number(jQuery('.pages .active').text());
    if (!pageNum)
        pageNum=1;

    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106) { //next
            idx++;
            if (idx >= items.length) {
                var nextPage = jQuery('.pages li>a:contains(' + (pageNum+1) + ')').attr('href');
                if (nextPage) {
                    url = nextPage;
                } else {
                    idx = 0;
                }
            }
            doit = true;
        } else if (e.which == 107) { //prev
            idx--;
            if (idx < 0) {
                var prevPage = jQuery('.pages li>a:contains(' + (pageNum-1) + ')').attr('href');
                if (prevPage) {
                    url = prevPage;
                } else {
                    idx = items.length;
                }
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
                    scrollTop: jQuery(items[idx]).offset().top
                }, 500);
            }
        }
    });
})();
//}, false);
