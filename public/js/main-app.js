'use strict';

// READY ////////////////////////////////////////////
$(document).ready(function () {

    // Welcome title App
    console.log('%cBN', 'font-size:100px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9 ,0 3px 0 #bbb ,0 4px 0 #b9b9b9 ,0 5px 0 #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c BN APP ' + '%c - Bao Nguyen App ', 'border-radius: 2px; padding: 3px; background: #795d9c; color: #FFF', 'color: #795d9c');
});

// LOAD ////////////////////////////////////////////
$(window).load(function () {});

// SCROLL ////////////////////////////////////////////
$(window).scroll(function () {});

// RESIZE ////////////////////////////////////////////
$(window).resize(function () {});

// ONTIME ////////////////////////////////////////////
$(function () {});
$(document).ready(function () {

    // How it works
    if ($('.home-sliders').length) {
        $('.home-sliders .owl-carousel').owlCarousel({
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
$(document).ready(function () {

    // How it works
    if ($('.home-howitworks').length) {
        $('.home-howitworks .owl-carousel').owlCarousel({
            // animateOut: 'fadeOut',
            // animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            // autoHeight:true,
            // smartSpeed:1000
            callbacks: true,
            responsive: {
                992: {
                    // mouseDrag: false,
                    // touchDrag: false,
                    dots: true,
                    nav: true
                }
            }
        });
        $(".home-howitworks .owl-carousel").on('changed.owl.carousel', function (event) {
            if (event.page.index < 0) {
                var tmpgetValOWL = event.item.index - 1 - event.relatedTarget._clones.length / 2;
                if (tmpgetValOWL == 2) {
                    var getValOWL = tmpgetValOWL - 1;
                } else if (tmpgetValOWL == -2) {
                    var getValOWL = tmpgetValOWL + 5;
                } else {
                    var getValOWL = tmpgetValOWL + 2;
                }
            } else {
                var getValOWL = event.page.index + 1;
            }
            $('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + getValOWL + ']').addClass('active');
        });

        $('a.goowl').on('click', function () {
            var inputValOWL = parseInt($(this).attr('slider')) - 1;
            $(".home-howitworks .owl-carousel").trigger('to.owl.carousel', [inputValOWL, 500]);
            $(this).parents('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + (inputValOWL + 1) + ']').addClass('active');
        });

        // $(".owl-carousel").on('initialized.owl.carousel', function(event) {
        //     $('.boxright').find('.goowl').removeClass('active');
        //     $('.boxright').find('.goowl[slider=1]').addClass('active');
        // });
    }
});

$(document).ready(function () {

    if ($('.home-testimonials').length) {
        $('.home-testimonials .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                992: {
                    dots: true,
                    nav: false
                }
            }
        });
    }
});

$(function () {

    $('[bg-img]').each(function () {
        var bgimg = $(this).attr('bg-img');
        $(this).css({
            "background-image": "url(" + bgimg + ")",
            "background-position": "center center",
            "background-size": "cover"
        });
    });

    $('[bg-img-responsive]').each(function () {
        var bgimg = $(this).attr('bg-img-responsive');
        var bgimgsm = $(this).attr('bg-img-responsive-sm');
        if ($(window).width() < 992) {
            $(this).css({
                "background-image": "url(" + bgimgsm + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else {
            $(this).css({
                "background-image": "url(" + bgimg + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        }
    });

    $('[img-src-responsive]').each(function () {
        var bgimg = $(this).attr('img-src-responsive');
        var bgimgsm = $(this).attr('img-src-responsive-sm');
        if ($(window).width() < 992) {
            $(this).attr({
                "src": "" + bgimgsm + ""
            });
        } else {
            $(this).css({
                "src": "" + bgimg + ""
            });
        }
    });
});

$(document).ready(function () {

    if ($(this).scrollTop() > 56) {
        $(".get4x-home header").removeClass('active');
    } else {
        $(".get4x-home header").addClass('active');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 56) {
        $(".get4x-home header").removeClass('active');
    } else {
        $(".get4x-home header").addClass('active');
    }
});
$(document).ready(function () {

    if ($('.devmode').length) {
        $('.devmode-show a').on('click', function (event) {
            $(this).parent().toggleClass('active');
            $('.devmode').toggleClass('active');
        });
        $('.hidegrid').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidegrid');
        });
        $('.hidebg').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidebg');
        });
        $('.closedev').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('active');
            $('.devmode-show').toggleClass('active');
        });
    }
});
$(document).ready(function () {

    var favicon = new Favico({
        animation: 'slide'
    });
    favicon.badge(9);
});
$(document).ready(function () {
    var allAreas = $(".home-maps .areas").find(".item");
    toggleAreas(null, allAreas.first());
});

function toggleAreas(from, to) {
    function next() {
        var nextTo;
        if (to.is(":last-child")) {
            nextTo = to.closest(".areas").find(".item").first();
        } else {
            nextTo = to.next();
        }
        to.fadeIn(500, function () {
            setTimeout(function () {
                toggleAreas(to, nextTo);
            }, 2000);
        });
    }

    if (from) {
        from.fadeOut(500, next);
    } else {
        next();
    }
}
//# sourceMappingURL=main-app.js.map
