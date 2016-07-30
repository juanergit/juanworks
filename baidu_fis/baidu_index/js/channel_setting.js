//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法

$(function(){
    var x={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            var me =this;
            me.menu_setting =  $('#menu-setting');
            me.channel_setting =  $('.channel-setting');
        },
        bind:function(){
            var me =this;
            me.menu_setting.on('click',function(){
                me.menu_setting_click();
            })
        },
        menu_setting_click:function(){
            this.channel_setting.slideToggle(0);

        }
    }

    x.init();
})

