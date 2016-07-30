define(function(require, exports, module) {
    var $ = require('juery_1_10');
  /*  var $ = require('jquery');*/
    $(document).ready(function(){
        var courseCon = $('.course-high-con');/*获得精品系列课程的四个盒子*/
        var courseFt = $('.course-front');/*获得每个盒子里面前面的界面*/
        var courseBk = $('.course-back');/*获得每个盒子里面后面的界面*/
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




