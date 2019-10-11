<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Method:POST,GET");
$un = $_REQUEST["un"];
$pw = $_REQUEST["pw"];
$conn = mysqli_connect("localhost","root","root","hh",3306);
if(mysqli_connect_error()){
    die("fail");
}
$query = "SELECT * FROM info WHERE username='$un'";
$result = mysqli_query($conn,$query);
$row = mysqli_num_rows($result);
if($row){
    echo 0;
}else{
    echo 111;
    echo json_encode("$_REQUEST")
    $insert = "INSERT INTO info (username,password) VALUES ('$un','$pw')";
}
?>