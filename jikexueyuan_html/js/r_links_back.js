
define(function(require, exports, module) {
    var $ = require('juery_1_10');
    /*var $ = require('jquery');*/
    $(document).ready(function() {
        $('#myTab1 a').hover(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    })
});



