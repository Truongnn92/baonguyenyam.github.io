$(document).ready(function() {

    if($('.devmode').length){
        $('.devmode-show a').on('click', function(event) {
            $(this).parent().toggleClass('active');
            $('.devmode').toggleClass('active');
        });
        $('.hidegrid').on('click', function(event) {
            $(this).parents('.devmode').toggleClass('hidegrid');
        });
        $('.hidebg').on('click', function(event) {
            $(this).parents('.devmode').toggleClass('hidebg');
        });
        $('.closedev').on('click', function(event) {
            $(this).parents('.devmode').toggleClass('active');
            $('.devmode-show').toggleClass('active');
        });
    }

});