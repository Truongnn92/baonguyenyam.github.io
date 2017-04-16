/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://github.com/baonguyenyam
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/"use strict";

function VienSoiResponsive() {
  $("[bg-img]").each(function() {
    var i = $(this).attr("bg-img");
    $(this).css({
      "background-image": "url(" + i + ")",
      "background-position": "center center",
      "background-size": "cover"
    })
  }), $("[bg-img-responsive]").each(function() {
    var i = $(this).attr("bg-img-responsive"),
      o = $(this).attr("bg-img-responsive-sm"),
      t = $(this).attr("bg-img-responsive-xs");
    $(window).width() >= 1e3 ? $(this).css({
      "background-image": "url(" + i + ")",
      "background-position": "center center",
      "background-size": "cover"
    }) : $(window).width() < 1e3 && $(window).width() > 600 ? $(this).css({
      "background-image": "url(" + o + ")",
      "background-position": "center center",
      "background-size": "cover"
    }) : $(this).css({
      "background-image": "url(" + t + ")",
      "background-position": "center center",
      "background-size": "cover"
    })
  }), $("[img-src-responsive]").each(function() {
    var i = $(this).attr("img-src-responsive"),
      o = $(this).attr("img-src-responsive-sm"),
      t = $(this).attr("img-src-responsive-xs");
    $(window).width() >= 1e3 ? $(this).attr("src", "" + i) : $(window).width() < 1e3 && $(window).width() > 600 ? $(this).attr("src", "" + o) : $(this).attr("src", "" + t)
  })
}
if ($("#back-to-top").length) {
  var scrollTrigger = 100,
    backToTop = function() {
      var i = $(window).scrollTop();
      i > scrollTrigger ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
    };
  backToTop(), $(window).on("scroll", function() {
    backToTop()
  }), $("#back-to-top").on("click", function(i) {
    i.preventDefault(), $("html,body").animate({
      scrollTop: 0
    }, 700)
  })
}
$(function() {
  VienSoiResponsive()
}), $(window).resize(function() {
  VienSoiResponsive()
}), $("a").click(function() {
  return $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top
  }, 500), !1
});