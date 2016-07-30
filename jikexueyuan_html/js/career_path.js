define(function(require, exports, module) {
    var $ = require('juery_1_10');
   /* var $ = require('jquery');*/
    $(document).ready(function(){
        var learn_item =  $('.learn-item');
        var learnBtn =  $('.learnBtn');
        learn_item.each(function(i){
            $(learn_item[i]).on('mouseenter',function(){

                    $(this).css({
                        border:' 1px solid #00C800'
                    })

                if(i==9){
                    $(learnBtn[i]).css({
                        backgroundColor:'#ccc',
                        color:'#666'
                    });
                }else{
                    $(learnBtn[i]).css({
                        backgroundColor:'#00C800',
                        color:'#fff'
                    });
                }
            }).on('mouseleave',function(){
                $(this).css({
                    border:' 1px solid #DCDCDC'
                });
                if(i==9){
                    $(learnBtn[i]).css({
                        backgroundColor:'#dcdcdc',
                        color:'#666'
                    })
                }else{
                    $(learnBtn[i]).css({
                        backgroundColor:'#f3fff6',
                        color:'#00C800'
                    })
                }
            })

        });
    })
});


