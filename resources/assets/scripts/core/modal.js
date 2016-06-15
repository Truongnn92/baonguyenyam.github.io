$(function() {
    $('.modal')
        .on('show.bs.modal', function() {
            // $('.scrollbar-dynamic , .scrollbar-macosx_menu').css({
            // 	'max-height': 'initial',
            // 	'height': 'initial'
            // });
            $('.scrollbar-dynamic , .scrollbar-macosx_menu').perfectScrollbar('destroy');
            $('.cnt').perfectScrollbar();
        })
        .on('hide.bs.modal', function() {
            // $('.scrollbar-dynamic , .scrollbar-macosx_menu').css({
            //   	'max-height': '100%',
            //   	'height': '100%'
            //   });
            $('.scrollbar-dynamic , .scrollbar-macosx_menu').perfectScrollbar();
        });

    $('[bn-modal]').on('click', function(event) {
        $('#BNModal').find('.cnt').html($(this).html());
    });


});