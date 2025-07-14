import { useEffect, useState } from "react";

export default function PesanLayananKami() {
  const [layanan, setLayanan] = useState([]);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ nama: "", email: "", layanan_id: "", catatan: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const endpoint = "http://localhost/database_travel/";

  useEffect(() => {
    fetch(endpoint + "get_layanan.php")
      .then(res => res.json())
      .then(data => setLayanan(data))
      .catch(err => console.error("Gagal fetch layanan:", err));
  }, []);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePilih = (item) => {
    setSelected(item);
    setForm(prev => ({ ...prev, layanan_id: item.id }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.email || !form.layanan_id) {
      alert("Lengkapi data sebelum submit!");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(endpoint + "kirim_layanan.php", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setForm({ nama: "", email: "", layanan_id: "", catatan: "" });
        setSelected(null);
      } else {
        alert(data.message || data.error || "Gagal memproses pesanan.");
      }
    } catch (err) {
      console.error("Error submit pesanan:", err);
      alert("Gagal submit pesanan.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeForm = () => {
    setSelected(null);
    setForm({ nama: "", email: "", layanan_id: "", catatan: "" });
  };

  const handleBackToHome = () => {
    window.location.href = "/home";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, black 1px, transparent 0), radial-gradient(circle at 75px 75px, black 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* FLOATING BUBBLES */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gray-200 opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-gray-300 opacity-15 animate-bounce" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-gray-400 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* BUTTON BACK */}
      <div className="relative z-10 pt-6 px-6">
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border border-gray-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* HEADER */}
      <div className="relative z-10 text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Layanan Travel
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full animate-scale-in"></div>
        <p className="text-gray-600 mt-4 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Pilih paket perjalanan terbaik untuk Anda
        </p>
      </div>

      {/* NOTIFIKASI */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center animate-scale-bounce border-2 border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Pesanan Berhasil!</h3>
            <p className="text-gray-600">Kami akan segera menghubungi Anda.</p>
          </div>
        </div>
      )}

      {/* LIST LAYANAN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 relative z-10 max-w-7xl mx-auto">
        {layanan.map((item, index) => (
          <div key={item.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                <div className="text-6xl text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                  ✈️
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">{item.judul}</h3>
              <p className="text-gray-600 font-medium">{item.tujuan}</p>
              <p className="text-2xl font-bold text-gray-900 bg-gray-50 rounded-lg px-3 py-1 inline-block">
                Rp {parseInt(item.harga).toLocaleString()}
              </p>
              <div className="space-y-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-4">
                <p><strong>Pesawat:</strong> {item.pesawat}</p>
                <p><strong>Hotel:</strong> {item.hotel}</p>
                <p><strong>Itinerary:</strong> {item.itinerary}</p>
                <p><strong>Berangkat:</strong> {item.tanggal_berangkat}</p>
                <p><strong>Pulang:</strong> {item.tanggal_pulang}</p>
              </div>
            </div>

            <button
              onClick={() => handlePilih(item)}
              className="mt-6 w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>

      {/* FORM PEMESANAN */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-scale-in border-2 border-gray-100"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Pemesanan</h2>
              <p className="text-gray-600">{selected.judul}</p>
            </div>

            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
              className="w-full mb-4 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-gray-400 focus:bg-white transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-gray-400 focus:bg-white transition-all"
            />
            <textarea
              name="catatan"
              placeholder="Catatan tambahan (opsional)"
              value={form.catatan}
              onChange={handleChange}
              rows="4"
              className="w-full mb-4 p-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus:border-gray-400 focus:bg-white transition-all resize-none"
            />

            <div className="flex space-x-4 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-xl hover:from-gray-800 hover:to-black font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Mengirim...
                  </span>
                ) : "Kirim Pesanan"}
              </button>
              <button
                type="button"
                onClick={closeForm}
                className="flex-1 bg-gray-100 text-gray-700 p-4 rounded-xl hover:bg-gray-200 font-semibold transform hover:scale-105 active:scale-95"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ANIMASI CSS (tanpa jsx!) */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes scale-bounce {
          0% { transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
        .animate-scale-bounce { animation: scale-bounce 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}
