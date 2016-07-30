<?php
include("news_management.php");//引入链接数据库
if(!empty($_POST['submit'])){
    $news_id = $_REQUEST['newsId'];
    $news_type =  $_REQUEST['newsType'];
    $news_title =  $_REQUEST['newsTitle'];
    $src =  $_REQUEST['src'];
    $src2 =  $_REQUEST['src2'];
    $src3 =  $_REQUEST['src3'];
    $detail=  $_REQUEST['detail'];
    $address=  $_REQUEST['address'];
    $sql="insert into baidu_news (news_id,news_type,news_title,address,src,src2,src3,detail) value ('$news_id','$news_type',' $news_title',' $address',' $src',' $src2','$src3',' $detail')" ;
  $result= mysql_query($sql);

    if (!$result)
 {
    die('Error: ' . mysql_error());
 }else{
    echo 'success';


 }

}

?>

