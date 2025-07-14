<?php
// === CORS ===
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// === Preflight dari browser ===
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// === Koneksi DB ===
include 'koneksi.php';

// === Ambil JSON dari body request ===
$data = json_decode(file_get_contents("php://input"), true);

// === Cek data JSON valid atau tidak ===
if (!$data || !is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Data JSON tidak valid"]);
    exit;
}

// === Ambil field data ===
$judul = trim($data["judul"] ?? '');
$tujuan = trim($data["tujuan"] ?? '');
$harga = (int) ($data["harga"] ?? 0);
$pesawat = trim($data["pesawat"] ?? '');
$hotel = trim($data["hotel"] ?? '');
$itinerary = trim($data["itinerary"] ?? '');
$tanggal_berangkat = trim($data["tanggal_berangkat"] ?? '');
$tanggal_pulang = trim($data["tanggal_pulang"] ?? '');

// === Validasi semua field wajib ===
if (
    !$judul || !$tujuan || !$harga || !$pesawat || !$hotel ||
    !$itinerary || !$tanggal_berangkat || !$tanggal_pulang
) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Semua field wajib diisi"]);
    exit;
}

// === Proses berdasarkan method ===
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    // === Tambah layanan ===
    $query = "INSERT INTO isi_layanan 
        (judul, tujuan, harga, pesawat, hotel, itinerary, tanggal_berangkat, tanggal_pulang) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssisssss", $judul, $tujuan, $harga, $pesawat, $hotel, $itinerary, $tanggal_berangkat, $tanggal_pulang);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Layanan berhasil ditambahkan"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Gagal menambahkan layanan", "error" => $stmt->error]);
    }

    $stmt->close();

} elseif ($method === 'PUT') {
    // === Edit layanan ===
    $id = (int) ($data["id"] ?? 0);

    if (!$id) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "ID layanan wajib untuk update"]);
        exit;
    }

    $query = "UPDATE isi_layanan SET 
        judul = ?, tujuan = ?, harga = ?, pesawat = ?, hotel = ?, itinerary = ?, tanggal_berangkat = ?, tanggal_pulang = ? 
        WHERE id = ?";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("ssisssssi", $judul, $tujuan, $harga, $pesawat, $hotel, $itinerary, $tanggal_berangkat, $tanggal_pulang, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Layanan berhasil diupdate"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Gagal update layanan", "error" => $stmt->error]);
    }

    $stmt->close();

} else {
    // Metode tidak didukung
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Metode HTTP tidak didukung"]);
}

$conn->close();
