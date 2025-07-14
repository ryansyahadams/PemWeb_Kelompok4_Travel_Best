<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "koneksi.php";
// Handle preflight OPTIONS request (wajib)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}



// Ambil data dari request body
$data = json_decode(file_get_contents("php://input"));

$email = $data->email ?? '';
$password = $data->password ?? '';

if (!$email || !$password) {
  echo json_encode(["status" => "error", "message" => "Email dan password wajib diisi"]);
  exit;
}

// Cari user berdasarkan email
$query = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $query);

// Cek apakah user ditemukan
if (mysqli_num_rows($result) === 0) {
  echo json_encode(["status" => "error", "message" => "Email tidak ditemukan"]);
  exit;
}

$user = mysqli_fetch_assoc($result);

// Verifikasi password
if (password_verify($password, $user['password'])) {
  echo json_encode([
    "status" => "success",
    "user_id" => $user['id'],
    "username" => $user['username'],
    "email" => $user['email']
  ]);
} else {
  echo json_encode(["status" => "error", "message" => "Password salah"]);
}
?>
