// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx"; // Halaman utama setelah login (user biasa)
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import PesanLayananKami from "./pages/PesanLayananKami.jsx";
import AdminPanel from "./pages/AdminDashboard.jsx";
import KelolaLayanan from "./pages/KelolaLayanan.jsx";
import KelolaPesan from "./pages/PesanLayananKami.jsx";
import KelolaUser from "./pages/UserList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ROUTE PUBLIC */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ROUTE USER */}
        <Route path="/home" element={<App />} />
        <Route path="/hubungi-kami" element={<PesanLayananKami />} />

        {/* ROUTE ADMIN */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/layanan" element={<KelolaLayanan />} />
        <Route path="/admin/pesan" element={<KelolaPesan />} />
        <Route path="/admin/user" element={<KelolaUser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
