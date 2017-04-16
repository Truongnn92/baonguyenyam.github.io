/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/'use strict';

if ($('#back-to-top').length) {
    var scrollTrigger = 100,
    backToTop = function backToTop() {
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
function VienSoiResponsive() {

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
        var bgimgxs = $(this).attr('bg-img-responsive-xs');
        if ($(window).width() >= 1000) {
            $(this).css({
                "background-image": "url(" + bgimg + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else if ($(window).width() < 1000 && $(window).width() > 600) {
            $(this).css({
                "background-image": "url(" + bgimgsm + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else {
            $(this).css({
                "background-image": "url(" + bgimgxs + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        }
    });

    $('[img-src-responsive]').each(function () {
        var bgimg2 = $(this).attr('img-src-responsive');
        var bgimg2sm = $(this).attr('img-src-responsive-sm');
        var bgimg2xs = $(this).attr('img-src-responsive-xs');
        if ($(window).width() >= 1000) {
            $(this).attr("src", "" + bgimg2 + "");
        } else if ($(window).width() < 1000 && $(window).width() > 600) {
            $(this).attr("src", "" + bgimg2sm + "");
        } else {
            $(this).attr("src", "" + bgimg2xs + "");
        }
    });
};

$(function () {
    VienSoiResponsive();
});

$(window).resize(function () {
    VienSoiResponsive();
});




$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if ($(window).width() < 1000) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 47
                    }, 500);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                }
                return false;
            }
        }
    });
});
