define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function(){
        var k_s_box =  $('.k-s-box');/*���֪ʶ��ϵͼϵ��ÿ�����Ӽ���*/
        var con_front =  $('.con-front');/*���ÿ�����ӵ�ǰ�������*/
        var con_back = $('.con-back');/*���ÿ�����ӵĺ��������*/
        k_s_box.each(function(i){ /*ʹ��each��������ÿ������*/
            $(k_s_box[i]).on('mouseenter',function(){
                $(con_front[i]).css({
                    '-moz-transform':'rotateY(180deg)',
                    '-webkit-transform': 'rotateY(180deg)',
                    '-ms-transform': 'rotateY(180deg)',
                    transform: 'rotateY(180deg)'
                });
                $(con_back[i]).show(0,function(){
                    $(con_back[i]).css({
                        '-moz-transform':'rotateY(0deg)',
                        '-webkit-transform': 'rotateY(0deg)',
                        '-ms-transform': 'rotateY(0deg)',
                        transform: 'rotateY(0deg)'
                    })
                })
            }).on('mouseleave',function(){
                $(con_front[i]).css({
                    '-moz-transform':'rotateY(0deg)',
                    '-webkit-transform': 'rotateY(0deg)',
                    '-ms-transform': 'rotateY(0deg)',
                    transform: 'rotateY(0deg)'
                });
                $(con_back[i]).show(0,function(){
                    $(con_back[i]).css({
                        '-moz-transform':'rotateY(180deg)',
                        '-webkit-transform': 'rotateY(180deg)',
                        '-ms-transform': 'rotateY(180deg)',
                        transform: 'rotateY(180deg)'
                    })
                })
            })
        })
    })
});







