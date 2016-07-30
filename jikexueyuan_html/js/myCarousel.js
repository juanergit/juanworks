

define(function(require, exports, module) {
    var $ = require('juery_1_10');
 /*   var $ = require('jquery');*/
    require('bootstrap_ui')($);
    $(document).ready(function(){
        var indicators_li= $('li','#carousel_indicators');
        var item = $('.item','#myCarousel');
       // console.log(data_slide_num);
        $('.carousel').carousel({
            interval: 2000
        });
        $(' #myCarousel').on('mouseenter',function(){
            $(' .carousel-control1').show();
        }).on('mouseleave',function(){
            $(' .carousel-control1').hide();
        });

        $('#myCarousel2').on('mouseenter',function(){
            $(' .carousel_control2').show();
        }).on('mouseleave',function(){
            $(' .carousel_control2').hide();
        });


    })
});

