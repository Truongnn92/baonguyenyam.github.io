﻿;$(document).ready(function() {
"use strict";

  $(".cc-carousel.news .owl-carousel").owlCarousel({
    items:2,
    margin:0,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:2}
      }
  });


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});


