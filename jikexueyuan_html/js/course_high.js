define(function(require, exports, module) {
    var $ = require('juery_1_10');
  /*  var $ = require('jquery');*/
    $(document).ready(function(){
        var courseCon = $('.course-high-con');/*��þ�Ʒϵ�пγ̵��ĸ�����*/
        var courseFt = $('.course-front');/*���ÿ����������ǰ��Ľ���*/
        var courseBk = $('.course-back');/*���ÿ�������������Ľ���*/
        courseCon.each(function(i){
            $(this).on('mouseenter',function(){
                $(this).css({
                    border:'1px solid #00C800'
                });
                $(courseBk[i]).fadeIn(100,function(){
                    $(this).css({
                        backgroundColor:'#fff',
                        opacity:'0.9'
                    })
                })
            }).on('mouseleave',function(){
                $(this).css({
                    border:'1px solid #DCDCDC'
                });
                $(courseBk[i]).fadeOut(100);
            })
            //console.log($(this));
        })
    })
});




