<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Tangani preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Koneksi DB
include 'koneksi.php';

// Validasi method
if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Metode tidak diizinkan"]);
    exit;
}

// Ambil data dari body JSON
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!isset($data['id']) || !is_numeric($data['id'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "ID tidak valid"]);
    exit;
}

$id = intval($data['id']);

// Eksekusi DELETE
$stmt = $conn->prepare("DELETE FROM isi_layanan WHERE id = ?");
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Layanan berhasil dihapus"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Gagal menghapus layanan", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
