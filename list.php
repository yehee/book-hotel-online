<?php
/**
 * Returns the list of cars.
 */

require 'connect.php';
    
$rooms = [];
$sql = "SELECT roomnumber, price FROM vacant_room";
$con = openCon();

if($result = mysqli_query($con, $sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $rooms[$cr]['roomnumber'] = $row['roomnumber'];
    $rooms[$cr]['price']      = $row['price'];
    $cr++;
  }
    
  echo json_encode(['data'=>$rooms]);
}
else
{
  http_response_code(404);
}
CloseCon($con);