var a = $('a', '#navbar');
var aHref;
var link = $('.link','#news_reccomend');
var x = -1;
$(document).ready(function () {
    $(window).on('load',function(){
     setInterval("transfm(link)", 3000);
    });
    a.each(function (i) {
        $(a[i]).on('click', function () {
            aHref = $(this).attr('href');
            link = $('.link', aHref);
        setInterval("transfm(link)", 3000);
        });
    });

})
function transfm(link) {

    /*获得li标签的高度*/
    var linkLength = link.length;
    var middle = Math.ceil(linkLength / 2);
    /*获得li标签的数量*/
    x++;
    if (x <= linkLength - 1 && x >= 0) {
        x = x;
    }
    if (x >= linkLength) {
        x = x - linkLength * Math.floor(x / linkLength);
    }
    link.each(function (i) {
        /*获得每一条热点新闻的Li标签*/
        var itemHeight = parseFloat($(this).height());
        if (i > x) {
            var top1 = itemHeight * ( i - x - middle);
            top1 = top1 + 'px';
            $(this).css({
                    top: top1,

                }
            );
        } else {
            var top2 = itemHeight * ( i + linkLength - x - middle);
            top2 = top2 + 'px';
            $(this).css({
                    top: top2,

                }
            );
        }

    });
}








