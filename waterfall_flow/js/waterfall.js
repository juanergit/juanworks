$(document).ready(function () {
    $(window).on('load', function () {
        imgLocation();
        dataImg = {"data": [{"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}, {"src": "5.jpg"},
            {"src": "6.jpg"}, {"src": "7.jpg"}, {"src": "8.jpg"}, {"src": "9.jpg"}, {"src": "10.jpg"}, {"src": "11.jpg"},
            {"src": "12.jpg"}, {"src": "13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"}]};
        window.onscroll = function () {
              if(scroll()){
                 $.each(dataImg.data,function(index,value){
                      var outBox = $('<div>').addClass('outer-box').appendTo($('.content'));
                      var  pic = $('<div>').addClass('pic').appendTo(outBox);
                      var a = $('<a>').attr('href','#').appendTo(pic);
                     // console.log('../images/'+ $(value).attr('src'));
                    // console.log($(value));
                     $('<img>').attr('src','../images/'+ $(value).attr('src')).appendTo(a);
                     imgLocation();
                  });

              }

        }
      //  imgLocation();
    });
});

function scroll() {
    var picBox = $('.pic');//获得所有的pic盒子
    var lastpicHeight = picBox.last().offset().top + Math.floor(picBox.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(document).scrollTop();
    return (lastpicHeight < scrollHeight + documentHeight )?true:false;
}


function imgLocation() {
    var picBox = $('.pic');//获得所有的pic盒子
    var img = $(' .pic  img'); //获得所有的img
    var content = $('.content');//获得最外层的盒子content
    var cWidth = content.width();//获得最外层容器的宽度
    var picWidth = 0;//用来获得图片外层的box的宽度
    var picHeight = 0;//用来获得图片外层的box的高度
    var picArr = [];//用来存放picBox里面所有的对象的宽度
    var sWidth = 0;//用来存储每一行图片的宽度值之和
    var interrptNum = 100;//用来设置if函数的条件

    //获得picBox里面所有的对象的宽度，并赋值给数组picArr
    picBox.each(function (index, value) {
        picWidth = picBox.eq(index).width();
        picArr[index] = picWidth;
    });

    //获得picBox里面所有的对象的宽度的最大值，用来设置条件
    var maxpicWidth = Math.max.apply(null, picArr);
    var minpicWidth = Math.min.apply(null, picArr);
    //

    for (var i = 0; i < picBox.length; i++) {
        sWidth += $(picBox[i]).width() + 5; //5为picBox的margin-left,因为这个值也是计算在最外层content的宽度内的；
        var iniWidth = 0; //用来存储rest大于0，小于100时，第i个picBox的宽度
        var iniWidth1 = 0;//用来存储rest大于100，小于maxpicWidth时，第i+1个picBox的宽度
        var rest;
        rest = cWidth - sWidth; //每一行图片加载完毕之后，content剩余的空白空间

        if (rest > 0 && rest <= interrptNum) {
            picHeight = $(picBox[i]).height() + 'px';
            iniWidth = $(picBox[i]).width();
            picWidth = iniWidth + rest;
            picWidth = picWidth + 'px';
            $(picBox[i]).css({
                'height': picHeight,
                'width': picWidth
            });
            $(img[i]).css({
                'width': picWidth
            });
            sWidth = 0;
        } else if (rest > interrptNum && rest <maxpicWidth) {
            picHeight = $(picBox[i]).height() + 'px';
            iniWidth1 = rest - 5;
            iniWidth1 = iniWidth1 + 'px';
            $(picBox[i + 1]).css({
                'height': picHeight,
                'width': iniWidth1,
            });
            $(img[i + 1]).css({
                'width': iniWidth1
            });
            sWidth = 0;
            i++;
        }else if(rest == 0){
            sWidth = 0;;
        }
    }
}
