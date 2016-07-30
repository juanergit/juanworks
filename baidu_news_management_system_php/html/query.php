<?php
include("news_management.php");//引入链接数据库
header("Content-type: application/json; charset=utf-8");
if(!empty ($_REQUEST['newsId'])){
    $news_id = $_REQUEST['newsId'];
    mysql_query("set names'utf8'");
    $sql="select * from baidu_news  where news_id ='$news_id'";
    $result =  mysql_query($sql, $con);
    $arr =array();
    while($row = mysql_fetch_array($result))
    {
        array_push($arr,array('newsId'=>$row['news_id'],'newsType'=> $row['news_type'],'newsTitle'=> $row['news_title'],'src'=> $row['src'],'src2'=> $row['src2'],'src3'=> $row['src3'],'address'=> $row['address'],'detail'=> $row['detail']));

    }
    $result = array("errcode"=>"0","result"=>$arr);
    echo json_encode($result);

}

