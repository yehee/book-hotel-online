<?php

require 'connect.php';

$res = []; $cr = 0;
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$phone = $_POST['params'];

$sql = "SELECT roomnum, nobeds, price FROM Rooms WHERE roomnum IN (SELECT room FROM Liked WHERE phone='{$phone}')";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $res[$cr]['roomnum'] = $row['roomnum'];
    $res[$cr]['nobeds']  = $row['nobeds'];
    $res[$cr]['price']   = $row['price'];
    $cr++;
  }
}

echo json_encode(['data'=>$res]);
close($con);