<?php
include("news_management.php");//引入链接数据库
if (!empty( $_REQUEST['delete'])) {
    $news_id = $_REQUEST['newsId'];
    $sql = "delete from baidu_news where news_id ='$news_id'";
}
$result= mysql_query($sql);

if (!$result)
{
    die('Error: ' . mysql_error());
}else{
    echo 'delete success';

}

?>





