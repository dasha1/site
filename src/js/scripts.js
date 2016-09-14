$(document).ready( function () {
    $('#fullpage').fullpage({
    });
    $('#navbar-toggle').click(function () {
        $('#navbar-toggle').toggleClass('active');
        $('.menu').toggleClass('menu-right');
    });

    }
);
$('.app').on('appear',function () {
    $('.app').addClass("appeared")
});
$('.skills-content').on('appear', function() {
    var circle=$('.circle.first').circleProgress({
        value: 0.95,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (95 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_2 =$('.circle.second').circleProgress({
        value: 0.75,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_2.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (75 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
   var circle_3= $('.circle.third').circleProgress({
        value: 0.85,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_3.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (85 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_4=$('.circle.four').circleProgress({
        value: 0.75,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_4.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (75 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_5=$('.circle.five').circleProgress({
        value: 0.65,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_5.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (65 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_6=$('.circle.six').circleProgress({
        value: 0.55,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_6.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (55 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_7=$('.circle.seven').circleProgress({
        value: 0.45,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_7.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (45 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
    var circle_8=$('.circle.eight').circleProgress({
        value: 0.45,
        size: 200,
        fill: {
            color: ["#b288ab"]
        }
    });
    circle_8.on('circle-animation-progress', function(e, val) {
        var obj = $(this).data('circle-progress'),
            ctx = obj.ctx,
            s = obj.size,
            sv = (45 * val).toFixed(),
            fill = obj.arcFill;

        ctx.save();
        ctx.font = "bold " + s / 2.5 + "px sans-serif";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = fill;
        ctx.fillText(sv, s / 2, s / 2);
        ctx.restore();
    });
});



