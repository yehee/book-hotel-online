<?php

require 'connect.php';

$res = []; $cr = 0;
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$phone = $_POST['params'];

$sql = "SELECT checkindate, checkoutdate, roomnum FROM Reservations WHERE pnumber='{$phone}'";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $res[$cr]['checkindate'] = $row['checkindate'];
    $res[$cr]['checkoutdate']  = $row['checkoutdate'];
    $res[$cr]['roomnum']   = $row['roomnum'];
    $cr++;
  }
}

echo json_encode(['data'=>$res]);
close($con);