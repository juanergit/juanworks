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
    var picBox = $('.pic');//������е�pic����
    var lastpicHeight = picBox.last().offset().top + Math.floor(picBox.last().height() / 2);
    var documentHeight = $(document).height();
    var scrollHeight = $(document).scrollTop();
    return (lastpicHeight < scrollHeight + documentHeight )?true:false;
}


function imgLocation() {
    var picBox = $('.pic');//������е�pic����
    var img = $(' .pic  img'); //������е�img
    var content = $('.content');//��������ĺ���content
    var cWidth = content.width();//�������������Ŀ��
    var picWidth = 0;//�������ͼƬ����box�Ŀ��
    var picHeight = 0;//�������ͼƬ����box�ĸ߶�
    var picArr = [];//�������picBox�������еĶ���Ŀ��
    var sWidth = 0;//�����洢ÿһ��ͼƬ�Ŀ��ֵ֮��
    var interrptNum = 100;//��������if����������

    //���picBox�������еĶ���Ŀ�ȣ�����ֵ������picArr
    picBox.each(function (index, value) {
        picWidth = picBox.eq(index).width();
        picArr[index] = picWidth;
    });

    //���picBox�������еĶ���Ŀ�ȵ����ֵ��������������
    var maxpicWidth = Math.max.apply(null, picArr);
    var minpicWidth = Math.min.apply(null, picArr);
    //

    for (var i = 0; i < picBox.length; i++) {
        sWidth += $(picBox[i]).width() + 5; //5ΪpicBox��margin-left,��Ϊ���ֵҲ�Ǽ����������content�Ŀ���ڵģ�
        var iniWidth = 0; //�����洢rest����0��С��100ʱ����i��picBox�Ŀ��
        var iniWidth1 = 0;//�����洢rest����100��С��maxpicWidthʱ����i+1��picBox�Ŀ��
        var rest;
        rest = cWidth - sWidth; //ÿһ��ͼƬ�������֮��contentʣ��Ŀհ׿ռ�

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
