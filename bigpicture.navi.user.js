// ==UserScript==
// @name        BigPicture stuff
// @namespace   q.alexander.bigpicture.navi
// @include     http://www.bostonglobe.com/news/bigpicture/*
// @include     https://www.bostonglobe.com/news/bigpicture/*
// @version     2.1
// @grant       none
// ==/UserScript==

(function(){
    var set_body_height = function () { $('body').css('height', $(window).height()); };

    $('head').append('<style type="text/css">article.pcaption {opacity: 0} article.pcaption:hover {opacity: 0.9}</style>');

    $('div#contain').css('height', '100%');
    $('div#container').css('height', '100%');
    $('div#container>section').css('height', '100%');
    $('img').css('max-height', '100%');

    $('div.mfp-wrap').remove();
    $('div.mfp-bg').click();
    $('header.bg-header').remove();
    $('div#container').nextAll().remove();

    $('article.pcaption').each(function(){
        $(this).appendTo($(this).prev());
        $(this).css('position', 'relative');
        $(this).css('bottom', '100%');
        $(this).css('background-color', '#000000');
    });
    $('div.photo').css('height', '100%');

    $(window).bind('resize', set_body_height);
    set_body_height();

    // navigation
    var imgs = $('div.photo');
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
                scrollTop: $(imgs[idx]).offset().top
            }, 500);
        }
    });
})();
