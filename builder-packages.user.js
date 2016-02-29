// ==UserScript==
// @name         Builder packet names
// @namespace    q.alexander.mailru.builder
// @version      0.3
// @description  enter something useful
// @author       Alexander Q <qalexx@gmail.com>
// @match        http://buildmail.dev.mail.ru/*
// @grant        none
// ==/UserScript==

function stuff() {
    var links = jQuery('a[href^="http://pkg.corp.mail.ru/centos/6/"]:visible').toArray();
    var hrefs = links.map(function(l){return l.href});
    var packages = hrefs.map(function(h){return h.match("([^/]+)$")[1].replace(/\.[^.]+\.[^.]+$/, "").replace(/-(?=[^-]+-[^-]+$)/, " ")});
    var str = packages.join("\n");
    console.log(str);
    jQuery("<div>" + str + "</div>").css('white-space', 'pre').dialog();
}

jQuery(document).keypress(function(e){
    if(e.keyCode == 113) {
        stuff();
    }
});
