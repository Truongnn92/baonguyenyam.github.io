// // set up the base pattern


$(function(){
	$(".about-page #page-wrap").wrapInner("<table cellspacing='30'><tr>");
	$(".about-page .post").wrap("<td></td>");
	$(".about-page").mousewheel(function(event, delta) {
		this.scrollLeft -= (delta * 30);
		event.preventDefault();
	});
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
