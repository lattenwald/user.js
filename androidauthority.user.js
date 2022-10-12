// ==UserScript==
// @name         Apps list navigation for AndroidAuthority
// @namespace    q.alexander.androidpolice.navigation
// @version      0.1
// @description  AndroidAuthority stuff
// @author       You
// @match        http://www.androidauthority.com/*
// @match        https://www.androidauthority.com/*
// @grant        none
// ==/UserScript==

//window.addEventListener('load', function() {
(function(){
    var items = document.getElementsByTagName('h2');
    var idx = -1;
    var doit;
    document.onkeydown = function(event) {
        var key = event.keyCode;

        if (key == 74) { //next
            idx++;
            if (idx >= items.length) {
                idx = 0;
            }
            doit = true;
        } else if (key == 75) { //prev
            idx--;
            if (idx < 0) {
                idx = items.length;
            }
            doit = true;
        } else {
            console.log("key: " + key);
        }
        if (doit) {
            console.log('scrolling to ' + idx);
            items[idx].scrollIntoView({block: 'end', bevahior: 'smooth'});
        }
    }
})();
//}, false);
