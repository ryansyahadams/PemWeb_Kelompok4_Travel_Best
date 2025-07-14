<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
ini_set('display_errors', 1);
error_reporting(E_ALL);

include "koneksi.php";

$sql = "SELECT p.id, p.nama, p.email, l.judul AS layanan, p.catatan, p.tanggal 
        FROM pesanan p 
        JOIN isi_layanan l ON p.layanan_id = l.id 
        ORDER BY p.id DESC";

$result = mysqli_query($conn, $sql);

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);
?>
