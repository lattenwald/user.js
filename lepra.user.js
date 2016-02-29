// ==UserScript==
// @name       Lepra
// @namespace  q.alexander.feedly.shorpy
// @version    0.2
// @description  Miscellaneous improvements
// @match      http://leprosorium.ru/*
// @match      http://*.leprosorium.ru/*
// @match      https://leprosorium.ru/*
// @match      https://*.leprosorium.ru/*
// @copyright  2014+, Alexaner Q
// @grant none
// ==/UserScript==

(function() {
    console.log('yo');
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    console.log('styles');
    style.innerHTML =
        '.post img {opacity: 0.1;} .post:hover img {opacity: 1;}';
    head.appendChild(style);
    console.log('styles added');
})();
