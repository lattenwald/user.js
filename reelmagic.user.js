// ==UserScript==
// @name         Reelmagic downloader command generator
// @namespace    q.alexander.reelmagic.dl
// @version      0.1
// @author       Alexander Q <qalexx@gmail.com>
// @match        https://reelmagicmagazine.com/*
// @grant        none
// ==/UserScript==

function stuff() {
    var playlist = jQuery('.wistia_embed').attr('id').replace(/^wistia_/, '');
    var name = jQuery('[itemprop=name]').text().trim();
    var str = "reelmagic_dl.ex -t '" + name + "' -p " + playlist;
    console.log(str);
    alert(str);
}

jQuery(document).keypress(function(e){
    if(e.keyCode == 113) {
        stuff();
    }
});
