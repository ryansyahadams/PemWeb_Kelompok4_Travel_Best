<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Content-Type");
  header("Access-Control-Allow-Methods: POST, OPTIONS");
  http_response_code(200);
  exit();
}

// Header untuk CORS dan format JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Koneksi DB
$host = "localhost";
$user = "root";
$pass = "";
$db = "travel_database";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "Koneksi gagal: " . $conn->connect_error]);
  exit;
}

// Ambil dan validasi data JSON
$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data["nama"]) || !isset($data["pesan"])) {
  http_response_code(400);
  echo json_encode(["error" => "Data tidak lengkap atau tidak valid"]);
  exit;
}

$nama = $conn->real_escape_string($data["nama"]);
$pesan = $conn->real_escape_string($data["pesan"]);

$sql = "INSERT INTO pesan_kontak (nama, pesan) VALUES ('$nama', '$pesan')";
if ($conn->query($sql) === TRUE) {
  echo json_encode(["success" => true, "message" => "Pesan berhasil dikirim."]);
} else {
  http_response_code(500);
  echo json_encode(["error" => "Gagal menyimpan pesan: " . $conn->error]);
}

$conn->close();
?>
