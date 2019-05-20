<?php

require 'connect.php';

$res = []; $cr = 0;
$con = connect();

$_POST = json_decode(file_get_contents('php://input'), true);

$phone = $_POST['params'];

$sql = "SELECT B.bid, B.amount FROM Transactions T, Bills B, Pays P WHERE T.tid=P.tid AND B.bid=P.bid AND P.pnumber='{$phone}'";
if ($result = mysqli_query($con, $sql)) {
  while($row = mysqli_fetch_assoc($result)) {
    $res[$cr]['bid'] = $row['bid'];
    $res[$cr]['amount'] = $row['amount'];
    $cr++;
  }
}

echo json_encode(['data'=>$res]);
close($con);