import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [layanan, setLayanan] = useState([]);
  const [users, setUsers] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [pesanan, setPesanan] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    judul: "",
    tujuan: "",
    harga: "",
    pesawat: "",
    hotel: "",
    itinerary: "",
    tanggal_berangkat: "",
    tanggal_pulang: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const apiUrl = "http://localhost/database_travel";

  const fetchLayanan = async () => {
    try {
      const res = await fetch(`${apiUrl}/get_layanan.php`);
      const data = await res.json();
      setLayanan(data);
    } catch (err) {
      console.error("Gagal fetch layanan:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${apiUrl}/get_users.php`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Gagal fetch users:", err);
    }
  };

  const fetchKontak = async () => {
    try {
      const res = await fetch(`${apiUrl}/get_pesan_kontak.php`);
      const data = await res.json();
      setKontak(data);
    } catch (err) {
      console.error("Gagal fetch pesan kontak:", err);
    }
  };

  const fetchPesanan = async () => {
    try {
      const res = await fetch(`${apiUrl}/get_pesanan.php`);
      const data = await res.json();
      setPesanan(data);
    } catch (err) {
      console.error("Gagal fetch pesanan:", err);
    }
  };

  useEffect(() => {
    fetchLayanan();
    fetchUsers();
    fetchKontak();
    fetchPesanan();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEditMode
      ? `${apiUrl}/update_layanan.php`
      : `${apiUrl}/create_layanan.php`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (result.success) {
        fetchLayanan();
        setFormData({
          id: "",
          judul: "",
          tujuan: "",
          harga: "",
          pesawat: "",
          hotel: "",
          itinerary: "",
          tanggal_berangkat: "",
          tanggal_pulang: "",
        });
        setIsEditMode(false);
      } else {
        alert("Gagal simpan: " + (result.message || result.error));
      }
    } catch (err) {
      console.error("Gagal simpan:", err);
    }
  };

  const handleEdit = (layanan) => {
    setFormData(layanan);
    setIsEditMode(true);
  };

 const handleDelete = async (id) => {
  if (!window.confirm("Yakin hapus layanan ini?")) return;
  try {
    const res = await fetch(`${apiUrl}/delete_layanan.php`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await res.json();

    if (result.success) {
      fetchLayanan();
    } else {
      alert("Gagal hapus: " + (result.message || result.error));
    }
  } catch (err) {
    console.error("Gagal hapus:", err);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 animate-pulse">
            Admin Panel
          </h1>
          <p className="text-slate-400 text-lg">Kelola data travel dengan mudah</p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Tambah/Edit Layanan */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            {isEditMode ? "Edit Layanan" : "Tambah Layanan Baru"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["judul", "tujuan", "harga", "pesawat", "hotel", "itinerary", "tanggal_berangkat", "tanggal_pulang"].map((field) => (
              <div key={field} className="group">
                <label className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                  {field.replace("_", " ")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Masukkan ${field.replace("_", " ")}`}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-slate-700/70 group-hover:border-blue-500"
                  required
                />
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              {isEditMode ? "🔄 Update Layanan" : "✨ Tambah Layanan"}
            </button>
          </div>
        </div>

        {/* Data Layanan */}
        <Section title="🏖️ Data Layanan" count={layanan.length}>
          <Table headers={["Judul", "Tujuan", "Harga", "Aksi"]}>
            {layanan.map((item, index) => (
              <tr key={item.id} className="hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform">
                <td className="border-b border-slate-700 px-4 py-3 text-white font-medium">{item.judul}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-300">{item.tujuan}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-green-400 font-semibold">Rp {item.harga}</td>
                <td className="border-b border-slate-700 px-4 py-3">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEdit(item)} 
                      className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md active:scale-95"
                    >
                      ✏️ Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md active:scale-95"
                    >
                      🗑️ Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Data Users */}
        <Section title="👥 Data Users" count={users.length}>
          <Table headers={["ID", "Username", "Email", "Role"]}>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform">
                <td className="border-b border-slate-700 px-4 py-3 text-blue-400 font-mono">{user.id}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-white font-medium">{user.username}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-300">{user.email}</td>
                <td className="border-b border-slate-700 px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Pesan Kontak */}
        <Section title="💬 Pesan Kontak" count={kontak.length}>
          <Table headers={["Nama", "Pesan"]}>
            {kontak.map((msg, index) => (
              <tr key={msg.id} className="hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform">
                <td className="border-b border-slate-700 px-4 py-3 text-white font-medium">{msg.nama}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-300 max-w-md">
                  <div className="truncate hover:text-clip hover:whitespace-normal transition-all duration-300">
                    {msg.pesan}
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Data Pesanan */}
        <Section title="📋 Data Pesanan" count={pesanan.length}>
          <Table headers={["ID", "Nama", "Email", "Layanan", "Catatan", "Tanggal"]}>
            {pesanan.map((p, index) => (
              <tr key={p.id} className="hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 transform">
                <td className="border-b border-slate-700 px-4 py-3 text-blue-400 font-mono">{p.id}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-white font-medium">{p.nama}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-300">{p.email}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-white">{p.layanan}</td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-300 max-w-xs">
                  <div className="truncate hover:text-clip hover:whitespace-normal transition-all duration-300">
                    {p.catatan}
                  </div>
                </td>
                <td className="border-b border-slate-700 px-4 py-3 text-slate-400 text-sm">{p.tanggal}</td>
              </tr>
            ))}
          </Table>
        </Section>

        {/* Footer */}
        <div className="text-center py-6">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <p className="text-slate-500 text-sm">Admin Panel - Travel Management System</p>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, count }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-slate-700/50">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        {title}
      </h2>
      <div className="bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600 hover:border-purple-500 transition-all duration-300">
        <span className="text-slate-300 text-sm font-medium">{count || 0} items</span>
      </div>
    </div>
    <div className="overflow-x-auto rounded-lg border border-slate-700">
      {children}
    </div>
  </div>
);

const Table = ({ headers, children }) => (
  <table className="w-full">
    <thead className="bg-slate-700/50">
      <tr>
        {headers.map((h, i) => (
          <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-slate-200 uppercase tracking-wider">
            {h}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-slate-800/30 divide-y divide-slate-700">
      {children}
    </tbody>
  </table>
);

export default AdminPanel;