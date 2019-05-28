<?php

require 'connect.php';

$res = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$id = $_POST['id'];

$sql = "SELECT roomnum, nobeds, price FROM rooms WHERE roomnum = {$id}";
if ($result = mysqli_query($con, $sql)) {
  $row = mysqli_fetch_assoc($result);
  $res['roomnum'] = $row['roomnum'];
  $res['nobeds']  = $row['nobeds'];
  $res['price']   = $row['price'];
}

echo json_encode(['data'=>$res]);
close($con);