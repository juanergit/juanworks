define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function () {
        /*dataImg = {"data": [{"src": "qy1.jpg"}, {"src": "qy2.png"}, {"src": "qy3.png"}, {"src": "qy4.jpg"}, {"src": "qy5.jpg"},
         {"src": "qy7.jpg"}, {"src": "qy8.png"}, {"src": "qy9.png"}, {"src": "qy10.jpg"}, {"src": "qy15.jpg"}, {"src": "qy16.jpg"},
         {"src": "qy17.jpg"}, {"src": "qy18.jpg"},{"src":"qy19.jpg"},{"src":"qy20.jpg"},{"src":"qy21.jpg"}]};*/
        var carouselInner = $('.enterprise-box .carousel-inner'); /*获得包含所有a标签的盒子*/
        var carouselInnerWidth = carouselInner.width();/*获得包含所有a标签的盒子的宽度*/
        var  myCarousel3 = $('#myCarousel3');/*获得carouselInner外面的父元素盒子*/
        var myCarousel3Width = myCarousel3.width();/*获得carouselInner外面的父元素盒子的宽度*/
        var a_s = $('.enterprise-box  .carousel-inner a');/*获得盒子里a标签的集合*/
        var aWidth = carouselInnerWidth / (a_s.length);/*获得每个a标签的宽度*/
        var left1 = carouselInner.css('left'); /*获得包含所有a标签的盒子CSS设置里面的原始向左偏移量*/
        var index = left1.indexOf('px');/*获得px在left1里面的索引*/
        var leftNum = left1.substr(0,index);/*截取left里面的偏移数值*/
        var leftWidth =leftNum;/*用来存储点击后carouselInner的向左偏移量的数值*/
        var maxLeft = carouselInnerWidth - myCarousel3Width+aWidth;/*用来设置carouselInner的向左最大偏移量，超出这个数值右边会露出空白*/
        var swidth = 0;/*用来设置点击后carouselInner的向左偏移量*/
        var x = 0;/*用来获得左边点击按钮的点击次数*/
        var y = 0;/*用来获得右边点击按钮的点击次数*/
        var z = Math.abs(parseFloat(leftNum))/aWidth;
        myCarousel3.on('mouseenter',function(){
            $(' .carousel-control3').show();
        }).on('mouseleave',function(){
            $(' .carousel-control3').hide();
        });
        $('#control3_1').on('click', function () {
            x++
            if(leftWidth == 0){
                x=z;
                y=0;
            }
            var j = x -y;
            var swidth = aWidth * j;
            swidth = parseFloat(swidth) +  parseFloat(leftNum);
            leftWidth = swidth;
            swidth = swidth + 'px'
            carouselInner.css({
                left:swidth
            })
            if(leftWidth >= 0){
                carouselInner.css({
                    left:'0px'
                })
                x= x-1
            }

        })
        $('#control3_2').on('click', function () {
            if(leftWidth == 0){
                x=z;
            }
            y ++
            var j = x -y;
            var swidth = aWidth * j;
            swidth = parseFloat(swidth) +  parseFloat(leftNum);
            leftWidth = swidth;
            swidth = swidth + 'px'
            carouselInner.css({
                left:swidth
            })
            if(leftWidth<=(-maxLeft)){
                carouselInner.css({
                    left:'0px'
                })
                x=z-1;
                y=0;
            }
        })
    })
//console.log(aWidth);
//console.log(enterpriseWidth);
// console.log(a_s.length)
});




