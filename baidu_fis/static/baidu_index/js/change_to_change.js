//使用单例模式，
//原因：保护自己的属性和方法
// 好处：如果以后要扩展该对象，可以添加自己的私有成员和方法，然后使用闭包在其内部封装这些变量和函数声明。
// 只暴露自己想暴露的public成员和方法


//模式：工厂模式
//原因：需要根据环境创建不同的实例
//好处：用工厂模式，只需要修改工厂代码。其他地方引用工厂，可以做到只修改一个地方，其他代码都不动。

$(document).ready(function () {
        var mySingleton  = function () {
        /* 这里声明私有变量和方法 */
        var j = 0;
        var data = {
            news: [
                {title: "2016全国高考"}, {title: "团伙抢劫打伤民警"}, {title: "丽江古城欠15亿"}, {title: "高考教师天团进京"}, {title: "高考最牛钉子户"}, {title: "吴彦祖与爱妻自拍"},
                {title: "小S回归综艺舞台"}, {title: "男子悬崖边骑摩托"}, {title: "高考漫画作文走红"}, {title: "父亲将孩子锁冰柜"}, {title: "歹徒抢劫叫嚣警察"}, {title: "男子求婚羊驼抢镜"},
                {title: "警察突袭传销窝点"}, {title: "希拉里代表票达标"}, {title: "李连杰进军真人秀"}, {title: "高考作文题目出炉"}, {title: " 中泰联合训练落幕"},
                {title: " 大额存单门槛下调"}, {title: "众明星为考生助威"}, {title: " 端午假期门诊安排"}, {title: " 郑州公交爱心车厢"}, {title: " 普京将访通讯社"}, {title: " 波兰北约联合军演"},
                {title: " 四川广元翻船事故"}, {title: " 中美战略经济对话"}, {title: " 父亲将孩子锁冰柜"}, {title: " 上午产子下午上课"}, {title: " 吴彦祖与爱妻自拍"},
                {title: "离婚路上丈夫救人"}, {title: "墨西哥地震"}, {title: " 王源放学遭尾随"}, {title: " 琅琊榜香港遇冷"}, {title: "北京最荒凉地铁站"}, {title: "广电第四大运营商"},
                {title: "女主播不许吃香蕉"}, {title: "村支书号称万岁"}, {title: "为戒赌钓到螺蛳青"}, {title: "泡动物药酒卖判刑"}, {title: "周慧敏现身挺黎明"}, {title: "葛天机场照曝光"},
                {title: "印度母牛产下神牛"}, {title: "超级草莓双城落幕"}, {title: "明思克航母抵南通"}, {title: "徐娇红裙秀美腿"}, {title: "高校出现龌龊男"}, {title: "农民小伙自费出刊"},
                {title: "女子动车拒让座"}, {title: "富商娶同学女儿"}]
        };

        function showPrivate() {
            $('.change-to-change').click(function () {
                hot_series.change();
            });
        }
            var hot_series = function(){  //使用工厂方法

            };
            hot_series.change = function(){
                var interNum1 = 15;//第一个结束点
                var interNum2 = 31; //第二个结束点
                var news = data.news;
                var a = $('.hot-series-txt');
                $.each(a, function (i, value) {
                    if (j >= 0 && j < 16){
                        j = i;
                        $(value).html(news[j].title);
                        if (j == interNum1) {
                            j = j + 1;
                        }
                    } else {
                        if (j == interNum2) {
                            j = j + 1;
                        }
                        j = Math.floor(j / 16) * 16 + i;
                        $(value).html(news[j].title);
                        if (j == news.length - 1) {
                            j = 0;
                            return j;
                        }
                    }
                });
            }
        /* 公有变量和方法（可以访问私有变量和方法） */
        return {
            publicMethod: function () {
                showPrivate();
            },
            publicVar: 'the public can see this!'
        };

    };
    var single = mySingleton();
    single.publicMethod();
});





