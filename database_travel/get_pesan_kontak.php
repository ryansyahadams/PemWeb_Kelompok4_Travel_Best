<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Content-Type: application/json");
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
include 'koneksi.php'; // ✅ Ini yang bener

$sql = "SELECT * FROM pesan_kontak ORDER BY id DESC";
$result = mysqli_query($conn, $sql);

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
?>
