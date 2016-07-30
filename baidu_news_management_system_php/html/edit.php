

<?php
include("news_management.php");//引入链接数据库
header("Content-type: application/json; charset=utf-8");
if(!empty ($_REQUEST['newsId2'])){
    $news_id = $_REQUEST['newsId2'];
$news_type =  $_REQUEST['newsType'];
$news_title =  $_REQUEST['newsTitle'];
$src =  $_REQUEST['src'];
$src2 =  $_REQUEST['src2'];
$src3 =  $_REQUEST['src3'];
$detail=  $_REQUEST['detail'];
$address=  $_REQUEST['address'];
$sql="update baidu_news set news_type =  '$news_type' ,news_title='$news_title',address='$address',src='$src',src2='$src2',src3='$src3',detail=' $detail' where news_id ='$news_id'";
    $result = mysql_query($sql);
    if (!$result)
    {
        die('Error: ' . mysql_error());
    }else{
        echo 'success';

    }
}
?>