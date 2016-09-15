$(document).ready( function () {
    // $(window).load(function(){
    //     $('#preloader').fadeOut('slow',function(){$(this).remove();});
    // });
    var $isAnimatedAbout = $('.about-content .is-animated'),
    $isAnimatedPortfolio = $(' .portfolio-content .is-animated'),
        $isAnimatedMain = $(' .header .is-animated');
    $isAnimatedMain.addClass('animated fadeInLeftBig');

    $('#fullpage').fullpage({
        onLeave: function(index, nextIndex, direction) {
           if( index == 1 && nextIndex == 2 ) {
                $isAnimatedAbout.addClass('animated fadeInUpBig');
                $isAnimatedAbout.eq(0).css('animation-delay', '.3s');
                $isAnimatedAbout.eq(1).css('animation-delay', '.6s');
                $isAnimatedAbout.eq(2).css('animation-delay', '.9s');
            } else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
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
            }    else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
                $isAnimatedPortfolio.addClass('animated zoomIn').css('animation-delay', '.4s');
                $isAnimatedPortfolio.addClass('animated lightSpeedIn').css('animation-delay', '0.8s');
            }
        }
    });
    $('#navbar-toggle').click(function () {
        $('#navbar-toggle').toggleClass('active');
        $('.menu').toggleClass('menu-right');
    });
    });




