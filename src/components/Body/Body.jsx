import { motion } from "framer-motion";
import React from "react";
import { Grid, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useState } from "react";



const Body = () => {
  const [form, setForm] = useState({ nama: "", pesan: "" });

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  try {
    const res = await fetch("http://localhost/database_travel/kirim_pesan_kontak.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ " + result.message);
      setForm({ nama: "", pesan: "" });
    } else {
      alert("❌ Gagal: " + result.error);
    }
  } catch (err) {
    alert("❌ Gagal konek ke server.");
    console.error(err);
  }
};

  return (
    <>
      {/* Hero Section */}
<motion.section
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    type: "spring",
    stiffness: 100,
    delay: 0.2,
    damping: 20,
  }}
  className="w-full"
>
  <div
    id="home"
    className="flex justify-between items-center gap-10 pt-[42px] pb-[42px] px-[24px] flex-col-reverse md:flex-row"
  >
    {/* GAMBAR */}
    <div className="w-full max-w-md mx-auto md:max-w-full md:w-1/2">
      <img
        src="/1.png"
        alt="Hero Travel"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>

    {/* TEKS */}
    <div className="flex flex-col gap-7 w-full md:w-1/2">
      <h2 className="text-xl font-semibold">TRAVEL BEST CIREBON</h2>
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        Travel Bersama Kami
      </h1>
      <p className="text-sm text-gray-700">
        Website ini bukan sekadar alat untuk memesan tiket atau mencari destinasi wisata.
        Ia hadir sebagai sahabat bagi jiwa-jiwa petualang, tempat di mana rasa ingin tahu
        bertemu dengan impian, dan keinginan untuk menjelajah bertemu dengan kenyamanan teknologi.
      </p>
    </div>
  </div>
</motion.section>

      {/* Hero Section End*/}

      {/* Second Section */}
      <section className="w-full">
        <div className="flex justify-between items-start gap-11  pt-[64px] pb-[64px] pl-[24px] pr-[24px] max-md:items-center max-md:justify-center max-md:flex-col">
          <div className="hidden md:flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              src="/2.png"
              alt=""
              className="w-[200px]"
            />
          </div>

          <div
            id="pelayanan"
            className="flex flex-col gap-10 items-center justify-center"
          >
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="text-xl font-semibold text-center"
            >
              Mengapa Memilih Kami
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-7xl font-semibold w-full text-center"
            >
              Pelayanan <br /> Terbaik
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.6,
                damping: 20,
              }}
              className="text-sm w-full text-center"
            >
              Kami tak hanya menjual perjalanan — kami menghadirkan pengalaman
              yang bermakna. Setiap destinasi kami kurasi dengan hati, agar kamu
              bukan hanya melihat tempat baru, tapi merasakan hidup yang baru.
            </motion.p>
        <Link to="/hubungi-kami">
  <motion.button
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      delay: 0.7,
      damping: 20,
    }}
    className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center"
  >
    Pesan Layanan
  </motion.button>
</Link>

          </div>

          <div className="hidden md:flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              src="/3.png"
              alt=""
              className="w-[200px]"
            />
          </div>
        </div>
      </section>
      {/* Second Section End*/}

      {/* Third Section */}
      <section className="w-full">
        <div className="flex justify-between items-center  pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
          <div className="flex  gap-7 max-md:flex-col max-md:justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src="/4.png"
                alt=""
                className="hidden md:block w-30 mb-2.5"
              />
              <h2 className="text-xl font-semibold text-black">
                Destinasi Kami - Bandung
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Bandung, kota yang selalu bikin rindu. Mulai dari udara sejuk
                Lembang, keindahan Kawah Putih di Ciwidey, hingga seni dan
                kreativitas di Dago — semuanya siap menyambutmu. Nikmati belanja
                seru di factory outlet, jelajahi kuliner khas seperti batagor
                dan seblak, lalu bersantai di kafe rooftop dengan view
                pegunungan. Baik untuk liburan keluarga, healing sendiri, atau
                jalan seru bareng teman, Bandung punya semuanya.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/5.png" alt="" className="w-30 mb-2.5" />
              <p className="text-md font-semibold text-black">Surabaya</p>
              <p className="text-sm text-gray-500 text-center">
                Surabaya, kota pahlawan yang memadukan semangat sejarah dan
                pesona modern. Jelajahi keindahan Taman Bungkul, Jembatan
                Suramadu, dan wisata religi Masjid Al-Akbar. Nikmati kuliner
                khas seperti rawon, lontong balap, dan rujak cingur. Dari
                gedung-gedung bersejarah hingga pusat perbelanjaan megah,
                Surabaya punya warna tersendiri yang bikin kamu betah
                berlama-lama.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img src="/6.png" alt="" className="w-30 mb-2.5" />
              <h2 className="text-xl font-semibold text-black">Bali</h2>
              <p className="text-sm text-gray-500 text-center">
                Bali, pulau seribu pura yang memesona. Rasakan damainya
                pantai-pantai seperti Kuta, Nusa Dua, hingga Uluwatu. Nikmati
                magisnya budaya Bali di Ubud, sajian kuliner khas, dan
                kehangatan masyarakat lokal. Mulai dari sunrise di Gunung Batur
                hingga sunset di Tanah Lot, setiap sudut Bali menyimpan cerita
                tak terlupakan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Third Section End*/}

      {/* Fourth Section */}
      <section className="w-full">
        <div className="w-full grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pl-[24px] pr-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center"
          >
            <img src="/a.png" alt="" className="w-30 mb-2.5" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">
                Destinasi Terpilih & Berkualitas
              </h2>
              <p className="text-sm text-gray-500">
                Kami percaya bahwa perjalanan terbaik bukan hanya tentang
                tempat, tapi tentang pengalaman. Karena itu, setiap destinasi
                yang kami tawarkan telah dikurasi secara khusus berdasarkan
                keindahan, kenyamanan, dan nilai lokalnya. Mulai dari tempat
                populer hingga hidden gem yang jarang diketahui orang, kami
                pastikan kamu mendapatkan pengalaman yang autentik,
                menyenangkan, dan penuh cerita.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center"
          >
            <img src="/b.png" alt="" className="w-30 mb-2.5" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">
                Harga Transparan & Terjangkau
              </h2>
              <p className="text-sm text-gray-500">
                Kami mengerti bahwa budget adalah hal penting dalam merencanakan
                liburan. Dengan sistem harga yang jujur dan tanpa biaya
                tersembunyi, kamu bisa menikmati perjalanan tanpa rasa khawatir.
                Semua paket kami dirancang untuk memberikan keseimbangan antara
                harga terbaik dan kualitas layanan yang maksimal. Karena liburan
                menyenangkan tidak harus mahal.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center"
          >
            <img src="/d.png" alt="" className="w-30 mb-2.5" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">
                Layanan Ramah & Responsif
              </h2>
              <p className="text-sm text-gray-500">
                Tim kami bukan hanya agen perjalanan—kami adalah teman
                seperjalananmu. Dengan pelayanan cepat tanggap, ramah, dan
                berpengalaman, kami siap membantumu sejak tahap perencanaan
                hingga perjalanan selesai. Apapun kebutuhanmu, kamu bisa
                menghubungi kami kapan saja, karena kepuasan dan kenyamananmu
                adalah prioritas kami.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex w-full gap-5 items-center justify-center"
          >
            <img src="/d.png" alt="" className="w-30 mb-2.5" />
            <div className="flex flex-col items-start justify-center gap-4">
              <h2 className="text-xl font-semibold text-black">
                Paket Fleksibel Sesuai Kebutuhan
              </h2>
              <p className="text-sm text-gray-500">
                Setiap orang punya gaya liburan yang berbeda. Ada yang suka
                petualangan alam, ada yang ingin bersantai di pantai, atau
                bahkan sekadar staycation singkat. Kami menawarkan paket yang
                bisa disesuaikan dengan kebutuhan, waktu, dan anggaranmu. Dengan
                begitu, kamu bisa merancang liburan impianmu sendiri—tanpa repot
                dan tanpa batas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Fourth Section End*/}

      {/* Fifth Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
        >
          Terbang Kemancan Negara
        </motion.h1>

        <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-10 pt-[42px] pb-[42px] pr-[24px] pl-[24px]">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/10.jpeg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Singapura</h2>
              <p className="text-sm text-gray-500">
                Singapura, kota modern yang memadukan kemajuan teknologi dengan
                pesona budaya yang kaya. Sebagai salah satu tujuan wisata paling
                populer di Asia, Singapura menawarkan berbagai pengalaman yang
                tidak hanya menarik, tetapi juga menginspirasi.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/17.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Australia</h2>
              <p className="text-sm text-gray-500">
                Australia, negeri yang penuh dengan keindahan alam yang
                menakjubkan, kota-kota modern, serta kehidupan liar yang
                eksotis. Sebagai salah satu destinasi wisata paling populer di
                dunia, Australia menawarkan petualangan tak terlupakan untuk
                setiap jenis wisatawan.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/11.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Eropa</h2>
              <p className="text-sm text-gray-500">
                Eropa, benua yang kaya akan sejarah, budaya, dan keindahan alam
                yang luar biasa. Dari kastil-kastil abad pertengahan hingga
                kota-kota modern yang penuh kehidupan, Eropa menawarkan
                perjalanan yang tak hanya memanjakan mata, tapi juga menyentuh
                hati.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/12.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">China</h2>
              <p className="text-sm text-gray-500">
                China, negeri yang kaya akan sejarah ribuan tahun, keindahan
                alam yang luar biasa, dan budaya yang mendalam. Dari keajaiban
                Tembok Besar China hingga kota-kota modern seperti Shanghai,
                China menawarkan pengalaman perjalanan yang unik, penuh
                petualangan, dan mendalam.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/13.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Hawai</h2>
              <p className="text-sm text-gray-500">
                Hawaii, surga tropis di tengah Samudra Pasifik, menawarkan
                pesona alam yang luar biasa, pantai berpasir putih, dan
                keindahan bawah laut yang menakjubkan. Sebagai tujuan liburan
                yang penuh dengan keajaiban alam, Hawaii memberikan pengalaman
                yang santai sekaligus petualangan yang tak terlupakan.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.3,
              damping: 20,
            }}
            className="flex justify-center items-center gap-5 w-full flex-col"
          >
            <img src="/14.jpg" alt="" className="w-full" />
            <div className="flex items-start justify-center gap-2 flex-col">
              <h2 className="text-xl text-black font-semibold">Jepang</h2>
              <p className="text-sm text-gray-500">
                Jepang, negeri yang memadukan tradisi kuno dan inovasi modern,
                adalah salah satu destinasi yang wajib dikunjungi bagi para
                wisatawan yang ingin merasakan keindahan alam, budaya yang kaya,
                dan pengalaman unik. Dari kuil-kuil bersejarah hingga teknologi
                canggih, Jepang menawarkan segala sesuatu yang dapat memukau dan
                menginspirasi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Fifth Section End*/}

      {/* Tentang Kami Section */}
      <section id="tentang" className="w-full">
        <div className="flex justify-between items-start gap-11  pt-[64px] pb-[64px] pl-[24px] pr-[24px] max-md:items-center max-md:justify-center max-md:flex-col">
          <div className="hidden md:flex w-full justify-start max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              src="/2.png"
              alt=""
              className="w-[200px]"
            />
          </div>

          <div className="flex flex-col gap-10 items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.4,
                damping: 20,
              }}
              className="text-xl font-semibold text-center"
            >
              Tentang kami
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                damping: 20,
              }}
              className="text-7xl font-semibold w-full text-center"
            >
              PT Best <br /> Travel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.6,
                damping: 20,
              }}
              className="text-sm w-full text-center"
            >
              PT Best Travel adalah perusahaan yang bergerak di bidang
              pariwisata, khususnya dalam menyediakan layanan perjalanan wisata
              domestik dan internasional yang nyaman, aman, dan berkesan.
              Berdiri sejak tahun 1999, kami berkomitmen menjadi mitra
              perjalanan terbaik bagi para wisatawan yang ingin menjelajahi
              keindahan dunia. Dengan pengalaman lebih dari 26 tahun di industri
              pariwisata, kami menawarkan berbagai paket wisata menarik, mulai
              dari wisata alam, budaya, religi, hingga wisata edukatif. Didukung
              oleh tim profesional dan layanan pelanggan 24/7, PT Best Travel
              siap membantu Anda mewujudkan liburan impian.
            </motion.p>
          </div>

          <div className="hidden md:flex w-full justify-end max-md:justify-center max-md:items-center">
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                damping: 20,
              }}
              src="/3.png"
              alt=""
              className="w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Tentang Kami End*/}

      {/* Sixth Section */}

      <section className="flex gap-20 items-center pt-[42px] pb-[42px] pr-[24px] pl-[24px] justify-center max-sm:!pr-0 max-sm:!pl-0 max-sm:gap-0 max-sm:!justify-between">
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          src="/eropa.png"
          alt=""
          className="max-sm:w-16"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
            damping: 20,
          }}
          src="/singapura.png"
          alt=""
          className="max-sm:w-14"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.7,
            damping: 20,
          }}
          src="/china.png"
          alt=""
          className="max-sm:w-[70px]"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.9,
            damping: 20,
          }}
          src="/australia.png"
          alt=""
          className="max-sm:w-7"
        />
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.11,
            damping: 20,
          }}
          src="/indonesia.png"
          alt=""
          className="max-sm:w-11"
        />
      </section>
      {/* Sixth Section End*/}

      {/* Seventh Section */}
      <section className="w-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="text-center text-4xl font-semibold pt-[42px] pr-[24px] pl-[24px]"
        >
          Testimonial
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.3,
            damping: 20,
          }}
          className="w-full"
        >
          <Swiper
            modules={[Thumbs, Grid]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={50}
            loop={true}
            scrollbar={{
              draggable: true,
            }}
            className="pt-[42px] pb-[42px] pr-[24px] pl-[24px]"
          >
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  "Liburan ke Bali bersama PT TRAVEL BEST benar-benar luar
                  biasa! Semua jadwal dan akomodasi diatur dengan sangat baik.
                  Panduan wisata yang ramah dan penuh pengetahuan membuat
                  pengalaman kami lebih menyenangkan. Pantai, makanan, dan
                  budaya Bali sangat mengesankan. Terima kasih sudah memberikan
                  pengalaman yang tak terlupakan!"
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/ariz.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Muhammad Ariz</p>
                      <p className="text-sm text-gray-500">Majalengka</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  "Kami baru saja kembali dari liburan ke Jepang, dan itu adalah
                  pengalaman yang tak terlupakan! Mulai dari mengunjungi Tokyo,
                  Kyoto, hingga melihat bunga sakura yang indah, semuanya
                  terorganisir dengan sempurna. Kami merasa sangat puas dengan
                  layanan yang diberikan. Sungguh pengalaman yang luar biasa,
                  kami pasti akan kembali lagi!"
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/ryansah.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Ryansah</p>
                      <p className="text-sm text-gray-500">Cirebon</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!p-4">
              <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                <h2 className="text-md font-semibold">
                  "Perjalanan ke Australia benar-benar mengesankan. Dari
                  pemandangan alam yang menakjubkan hingga petualangan selancar
                  di Bondi Beach, semuanya berjalan lancar. Saya sangat
                  menghargai tim PT TRAVEL BEST yang selalu siap membantu dan
                  memberikan rekomendasi terbaik selama perjalanan. Terima kasih
                  untuk liburan yang tak terlupakan!"
                </h2>
                <div className="flex items-start justify-start gap-2">
                  <img
                    src="/tatia.png"
                    alt=""
                    className="w-14 rounded-full border border-[#f0f8ff]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <img src="/fiveStart.svg" alt="" />
                    <div>
                      <p className="text-md">Tatia</p>
                      <p className="text-sm text-gray-500">Kapetakan</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
              <SwiperSlide className="!p-4">
                <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                  <h2 className="text-md font-semibold">
                    "Singapura selalu menjadi tempat favorit kami, tetapi
                    perjalanan kali ini lebih istimewa berkat perencanaan yang
                    tepat dari PT TRAVEL BEST. Semua transportasi, akomodasi, dan
                    tur berjalan dengan lancar. Kami menikmati setiap detiknya,
                    mulai dari belanja di Orchard Road hingga menikmati makanan
                    enak di hawker center. Tidak sabar untuk liburan berikutnya!"
                  </h2>
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="/muhyi.png"
                      alt=""
                      className="w-14 rounded-full border border-[#f0f8ff]"
                    />
                    <div className="flex flex-col gap-2.5">
                      <img src="/fiveStart.svg" alt="" />
                      <div>
                        <p className="text-md">Muhyi Hidayah</p>
                        <p className="text-sm text-gray-500">Krucuk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!p-4">
                <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                  <h2 className="text-md font-semibold">
                    "Hawaii adalah tempat impian kami, dan PT TRAVEL BEST
                    membuatnya menjadi kenyataan! Pantai berpasir putih,
                    snorkeling, dan pemandangan vulkanik yang luar biasa
                    benar-benar membuat liburan kami sangat berkesan. Terima kasih
                    banyak untuk pengalaman yang tak terlupakan ini!"
                  </h2>
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="/daffa.png"
                      alt=""
                      className="w-14 rounded-full border border-[#f0f8ff]"
                    />
                    <div className="flex flex-col gap-2.5">
                      <img src="/fiveStart.svg" alt="" />
                      <div>
                        <p className="text-md">Daffa Firdaus karim</p>
                        <p className="text-sm text-gray-500">Kalijaga Cirebon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!p-4">
                <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                  <h2 className="text-md font-semibold">
                    "Hawaii adalah tempat impian kami, dan PT TRAVEL BEST
                    membuatnya menjadi kenyataan! Pantai berpasir putih,
                    snorkeling, dan pemandangan vulkanik yang luar biasa
                    benar-benar membuat liburan kami sangat berkesan. Terima kasih
                    banyak untuk pengalaman yang tak terlupakan ini!"
                  </h2>
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="/bambang.png"
                      alt=""
                      className="w-14 rounded-full border border-[#f0f8ff]"
                    />
                    <div className="flex flex-col gap-2.5">
                      <img src="/fiveStart.svg" alt="" />
                      <div>
                        <p className="text-md">Bambang Aswanto</p>
                        <p className="text-sm text-gray-500">Pilang Cirebon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!p-4">
                <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                  <h2 className="text-md font-semibold">
                    "Hawaii adalah tempat impian kami, dan PT TRAVEL BEST
                    membuatnya menjadi kenyataan! Pantai berpasir putih,
                    snorkeling, dan pemandangan vulkanik yang luar biasa
                    benar-benar membuat liburan kami sangat berkesan. Terima kasih
                    banyak untuk pengalaman yang tak terlupakan ini!".
                  </h2>
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="/mahesa.png"
                      alt=""
                      className="w-14 rounded-full border border-[#f0f8ff]"
                    />
                    <div className="flex flex-col gap-2.5">
                      <img src="/fiveStart.svg" alt="" />
                      <div>
                        <p className="text-md">Mahesa</p>
                        <p className="text-sm text-gray-500">Cirebon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!p-4">
                <div className="flex justify-between gap-7 rounded-2xl shadow-lg w-full flex-col p-4 bg-[#f0f8ff]">
                  <h2 className="text-md font-semibold">
                    "Hawaii adalah tempat impian kami, dan PT TRAVEL BEST
                    membuatnya menjadi kenyataan! Pantai berpasir putih,
                    snorkeling, dan pemandangan vulkanik yang luar biasa
                    benar-benar membuat liburan kami sangat berkesan. Terima kasih
                    banyak untuk pengalaman yang tak terlupakan ini!".
                  </h2>
                  <div className="flex items-start justify-start gap-2">
                    <img
                      src="/wawan.png"
                      alt=""
                      className="w-14 rounded-full border border-[#f0f8ff]"
                    />
                    <div className="flex flex-col gap-2.5">
                      <img src="/fiveStart.svg" alt="" />
                      <div>
                        <p className="text-md">wawan Gunadi</p>
                        <p className="text-sm text-gray-500">Pamengkan Cirebon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </section>
        {/* Seventh Section End */}

        {/* Eighth Section */}
        <section className="w-full">
          <div className="flex justify-between w-full items-center pt-[42px] pb-[42px] pl-[24px] pr-[24px] gap-5 max-md:flex-col">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.3,
                damping: 20,
              }}
              className="flex flex-col w-[50%] max-md:w-full"
            >
              <h1 className="text-start text-4xl font-semibold pb-[24px]">
                Pesan Anda Untuk Kami
              </h1>
              <p className="mb-7">
                Kami mengundang Anda untuk bergabung dalam petualangan luar biasa
                bersama kami! Dengan pengalaman bertahun-tahun di industri
                perjalanan, kami siap membantu Anda merencanakan liburan impian ke
                berbagai destinasi menarik di seluruh dunia.
              </p>
              <div className="flex items-center justify-start gap-5">
                <img src="/discord.svg" alt="" />
                <img src="/dribbble.svg" alt="" />
                <img src="/fb.svg" alt="" />
                <img src="/insta.svg" alt="" />
                <img src="/behance.svg" alt="" />
              </div>
            </motion.div>
  <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    type: "spring",
    stiffness: 100,
    delay: 0.3,
    damping: 20,
  }}
  className="flex flex-col w-[50%] gap-3 items-start justify-start max-md:w-full"
>
  <input
    name="nama"
    type="text"
    value={form.nama}
    onChange={handleChange}
    placeholder="Nama"
    className="p-4 bg-[#f0f8ff] outline-0 w-full"
    required
  />
  <input
    name="pesan"
    type="text"
    value={form.pesan}
    onChange={handleChange}
    placeholder="Pesan Anda"
    className="p-4 bg-[#f0f8ff] outline-0 w-full"
    required
  />
  <button
    onClick={handleSubmit}
    className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center"
  >
    Kirim
  </button>
</motion.div>
          </div>
        </section>
        {/* Eighth Section End*/}

        {/* Section Contact */}
        <section className="w-full bg-[#f9f9f9]" id="contact">
          <div className="max-w-4xl mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                delay: 0.3,
                damping: 20,
              }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-black mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 mb-8">
                Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut
                atau pertanyaan seputar layanan kami.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 80,
                delay: 0.5,
                damping: 20,
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-black">
                  Alamat Kantor
                </h3>
                <p className="text-gray-600">
                  PT BEST TRAVEL CIREBON
                  <br />
                  Jl. Cipto Mangunkusumo No.123
                  <br />
                  Cirebon, Jawa Barat 45131
                </p>

                <h3 className="text-xl font-semibold text-black mt-6">Kontak</h3>
                <p className="text-gray-600">
                  Telepon: (0231) 123-456
                  <br />
                  WhatsApp: 0812-3456-7890
                  <br />
                  Email: info@besttravel.co.id
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-semibold text-black">
                  Jam Operasional
                </h3>
                <p className="text-gray-600">
                  Senin - Jumat: 08.00 - 17.00 WIB
                  <br />
                  Sabtu: 08.00 - 13.00 WIB
                  <br />
                  Minggu & Hari Libur: Tutup
                </p>

                <h3 className="text-xl font-semibold text-black mt-6">
                  Ikuti Kami
                </h3>
                <p className="text-gray-600">
                  Instagram: @besttravel_cirebon
                  <br />
                  Facebook: PT BEST Travel Cirebon
                  <br />
                  TikTok: @besttravel_cirebon
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* End Section Contact */}
      </>
    );
  };

  export default Body;
