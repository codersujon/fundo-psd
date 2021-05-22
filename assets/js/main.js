(function($){
    "use strict";

    //Data--Background
    $('[data-background]').each(function(){
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });
    
    //Testimonial Slider
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-thumb'
    });
    $('.test-thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true
    });

    //MeanMenu Mobile-menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

})(jQuery)
