<?php

require 'connect.php';

$res = []; $cr = 0;
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$phone = $_POST['params'];

$sql = "SELECT cardnumber, name, type FROM CreditCard WHERE phone='{$phone}'";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $res[$cr]['cardnumber'] = $row['cardnumber'];
    $res[$cr]['name']  = $row['name'];
    $res[$cr]['type']   = $row['type'];
    $cr++;
  }
}

echo json_encode(['data'=>$res]);
close($con);