
define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function(){
        var carouselInner4 = $('.college-cooperation .carousel-inner'); /*��ð�������a��ǩ�ĺ���*/
        var carouselInnerWidth4 = carouselInner4.width();/*��ð�������a��ǩ�ĺ��ӵĿ��*/
        var  myCarousel4 = $('#myCarousel4');/*���carouselInner����ĸ�Ԫ�غ���*/
        var myCarousel4Width = myCarousel4.width();/*���carouselInner����ĸ�Ԫ�غ��ӵĿ��*/
        var a_s4 = $('.college-cooperation .carousel-inner a');/*��ú�����a��ǩ�ļ���*/
        var aWidth4 = carouselInnerWidth4 / (a_s4.length);/*���ÿ��a��ǩ�Ŀ��*/
        var left4 = carouselInner4.css('left'); /*��ð�������a��ǩ�ĺ���CSS���������ԭʼ����ƫ����*/
        var index_4 = left4.indexOf('px');/*���px��left4���������*/
        var leftNum_4 = left4.substr(0,index_4);/*��ȡleft4�����ƫ����ֵ*/
        var leftWidth_4 = leftNum_4;/*�����洢�����carouselInner������ƫ��������ֵ*/
        var maxLeft = carouselInnerWidth4 - myCarousel4Width + aWidth4;/*��������carouselInner���������ƫ���������������ֵ�ұ߻�¶���հ�*/
        var swidth_4= 0;/*�������õ����carouselInner������ƫ����*/
        var x = 0;/*���������ߵ����ť�ĵ������*/
        var y = 0;/*��������ұߵ����ť�ĵ������*/
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




