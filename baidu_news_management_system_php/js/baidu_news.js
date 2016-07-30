$(function(){
    var size = $(window).width()/20;
    $('html').css(
       'font-size',size
    );
    $(window).on('load',function(){
        $('.carousel').carousel({
            interval: 1500
        })
    })

    $('#navbar li').click(function(){
        $('.carousel').carousel({
            interval: 1500
        })
    })
})
/*新闻内容部分图片轮播*/


