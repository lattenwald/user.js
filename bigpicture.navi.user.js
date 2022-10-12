// ==UserScript==
// @name        BigPicture stuff
// @namespace   q.alexander.bigpicture.navi
// @include     http://www.bostonglobe.com/news/bigpicture/*
// @include     https://www.bostonglobe.com/news/bigpicture/*
// @version     2.1
// @grant       none
// @require https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

(function(){
    var set_body_height = function () { jQuery('body').css('height', jQuery(window).height()); };

    jQuery('head').append('<style type="text/css">article.pcaption {opacity: 0} article.pcaption:hover {opacity: 0.9}</style>');

    jQuery('div#contain').css('height', '100%');
    jQuery('div#container').css('height', '100%');
    jQuery('div#container>section').css('height', '100%');
    jQuery('img').css('max-height', '100%');

    jQuery('div.mfp-wrap').remove();
    jQuery('div.mfp-bg').click();
    jQuery('header.bg-header').remove();
    jQuery('div#container').nextAll().remove();

    jQuery('article.pcaption').each(function(){
        jQuery(this).appendTo(jQuery(this).prev());
        jQuery(this).css('position', 'relative');
        jQuery(this).css('bottom', '100%');
        jQuery(this).css('background-color', '#000000');
    });
    jQuery('div.photo').css('height', '100%');

    jQuery(window).bind('resize', set_body_height);
    set_body_height();

    // navigation
    var imgs = jQuery('div.photo');
    var idx = -1;
    jQuery(document).keypress(function(e){
        var doit=false;
        if (e.which == 106 || e.which == 37) { //next
            idx++;
            if (idx >= imgs.length) idx = 0;
            doit = true;
        } else if (e.which == 107 || e.which == 39) { //prev
            idx--;
            if (idx < 0) idx = imgs.length;
            doit = true;
        }
        if (doit) {
            console.log('scrolling to ' + idx);
            jQuery('html, body').animate({
                scrollTop: jQuery(imgs[idx]).offset().top
            }, 500);
        }
    });
})();
