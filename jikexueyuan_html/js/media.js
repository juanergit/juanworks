
define(function(require, exports, module) {
    var $ = require('juery_1_10');
   /* var $ = require('jquery');*/
    $(document).ready(function(){
        var carouselInner5 = $('.media-report .carousel-inner'); /*获得包含所有a标签的盒子*/
        var carouselInnerWidth5 = carouselInner5.width();/*获得包含所有a标签的盒子的宽度*/
        var  myCarousel5 = $('#myCarousel5');/*获得carouselInner外面的父元素盒子*/
        var myCarousel5Width =  myCarousel5.width();/*获得carouselInner外面的父元素盒子的宽度*/
        var a_s5 = $('.media-report .carousel-inner a');/*获得盒子里a标签的集合*/
        var aWidth5 = carouselInnerWidth5 / (a_s5.length);/*获得每个a标签的宽度*/
        var left5 = carouselInner5 .css('left'); /*获得包含所有a标签的盒子CSS设置里面的原始向左偏移量*/
        var index_5 = left5.indexOf('px');/*获得px在left4里面的索引*/
        var leftNum_5 = left5.substr(0,index_5);/*截取left4里面的偏移数值*/
        var leftWidth_5 = leftNum_5;/*用来存储点击后carouselInner的向左偏移量的数值*/
        var maxLeft = carouselInnerWidth5 - myCarousel5Width + aWidth5;/*用来设置carouselInner的向左最大偏移量，超出这个数值右边会露出空白*/
        var swidth_5= 0;/*用来设置点击后carouselInner的向左偏移量*/
        var x = 0;/*用来获得左边点击按钮的点击次数*/
        var y = 0;/*用来获得右边点击按钮的点击次数*/
        var z = Math.abs(parseFloat(leftNum_5))/aWidth5;
        myCarousel5.on('mouseenter',function(){
            $(' .carousel-control5').show();
        }).on('mouseleave',function(){
            $(' .carousel-control5').hide();
        });
        $('#control5_1').on('click', function () {
            x++
            if(leftWidth_5 == 0){
                x=z;
                y=0;
            }
            var j = x -y;
            swidth_5 = aWidth5 * j;
            swidth_5 = parseFloat(swidth_5) +  parseFloat(leftNum_5);
            leftWidth_5 = swidth_5;
            swidth_5 = swidth_5 + 'px'
            carouselInner5.css({
                left:swidth_5
            })
            if(leftWidth_5 >= 0){
                carouselInner5.css({
                    left:'0px'
                })
                x= x-1
            }

        })
        $('#control5_2').on('click', function () {
            if(leftWidth_5 == 0){
                x=z;
            }
            y ++
            var j = x -y;
            swidth_5 = aWidth5 * j;
            swidth_5 = parseFloat(swidth_5) +  parseFloat(leftNum_5);
            leftWidth_5 = swidth_5;
            swidth_5 = swidth_5 + 'px'
            carouselInner5.css({
                left:swidth_5
            })

            if(leftWidth_5<=(-maxLeft)){
                carouselInner5.css({
                    left:'0px'
                })
                x=z-1;
                y=0;
            }
        })
    })
});



