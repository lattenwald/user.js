// ==UserScript==
// @name         Apps list navigation for AndroidPolice
// @namespace    q.alexander.androidpolice.navigation
// @version      0.4
// @description  enter something useful
// @author       You
// @match        http://www.androidpolice.com/*
// @grant        none
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
    var h3s = jQuery('div.post-content h3');
    var idx = -1;
    var pageNum = Number(jQuery('.multi-page-post.pages>section>span').text().substring(5));
    if (!pageNum)
        pageNum=1;
    jQuery(document).keypress(function(e){
        var doit=false;
        var url=false;
        if (e.which == 106) { //next
            idx++;
            if (idx >= h3s.length) {
                var nextPage = jQuery('.multi-page-post.pages a>span:contains(Page '+(pageNum+1)+')').parent().attr('href');
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
                var prevPage = jQuery('.multi-page-post.pages a>span:contains(Page '+(pageNum-1)+')').parent().attr('href');
                if (prevPage) {
                    url = prevPage;
                } else {
                    idx = h3s.length;
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
	                scrollTop: jQuery(h3s[idx]).offset().top
	            }, 500);
            }
        }
    });
})();
//}, false);
