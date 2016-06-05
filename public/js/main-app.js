'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// READY ////////////////////////////////////////////
$(document).ready(function () {

    // Welcome title App
    console.log('%cBaoNguyen', 'font-size:30px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9 ,0 3px 0 #bbb ,0 4px 0 #b9b9b9 ,0 5px 0 #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c BN APP ' + '%c - Bao Nguyen App ', 'border-radius: 2px; padding: 3px; background: #795d9c; color: #FFF', 'color: #795d9c');
});

// LOAD ////////////////////////////////////////////
$(window).load(function () {});

// SCROLL ////////////////////////////////////////////
$(window).scroll(function () {});

// RESIZE ////////////////////////////////////////////
$(window).resize(function () {});

// ONTIME ////////////////////////////////////////////
$(function () {});
// // set up the base pattern
var pattern = Trianglify({
    height: $(window).height(),
    width: $(window).width(),
    // variance: "1",
    seed: 'mcryp',
    x_colors: 'PRGn',
    cell_size: 60 + Math.random() * 30
});

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
$(function () {

    $('[bg-img]').each(function () {
        var bgimg = $(this).attr('bg-img');
        $(this).css({
            "background-image": "url(" + bgimg + ")",
            "background-position": "center center",
            "background-size": "cover"
        });
    });

    $('[bg-img-responsive]').each(function () {
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

    $('[img-src-responsive]').each(function () {
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

$(document).ready(function () {

    if ($(this).scrollTop() > 56) {
        $(".get4x-home header").removeClass('active');
    } else {
        $(".get4x-home header").addClass('active');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 56) {
        $(".get4x-home header").removeClass('active');
    } else {
        $(".get4x-home header").addClass('active');
    }
});
$(document).ready(function () {

    // How it works
    if ($('.home-sliders').length) {
        $('.home-sliders .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 0,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true
        });
    }
});
$(document).ready(function () {

    // How it works
    if ($('.home-howitworks').length) {
        $('.home-howitworks .owl-carousel').owlCarousel({
            // animateOut: 'fadeOut',
            // animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            // autoHeight:true,
            // smartSpeed:1000
            callbacks: true,
            responsive: {
                992: {
                    // mouseDrag: false,
                    // touchDrag: false,
                    dots: true,
                    nav: true
                }
            }
        });
        $(".home-howitworks .owl-carousel").on('changed.owl.carousel', function (event) {
            if (event.page.index < 0) {
                var tmpgetValOWL = event.item.index - 1 - event.relatedTarget._clones.length / 2;
                if (tmpgetValOWL == 2) {
                    var getValOWL = tmpgetValOWL - 1;
                } else if (tmpgetValOWL == -2) {
                    var getValOWL = tmpgetValOWL + 5;
                } else {
                    var getValOWL = tmpgetValOWL + 2;
                }
            } else {
                var getValOWL = event.page.index + 1;
            }
            $('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + getValOWL + ']').addClass('active');
        });

        $('a.goowl').on('click', function () {
            var inputValOWL = parseInt($(this).attr('slider')) - 1;
            $(".home-howitworks .owl-carousel").trigger('to.owl.carousel', [inputValOWL, 500]);
            $(this).parents('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + (inputValOWL + 1) + ']').addClass('active');
        });

        // $(".owl-carousel").on('initialized.owl.carousel', function(event) {
        //     $('.boxright').find('.goowl').removeClass('active');
        //     $('.boxright').find('.goowl[slider=1]').addClass('active');
        // });
    }
});

$(document).ready(function () {

    if ($('.home-testimonials').length) {
        $('.home-testimonials .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                992: {
                    dots: true,
                    nav: false
                }
            }
        });
    }
});

$(document).ready(function () {

    if ($('.devmode').length) {
        $('.devmode-show a').on('click', function (event) {
            $(this).parent().toggleClass('active');
            $('.devmode').toggleClass('active');
        });
        $('.hidegrid').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidegrid');
        });
        $('.hidebg').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidebg');
        });
        $('.closedev').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('active');
            $('.devmode-show').toggleClass('active');
        });
    }
});
$(document).ready(function () {

    var favicon = new Favico({
        animation: 'slide'
    });
    favicon.badge(9);
});
$(document).ready(function () {
    var allAreas = $(".areas").find(".item");
    toggleAreas(null, allAreas.first());
});

function toggleAreas(from, to) {
    function next() {
        var nextTo;
        if (to.is(":last-child")) {
            nextTo = to.closest(".areas").find(".item").first();
        } else {
            nextTo = to.next();
        }
        to.fadeIn(500, function () {
            setTimeout(function () {
                toggleAreas(to, nextTo);
            }, 2000);
        });
    }

    if (from) {
        from.fadeOut(500, next);
    } else {
        next();
    }
}
(function ($) {

    $(document).ready(function () {
        $('.toggle-nav').on('click', function () {
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
})(jQuery);
// particlesJS.load('particles-js', './particles.json', function() {
//     // console.log('callback - particles.js config loaded');
// });

// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function (a) {
    var b = "object" == (typeof self === 'undefined' ? 'undefined' : _typeof(self)) && self.self === self && self || "object" == (typeof global === 'undefined' ? 'undefined' : _typeof(global)) && global.global === global && global;
    "function" == typeof define && define.amd ? define(["exports"], function (c) {
        b.ParticleNetwork = a(b, c);
    }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = a(b, {}) : b.ParticleNetwork = a(b, {});
}(function (a, b) {
    var c = function c(a) {
        this.canvas = a.canvas, this.g = a.g, this.particleColor = a.options.particleColor, this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height, this.velocity = {
            x: (Math.random() - .5) * a.options.velocity,
            y: (Math.random() - .5) * a.options.velocity
        };
    };
    return c.prototype.update = function () {
        (this.x > this.canvas.width + 20 || this.x < -20) && (this.velocity.x = -this.velocity.x), (this.y > this.canvas.height + 20 || this.y < -20) && (this.velocity.y = -this.velocity.y), this.x += this.velocity.x, this.y += this.velocity.y;
    }, c.prototype.h = function () {
        this.g.beginPath(), this.g.fillStyle = this.particleColor, this.g.globalAlpha = .7, this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI), this.g.fill();
    }, b = function b(a, _b) {
        this.i = a, this.i.size = {
            width: this.i.offsetWidth,
            height: this.i.offsetHeight
        }, _b = void 0 !== _b ? _b : {}, this.options = {
            particleColor: void 0 !== _b.particleColor ? _b.particleColor : "#fff",
            background: void 0 !== _b.background ? _b.background : "#1a252f",
            interactive: void 0 !== _b.interactive ? _b.interactive : !0,
            velocity: this.setVelocity(_b.speed),
            density: this.j(_b.density)
        }, this.init();
    }, b.prototype.init = function () {
        if (this.k = document.createElement("div"), this.i.appendChild(this.k), this.l(this.k, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "z-index": 1
        }), /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)) this.l(this.k, {
            background: this.options.background
        });else {
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)) return console.error("Please specify a valid background image or hexadecimal color"), !1;
            this.l(this.k, {
                background: 'url("' + this.options.background + '") no-repeat center',
                "background-size": "cover"
            });
        }
        if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)) return console.error("Please specify a valid particleColor hexadecimal color"), !1;
        this.canvas = document.createElement("canvas"), this.i.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.canvas.width = this.i.size.width, this.canvas.height = this.i.size.height, this.l(this.i, {
            position: "relative"
        }), this.l(this.canvas, {
            "z-index": "20",
            position: "relative"
        }), window.addEventListener("resize", function () {
            return this.i.offsetWidth === this.i.size.width && this.i.offsetHeight === this.i.size.height ? !1 : (this.canvas.width = this.i.size.width = this.i.offsetWidth, this.canvas.height = this.i.size.height = this.i.offsetHeight, clearTimeout(this.m), void (this.m = setTimeout(function () {
                this.o = [];
                for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) {
                    this.o.push(new c(this));
                }this.options.interactive && this.o.push(this.p), requestAnimationFrame(this.update.bind(this));
            }.bind(this), 500)));
        }.bind(this)), this.o = [];
        for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) {
            this.o.push(new c(this));
        }this.options.interactive && (this.p = new c(this), this.p.velocity = {
            x: 0,
            y: 0
        }, this.o.push(this.p), this.canvas.addEventListener("mousemove", function (a) {
            this.p.x = a.clientX - this.canvas.offsetLeft, this.p.y = a.clientY - this.canvas.offsetTop;
        }.bind(this)), this.canvas.addEventListener("mouseup", function (a) {
            this.p.velocity = {
                x: (Math.random() - .5) * this.options.velocity,
                y: (Math.random() - .5) * this.options.velocity
            }, this.p = new c(this), this.p.velocity = {
                x: 0,
                y: 0
            }, this.o.push(this.p);
        }.bind(this))), requestAnimationFrame(this.update.bind(this));
    }, b.prototype.update = function () {
        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height), this.g.globalAlpha = 1;
        for (var a = 0; a < this.o.length; a++) {
            this.o[a].update(), this.o[a].h();
            for (var b = this.o.length - 1; b > a; b--) {
                var c = Math.sqrt(Math.pow(this.o[a].x - this.o[b].x, 2) + Math.pow(this.o[a].y - this.o[b].y, 2));
                c > 120 || (this.g.beginPath(), this.g.strokeStyle = this.options.particleColor, this.g.globalAlpha = (120 - c) / 120, this.g.lineWidth = .7, this.g.moveTo(this.o[a].x, this.o[a].y), this.g.lineTo(this.o[b].x, this.o[b].y), this.g.stroke());
            }
        }
        0 !== this.options.velocity && requestAnimationFrame(this.update.bind(this));
    }, b.prototype.setVelocity = function (a) {
        return "fast" === a ? 1 : "slow" === a ? .33 : "none" === a ? 0 : .66;
    }, b.prototype.j = function (a) {
        return "high" === a ? 5e3 : "low" === a ? 2e4 : isNaN(parseInt(a, 10)) ? 1e4 : a;
    }, b.prototype.l = function (a, b) {
        for (var c in b) {
            a.style[c] = b[c];
        }
    }, b;
});

// Initialisation

var canvasDiv = document.getElementById('particles-js');
var options = {
    particleColor: '#888',
    // background: 'img/bg.jpg',
    interactive: true,
    speed: 'medium',
    density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
$(function () {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeekIndex = new Date().getDay();
    var dayOfWeek = weekdays[dayOfWeekIndex];
    var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
    var dayOfWeekPast;
    var hourOfDay = new Date().getHours();
    var timeOfDay;
    // choose day of week other than current one
    if (dayOfWeekPastIndex == dayOfWeekIndex) {
        dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
    } else {
        dayOfWeekPast = weekdays[dayOfWeekPastIndex];
    }
    // assign time of day to the hour
    if (hourOfDay >= 4 && hourOfDay <= 11) {
        timeOfDay = "morning";
    } else if (hourOfDay >= 12 && hourOfDay <= 16) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }
    // make conversation
    $(".typing").typed({
        strings: ["Hello! I'm Bao Nguyen.^2000 \nWeb Designer and Web Developer from Vietnam^2000 \nCame here on a " + dayOfWeekPast + " night once.^1000 \nIt was actually pretty crowded.^1000 \nBut on a " + dayOfWeek + " " + timeOfDay + " .^300 .^300 .^1000 \nI guess it's just you^1000 and me.^3000 \Hehe."],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        loopCount: false
    });
});
//# sourceMappingURL=main-app.js.map
