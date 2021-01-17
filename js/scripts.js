jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------
    if (window.matchMedia("screen").matches) {
        $('.left-col-block, .right-col-block').theiaStickySidebar();
    }
}); // JQuery end