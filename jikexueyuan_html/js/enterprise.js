define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function () {
        /*dataImg = {"data": [{"src": "qy1.jpg"}, {"src": "qy2.png"}, {"src": "qy3.png"}, {"src": "qy4.jpg"}, {"src": "qy5.jpg"},
         {"src": "qy7.jpg"}, {"src": "qy8.png"}, {"src": "qy9.png"}, {"src": "qy10.jpg"}, {"src": "qy15.jpg"}, {"src": "qy16.jpg"},
         {"src": "qy17.jpg"}, {"src": "qy18.jpg"},{"src":"qy19.jpg"},{"src":"qy20.jpg"},{"src":"qy21.jpg"}]};*/
        var carouselInner = $('.enterprise-box .carousel-inner'); /*��ð�������a��ǩ�ĺ���*/
        var carouselInnerWidth = carouselInner.width();/*��ð�������a��ǩ�ĺ��ӵĿ��*/
        var  myCarousel3 = $('#myCarousel3');/*���carouselInner����ĸ�Ԫ�غ���*/
        var myCarousel3Width = myCarousel3.width();/*���carouselInner����ĸ�Ԫ�غ��ӵĿ��*/
        var a_s = $('.enterprise-box  .carousel-inner a');/*��ú�����a��ǩ�ļ���*/
        var aWidth = carouselInnerWidth / (a_s.length);/*���ÿ��a��ǩ�Ŀ��*/
        var left1 = carouselInner.css('left'); /*��ð�������a��ǩ�ĺ���CSS���������ԭʼ����ƫ����*/
        var index = left1.indexOf('px');/*���px��left1���������*/
        var leftNum = left1.substr(0,index);/*��ȡleft�����ƫ����ֵ*/
        var leftWidth =leftNum;/*�����洢�����carouselInner������ƫ��������ֵ*/
        var maxLeft = carouselInnerWidth - myCarousel3Width+aWidth;/*��������carouselInner���������ƫ���������������ֵ�ұ߻�¶���հ�*/
        var swidth = 0;/*�������õ����carouselInner������ƫ����*/
        var x = 0;/*���������ߵ����ť�ĵ������*/
        var y = 0;/*��������ұߵ����ť�ĵ������*/
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




