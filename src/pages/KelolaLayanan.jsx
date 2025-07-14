import { useEffect, useState } from "react";
import axios from "axios";

export default function KelolaLayanan() {
  const [layanan, setLayanan] = useState([]);
  const [form, setForm] = useState({
    nama_layanan: "",
    tujuan: "",
    harga: "",
    pesawat: "",
    hotel: "",
    itinerary: "",
    berangkat: "",
    pulang: "",
  });
  const [editId, setEditId] = useState(null);

  const endpoint = "http://localhost/database_travel/";

  const fetchLayanan = async () => {
    try {
      const res = await axios.get(endpoint + "get_layanan.php");
      setLayanan(res.data);
    } catch (err) {
      console.error("Gagal fetch layanan:", err);
    }
  };

  useEffect(() => {
    fetchLayanan();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.post(endpoint + "update_layanan.php", { id: editId, ...form });
      } else {
        await axios.post(endpoint + "create_layanan.php", form);
      }
      setForm({
        nama_layanan: "",
        tujuan: "",
        harga: "",
        pesawat: "",
        hotel: "",
        itinerary: "",
        berangkat: "",
        pulang: "",
      });
      setEditId(null);
      fetchLayanan();
    } catch (err) {
      console.error("Gagal submit form:", err);
    }
  };

  const handleEdit = (item) => {
    setForm({
      nama_layanan: item.nama_layanan,
      tujuan: item.tujuan,
      harga: item.harga,
      pesawat: item.pesawat,
      hotel: item.hotel,
      itinerary: item.itinerary,
      berangkat: item.berangkat,
      pulang: item.pulang,
    });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus layanan ini?")) return;
    try {
      await axios.post(endpoint + "delete_layanan.php", { id });
      fetchLayanan();
    } catch (err) {
      console.error("Gagal hapus layanan:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Kelola Layanan</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
        <input name="nama_layanan" placeholder="Nama Layanan" value={form.nama_layanan} onChange={handleChange} required className="border p-2 rounded" />
        <input name="tujuan" placeholder="Tujuan" value={form.tujuan} onChange={handleChange} required className="border p-2 rounded" />
        <input name="harga" placeholder="Harga" value={form.harga} onChange={handleChange} required className="border p-2 rounded" />
        <input name="pesawat" placeholder="Pesawat" value={form.pesawat} onChange={handleChange} required className="border p-2 rounded" />
        <input name="hotel" placeholder="Hotel" value={form.hotel} onChange={handleChange} required className="border p-2 rounded" />
        <input name="itinerary" placeholder="Itinerary" value={form.itinerary} onChange={handleChange} required className="border p-2 rounded" />
        <input name="berangkat" type="date" value={form.berangkat} onChange={handleChange} required className="border p-2 rounded" />
        <input name="pulang" type="date" value={form.pulang} onChange={handleChange} required className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded col-span-2">
          {editId ? "Update" : "Tambah"} Layanan
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Tujuan</th>
            <th className="p-2 border">Harga</th>
            <th className="p-2 border">Pesawat</th>
            <th className="p-2 border">Hotel</th>
            <th className="p-2 border">Itinerary</th>
            <th className="p-2 border">Berangkat</th>
            <th className="p-2 border">Pulang</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {layanan.map((item) => (
            <tr key={item.id}>
              <td className="p-2 border">{item.nama_layanan}</td>
              <td className="p-2 border">{item.tujuan}</td>
              <td className="p-2 border">{item.harga}</td>
              <td className="p-2 border">{item.pesawat}</td>
              <td className="p-2 border">{item.hotel}</td>
              <td className="p-2 border">{item.itinerary}</td>
              <td className="p-2 border">{item.berangkat}</td>
              <td className="p-2 border">{item.pulang}</td>
              <td className="p-2 border">
                <button onClick={() => handleEdit(item)} className="text-blue-500 hover:underline">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:underline ml-2">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
