$("#scrollToPortfolio").click(function() {
    $('html, body').animate({
        scrollTop: ($("#portfolio").offset().top)+($("#portfolio").height()/2)
    }, 'slow');
});


$("#scrollToAbout").click(function() {
    $('html, body').animate({
        scrollTop: ($("#about").offset().top)+($("#about").height()/2)
    }, 'slow');
});


$("#scrollToContact").click(function() {
    $('html, body').animate({
        scrollTop: ($("#contact").offset().top)+($("#contact").height()/2)
    }, 'slow');
});



$(window).scroll( function(){

    /* Check the location of each desired element */
    $('.fadeinup').each( function(i){

        var center_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > center_of_object ){
            $(this).addClass('startFade');
        }
    });
	
	/* Check the location of each desired element */
    $('.pop-in').each( function(i){

        var center_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > center_of_object ){
            $(this).addClass('show-pop');
        }
    });
});

$(".pop-in").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	$(this).removeClass("show-pop");
	$(this).removeClass("pop-in");
	$(this).addClass("pop-hover"); 
})

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
        }, 'slow');
    });
}

