$(document).ready(function() {
    $('.skillbar').each(function() {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });
});

if ($('#canv').length) {
    var c = document.getElementById('canv');
    var $hjp = c.getContext('2d');

    var w = c.width = window.innerWidth;
    var h = c.height = window.innerHeight;

    // var txt = function() {
    //   var _t = "WIND".split("").join(String.fromCharCode(0x2004));
    //   $hjp.font = "4em Poiret One";
    //   $hjp.fillStyle = 'rgba(255, 255, 255, .8)';
    //   $hjp.fillText(_t, (c.width - $hjp.measureText(_t).width) * 0.5, c.height * 0.5);
    //   return _t;
    // }

    var draw = function(a, b, t) {
        $hjp.lineWidth = 0.8;
        $hjp.fillStyle = 'rgba(255, 255, 255, 1)';
        $hjp.fillRect(0, 0, w, h);
        for (var i = -60; i < 60; i += 1) {
            $hjp.strokeStyle = 'rgba(0, 0, 0, .025)';
            $hjp.beginPath();
            $hjp.moveTo(0, h / 2);
            for (var j = 0; j < w; j += 10) {
                $hjp.lineTo(10 * Math.sin(i / 10) +
                    j + 0.008 * j * j,
                    Math.floor(h / 2 + j / 2 *
                        Math.sin(j / 50 - t / 50 - i / 118) +
                        (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
            };
            $hjp.stroke();
        }
    }
    var t = 0;

    window.addEventListener('resize', function() {
        c.width = w = window.innerWidth;
        c.height = h = window.innerHeight;
        $hjp.fillStyle = 'rgba(0, 0, 0, .025)';
    }, false);

    var run = function() {
        window.requestAnimationFrame(run);
        t += 5;
        draw(33, 52 * Math.sin(t / 7200), t);
        // txt();
    };

    run();

};