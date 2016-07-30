
define(function(require, exports, module) {
    var $ = require('juery_1_10');
   /* var $ = require('jquery');*/
    require('bootstrap_ui')($);
    $(document).ready(function(){
        $(document).off('.dropdown.data-api');
        $('#dropDownVip').on('mouseenter',function(){
            $('.dropdown-menu').show(0,function(){
                $('.icon-to-up').show(0,function(){
                    $('.icon-down').hide();
                });

            });
        }).on('mouseleave',function(){
            $('.dropdown-menu').hide(0,function(){
                $('.icon-down').show();
                $('.icon-to-up').hide();
            });
        })
    })
});


