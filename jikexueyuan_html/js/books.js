define(function(require, exports, module) {
    var $ = require('juery_1_10');
   /* var $ = require('jquery');*/

    $(document).ready(function(){
        var booksBox = $('.b-w-con');/*获得Wiki系列的三个盒子*/
        var bookPicBox = $('.book-pic');/*获得每个盒子书外面的盒子*/
        var bookpics = $('.book-pic img'); /*获得每本书的图片*/
        var lookBox = $('.book-pic .look')
        booksBox.each(function(i){
            $(booksBox[i]).on('mouseenter',function(){
                $(booksBox[i]).css({
                    border:'1px solid #00C800'
                })
                bookPicBox.each(function(j){
                    $(bookpics[j]).on('mouseenter',function(){
                        $(bookpics[j]).css({
                            '-moz-transform':'rotateY(18deg)',
                            '-webkit-transform': 'rotateY(18deg)',
                            '-ms-transform': 'rotateY(18deg)',
                            'transform':'rotateY(18deg)',
                            '-moz-transform[-origin':'left center',
                            '-webkit-transform-origin': 'left center',
                            '-ms-transform-origin':'left center',
                            'transform-origin': 'left center'
                        })
                        $(lookBox[j]).show(500);
                    }).on('mouseleave',function(){
                        $(bookpics[j]).css({
                            '-moz-transform':'rotateY(0deg)',
                            '-webkit-transform': 'rotateY(0deg)',
                            '-ms-transform': 'rotateY(0deg)',
                            'transform':'rotateY(0deg)',
                            '-moz-transform[-origin':'left center',
                            '-webkit-transform-origin': 'left center',
                            '-ms-transform-origin':'left center',
                            'transform-origin': 'left center'
                        })
                        $(lookBox[j]).hide(500);
                    })

                })
            }).on('mouseleave',function(){
                $(booksBox[i]).css({
                    border:'1px solid #DCDCDC'
                })
            })
        })
    })
});




