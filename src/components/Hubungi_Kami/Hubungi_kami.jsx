import { motion } from "framer-motion";
import React from "react";
import { Grid, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Hubungi_kami = () => {
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
      ></motion.section>
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
              Kirimkan Pesan Anda Pada Kami
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
              type="text"
              placeholder="Nama"
              className="p-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <input
              type="text"
              placeholder="Pesan Anda"
              className="p-4 bg-[#f0f8ff] outline-0 w-full"
            />
            <button className="bg-[#2D2D2D] cursor-pointer text-white p-4 w-[150px] h-[55px] flex items-center justify-center">
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

export default Hubungi_kami;
