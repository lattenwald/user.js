// ==UserScript==
// @name         Reelmagic downloader command generator
// @namespace    q.alexander.reelmagic.dl
// @version      0.2
// @author       Alexander Q <qalexx@gmail.com>
// @match        https://reelmagicmagazine.com/*
// @grant        none
// ==/UserScript==

function stuff() {
    var playlist;
    if (jQuery('script[src^="https://fast.wistia.com/embed/medias"]').length) {
        console.log("playlist from script src");
        playlist = jQuery('script[src^="https://fast.wistia.com/embed/medias"]').attr('src').match(/medias\/(\w+)/)[1]
    } else if (jQuery('.wistia_embed').length) {
        console.log("playlist from .wistia_embed");
        playlist = jQuery('.wistia_embed').attr('id').replace(/^wistia_/, '')
    } else if  (jQuery('iframe').length) {
        console.log("playlist from iframt src");
        playlist = jQuery('iframe').attr('src').match(/playlists\/(\w+)/)[1]
    }

    var name;
    if (jQuery('.category-desc>h1:first').length)
        name = jQuery('.category-desc>h1:first').text().trim()
    else if (jQuery('[itemprop=name]').length)
        name = jQuery('[itemprop=name]').text().trim()
    else if (jQuery('.blog>h1:first').length)
        name = jQuery('.blog>h1:first').text().trim();

    var str = "reelmagic_dl.ex -t '" + name + "' -p " + playlist;
    console.log(str);
    alert(str);
}

jQuery(document).keypress(function(e){
    if(e.keyCode == 113) {
        stuff();
    }
});
