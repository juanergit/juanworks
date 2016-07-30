//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法

$(function(){
    var x = {
        init:function(){//函数的初始化，也是单利唯一的访问点，保护本身的属性和方法
            this.render();//取到('#landing-aid')
            this.bind();//执行相关的操作
        },
        render:function(){
            var me = this;//缓存当前对象的指针
            me.aid =  $('#landing-aid');//获得$('#landing-aid')
        },
        bind:function(){
            var me = this;//缓存this指针
            me.aid.click(function(){
                me.click();
            })
        },
        click:function(){
            $(this).css({ //this指向了$('#landing-aid')
                outline:'none',
                boxShadow: 'none',
            });
        }
    }
    x.init();
});
