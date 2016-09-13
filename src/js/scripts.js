$(document).ready( function () {
    $('#fullpage').fullpage({
    });
    $('#navbar-toggle').click(function () {
        $('#navbar-toggle').toggleClass('active');
        $('.menu').toggleClass('menu-right');
    });
    }
);
$('.skills-content').on('appear', function() {
    $('.circle.first').circleProgress({
        value: 0.95,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.second').circleProgress({
        value: 0.75,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.third').circleProgress({
        value: 0.85,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.four').circleProgress({
        value: 0.75,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.five').circleProgress({
        value: 0.65,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.six').circleProgress({
        value: 0.55,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.seven').circleProgress({
        value: 0.45,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    $('.circle.eight').circleProgress({
        value: 0.45,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
});



