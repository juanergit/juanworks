
//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法

$(function () {
    var x = {
        init: function () {
            this.render();
            this.bind();
            this.bind2();
            this.bind3();
        },
        render: function () {
            var me = this;
            me.s_skin = $('#s_skin');
            me.skin_series = $('#skin_series');
            me.closeBtn = $('#closeBtn');
            me.content_footer = $('#content_wrapper,#footerPart');
        },
        bind: function () {
            var me = this;
            me.s_skin.click(function () {
                me.skin_slideDown();
            })
        },
        bind2: function () {
            var me = this;
            me.closeBtn.click(function () {
                me.skin_slideUp();
            })
        },
        bind3: function () {
            var me = this;
            me.content_footer.click(function () {
                me.skin_slideUp();
            })
        },
        skin_slideDown: function () {
            var me = this;
            me.skin_series.slideDown();
        },
        skin_slideUp: function () {
            var me = this;
            me.skin_series.slideUp();
        }
    }
    x.init();
})
