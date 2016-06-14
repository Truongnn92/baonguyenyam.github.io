// var owl = $('.owl-carousel');
// owl.on('initialized.owl.carousel', function(event) {
// })


$(document).ready(function() {
    $(".info-page header, .gallery-page header, .coding-page header, .poetry-page header").addClass('active');
    $('.scrollbar-dynamic, .scrollbar-inner').perfectScrollbar();
});


$('.scrollbar-dynamic.wrapper').on('ps-y-reach-start', function() {
    $(".info-page header, .gallery-page header, .coding-page header, .poetry-page header").addClass('active');
});
$('.scrollbar-dynamic.wrapper').on('ps-scroll-down', function() {
    $(".info-page header, .gallery-page header, .coding-page header, .poetry-page header").removeClass('active');
});

$(function() {

    $('[data-typing]').each(function() {
        var dttyping = $(this).attr('data-typing');
        $(this).typed({
            strings: [dttyping],
            typeSpeed: 0
        });
    });

});
