<?php
header("Content-type: application/json; charset=utf-8");
$con = mysql_connect("localhost","root","");
$news_type =  $_REQUEST['news_type'];
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}else{
     mysql_select_db("news", $con);
    mysql_query("set names'utf8'");
    $sql = "select*from baidu_news WHERE news_type= '".$news_type."'";
    $result =  mysql_query($sql, $con);



$arr =array();
    while($row = mysql_fetch_array($result))
    {
        array_push($arr,array('newsId'=>$row['news_id'],'newsType'=> $row['news_type'],'newsTitle'=> $row['news_title'],'src'=> $row['src'],'src2'=> $row['src2'],'src3'=> $row['src3'],'address'=> $row['address'],'detail'=> $row['detail']));

    }
    $result = array("errcode"=>"0","result"=>$arr);
    echo json_encode($result);

}



mysql_close($con);
?>