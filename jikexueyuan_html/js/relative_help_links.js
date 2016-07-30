

define(function(require, exports, module) {
    var $ = require('juery_1_10');
/*    var $ = require('jquery');*/
    $(document).ready(function () {
        $('.r-links-top').on('mouseenter', function () {
            $('.help-links-back').show(0, function () {
                $('.help-links-fore').hide();
            })
        })
        $('.help-links-back').on('mouseenter', function () {
            $('.help-links-back').show(0, function () {
                $('.help-links-fore').hide();
            })
        }).on('mouseleave', function () {
            $('.help-links-back').hide(0, function () {
                $('.help-links-fore').show();
            })
        });


    })
});




