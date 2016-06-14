(function($) {

    $(document).ready(function() {
        $('.toggle-nav').on('click', function() {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });

        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');
        }

        function changeLetters(btn) {
            var m = $('.toggle-nav span.m');
            var e = $('.toggle-nav span.e');
            var n = $('.toggle-nav span.n');
            var u = $('.toggle-nav span.u');

            e.toggleClass('btn-close');

            if (btn.hasClass('open')) {
                m.text("E");
                n.text("I");
                u.text("T");
            } else {
                m.text("M");
                n.text("N");
                u.text("U");
            }
        }
    });


if ($(window).width() < 767 && $(".nav-pane").length) {
    
    $('.nav-pane nav').addClass('scrollbar-dynamic');
    $('.scrollbar-dynamic').perfectScrollbar();

};


})(jQuery);

$(window).resize(function() {


if ($(window).width() < 767 && $(".nav-pane").length) {
    
    $('.nav-pane nav').addClass('scrollbar-dynamic');
    $('.scrollbar-dynamic').perfectScrollbar();

} else {
    $('.nav-pane nav').perfectScrollbar('destroy');
}


});




// $(document).ready(function() {

//     $('body').on('click', function() {
//         $('.toggle-nav, .nav-pane').removeClass('open');
//     });

// });