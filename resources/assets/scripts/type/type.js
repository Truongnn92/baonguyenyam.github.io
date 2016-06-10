$(function() {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeekIndex = (new Date()).getDay();
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
    if ((hourOfDay >= 4) && (hourOfDay <= 11)) {
        timeOfDay = "morning";
    } else if ((hourOfDay >= 12) && (hourOfDay <= 16)) {
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
        loopCount: false,
    });


// make conversation
    $(".text-replace").typed({
        strings: ["<span>print(Hello!)</span>.^500 \nlearnAbout(OSX, iOS, watchOS, tvOS).^1000 \nlet sessions = 100."],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        contentType: 'html',
        loopCount: false,
    });

});