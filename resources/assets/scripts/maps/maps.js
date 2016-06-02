$(document).ready(function() {
    var allAreas = $(".home-maps .areas").find(".item");
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
        to.fadeIn(500, function() {
            setTimeout(function() {
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
