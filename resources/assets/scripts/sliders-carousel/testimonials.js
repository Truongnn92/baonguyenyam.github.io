$(document).ready(function() {

    if($('.home-testimonials').length){
        $('.home-testimonials .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>','<i class="mdi mdi-chevron-right"></i>'],
            nav:true,
            dots: false,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            callbacks: true,
            responsive : {
                992 : {
                    dots: true,
                    nav:false
                }
            }
        });
    }
});


