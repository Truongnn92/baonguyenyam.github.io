$(document).ready(function() {

	if ($(this).scrollTop() > 56) {
	    $( ".get4x-home header" ).removeClass('active');
	} else {
	    $( ".get4x-home header" ).addClass('active');
	}

});

$(window).scroll(function() {
    if ($(this).scrollTop() > 56) {
        $( ".get4x-home header" ).removeClass('active');
    } else {
        $( ".get4x-home header" ).addClass('active');
    }
});