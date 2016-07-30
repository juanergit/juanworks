
define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function(){
        $('#searchIpt').focus(function(){
            $('.ipt-inner-place').hide(0,function(){
                $('.search-input').css({
                    paddingRight:'20px'
                });
                $('#searchBtn').css({
                    backgroundColor:'#00B900',
                    border:'none'
                });
                $('.icon-magnifying-glass').css({
                    color:'#fff'
                })
            })

        }).blur(function(){
            $('.ipt-inner-place').show(0,function(){
                $('#searchBtn').css({
                    backgroundColor:'#fff',
                    border:'1px solid #ccc',
                });
                $('.icon-magnifying-glass').css({
                    color:'#000'
                })
            });
        })

        $('.submit-wrapper').on('mouseenter',function(){
                $('.icon-magnifying-glass').css({
                    color:'#fff'
                });
                $('#searchBtn').css({
                    backgroundColor:'#00B900',
                    border:'none'
                })
            }).on('mouseleave',function(){
            $('.icon-magnifying-glass').css({
                color:'#000'
            })
            $('#searchBtn').css({
                cursor:'pointer',
                backgroundColor:'#fff',
                border:'1px solid #ccc'
            })
        })
    })
});






