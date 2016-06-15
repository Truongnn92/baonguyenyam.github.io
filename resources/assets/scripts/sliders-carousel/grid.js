$(document).ready(function() {

    var divs = $("#freewall .brick").get().sort(function() {
        return Math.round(Math.random()) - 0.5; //random so we get the right +/- combo
    }).slice(0, 1000)
    $(divs).appendTo(divs[0].parentNode);

    setTimeout(function() {

        var wall = new Freewall("#freewall");
        wall.reset({
            selector: '.brick',
            animate: true,
            cellW: 150,
            cellH: 'auto',
            onResize: function() {
                wall.fitWidth();
            }
        });
        var images = wall.container.find('.brick');
        images.find('img').load(function() {
            wall.fitWidth();
        });
        wall.fitWidth();
        $(window).trigger("resize");

    }, 200);


});
