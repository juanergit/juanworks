//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法
$(document).ready(function () {
    var all = {
        x1: { //实现页面右边更多产品的下的UL的显示与隐藏；
            init: function () { //这个this指向了x1，因为x1调用；
                this.render();//获得 drop1,more_ul,product_more
                this.bind();//执行drop1.mouseenter事件
                this.bind2();//执行drop1.mouseleave事件
            },
            render: function () {
                var me = this; //缓存this指针，目前指向x1;
                me.drop1 = $('#drop3');//取到jquery对象，为x1添加drop1属性
                me.more_ul = $('#more_ul');//为x1添加more_ul属性;
                me.product_more = $('#product_more'); //为x1添加product_more属性;
                me.more_ul_a = $('a','#more_ul');
            },
            bind: function () {
                var me = this;//缓存this指针，目前指向x1;
                me.drop1.on('mouseenter', function () {
                    me.drop3MouseEnter();
                })
            },
            bind2: function () {
                var me = this;//缓存this指针，目前指向x1;
                me.drop1.on('mouseleave', function () {
                    me.drop3MouseLeave();
                })
            },
            drop3MouseEnter: function () {
                var me = this;
                me.more_ul.slideDown(100);
                me.more_ul_a.css({
                    color:'#333'
                })
                me.product_more.css({
                    'background-color': '#f8f8ff',
                    'color': '#666'
                });

            },
            drop3MouseLeave: function () {
                var me = this;
                me.more_ul.slideUp(50);
                me.product_more.css({
                    'background-color': '#3385ff',
                    'color': '#fff'
                });
            }
        },
        x2: { //使用bootstrap的js,达不成我的目的，x2的目的是实现绑定函数解绑,方便接下来的js代码书写；
            init: function () {
                this.render();
                this.bind();
            },
            render: function () {
                var me = this;
                me.document = $(document);
            },
            bind: function () {
                var me = this;
                me.document.off('.dropdown.data-api');
            }
        },
        x3: { //实现设置按钮下的菜单的显示与隐藏
            init: function () {
                this.render();
                this.bind();
                this.bind2();
            },
            render: function () {
                var me = this;
                me.drop1 = $('#drop1');
                me.ddMenu = $('#ddMenu');
            },
            bind: function () {
                var me = this;
                me.drop1.on('mouseenter', function () {
                    me.drop1MouseEnter();
                })
            },
            bind2: function () {
                var me = this;
                me.drop1.on('mouseleave', function () {
                    me.drop1MouseLeave();
                })
            },
            drop1MouseEnter: function () {
                var me = this;
                me.ddMenu.show(100);
                me.ddMenu.css({
                    top:'28px'
                })
            },
            drop1MouseLeave: function () {
                var me = this;
                me.ddMenu.hide(100);
            }
        },
        x4: { //实现登陆按钮 会员划过按钮 下拉菜单的显示与隐藏
            init: function () {
                this.render();
                this.bind();
                this.bind2();
            },
            render: function () {
                var me = this;
                me.drop2 = $('#drop2');
                me.ddMenu2 = $('#ddMenu2');
            },
            bind: function () {
                var me = this;
                me.drop2.on('mouseenter', function () {
                    me.drop2MouseEnter();
                })
            },
            bind2: function () {
                var me = this;
                me.drop2.on('mouseleave', function () {
                    me.drop2MouseLeave();
                })
            },
            drop2MouseEnter: function () {
                var me = this;
                me.ddMenu2.show(100);
                me.ddMenu2.css({
                    top:'28px'
                })
            },
            drop2MouseLeave: function () {
                var me = this;
                me.ddMenu2.hide(100);
            }
        }
    };
    all.x1.init();
    all.x2.init();
    all.x3.init();
    all.x4.init();
});
