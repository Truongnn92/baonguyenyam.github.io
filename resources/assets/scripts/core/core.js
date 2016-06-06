$(function() {
    Pace.on("done", function() {
        $("body").fadeIn(1000);
    });
});


$(function() {

    $('[bg-img]').each(function() {
        var bgimg = $(this).attr('bg-img');
        $(this).css({
            "background-image": "url(" + bgimg + ")",
            "background-position": "center center",
            "background-size": "cover"
        });
    });

    $('[bg-img-responsive]').each(function() {
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

    $('[img-src-responsive]').each(function() {
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