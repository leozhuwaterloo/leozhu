$("#scrollToPortfolio").click(function() {
    $('html, body').animate({
        scrollTop: ($("#portfolio").offset().top)+($("#portfolio").height()/2)
    }, 'quick');
});


$("#scrollToAbout").click(function() {
    $('html, body').animate({
        scrollTop: ($("#about").offset().top)+($("#about").height()/2)
    }, 'quick');
});


$("#scrollToContact").click(function() {
    $('html, body').animate({
        scrollTop: ($("#contact").offset().top)+($("#contact").height()/2)
    }, 'quick');
});



$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.fadeinup').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){
            $(this).addClass('startFade');
        }
    }); 

});


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

