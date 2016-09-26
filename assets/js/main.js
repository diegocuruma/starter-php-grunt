
//*Swiper slider*/
jQuery(document).ready(function($) {
    //painel
    var swiper = new Swiper('.s1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        //spaceBetween:0,
        //centeredSlides: true,
        loop : true,
        autoplay:4000,
        effect: 'fade',
        autoplayDisableOnInteraction: false
    });

  // logos
  var swiper = new Swiper('.s2', {
      slidesPerView: 5,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      loop : true,
      autoplay:2000,
      spaceBetween:40,
      autoplayDisableOnInteraction: false,
      breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
});


// novo painel responsivo
    jQuery(document).ready(function($) {
      $('#owl-demo').owlCarousel({

            // apenas fade normal
            /*animateOut: 'fadeOut',
            items:1,
            nav:true,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true  */

            animateOut: 'fadeOut',
            items:1,
            nav:true,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,

      })
    });



// carousel logos
    jQuery(document).ready(function($) {
        $('#logo').owlCarousel({
        items:4,
        nav:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    });




// lady load para imagens
jQuery(document).ready(function($) {
    $(".lazy").lazyload({effect : "fadeIn"});
});




//menu do bootstrap com hover ao inves de click
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});




//**
//  menu
//**
jQuery(document).ready(function($){
    $('.menu-item > a').addClass('menu-link');

    // Menu click Scroll
    $('a.menu-link').bind('click', function(event) {
    var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 190)
        }, 450, 'linear') ;
    event.preventDefault();
    }) ;

});
