<?php

require 'connect.php';

$con = connect();
$_POST = json_decode(file_get_contents('php://input'), true);
$checkin = new DateTime($_POST['date']['checkin']);
$checkout = new DateTime($_POST['date']['checkout']);
$size = $_POST['date']['size'];
$res = [];
$cr = 0;
$sql = "SELECT roomnum, nobeds, cleanliness, price FROM rooms r WHERE r.roomnum NOT IN (SELECT DISTINCT rv.roomnum FROM reservations rv WHERE rv.roomnum IS NOT NULL AND checkoutDate > '{$checkin->format('Y-m-d')}' AND checkinDate <= '{$checkout->format('Y-m-d')}')";
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