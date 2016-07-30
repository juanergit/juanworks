<?php
//第一步：链接数据库
$con = mysql_connect("localhost","root","");
//第二步: 选择指定的数据库，设置字符集 
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}else {
    mysql_select_db("news", $con);
    mysql_query("set names'utf8'");
}
?>

