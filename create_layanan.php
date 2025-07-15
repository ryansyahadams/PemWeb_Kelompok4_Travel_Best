<?php
// === CORS ===
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// === Preflight ===
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// === Koneksi ===
include 'koneksi.php';

// === Ambil data JSON ===
$data = json_decode(file_get_contents("php://input"), true);

// === Validasi ===
if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Data kosong"]);
    exit;
}

// Ambil data
$judul = $data['judul'] ?? '';
$tujuan = $data['tujuan'] ?? '';
$harga = $data['harga'] ?? '';
$pesawat = $data['pesawat'] ?? '';
$hotel = $data['hotel'] ?? '';
$itinerary = $data['itinerary'] ?? '';
$tanggal_berangkat = $data['tanggal_berangkat'] ?? '';
$tanggal_pulang = $data['tanggal_pulang'] ?? '';

// Validasi wajib
if (!$judul || !$tujuan || !$harga) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Field wajib kosong"]);
    exit;
}

// Query insert
$sql = "INSERT INTO isi_layanan (judul, tujuan, harga, pesawat, hotel, itinerary, tanggal_berangkat, tanggal_pulang) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssss", $judul, $tujuan, $harga, $pesawat, $hotel, $itinerary, $tanggal_berangkat, $tanggal_pulang);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Layanan berhasil ditambahkan."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $stmt->error]);
}
?>
