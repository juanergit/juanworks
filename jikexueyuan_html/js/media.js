
define(function(require, exports, module) {
    var $ = require('juery_1_10');
   /* var $ = require('jquery');*/
    $(document).ready(function(){
        var carouselInner5 = $('.media-report .carousel-inner'); /*��ð�������a��ǩ�ĺ���*/
        var carouselInnerWidth5 = carouselInner5.width();/*��ð�������a��ǩ�ĺ��ӵĿ��*/
        var  myCarousel5 = $('#myCarousel5');/*���carouselInner����ĸ�Ԫ�غ���*/
        var myCarousel5Width =  myCarousel5.width();/*���carouselInner����ĸ�Ԫ�غ��ӵĿ��*/
        var a_s5 = $('.media-report .carousel-inner a');/*��ú�����a��ǩ�ļ���*/
        var aWidth5 = carouselInnerWidth5 / (a_s5.length);/*���ÿ��a��ǩ�Ŀ��*/
        var left5 = carouselInner5 .css('left'); /*��ð�������a��ǩ�ĺ���CSS���������ԭʼ����ƫ����*/
        var index_5 = left5.indexOf('px');/*���px��left4���������*/
        var leftNum_5 = left5.substr(0,index_5);/*��ȡleft4�����ƫ����ֵ*/
        var leftWidth_5 = leftNum_5;/*�����洢�����carouselInner������ƫ��������ֵ*/
        var maxLeft = carouselInnerWidth5 - myCarousel5Width + aWidth5;/*��������carouselInner���������ƫ���������������ֵ�ұ߻�¶���հ�*/
        var swidth_5= 0;/*�������õ����carouselInner������ƫ����*/
        var x = 0;/*���������ߵ����ť�ĵ������*/
        var y = 0;/*��������ұߵ����ť�ĵ������*/
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



