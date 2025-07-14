<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Preflight
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

include 'koneksi.php';

// Aktifin error log buat debug
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Ambil data JSON
$data = json_decode(file_get_contents("php://input"), true);

// Validasi input
$nama       = $data["nama"] ?? '';
$email      = $data["email"] ?? '';
$layanan_id = $data["layanan_id"] ?? '';
$catatan    = $data["catatan"] ?? '';
$tanggal    = date("Y-m-d");

if ($nama && $email && $layanan_id) {
    $stmt = $conn->prepare("INSERT INTO pesanan (nama, email, layanan_id, catatan, tanggal) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiss", $nama, $email, $layanan_id, $catatan, $tanggal);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Pesanan berhasil dikirim."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => $stmt->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Data tidak lengkap."]);
}
?>
