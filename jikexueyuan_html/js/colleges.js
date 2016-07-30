
define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function(){
        var carouselInner4 = $('.college-cooperation .carousel-inner'); /*获得包含所有a标签的盒子*/
        var carouselInnerWidth4 = carouselInner4.width();/*获得包含所有a标签的盒子的宽度*/
        var  myCarousel4 = $('#myCarousel4');/*获得carouselInner外面的父元素盒子*/
        var myCarousel4Width = myCarousel4.width();/*获得carouselInner外面的父元素盒子的宽度*/
        var a_s4 = $('.college-cooperation .carousel-inner a');/*获得盒子里a标签的集合*/
        var aWidth4 = carouselInnerWidth4 / (a_s4.length);/*获得每个a标签的宽度*/
        var left4 = carouselInner4.css('left'); /*获得包含所有a标签的盒子CSS设置里面的原始向左偏移量*/
        var index_4 = left4.indexOf('px');/*获得px在left4里面的索引*/
        var leftNum_4 = left4.substr(0,index_4);/*截取left4里面的偏移数值*/
        var leftWidth_4 = leftNum_4;/*用来存储点击后carouselInner的向左偏移量的数值*/
        var maxLeft = carouselInnerWidth4 - myCarousel4Width + aWidth4;/*用来设置carouselInner的向左最大偏移量，超出这个数值右边会露出空白*/
        var swidth_4= 0;/*用来设置点击后carouselInner的向左偏移量*/
        var x = 0;/*用来获得左边点击按钮的点击次数*/
        var y = 0;/*用来获得右边点击按钮的点击次数*/
        var z = Math.abs(parseFloat(leftNum_4))/aWidth4;
        myCarousel4.on('mouseenter',function(){
            $(' .carousel-control4').show();
        }).on('mouseleave',function(){
            $(' .carousel-control4').hide();
        });
        $('#control4_1').on('click', function () {
            x++
            if(leftWidth_4 == 0){
                x=z;
                y=0;
            }
            var j = x -y;
            swidth_4 = aWidth4 * j;
            swidth_4 = parseFloat(swidth_4) +  parseFloat(leftNum_4);
            leftWidth_4 = swidth_4;
            swidth_4 = swidth_4 + 'px'
            carouselInner4.css({
                left:swidth_4
            })
            if(leftWidth_4 >= 0){
                carouselInner4.css({
                    left:'0px'
                })
                x= x-1
            }

        })
        $('#control4_2').on('click', function () {
            if(leftWidth_4 == 0){
                x=z;
            }
            y ++
            var j = x -y;
            swidth_4 = aWidth4 * j;
            swidth_4 = parseFloat(swidth_4) +  parseFloat(leftNum_4);
            leftWidth_4 = swidth_4;
            swidth_4 = swidth_4 + 'px'
            carouselInner4.css({
                left:swidth_4
            })

            if(leftWidth_4<=(-maxLeft)){
                carouselInner4.css({
                    left:'0px'
                })
                x=z-1;
                y=0;
            }
        })
    })
});




