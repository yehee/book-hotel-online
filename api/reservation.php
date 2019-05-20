<?php

require 'connect.php';

$res = [];
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$params   = $_POST['params'];
$checkin  = new DateTime($params['checkin']);
$checkout = new DateTime($params['checkout']);
$fname    = $params['fname'];
$lname    = $params['lname'];
$phone    = $params['phone'];
$room     = $params['room'];

// get unique reservation number
do {
  $rid = mt_rand(1000, 10000);
  $sql = "SELECT rid FROM reservations WHERE rid={$rid}";
  if ($result = mysqli_query($con, $sql)) if (mysqli_num_rows($result) == 0) break;
}
while (true);

// create customer profile if not exist already
$sql = "SELECT * FROM customers WHERE pnumber='{$phone}'";
if ($result = mysqli_query($con, $sql)) if(mysqli_num_rows($result) == 0) mysqli_query($con, "INSERT INTO customers VALUES ('{$phone}', '{$fname}', '{$lname}', NULL, NULL)");

$sql = "INSERT INTO reservations VALUES ({$rid}, '{$phone}', '{$checkout->format('Y-m-d')}', '{$checkin->format('Y-m-d')}', '{$room}')";
if ($result = mysqli_query($con, $sql)) $res['rid'] = $rid;
else $res['rid'] = 10001;

echo json_encode(['data'=>$res]);
close($con);