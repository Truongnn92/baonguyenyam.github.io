// // set up the base pattern
var pattern = Trianglify({
    height: $(window).height(),
    width: $(window).width(),
    // variance: "1",
    seed: 'mcryp',
    x_colors: 'PRGn',
    cell_size: 60 + Math.random() * 30
})

$('.bgset').html(pattern.svg());

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