(function($) {
    'use strict';


    var $window = $(window);

    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 800);
    });

    $window.on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

})(jQuery);