$(document).ready(function() {

    // How it works
    if($('.home-howitworks').length){
        $('.home-howitworks .owl-carousel').owlCarousel({
            // animateOut: 'fadeOut',
            // animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>','<i class="mdi mdi-chevron-right"></i>'],
            nav:true,
            dots: false,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            // autoHeight:true,
            // smartSpeed:1000
            callbacks: true,
            responsive : {
                992 : {
                    // mouseDrag: false,
                    // touchDrag: false,
                    dots: true,
                    nav:true
                }
            }
        });
        $(".home-howitworks .owl-carousel").on('changed.owl.carousel', function(event) { 
            if(event.page.index<0){
                var tmpgetValOWL = (event.item.index -1) - event.relatedTarget._clones.length / 2;
                if(tmpgetValOWL==2){
                    var getValOWL = tmpgetValOWL - 1;
                } else if(tmpgetValOWL==-2){
                    var getValOWL = tmpgetValOWL + 5;
                } else {
                    var getValOWL = tmpgetValOWL + 2;
                }
            } else {
                var getValOWL = event.page.index + 1;
            }
            $('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider='+getValOWL+']').addClass('active');
        });

        $('a.goowl').on('click', function(){
            var inputValOWL = parseInt($(this).attr('slider')) - 1;
            $(".home-howitworks .owl-carousel").trigger('to.owl.carousel', [inputValOWL,500]);
            $(this).parents('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider='+(inputValOWL+1)+']').addClass('active');
        });

        // $(".owl-carousel").on('initialized.owl.carousel', function(event) {
        //     $('.boxright').find('.goowl').removeClass('active');
        //     $('.boxright').find('.goowl[slider=1]').addClass('active');
        // });
    }
});


