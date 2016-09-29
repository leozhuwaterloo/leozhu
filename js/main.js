/**************************
Slow scroll
***********************/


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


/************************
Item show while scrolled to the position
***************************/

var x= 0;

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
	
	
	$('.skillbar').each(function(){
		var center_of_object = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
		if( bottom_of_window > center_of_object ){
			$(this).find('.skillbar-bar').animate({
				width:$(this).attr('data-percent')
			},6000);
		}
	});
	
	
	$('.hero').each(function(){
		var center_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop();
		
		if( top_of_window > center_of_object ){
				 $('.header').addClass('header-green');
				 $('#logo').addClass('hide-logo');
		}else{
			
			 $('.header').removeClass('header-green');
			 $('#logo').removeClass('hide-logo');
			  $('.header').removeClass('hide-header');
		}
		
		//down
		if(x<top_of_window){
			 $('.header').addClass('hide-header');
		}
		
		//up
		if(x>top_of_window){
			 $('.header').removeClass('hide-header');
		}
	});
	x = $(window).scrollTop();
	
});



/**********************************
gallery add hover while removing show animation
**********************************/
$(".pop-in").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	$(this).removeClass("show-pop");
	$(this).removeClass("pop-in");
	$(this).bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		$(this).removeClass("pop-hover")  
	})

	$(this).hover(function(){
		$(this).addClass("pop-hover");        
	})

})


/*****************************
Back to top button
*****************************/

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

/************************************
Force entire animation
*************************************/



/*****************************
Move background with mouse position
********************************/

/*
$(document).ready(function() {
var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$('').mousemove(function(e){
          var pageX = e.pageX - ($(window).width() / 2);
          var pageY = e.pageY - ($(window).height() / 2);
          var newvalueX = width * pageX * -1;
          var newvalueY = height * pageY * -1;
          $('body').css("background-position", newvalueX+"px     "+newvalueY+"px");
});
});
*/




