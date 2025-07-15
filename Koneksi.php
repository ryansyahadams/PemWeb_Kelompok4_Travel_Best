<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


$host = "localhost";
$user = "root";
$pass = "";
$db   = "travel_database";

$conn = mysqli_connect($host, $user, $pass, $db);


if (!$conn) {
  http_response_code(500);
  die(json_encode([
    "status" => "error",
    "message" => "Koneksi ke database gagal: " . mysqli_connect_error()
  ]));
}
?>
