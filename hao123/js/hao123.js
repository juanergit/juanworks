
var skin = {

    skinChange:function(num){
        var skinCol = '#ffffff';
        var n = parseFloat(num);
        switch (n) {
            case 1:
                skinCol = '#A8152F';
                break;
            case 2:
                skinCol = ' #ffff00';
                break;
            case 3:
                skinCol = '#339bb9';
                break;
            case 4:
                skinCol = ' #0aa770';
                break;
            case 5:
                skinCol = ' #db7093';
                break;
            default :
                skinCol = '#7fff00';
        }
        var link = document.getElementById('link');
        var sportAct = document.getElementById('sportAct');
        var skinCont = document.getElementsByClassName('skin-cont');
        var bgStick = document.getElementsByClassName('bg-stick');
        link.style.backgroundColor = skinCol;
        for (var i = 0; i < skinCont.length; i++) {
            skinCont[i].style.color = skinCol;
        }
        sportAct.style.borderTopColor = skinCol;
        bgStick[0].style.backgroundColor = skinCol;
        skin.setCookie(num);
    },
    //将当前皮肤n存到cookie
    setCookie: function (num) {
        var expires = new Date();
        expires.setTime(expires.getTime() + 24 * 60 * 60 * 3 * 30 * 1000);
        var skinNum = 'SkinCookie='+ num ;
        document.cookie = skinNum + ";expires=" + expires.toGMTString();
    },
    //返回用户设置的皮肤样式
    readCookie:function(){
        var skin = 0;
        var myCookie = document.cookie;
        var name = 'SkinCookie';
        var start1 = myCookie.indexOf(name + "=");
        if (start1 == -1) {
            skin = 0;//如果没有设置则显示默认样式
        }
        else {
            var start = myCookie.indexOf("=", start1) + 1;
            var end = myCookie.indexOf(";", start);
            if (end = -1) {
                end = myCookie.length;
            }
            var values =myCookie.substring(start, end);
            if (values != null) {
                skin = values;
            }
        }
        return skin;
    }
};

//页面加载完成后设置皮肤样式
 window.onload=function() {
    skin.skinChange(skin.readCookie());//根据读取cookie返回值设置皮肤样式
};

