// // set up the base pattern

function getAbout() {
    if ($(window).width() > 990 && $(".about-page").length) {
        $('#page-wrap').perfectScrollbar('destroy');
        // $(".about-page #page-wrap").wrapInner("<table cellspacing='30'><tr>");
        // $(".about-page .post").wrap("<div class='waptable'>");
        $('.about-page #page-wrap > .post').each(function() {
            $(this).wrap("<div class='waptable'></div>");
        });

        $(".about-page").mousewheel(function(event, delta) {
            this.scrollLeft -= (delta * 10);
            event.preventDefault();
        });

        // SET Drag 
        var curDown = false,
            curYPos = 0,
            curXPos = 0;
        $(window).mousemove(function(m) {
            if (curDown === true) {
                $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY));
                $(window).scrollLeft($(window).scrollLeft() + (curXPos - m.pageX));
            } else {
                $(window).scrollTop($(window).scrollTop() + (curYPos - m.pageY));
                $(window).scrollRight($(window).scrollRight() + (curXPos - m.pageX));
            }
        });

        $(window).mousedown(function(m) {
            curDown = true;
            curYPos = m.pageY;
            curXPos = m.pageX;
        });

        $(window).mouseup(function(m) {
            curDown = false;
            curYPos = m.pageY;
            curXPos = m.pageX;
        });
    } else {
        $(".about-page #page-wrap > .waptable").children().unwrap();
        $('#page-wrap').addClass('scrollbar-dynamic');
        $('.scrollbar-dynamic, .scrollbar-inner').perfectScrollbar();
    }
}

$(function() {
    getAbout();
});

$(window).resize(function() {
    getAbout();
});



// $(function() {
//     var elemscroll = $.jInvertScroll(['.scroll'], {
//         onScroll: function(percent) {
//             console.log(percent);
//         }
//     });
//     $(window).resize(function() {
//         if ($(window).width() <= 768) {
//             elemscroll.destroy();
//         } else {
//             elemscroll.reinitialize();
//         }
//     });
// });

// var pattern = Trianglify({
//     height: $(window).height(),
//     width: $(window).width(),
//     // variance: "1",
//     seed: 'mcryp',
//     x_colors: 'PRGn',
//     cell_size: 60 + Math.random() * 30
// })

// $('.bgset').html(pattern.svg());

// setInterval(function() {
//     var pattern = Trianglify({
//         height: $(window).innerHeight(),
//         width: $(window).innerWidth(),
//         // variance: "1",
//         seed: 'mcryp',
//         x_colors: 'PRGn',
//         cell_size: 60 + Math.random() * 30
//     })
//     $('.bgset2').fadeOut(500).html(pattern.svg()).fadeIn(500);
// }, 3000);