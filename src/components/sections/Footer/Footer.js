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
      <div className="Flex max-w-full mx-auto px-20 py-16 grid md:grid-cols-7 gap-5">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">
          {/* Logo & Title */}
          <div className="flex items-center gap-6 mb-2">
            <Image
              src="/Logos/logo-tutwuri.png"
              alt="Tut Wuri"
              width={80}
              height={80}
            />

            <Image src="/Logos/Logo.png" alt="LLDIKTI" width={80} height={80} />
          </div>
          <h2 className="text-lg font-medium mb-8">
            Kementerian Pendidikan Tinggi, Sains dan Teknologi Lembaga Layanan
            Pendidikan Tinggi Wilayah V{" "}
          </h2>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-lg" />
              <p>
                R38M+C3M, Fandoi, Biak Kota, Biak Numfor Regency, Papua 98111
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg" />
              <p>09812911065</p>
            </div>

            <div className="flex items-center gap-3">
              <FaClock className="text-lg" />
              <p>8.00 am–3.00 pm</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg" />
              <p>09812911065</p>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <p className="mb-3">Connected With us!</p>
            <div className="flex gap-4 text-xl">
              <FaInstagram className="hover:text-yellow-300 cursor-pointer transition" />
              <FaYoutube className="hover:text-yellow-300 cursor-pointer transition" />
              <FaFacebookF className="hover:text-yellow-300 cursor-pointer transition" />
              <FaTiktok className="hover:text-yellow-300 cursor-pointer transition" />
            </div>
          </div>
        </div>

        {/* LINK TERKAIT */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Link Terkait</h3>
          <span className="block w-28 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {linkTerkait.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-[#ffd000]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* LAYANAN */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Layanan</h3>
          <span className="block w-20 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {layanan.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-[#ffd000]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* PROFIL */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Profil</h3>
          <span className="block w-14 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {frofil.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-[#ffd000]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* PUBLIKASI */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Publikasi</h3>
          <span className="block w-22 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {publikasi.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-[#ffd000]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* INFORMASI PUBLIK */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Informasi Publik</h3>
          <span className="block w-40 h-0.5 bg-yellow-400 mb-6"></span>
          <div className="space-y-3 text-sm">
            {informasiPublik.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block hover:text-[#ffd000]"
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
