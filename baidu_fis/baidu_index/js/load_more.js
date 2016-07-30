//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法
$(function(){
    var x={
        init: function () {
            this.render();
            this.bind();
            this.bind2();
        },
        render: function () {
            var me = this;
            me.window = $(window);
            me.document=$(document);
            me.headHeight = $('.header').height();
            me.imgHeight = $('#baidu_img').height();
            me.windowHeight = $(window).height();
            me.footer = $('.footer');
            me.more_down = $('.more-down');
            me.footerHeight = me.footer.height();
            me.mainHeight = me.windowHeight - me.headHeight - me.imgHeight - me.footerHeight;
            me.downHeight = me.mainHeight - me.footerHeight;
            me.main_index = $('.main_index');
            me.menuHeight = me.main_index.height();
            me.icon_dHeight = $('#icon-d').height();
        },
        bind: function () {
            var me = this;
            me.window.on('load', function () {
                me.onLoad();
            })
        },
        bind2: function () {
            var me = this;
            me.document.scroll(function () {
                me.scroll();
            })
        },
        onLoad: function () {
            var me = this;
            me.footer.css({
                position: 'absolute',
                backgroundColor: '#fff',
                opacity: '1'
            });
            me.main_index.css({
                height: me.mainHeight,
                overflow: 'hidden'
            });
            me.more_down.css({
                top: me.downHeight
            })
            me.document.scrollTop(0);
        },
        scroll:function() {
            var me = this;
            if ( me.document.scrollTop()>= me.footerHeight+ me.icon_dHeight){
                me.main_index.css({
                    height: '100%',
                    overflow: 'visible'
                });
                me.footer.css({
                    position: 'relative'
                });
                me.more_down.hide();
            }
        }
    }
    x.init();
})







