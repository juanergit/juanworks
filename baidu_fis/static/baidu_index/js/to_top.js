//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法

$(document).ready(function () {
    var Singleton = (function () {
        var instantiated;
        function init() {
            /*这里定义单例代码*/
            return {
                windowHeight : $(window).height(),
                document: $(document),
                tt_text:$('.tt-text'),
                icon_to_up :$('.icon-to-up'),
                to_top_dir:$('.to-top-dir'),
                onLoad:function(){
                    var me = this;
                    $(window).on('load',function(){
                        me.scroll();
                        me.click();
                        me.onmouseOver();
                    })
                },
              scroll:function(){
                  var me =this;
                 me.document.scroll(function () {
                      var scrollTopHeight = me.document.scrollTop();
                      if (scrollTopHeight > 0) {
                          me.to_top_dir.show(100, 'linear');
                      } else {
                          me.to_top_dir.hide(100, 'linear');
                      }
                  });
              },
                click:function(){
                    var me = this;
                    me.to_top_dir .on('click',function(){
                        $(document).scrollTop(0);
                    });
                },
                onmouseOver:function(){
                    var me = this;
                    me.to_top_dir.on('mouseenter', function () {
                        me.tt_text.show(0,function () {
                            me.icon_to_up.hide();
                        }).on('mouseout', function () {
                            me.tt_text.hide(0,function () {
                                me.icon_to_up.show();
                            })

                        });
                    })
                }
            };
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
    Singleton.getInstance().onLoad();
});