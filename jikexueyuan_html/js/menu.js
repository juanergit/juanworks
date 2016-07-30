define(function(require, exports, module) {
    var $ = require('juery_1_10');
  /*  var $ = require('jquery');*/
  //  require('jquery_ui')($);
    $(document).ready(function(){
        var left_aside_items = $('.left_aside_items','#menu');
        var left_aside_item = $('.left_aside_item','#menu');
        left_aside_items.each(function(i){
           $(this).on('mouseenter',function(){
               $(left_aside_item[i]).show();
           }).on('mouseleave',function(){
               $(left_aside_item[i]).hide();
           })
       });

    })
});


