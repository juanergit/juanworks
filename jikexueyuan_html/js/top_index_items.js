
define(function(require, exports, module) {
    var $ = require('juery_1_10');
 /*   var $ = require('jquery');*/
    $(document).ready(function(){
        $('.top-index-items').on('mouseenter',function(){
            $('.top-indexs-dropdown').show(0,function(){
                $('.course-vocational').on('mouseenter',function() {
                    $(this).css({
                        backgroundColor: '#F2F2F2'
                    })
                }).on('mouseleave',function(){
                    $(this).css({
                        backgroundColor:'#fff'
                    })
                });
                $('.work-study').on('mouseenter',function() {
                    $(this).css({
                        backgroundColor: '#F2F2F2'
                    })
                }).on('mouseleave',function(){
                    $(this).css({
                        backgroundColor:'#fff'
                    })
                });
                $('.community-jike').on('mouseenter',function() {
                    $(this).css({
                        backgroundColor: '#F2F2F2'
                    })
                }).on('mouseleave',function(){
                    $(this).css({
                        backgroundColor:'#fff'
                    })
                });
                $('.other-jike').on('mouseenter',function() {
                    $(this).css({
                        backgroundColor: '#F2F2F2'
                    })
                }).on('mouseleave',function(){
                    $(this).css({
                        backgroundColor:'#fff'
                    })
                });
            })
        })
        $('.top-indexs-dropdown').on('mouseleave',function(){
            $(this).hide();
        }).on('mouseenter',function(){
            $('.top-indexs-dropdown').show()
        }) ;

        $('.top-index-items').on('mouseleave',function(){
            $('.top-indexs-dropdown').hide();
        }).on();
        $('.top_index_item2').on('mouseenter',function(){
            $('.course-vocational').css({
                backgroundColor:'#F2F2F2'
            })
        }).on('mouseleave',function(){
            $('.course-vocational').css({
                backgroundColor:'#fff'
            })
        });
        $('.top_index_item3').on('mouseenter',function(){
            $('.work-study').css({
                backgroundColor:'#F2F2F2'
            })
        }).on('mouseleave',function() {
            $('.work-study').css({
                backgroundColor: '#fff'
            });
        })
        $('.top_index_item4').on('mouseenter',function(){
            $('.community-jike').css({
                backgroundColor:'#F2F2F2'
            })
        }).on('mouseleave',function() {
            $('.community-jike').css({
                backgroundColor: '#fff'
            })
        });
        $('.top_index_item5').on('mouseenter',function(){
            $('.other-jike').css({
                backgroundColor:'#F2F2F2'
            })
        }).on('mouseleave',function() {
            $('.other-jike').css({
                backgroundColor: '#fff'
            })
        })
    })
});


