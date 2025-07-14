import { useEffect, useState } from "react";
import axios from "axios";

export default function PesanMasuk() {
  const [pesanan, setPesanan] = useState([]);

  const endpoint = "http://localhost/database_travel/";

  const fetchPesanan = async () => {
    const res = await axios.get(endpoint + "kirim_layanan.php");
    setPesanan(res.data);
  };

  useEffect(() => {
    fetchPesanan();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Pesanan Layanan Masuk</h1>

      {pesanan.length === 0 ? (
        <p>Belum ada pesanan masuk.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Layanan</th>
              <th className="p-2 border">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {pesanan.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border">{item.nama}</td>
                <td className="p-2 border">{item.email}</td>
                <td className="p-2 border">{item.nama_layanan}</td>
                <td className="p-2 border">{item.catatan || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
