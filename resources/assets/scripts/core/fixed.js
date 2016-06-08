// var owl = $('.owl-carousel');
// owl.on('initialized.owl.carousel', function(event) {
// })


$(document).ready(function() {
    $(".info-page header, .gallery-page header").addClass('active');
    $('.scrollbar-dynamic, .scrollbar-inner').perfectScrollbar();
});


$(document).on('ps-y-reach-start', function() {
    $(".info-page header, .gallery-page header").addClass('active');
});
$(document).on('ps-scroll-down', function() {
    $(".info-page header, .gallery-page header").removeClass('active');
});