<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request (wajib)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include "koneksi.php";


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include "koneksi.php";

// Ambil data dari frontend
$data = json_decode(file_get_contents("php://input"));

$username = $data->username ?? '';
$email    = $data->email ?? '';
$password = $data->password ?? '';

// Validasi kosong
if (!$username || !$email || !$password) {
  echo json_encode(["status" => "error", "message" => "Semua field wajib diisi"]);
  exit;
}

// Cek email udah terdaftar
$check = mysqli_query($conn, "SELECT * FROM users WHERE email='$email'");
if (mysqli_num_rows($check) > 0) {
  echo json_encode(["status" => "error", "message" => "Email sudah terdaftar"]);
  exit;
}

// Hash password
$hash = password_hash($password, PASSWORD_DEFAULT);

// Simpan user baru
$query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hash')";

if (mysqli_query($conn, $query)) {
  echo json_encode(["status" => "success", "message" => "Pendaftaran berhasil"]);
} else {
  echo json_encode(["status" => "error", "message" => "Gagal menyimpan ke database"]);
}
?>
