;$(function () {
  $('[data-toggle="popover"]').popover({
    trigger: 'hover'
  });
});

$(window).scroll( function(){

  if ($('.number').length){

          var bottom_of_object = $('.number').offset().top + $('.number').outerHeight();  //options 1
          var top_of_object = $('.number').offset().top; //options 2
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > top_of_object ){
            $('.num').each(function() {
              var genumber = $(this).attr('data-num');
              var getsesnumber = $(this).attr('data-speed');
                $(this).animateNumber({ number: genumber },8000);  
                $(this).removeClass('num');           
            });

          }

  }

});

$(document).ready(function() {
"use strict";

// Parallax
// $('.pax').parallax("50%", 0.1);
  
//Cutting text////////////////////////////////////////////////
  // $('.fixedJustify').textTailor({
  //   fit: false,
  //   justify: true
  // });


//Gallery////////////////////////////////////////////////
  $(".lightGallery").lightGallery();
  $(".lightGalleryNothumb").lightGallery({
    thumbnail:false
  });
  $('#iframe-popup').lightGallery({
      html:true,
      thumbnail:false,
      selector:'#iframe-popup',
      videoMaxWidth:'100%'
  });
  $('#map-popup').lightGallery({
      html:true,
      thumbnail:false,
      selector:'#map-popup',
      videoMaxWidth:'80%'
  });

//Form Wizard////////////////////////////////////////////////
  $(".form-wizard").steps({
      headerTag: "h3",
      bodyTag: "section",
      transitionEffect: "slideLeft",
      autoFocus: true
  });




//Accordion Vertical//////////////////////////////////////////////////////////////
  $(".zAccordion").zAccordion({
    startingSlide: 0,
    auto: false,
    tabWidth: "15%",
    width: "100%",
    height: 350,
    //slideClass: "frame",
    //trigger: "mouseover"
  });
      

  var revapiadvanced;
  revapiadvanced = jQuery('.srrslider.advanced .tp-banner').revolution({
    delay:4000,
    startwidth:1170,
    startheight:500,

    hideThumbs:200,
    thumbWidth:150,
    thumbHeight:50,
    thumbAmount:3,

    navigationType:"thumb",
    navigationArrows:"none",
    navigationStyle:"round",

    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:20,

    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:20,

    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:20,

    touchenabled:"on",
    onHoverStop:"on"
  });









});

/*==========================================================================================================================================================================================
=WINDOWS LOAD===============================================================================================================================================================================
===========================================================================================================================================================================================*/
$(window).load(function() {
"use strict";



});

/*==========================================================================================================================================================================================
=WINDOWS RESIZE===============================================================================================================================================================================
===========================================================================================================================================================================================*/
$(window).resize(function() {
"use strict";

});

/*==========================================================================================================================================================================================
=FUNCTIONS==================================================================================================================================================================================
===========================================================================================================================================================================================*/
$(function(){
  $('.scroll-pane').jScrollPane();
  $('html').scrollUp({
    scrollName: 'scrollUp-text', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
  

});



;$(document).ready(function() {
"use strict";

//Search////////////////////////////////////////////////
  $("#dropdownSearchBtn").click(function(){
    $(this).hide();
    $(".search").fadeToggle(200, function(){$("#searchinput").focus();});
    return false;      
  });
  $("#searchclose").click(function(){
    $(".search").fadeToggle(200, function(){$("#dropdownSearchBtn").show();});
    return false;      
  });

  //Source jquery scrollto cua bootstrap 
  $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });

//Sticky Header//////////////////////////////////////////////////////////////
  $('#header.scroll2fix').scrollToFixed();
  $('.titlepage').scrollToFixed({ marginTop: 50 });

//Menu Hover//////////////////////////////////////////////////////////////
  $('.dropdown').hover(function () {
      $(this).toggleClass("open");
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



;$(document).ready(function() {
"use strict";

  $(".cc-carousel.brands .owl-carousel").owlCarousel({
    items:6,
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
        0:{items:2},
        600:{items:4},
        1000:{items:6}
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



;$(document).ready(function() {
"use strict";

//Accordion Rotate Arrow//////////////////////////////////////////////////////////////
  $(".accordion-rotate .panel-group .panel-title a").click(function() {
  	$(this).parents('.panel-group').find('i.fa-rotate-90').toggleClass('fa-rotate-90');
    $(this).children('i').toggleClass('fa-rotate-90');
  });

//Accordion Change Arrow//////////////////////////////////////////////////////////////
	$('.accordion-change .collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-plus-square").removeClass("fa-plus-square").addClass("fa-minus-square");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-minus-square").removeClass("fa-minus-square").addClass("fa-plus-square");
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



;$(document).ready(function() {
"use strict";

  $(".cc-carousel.blog .owl-carousel").owlCarousel({
    items:3,
    margin:20,
    loop:true,
    nav:true,
    lazyLoad: true,
    navRewind:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1,dots:false},
        600:{items:2},
        1000:{items:3}
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



;$(document).ready(function() {
"use strict";

  $(".cc-person-slider .owl-carousel").owlCarousel({
    items:4,
    margin:25,
    loop:true,
    center:false,
    startPosition:1, //Bat dau o slider
    nav:true,
    navRewind:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:false,
    responsive:{
        0:{items:1},
        600:{items:2},
        1000:{items:4}
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



;$(document).ready(function() {
"use strict";

});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

  // mixItUp
  $('.mixItUp').mixItUp({
    selectors: {
      target: '.newmix'
    }
  });

});



;$(document).ready(function() {
"use strict";

  //Skill bar
  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 6000);
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



;$(document).ready(function() {
"use strict";



  var revapifullwidth;
  revapifullwidth = jQuery('.cc-rv-slider-basic.fullwidth .tp-banner').revolution({
    delay:9000,
    startwidth:1900,
    startheight:766,
    hideThumbs:10,
    fullWidth:"on",
    forceFullWidth:"on"
  });
  revapifullwidth.bind("revolution.slide.onchange",function (e,data) {
      var demotext = data.slideIndex;
      if(demotext==1){
          //
      } else{
          //
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



;$(document).ready(function() {
"use strict";


  var revapifullvideo;
  revapifullvideo = jQuery('.cc-rv-slider-basic.fullscreen .tp-banner').revolution({
    startwidth: 1170,
    startheight: 500,
    onHoverStop:"off",
    fullScreen: "on",
    fullWidth:"off",
    navigationType:"none",
    navigationArrows:"none",
    navigationStyle:"none",
    minFullScreenHeight: "320",
    videoJsPath: "js/plugins/videojs/",
    //videoJsPath: "/js/plugins/videojs/",
    fullScreenOffsetContainer: "header"
  });
  revapifullvideo.bind("revolution.slide.onchange",function (e,data) {
      var demotext = data.slideIndex;
      if(demotext==1){
          //
      } else{
          //
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



;$(document).ready(function() {
"use strict";

  $('.cc-video-bg').videoBG({
    //position:"fixed",
    zIndex: 0,
    mp4: 'videos/tunnel_animation.mp4',
    ogv: 'videos/tunnel_animation.ogv',
    webm: 'videos/tunnel_animation.webm',
    poster: 'videos/tunnel_animation.jpg',
    //opacity:1,
    //fullscreen:false,
    scale: true
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



;$(document).ready(function() {
"use strict";

  $(".cc-tagline-slider .owl-carousel").owlCarousel({
    items:1,
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
        1000:{items:1, dots:true}
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



;$(document).ready(function() {
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



;$(document).ready(function() {
"use strict";

  $(".cc-carousel.content .owl-carousel").owlCarousel({
    items:1,
    margin:0,
    loop:true,
    animateOut: 'fadeOut',
    smartSpeed:200,
    nav:false,
    lazyLoad: true,
    navRewind:true,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
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



;$(document).ready(function() {
"use strict";

  $(".cc-carousel.merge .owl-carousel").owlCarousel({
    items:5,
    margin:0,
    loop:true,
    nav:false,
    lazyLoad: true,
    navRewind:true,
    autoplay:false,
    autoplayTimeout:3000,
    merge:true,
    autoplayHoverPause:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    slideBy:1,
    dots:true,
    responsive:{
        0:{items:1,mergeFit:false},
        600:{items:1},
        1000:{items:5}
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



;$(document).ready(function() {
"use strict";

  $(".cc-carousel.thumbnails .owl-carousel").owlCarousel({
    items:1,
    margin:0,
    loop:true,
    nav:false,
    animateOut: 'fadeOut',
    smartSpeed:200,
    center: true,
    callbacks: true,
    URLhashListener:true,
    startPosition: 'URLHash',
    lazyLoad: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{items:1,dots:true},
        600:{items:1},
        1000:{items:1}
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



;$(document).ready(function() {
"use strict";

});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

	//Tab Responsive
	fakewaffle.responsiveTabs(['xs', 'sm']);

});



;$(document).ready(function() {
"use strict";

});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){


	// TinyNav.js 1
	$('.tinynavmain').tinyNav({
		active: 'selected',
		indent: '→',
		label: 'Menu',
		// header: 'Navigation' // Writing any title with this option triggers the header
	});


});



;$(document).ready(function() {
"use strict";

//Toggle////////////////////////////////////////////////
  $(".cc-m-toggle .info").click(function(){
    $(this).toggleClass('open');   
  });

var latlng = new google.maps.LatLng(40.801485408197856, -73.96745953467104);
  var options = {  
    zoom: 12, // This number can be set to define the initial zoom level of the map
    center: latlng,
    scrollwheel: false,
    // styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}],
    styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}],
    mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
  };  
  // Calling the constructor, thereby initializing the map  
  var map = new google.maps.Map(document.getElementById('gmap_canvas'), options);  
  
  // Define Marker properties
  var image = new google.maps.MarkerImage('images/map-marker.png');
  
  // Add Marker
  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(40.801485408197856, -73.96745953467104), 
    map: map,   
    icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  }); 
  
  google.maps.event.addListener(marker1, 'click', function() { infowindow1.open(map, marker1); });
  var infowindow1 = new google.maps.InfoWindow({ content: '<div class="infowindow"><h4>Winter</h4>1571 Hidden Terrace,<br />New York, NY, 13247,<br />(917) 600-4570<br /><br /></div>' }); 


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});



;$(document).ready(function() {
"use strict";

/////////////////////////////////////////////////////////////////////////
  //Gmap Toggle
  $('.cc-m-multi .collapse').on('show.bs.collapse', function(e){
    var newfa = $(this).find('iframe');
    var ABCVa = $(this).find('iframe').attr('src');
       setTimeout(function(){
          newfa.attr('src',ABCVa);
          newfa.height('400px');
          newfa.width('100%');
     }, 100);
  });


//Gmap Modal
  // $('.modal').on('show.bs.modal', function(e){
  //   var newf = $(this).find('iframe');
  //   var ABCV = $(this).find('iframe').attr('src');
  //    setTimeout(function(){
  //       newf.attr('src',ABCV);
  //       newf.height('400px');
  //       newf.width('100%');
  //  }, 100);
  // });


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

});



;$(document).ready(function() {
"use strict";

/////////////////////////////////////////////////////////////////////////


});


$(window).load(function() {
"use strict";

});


$(window).resize(function() {
"use strict";

});


$(function(){

  $('#gmapload').gmap3({
    marker:{
      address: "Haltern am See, Weseler Str. 151"
    },
    infowindow:{
      options:{
        content: "Hello World !"
      }
    },
    map:{
      options:{
        zoom: 14
      }
    }
  });


});


