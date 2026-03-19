"use client";
import Image from "next/image";
import Link from "next/link";
import {
  linkTerkait,
  layanan,
  frofil,
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
  return (
    <footer className="bg-[#153C91] text-white">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-5">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 lg:col-span-2">
          {/* Logo & Title */}
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/Logos/logo-tutwuri.png"
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
                R38M+C3M, Fandoi, Biak Kota, Biak Numfor Regency, Papua 98111
              </p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaPhoneAlt className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">09812911065</p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaClock className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">Senin - Jumat: 8.00 am – 3.00 pm</p>
            </div>

            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-lg text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors">lldikti14@kemdikbud.go.id</p>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="mb-4 font-semibold">Hubungi Kami!</p>
            <div className="flex gap-4 text-xl">
              <Link href="https://instagram.com" aria-label="Instagram" className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <FaInstagram />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube" className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <FaYoutube />
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <FaFacebookF />
              </Link>
              <Link href="https://tiktok.com" aria-label="TikTok" className="bg-white/10 p-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all">
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>

        {/* LINK TERKAIT */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">Link Terkait</h3>
          <span className="block w-12 h-1 bg-yellow-400 mb-6"></span>
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
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">Layanan</h3>
          <span className="block w-12 h-1 bg-yellow-400 mb-6"></span>
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
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">Profil</h3>
          <span className="block w-12 h-1 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {frofil.map((item, i) => (
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
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">Publikasi</h3>
          <span className="block w-12 h-1 bg-yellow-400 mb-6"></span>
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
          <h3 className="text-lg font-bold mb-2 uppercase tracking-wider">Informasi Publik</h3>
          <span className="block w-12 h-1 bg-yellow-400 mb-6"></span>
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

      <FooterBottom />
    </footer>
  );
}
