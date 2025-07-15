<?php
header("Access-Control-Allow-Origin: *"); // biar bisa diakses dari React (Vite)
header("Content-Type: application/json");

include 'koneksi.php';

// ambil data dari body JSON
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["error" => "Data tidak valid"]);
    exit;
}

// siapkan query INSERT
$sql = "INSERT INTO isi_layanan 
(judul, tujuan, harga, pesawat, hotel, itinerary, tanggal_berangkat, tanggal_pulang)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssisssss",
    $data['judul'],
    $data['tujuan'],
    $data['harga'],
    $data['pesawat'],
    $data['hotel'],
    $data['itinerary'],
    $data['tanggal_berangkat'],
    $data['tanggal_pulang']
);

if ($stmt->execute()) {
    echo json_encode(["message" => "Layanan berhasil ditambahkan"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Gagal menambah layanan"]);
}
?>
