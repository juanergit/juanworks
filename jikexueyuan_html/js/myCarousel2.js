
define(function(require, exports, module) {
    var $ =  require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function () {
        var item_con1 = $('.item-con1', '#myCarousel2');
        /*获得myCarousel2里的所有的a标签的集合*/
        var itemWidth = parseFloat(item_con1.width());
        var itemLength = item_con1.length;
        var carousel_controls1 = $('#carousel_controls1');
        var carousel_controls2 = $('#carousel_controls2');
        var itemLeftArr = [];
        /*存储每个a标签absolute的left*/
        item_con1.each(function (i) {
            itemLeft = $(this).css('left');
            itemLeftArr[i] = itemLeft;
        })
        var x = 0;
        var y = 0;
        /*左边按钮点击事件*/
        carousel_controls1.click(function () {
            x++;
            var j;
            j = x - y;
            if(j>= -5 && j<= 5){
                j=j
            }
            if( j<-5){
                j = j + itemLength*Math.floor(Math.abs(j)/itemLength) ;/*itemLength为接下里的循环周期*/
            }

            if(j>5){
                j = j - itemLength*Math.floor(j/itemLength) ;/*itemLength为接下里的循环周期*/
            }
            carousel_controls.click(j);

        })
        /*右边按钮点击事件*/
        carousel_controls2.click(function(){
            y++;
            var j;
            j = x - y;
            if(j>= -5 && j<= 5){
                j=j
            }
            if( j<-5){
                j = j + itemLength*Math.floor(Math.abs(j)/itemLength) ;/*itemLength为接下里的循环周期*/
            }

            if(j>5){
                j = j - itemLength*Math.floor(j/itemLength) ;/*itemLength为接下里的循环周期*/
            }
            carousel_controls.click(j);
        })



        /*点击事件所调用的函数*/
        carousel_controls = {
            /*  clikcLeft:function(num){ /!*左边按钮点击调用函数*!/
             item_con1.each(function (i) {
             if (i+num >=5) {
             var left1 = itemWidth * ( num + i-itemLength);
             left1 = left1 + 'px';
             $(this).css({
             left: left1
             }
             );
             } else {
             var left2 = itemWidth * (i + num);
             left2 = left2 + 'px';
             itemLeft = $(this).css({
             left: left2
             })
             }
             }
             );
             },*/
            click: function (num){   /*右边按钮点击调用函数*/
                item_con1.each(function(i){
                    if (i+num >=5) {
                        var left1 = itemWidth * ( num + i-itemLength);
                        left1 = left1 + 'px';
                        $(this).css({
                                left: left1
                            }
                        );
                    }
                    if(i+num>=0 && i+num<=4){
                        var left3 =itemWidth *(i+num);
                        left3 = left3 + 'px';
                        $(this).css({
                                left: left3
                            }
                        );
                    }
                    if(i+num<0){
                        var left4 = itemWidth *(i+num+itemLength);
                        left4 = left4 + 'px';
                        $(this).css({
                                left: left4
                            }
                        )
                    }
                })
            }
        }

    })
});




