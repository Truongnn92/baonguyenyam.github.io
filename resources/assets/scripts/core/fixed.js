$(document).ready(function() {

    if ($(this).scrollTop() > 56) {
        $(".info-page header").removeClass('active');
    } else {
        $(".info-page header").addClass('active');
    }

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 56) {
        $(".info-page header").removeClass('active');
    } else {
        $(".info-page header").addClass('active');
    }
});