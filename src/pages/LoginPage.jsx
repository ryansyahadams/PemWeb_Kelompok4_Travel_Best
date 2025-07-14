import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost/database_travel/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.status === "success") {
        await new Promise(resolve => setTimeout(resolve, 1500));
        navigate("/home");
      } else {
        alert("Login gagal: " + result.message);
      }
    } catch (err) {
      alert("Gagal terhubung ke server!");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingMarker = {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Background grid animasi */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 grid grid-cols-5 grid-rows-5"
      >
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="border-t border-l border-gray-200"
            animate={{
              opacity: [0.1, 0.05, 0.1],
              transition: {
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </motion.div>

      <div className="relative min-h-screen flex items-center justify-center p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Kiri - ilustrasi */}
            <motion.div 
              className="hidden lg:flex items-center justify-center p-12 bg-black relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <motion.div className="absolute z-10" animate={floatingMarker}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-4xl animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <svg viewBox="0 0 1200 100" className="w-full h-full">
                  <path 
                    d="M0,100 L100,60 L150,80 L200,40 L300,70 L400,30 L500,50 L600,20 L700,60 L800,10 L900,50 L1000,0 L1100,40 L1200,20 L1200,100 Z" 
                    fill="white" fillOpacity="0.2"
                  />
                </svg>
              </motion.div>

              <motion.div className="text-white z-20 text-center" variants={itemVariants}>
                <motion.h1 
                  className="text-4xl font-bold mb-4 text-white"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Travel Best Cirebon
                </motion.h1>
                <motion.div className="w-24 h-1 bg-white mx-auto mb-6" />
                <motion.p 
                  className="text-lg text-gray-300 max-w-md"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Temukan keindahan tersembunyi Kota Udang
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Kanan - Form login */}
            <motion.div 
              className="p-10 lg:p-14 flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex justify-center lg:justify-start mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center shadow-md">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 ml-3 self-center">
                  Travel<span className="text-black font-extrabold">Best</span> Cirebon
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Masuk Akun</h2>
                <p className="text-gray-500">Silakan masuk untuk melanjutkan</p>
              </motion.div>

              <motion.form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@contoh.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Masukkan password"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                    />
                  </div>
                </motion.div>

                <motion.div className="flex items-center justify-between" variants={itemVariants}>
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Ingat saya
                    </label>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg shadow hover:shadow-md transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02, backgroundColor: "#333" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Memproses...
                      </>
                    ) : (
                      <>
                        Masuk
                        <FaArrowRight className="ml-2" />
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* 🔐 Tambah tombol ke admin panel */}
                <motion.div className="text-center mt-4" variants={itemVariants}>
                  <Link
                    to="/admin"
                    className="text-sm text-black font-medium hover:text-blue-600 hover:underline transition-all duration-300"
                  >
                    🔐 Masuk Admin Panel
                  </Link>
                </motion.div>
              </motion.form>

              <motion.p 
                className="mt-8 text-center text-gray-600 text-sm"
                variants={itemVariants}
              >
                Belum punya akun?{' '}
                <Link 
                  to="/register" 
                  className="font-medium text-black hover:underline"
                >
                  Daftar sekarang
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
