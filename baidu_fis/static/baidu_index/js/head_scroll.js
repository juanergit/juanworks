//模式：工厂模式
//原因：需要根据环境创建不同的实例
//好处：用工厂模式，只需要修改工厂代码。其他地方引用工厂，可以做到只修改一个地方，其他代码都不动。

$(document).ready(function () {
    var head = $('.header');
    var baidu_img = $('#baidu_img');
    var headHeight = head.height();//this指向当前return的这个对象
    var imgHeight = baidu_img.height();
    var white_logo = $('#white_logo');
    var bd_logo = $('#bd_logo');
    var bd_form = $('.bd-form');
    var main_index = $('.main_index');
    var real_time_news = $('.real-time-news');
    var menu_setting = $('#menu-setting');
    var menu_s = $('.menu_s');
    var channel_setting = $('.channel-setting');

    var heightCompare = function () {

    };
    heightCompare.operation = function (num) {
        switch (true) {
            case num > 0:
                heightCompare.operation1();
                break;
            default :
                heightCompare.operation2();
                break;
        }
    };
    heightCompare.operation1 = function () {
        head.hide(0, function () {
            baidu_img.hide(0, function () {
                white_logo.hide(0, function () {
                    bd_logo.show(70, function () {
                        bd_form.css({
                            position: 'fixed',
                            top: '0px',
                            width: '100%',
                            zIndex: '100',
                            backgroundColor: 'rgba(255,255,254,0.95)',
                            borderBottom: '1px solid #ccc',
                            marginLeft: '-10px',
                            boxShadow: '0 0 4px #E2E2E2'
                        });
                        main_index.css('marginTop', '130px');
                        real_time_news.css({
                            position: 'fixed',
                            top: '130px',
                            left: '59%',
                            width: '307px',
                            backgroundColor: '#fff'
                        })
                        menu_setting.css('right', '460px');
                    });
                })
            });
        });
    };
    heightCompare.operation2 = function () {
        menu_s.css({
            position: 'relative',
            top: '0',
            left: '0',
            paddingLeft: '0',
            backgroundColor: '#fff'
        })
        bd_logo.hide(100, function () {
            baidu_img.show(100, function () {
                head.show(0, function () {
                    bd_form.css({
                        position: 'relative',
                        top: '0',
                        width: '100%',
                        backgroundColor: 'transparent',
                        borderBottom: 'none',
                        marginLeft: '0',
                        boxShadow: 'none'
                    });
                    real_time_news.css({
                        position: 'absolute',
                        top: '39px',
                        left: '65.5%',
                        width: '34%'
                    })
                    menu_setting.css('right', '0');
                    channel_setting.css({
                        position: 'absolute',
                        top: '0'
                    })
                })
            })
        })
    };
   var scrollDown = function(){
       $(document).scroll(function () {
           var documentSrollHeight = $(document).scrollTop();
           var num = documentSrollHeight - headHeight -imgHeight;

           heightCompare.operation(num);
       });
   }
    scrollDown();

//鼠标向上滚动事件
    var scrollUp = function(){

    };
    scrollUp.handle = function(delta){
        switch (true) {
            case delta > 0:
                scrollUp.handle1();
                break;
            default :
                scrollUp.handle2();
                break;
        }
    };
    scrollUp.handle1=function(){
        menu_s.css({
            position: 'fixed',
            top: '77px',
            left: '0',
            width: '100%',
            backgroundColor: 'rgba(244,244,244,0.95)',
            paddingLeft: '17.5%',
            zIndex: '50'
        })
       channel_setting.css({
            position: 'fixed',
            top: '87px'

        })
    };
    scrollUp.handle2=function(){
        menu_s.css({
            position: 'relative',
            top: '0',
            left: '0',
            paddingLeft: '0',
            backgroundColor: '#fff'
        })
    };

    var scroll_dir_up =function(delta){
        var documentSrollHeight = $(document).scrollTop();
        var num = documentSrollHeight - headHeight - imgHeight;
        if(num>0){
            scrollUp.handle(delta);
        }
    }
    scroll_dir_up();

    wheel = function (event) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }

        if (delta){
            scroll_dir_up(delta);
        }
    };

    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll',  wheel , false);
    }
    window.onmousewheel = document.onmousewheel = wheel ;
})






