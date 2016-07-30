$(document).ready(function(){
    $(window).on('load',function(){
        newsManegementAjax();
    })
    //新闻管理后台系统的添加功能实现
    $('#add').on('click', function (e) {
        e.preventDefault();
        var news_id_c= $('#newsId').val();
        var   news_type_c= $('#newsType').val();
        var  news_title_c= $('#newsTitle').val();
        var  src_c= $('#src_f').val();
        var src2_c=$('#src_s').val();
        var src3_c= $('#src_t').val();
        var detail_c= $('#detail').val();
        var address_c=$('#address').val();
        var s = news_id_c+'/'+news_type_c+'/'+news_title_c+'/'+src_c+
            '/'+src2_c+'/'+src3_c+'/'+detail_c+'/'+address_c;
        $.ajax({
            url: 'http://127.0.0.1:3900/add/'+s,
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
        })
    })

//新闻管理后台系统删除功能实现
    $('#delete').on('click', function (e) {
        e.preventDefault();
        var news_id_d= $('#newsId').val();
        $.ajax({
            url: 'http://127.0.0.1:3900/delete/'+news_id_d,
            method: 'get',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            },
            error: function () {
                alert('失败了');
            }
        })
    })

    //新闻管理后台系统查询功能实现
    $('#getNews').on('click', function (e) {
        e.preventDefault();
        var news_id= $('#newsId').val();
        $.ajax({
            url: 'http://127.0.0.1:3900/getnews/'+news_id,
            type: 'get',
            success: function (data) {
                console.log(data);
                renderPage(data)

            },
            error: function () {
                alert('登陆失败')
            },

        });
        $('#newsId').attr("disabled", "disabled");

    })

    //新闻管理后台系统修改功能实现
    $('#change').on('click', function (e) {
        e.preventDefault();
        var news_id= $('#newsId').val();
        var   news_type= $('#newsType').val();
        var  news_title= $('#newsTitle').val();
        var  src= $('#src_f').val();
        var src2=$('#src_s').val();
        var src3= $('#src_t').val();
        var detail= $('#detail').val();
        var address=$('#address').val();
        var s = news_id+'/'+news_type+'/'+news_title+'/'+src+
            '/'+src2+'/'+src3+'/'+detail+'/'+address;
        $.ajax({
            url: 'http://127.0.0.1:3900/hello/'+s,
            method: 'get',
            dataType: 'json',

        })
        $('#newsId').removeAttr("disabled");
        $('#newsId').val('');
        $('#newsType').val('');
        $('#newsTitle').val('');
        $('#src_f').val('');
        $('#src_s').val('');
        $('#src_t').val('');
        $('#detail').val('');
        $('#address').val('');
        alert('修改成功');
    })

    //查询功能实现调用函数
    function renderPage(data) {
        var newsId = $('#newsId');
        var newsType = $('#newsType');
        var newsTitle = $('#newsTitle');
        var src_f = $('#src_f');
        var src_s = $('#src_s');
        var src_t = $('#src_t');
        var detail = $('#detail')
        var address = $('#address');
        var news =data[0];
        newsType.val(news['news_type']);
        newsTitle.val(news['news_title']);
        address.val(news['address']);
        src_f.val(news['src']);
        src_s.val(news['src2']);
        src_t.val(news['src3']);
        detail.val(news['detail']);
    }

    //新问后台管理系统刷新功能
    $('#refreshBtn').on('click', function (e) {
        e.preventDefault();
        //   console.log(tabelTd)
        newsManegementAjax()
    })
    $('#pagination_ul li').on('click','span',function(){
        var span = $(this).html();
        var spanHtml = parseFloat($(this).html());
        if(isNaN(spanHtml)){
            if(span == 'first'){
                newsManegementAjax()
            }else{
                var preHtml =$('#last').parent().prev().find('span').html();;
                preHtml =parseFloat(preHtml);
                newsManegementAjax3(preHtml);
            }

        }else{
            newsManegementAjax3(spanHtml);
        }
    })



    function newsManegementAjax3(spanHtml){
        $.ajax({
            url: 'http://127.0.0.1:3900/main/1',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                renderPage_m3(data,spanHtml);
            },
            error: function () {
                alert('失败了');
            }
        })
    }
    function  renderPage_m3(data,spanHtml){
        var tabelTd = $('#newsTable tr td');
        var tableTr = $('#newsTable tr');
        var tableLength =parseFloat($('#newsTable tr').length);
        var tbodyLength  = tableLength-1;
        var tableCols = $("#newsTable").find("tr").find("td").length;
        var result =data;
        var resultLength = result.length;
        tableTr.each(function(i){

                var j;
                j= i + tbodyLength*(spanHtml-1)
            if( resultLength>j) {
                var news = result[j]
                $(tableTr[i+1]).find('td').eq(0).html(news['news_id']);
                $(tableTr[i+1]).find('td').eq(1).html(news['news_type']);
                $(tableTr[i+1]).find('td').eq(2).html(news['news_title']);
                $(tableTr[i+1]).find('td').eq(3).html(news['src']);
                $(tableTr[i+1]).find('td').eq(4).html(news['src2']);
                $(tableTr[i+1]).find('td').eq(5).html(news['src3']);
                $(tableTr[i+1]).find('td').eq(6).html(news['detail']);
                $(tableTr[i+1]).find('td').eq(7).html(news['address']);
                if(i==tableLength-1){
                    i= i+1;
                }
            }else{
                    $(tableTr[i+1]).find('td').eq(0).html('');
                    $(tableTr[i+1]).find('td').eq(1).html('');
                    $(tableTr[i+1]).find('td').eq(2).html('');
                    $(tableTr[i+1]).find('td').eq(3).html('');
                    $(tableTr[i+1]).find('td').eq(4).html('');
                    $(tableTr[i+1]).find('td').eq(5).html('');
                    $(tableTr[i+1]).find('td').eq(6).html('');
                    $(tableTr[i+1]).find('td').eq(7).html('');
                }

        })
    }
    function newsManegementAjax(){
        $.ajax({
            url: 'http://127.0.0.1:3900/main/1',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                renderPage_m(data);
            },
            error: function () {
                alert('失败了');
            }
        })
    }
    function renderPage_m(data){
        var tabelTd = $('#newsTable tr td');
        var tableTr = $('#newsTable tr');
        var tableLength =$('#newsTable tr').length;
        var tableCols = $("#newsTable").find("tr").find("td").length;
        var result =data;
        tableTr.each(function(i){
            var news = result[i]
            $(tableTr[i+1]).find('td').eq(0).html(news['news_id']);
            $(tableTr[i+1]).find('td').eq(1).html(news['news_type']);
            $(tableTr[i+1]).find('td').eq(2).html(news['news_title']);
            $(tableTr[i+1]).find('td').eq(3).html(news['src']);
            $(tableTr[i+1]).find('td').eq(4).html(news['src2']);
            $(tableTr[i+1]).find('td').eq(5).html(news['src3']);
            $(tableTr[i+1]).find('td').eq(6).html(news['detail']);
            $(tableTr[i+1]).find('td').eq(7).html(news['address']);
            if(i==tableLength-1){
                i= i+1;
            }

        })
    }
})
//左边菜单栏的显示、隐藏转换
function show(id)
{
    var ul =document.getElementById(id);
    if(ul.style.display=="block"){
        ul.style.display="none";
    }else{
        ul.style.display="block";
    }
}


