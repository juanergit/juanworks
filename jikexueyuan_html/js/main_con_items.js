define(function (require, exports, module) {
    var $ = require('juery_1_10');
    /* var $ = require('jquery');*/
    $(document).ready(function () {
        $('#myTab2 a').hover(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
        var r_h_item = $('.tab-content .tab-pane .r-h-item');
        var item_hover_bg = $('.tab-content .tab-pane .r-h-item .item-hover-bg');
        var item_info = $('.tab-content .tab-pane .r-h-item .item-info ');
        var title_notes = $('.tab-content .tab-pane .r-h-item .item-info .title-notes');
        var count = $('.tab-content .tab-pane .r-h-item .item-info .r-h-sub-info .count');
        var level = $('.tab-content .tab-pane .r-h-item .item-info .r-h-sub-info .level');
        var a = $('#myTab2 li a');
        var tab_pane = $('.tab-pane','#main_con');
        var aStr = [];
        tab_pane.each(function(i){
          $(this).on('mouseenter',function(){
             $(a[i]).css({
                 color: '#00C800',
                 borderBottom: '2px solid #00C800'
             })
          }).on('mouseleave', function () {
              $(a[i]).css({
                  color: '#666',
                  borderBottom: '1px solid #F5F5F5'
              });
          })
      })

        a.each(function (i) {
            var a1 = a.eq(i);
            aStr[i] = a1;
            a1.on('mouseenter', function () {
                $(aStr[i]).css({
                    color: '#00C800',
                    borderBottom: '2px solid #00C800'
                }).on('mouseleave', function () {
                    $(aStr[i]).css({
                        color: '#666',
                        borderBottom: 'none'
                    });
                })
            })
        });
        r_h_item.each(function (i) {
            $(r_h_item[i]).on('mouseenter', function () {
                $(item_hover_bg[i]).fadeIn(400, function () {
                });
                $(title_notes[i]).slideDown(200)
                $(count[i]).show(0, function () {
                    $(level[i]).show(0);
                })
            }).on('mouseleave',function () {
                $(title_notes[i]).slideUp(300,function(){
                    $(level[i]).hide(0,function(){
                        $(count[i]).hide(0)
                    })
                    $(item_hover_bg[i]).fadeOut(400);
                });
            })
        })

    })
});



