//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法
$(function(){
    var Singleton = (function () {

        var instantiated;

        function init() {
            /*这里定义单例代码*/
            return {
                //定义私有属性
                window: $(window),
                body: $('body'),
                header_a: $('.header a', '#container'),
                a_ddmenu_s: $('#ddMenu2 a,#ddMenu a'),
                city_weather_a: $('.city_weather a', '#container'),
                index: $('.index', '#skin_series'), /*获得换肤功能中导航条的每一个子项目*/
                skin_pic: $('.skin-img-item-img', '#skin_series'), /*获得每个图片外面的li标签*/
                skin_pic_src: '', /*用于存储被点击图片的src*/
                docWidth: $(document).width() + 'px',
                docHeight: $(document).height() + 'px',

                onload: function () {
                    var me = this;
                    me.window.on('load', function () {

                        me.skinChange(me.readCookie());//根据读取cookie返回值设置皮肤样式
                    })
                },

                skin_pic_click: function () {
                    var me = this;
                    me.skin_pic.each(function (i) {
                        $(this).click(function () {
                            me.skin_pic_src = $(this).attr('src');
                            me.body.css({
                                background: ' url(' + me.skin_pic_src + ')' + 'no-repeat',
                                backgroundPosition: 'bottom 0',
                                backgroundSize: 'cover',
                                backgroundAttachment: 'fixed'
                            })
                            me.header_a.css({
                                color: '#fff'
                            })
                            me.city_weather_a.css({
                                color: '#fff'
                            })
                            me.a_ddmenu_s.css({
                                color: '#000'
                            })
                            me.setCookie(i)
                        })
                    })
                },

                skinChange: function (num) {
                    var me = this;
                    me.skin_pic_src = $(me.skin_pic[num]).attr('src');
                    me.body.css({
                        background: ' url(' + me.skin_pic_src + ')' + 'no-repeat',
                        backgroundPosition: 'bottom 0',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    })
                    me.header_a.css({
                        color: '#fff'
                    })
                    me.city_weather_a.css({
                        color: '#fff'
                    })
                    me.a_ddmenu_s.css({
                        color: '#000'
                    })

                },

                //将当前皮肤n存到cookie
                setCookie: function (num) {
                    var expires = new Date();
                    expires.setTime(expires.getTime() + 24 * 60 * 60 * 3 * 30 * 1000);
                    var skinNum = 'SkinCookie=' + num;
                    document.cookie = skinNum + ";expires=" + expires.toGMTString();
                },

                //返回用户设置的皮肤样式
                readCookie: function () {
                    var skin = 0;
                    var myCookie = document.cookie;
                    var name = 'SkinCookie';
                    var start1 = myCookie.indexOf(name + "=");
                    if (start1 == -1) {
                        skin = 0;//如果没有设置则显示默认样式
                    }
                    else {
                        var start = myCookie.indexOf("=", start1) + 1;
                        var end = myCookie.indexOf(";", start);
                        if (end = -1) {
                            end = myCookie.length;
                        }
                        var values = myCookie.substring(start, end);
                        if (values != null) {
                            skin = values;
                        }
                    }
                    return skin;
                }
            }
        }

        return {
            getInstance: function () {
                if (!instantiated) {
                    instantiated = init();
                }
                return instantiated;
            }
        };
    })();
    /*调用公有的方法来获取实例:*/
    Singleton.getInstance().onload();
    Singleton.getInstance().skin_pic_click();
    Singleton.getInstance().skinChange();
})


