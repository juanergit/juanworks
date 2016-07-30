$(function(){
    var myscroll = new  IScroll('#news_content');//IScroll所在的容器必须设置为absolute overflow:hidden; opacity box-shadow text-shadow border-radius 多应该避免使用；
  /* attachEvent( $('#fliter_list li'),function(){ //屏幕按下  touchstart  //触碰离开 touchend  //触碰移动 touchmove
       $(this).remove();
   })*/
    alert(1);
})
/*
function attachEvent(src,cb){  //src为被操作的元素  sb为操作
    $(src).unbind();
    var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if(isTouchDevice){ //触摸屏
        $(src).bind('touchstart',function(){
            $(this).data('touchon',true);
            $(this).addClass('pressed');
        })
        $(src).bind('touchend',function(){
            if($(this).data('touchon')){
                cb.bind(this)();
            }
            $(this).data('touchon',false);
        })

        $(src).bind('touchmove',function(){
            $(this).data('touchon',false);
            $(this).removeClass('pressed');
        })
    }else{ //Pc端
        $(src).bind('touchdown',function(){
            $(this).addClass('pressed');
            $(this).data('touchon',true);
        })
        $(src).bind('touchup',function() {
            $(this).data('touchon', false);
            $(this).removeClass('pressed');
            cb.bind(this)();
        })

    }


}*/
