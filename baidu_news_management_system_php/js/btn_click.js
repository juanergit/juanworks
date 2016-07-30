
    var a =$('a','#navbar');
    var aHref = '#news_reccomend';
    var  imgSeries ;
    var news_item_info;
    var news_item_info_content;
    var  aHtml = '推荐';
    $(function(){
        $(window).on('load',function(){
            titleAjax(aHref,aHtml);
        })
    })
    a.each(function(i){
        $(a[i]).on('click',function(){
            aHtml = $(this).html();
            aHref = $(this).attr('href');
            titleAjax(aHref,aHtml);

        });
    });

    function titleAjax(aHref,aHtml){
        $.ajax({
            url:'../html/News.php',
            method:'post',
            data:{
                news_type:aHtml
            },
            dataType:'json',
            success:function(data){
                imgSeries = $('img', aHref);
                news_item_info = $('.news-item-info',aHref);
                news_item_info_content =  $('.news-item-info-content',aHref);
                renderPage(data);
            },
            error:function(){
                alert('失败了');
            }
        })
    }
    function renderPage(data){
        var result =data['result'];
        var j =0 ;
        var z =0;
        for(var i=0;i<result.length;i++){
            var news = result[i]
                $(news_item_info[i]).html(news['newsTitle']);
            var detail = news['detail']
            if(detail!=null && detail !=''){
                $(news_item_info_content[z]).html(detail);
                z++;
            }


            var address=news['address'];
            address = parseFloat(address);
            switch(address){
                case 1:
                    $(imgSeries[j]).attr('src',news['src']);
                    j = j+1;
                    break;
                case 2:
                    break;
                case 3:
                    $(imgSeries[j]).attr('src',news['src']);
                    j = j+1;
                    break;
                case 5:
                    $(imgSeries[j]).attr('src',news['src']);
                    $(imgSeries[j+1]).attr('src',news['src2']);
                    $(imgSeries[j+2]).attr('src',news['src3']);
                    j= j+ 3;
                    break;
                default :
                    break;
            }


        }
    }

