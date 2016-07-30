<?php
header("Content-type: application/json; charset=utf-8");
//$arr = $cars=array("我","BMW","SAAB");;
//echo json_encode($arr);
//session_start();
//$_SESSION['views']=1;

$username =$_REQUEST['username'];
if($username == 'admin'){
    Header("Location: news_management.html");
}else{
  Header("Location: logged_system.html");

};
?>