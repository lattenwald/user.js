// ==UserScript==
// @name         Apps list navigation for NintendoLife
// @namespace    q.alexander.nintendolife.navigation
// @version      0.2.2
// @description  enter something useful
// @author       You
// @match        https://www.nintendolife.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

//window.addEventListener('load', function() {
(function() {
  var items = jQuery('div.list>div.list-item');
  var idx = -1;
  var pageElem = jQuery('.pages .active').last();
  var pageNum = Number(pageElem.text());
  if (!pageNum)
    pageNum = 1;

  jQuery(document).keypress(function(e) {
    var doit = false;
    var url = false;
    if (e.which == 106) { //next
      idx++;
      if (idx >= items.length) {
        var nextPageElem = pageElem.parent().next().children(':first');
        if (Number(nextPageElem.text()) == pageNum + 1)
          url = nextPageElem.attr('href');
        else
          idx = 0;
      }
      doit = true;
    } else if (e.which == 107) { //prev
      idx--;
      if (idx < 0) {
        var prevPageElem = pageElem.parent().prev().children(':first');
        if (Number(prevPageElem.text()) == pageNum - 1)
          url = prevPageElem.attr('href');
        else
          idx = items.length - 1;
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
