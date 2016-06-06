$(document).ready(function() {

    // How it works
    if ($('.home-sliders').length) {
        $('.home-sliders .owl-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 0,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true
        });
    }

});