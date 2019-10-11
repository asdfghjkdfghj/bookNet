<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
$un = $_REQUEST["un"];
$pw = $_REQUEST["pw"];
$conn = mysqli_connect("localhost","root","root","hh",3306);
if(mysqli_connect_error()){
    die("fail");
}
$queryname = "SELECT * FROM info WHERE username='$un'";
$resultname = mysqli_query($conn,$queryname);
$rowname = mysqli_num_rows($resultname);
$query = "SELECT * FROM info WHERE username='$un' AND password='$pw'";
$result = mysqli_query($conn,$query);
$row = mysqli_num_rows($result);
$num = $row + $rowname;
if($rowname){
    if($row){
     echo 2;
  }else{
     echo 1; 
 }	
}else{
     echo 0;
 }
?>