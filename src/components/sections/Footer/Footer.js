"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  linkTerkait,
  layanan,
  profil,
  publikasi,
  informasiPublik,
} from "./FooterData";
import FooterBottom from "./FooterBottom.js";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: ganti "/api/contact" dengan endpoint backend kamu
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Gagal mengirim");
      setStatus("sent");
      setFormData({ nama: "", email: "", pesan: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-[#153C91] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-5">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 lg:col-span-2">
          {/* Logo & Title */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/Logos/logo-tutwuri1.png"
              alt="Logo Tut Wuri Handayani"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />

            <Image
              src="/Logos/Logo1.png"
              alt="Logo LLDIKTI XIV"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>
          <h2 className="text-sm md:text-base font-medium mb-8 leading-relaxed">
            Kementerian Pendidikan Tinggi, Sains dan Teknologi <br />
            Lembaga Layanan Pendidikan Tinggi Wilayah XIV
          </h2>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3 group">
              <FaMapMarkerAlt className="mt-1 text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">
                Jalan Bosnik Raya, Biak Timur, Bindusi, Biak Papua 98152
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">
                0981-2911065
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaClock className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">
                Senin - Jumat: 8.00 am – 3.00 pm
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">
                lldikti14@kemdiktisaintek.go.id
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="mb-4 font-semibold">Hubungi Kami!</p>
            <div className="flex gap-4 text-xl">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://youtube.com"
                aria-label="YouTube"
                className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://tiktok.com"
                aria-label="TikTok"
                className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* LINK TERKAIT */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
            Link Terkait
          </h3>
          <span className="block w-12 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {linkTerkait.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* LAYANAN */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
            Layanan
          </h3>
          <span className="block w-12 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {layanan.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* PROFIL */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
            Profil
          </h3>
          <span className="block w-12 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {profil.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* PUBLIKASI */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
            Publikasi
          </h3>
          <span className="block w-12 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {publikasi.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* INFORMASI PUBLIK */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
            Informasi Publik
          </h3>
          <span className="block w-12 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {informasiPublik.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FORM KONTAK + PETA LOKASI */}
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="border-t border-white/10 pt-10 pb-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* FORM KONTAK */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
              Kirim Pesan
            </h3>
            <span className="block w-12 h-0.5 bg-yellow-400 mb-4"></span>

            <form
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-3 rounded-lg border border-white/20 bg-white/10 p-5 shadow-lg"
            >
              <div>
                <label htmlFor="nama" className="sr-only">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Alamat Email"
                  className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="pesan" className="sr-only">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  required
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda..."
                  rows={4}
                  className="w-full h-full min-h-[96px] rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center rounded-md bg-yellow-400 text-[#153C91] font-semibold text-sm py-2.5 hover:bg-yellow-300 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
              </button>

              {status === "sent" && (
                <p className="text-xs text-green-300">
                  Pesan berhasil dikirim, terima kasih!
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-red-300">
                  Gagal mengirim pesan. Coba lagi nanti.
                </p>
              )}
            </form>
          </div>

          {/* PETA LOKASI */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold mb-2 uppercase tracking-wider">
              Lokasi Kami
            </h3>
            <span className="block w-12 h-0.5 bg-yellow-400 mb-4"></span>

            <div className="flex-1 overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-lg min-h-[220px]">
              <iframe
                title="Peta lokasi LLDIKTI Wilayah XIV"
                src="https://www.google.com/maps?q=LLDIKTI+Wilayah+XIV+Biak+Papua&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=LLDIKTI+Wilayah+XIV+Biak+Papua"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-xs text-white/80 hover:text-yellow-400 transition-colors"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
}
