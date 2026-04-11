"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/Nav-Link";
import DropDownMenu from "@/components/blocks/Drop Down Menu/DropDownMenu";
import { MenuItems } from "@/constant/Nav-Items";
import { IoIosMenu } from "react-icons/io";
import { redirect } from "next/navigation";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(null);
  const [waktu, setWaktu] = useState("");
  const [tanggal, setTanggal] = useState("");

  // Realtime clock
  useEffect(() => {
    const hariList = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const bulanList = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const update = () => {
      const now = new Date();
      const hari = hariList[now.getDay()];
      const tgl = now.getDate();
      const bulan = bulanList[now.getMonth()];
      const tahun = now.getFullYear();
      const jam = String(now.getHours()).padStart(2, "0");
      const menit = String(now.getMinutes()).padStart(2, "0");
      const detik = String(now.getSeconds()).padStart(2, "0");

      setTanggal(`${hari}, ${tgl} ${bulan} ${tahun}`);
      setWaktu(`${jam}:${menit}:${detik} WIB`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // lock scroll ketika mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <nav className="bg-[#fffffff1] text-black shadow-md z-50 sticky top-0">
      {/* ===== TOP BAR ===== */}
      <div
        className="flex justify-between items-center text-[#e0e0e0f1] text-[15px] mx-auto px-8 md:px-28 py-4 md:h-10 bg-[#1A2CA3]"
        data-aos="fade-down"
        data-aos-duration="500"
      >
        {/* Kiri: Telepon + WhatsApp + Tanggal & Waktu */}
        <div className="hidden md:flex lg:flex items-center space-x-4 lg:space-x-6">
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill className="text-yellow-400" />
            <p className="font-medium">0981-2911065</p>
          </div>
          {/* Separator */}
          <span className="text-white/30">|</span>
          <Link
            href="https://wa.me/6281223487355"
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
            aria-label="Contact us on Whatsapp"
          >
            <FaWhatsapp className="text-green-400 text-lg" />
            <p className="font-medium">Whatsapp</p>
          </Link>

          {/* Separator */}
          <span className="text-white/30">|</span>

          {/* Tanggal & Waktu */}
          <div className="flex items-center space-x-2 text-[15px] text-white/80">
            <MdAccessTime className="text-yellow-400 text-base" />
            <span>{tanggal}</span>
            <span className="text-yellow-400 font-mono font-semibold tracking-wide">
              {waktu}
            </span>
          </div>
        </div>

        {/* Kanan: Sosial Media */}
        <div className="flex justify-between items-center space-x-5 text-[15px]">
          <div className="flex items-center gap-3 group">
            <FaEnvelope className="text-yellow-400" />
            <p className="group-hover:text-yellow-400 transition-colors font-medium">
              lldikti14@kemdikbud.go.id
            </p>
          </div>
          {/* Separator */}
          <span className="text-white/30">|</span>
          <Link
            href="https://www.instagram.com"
            className="hover:text-yellow-400 transition-all hover:scale-110"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram />
          </Link>
          {/* Separator */}
          <span className="text-white/30">|</span>
          <Link
            href="https://www.tiktok.com"
            className="hover:text-yellow-400 transition-all hover:scale-110"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok />
          </Link>
          {/* Separator */}
          <span className="text-white/30">|</span>
          <Link
            href="https://www.youtube.com"
            className="hover:text-yellow-400 transition-all hover:scale-110"
            aria-label="Subscribe to our YouTube"
          >
            <FaYoutube />
          </Link>
          {/* Separator */}
          <span className="text-white/30">|</span>
          <Link
            href="https://www.facebook.com"
            className="hover:text-yellow-400 transition-all hover:scale-110"
            aria-label="Like our Facebook page"
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="mx-auto px-8 md:px-28">
        <div
          className="flex justify-between items-center h-20"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <Logo />

          {/* ===== DESKTOP MENU ===== */}
          <div className="hidden lg:flex items-center space-x-6">
            {MenuItems.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDropDownOpen(link.name)}
                onMouseLeave={() => setDropDownOpen(null)}
              >
                {link.href ? (
                  <NavLink href={link.href}>{link.name}</NavLink>
                ) : (
                  <button className="hover:text-[#1A2CA3] transition-colors">
                    {link.name}
                  </button>
                )}
                {link.children && (
                  <DropDownMenu
                    items={link.children}
                    isOpen={dropdownOpen === link.name}
                  />
                )}
              </div>
            ))}

            <Button
              className="bg-[#1A2CA3] text-white font-medium rounded-3xl hover:bg-[#ffb700]"
              onClick={() => redirect("/")}
            >
              Kontak & Pengaduan
            </Button>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            className="lg:hidden text-3xl text-[#1A2CA3]"
            onClick={() => setMobileOpen(true)}
          >
            <IoIosMenu />
          </button>
        </div>
      </div>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
        ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl
        transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <Logo />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-4xl text-gray-600 hover:text-[#1A2CA3]"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Tanggal & Waktu Mobile */}
        <div className="flex items-center gap-2 px-6 py-3 bg-[#1A2CA3]/5 border-b text-[13px] text-[#1A2CA3]">
          <MdAccessTime className="text-[#1A2CA3] text-base flex-shrink-0" />
          <span>{tanggal}</span>
          <span className="font-mono font-semibold text-[#1A2CA3] ml-auto">
            {waktu}
          </span>
        </div>

        {/* Drawer Menu */}
        <div className="p-6 space-y-3 overflow-y-auto">
          {MenuItems.map((link) => (
            <div key={link.name}>
              {!link.children && (
                <NavLink href={link.href}>
                  <div
                    className="py-3 px-2 rounded-lg border-b
                    hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </div>
                </NavLink>
              )}
              {link.children && (
                <>
                  <button
                    className={`w-full text-left py-3 px-2 rounded-lg border-b
                    flex justify-between items-center transition-all
                    hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]
                    ${dropdownOpen === link.name ? "bg-[#1A2CA3]/5 text-[#1A2CA3]" : ""}`}
                    onClick={() =>
                      setDropDownOpen(
                        dropdownOpen === link.name ? null : link.name,
                      )
                    }
                  >
                    {link.name}
                    <span
                      className={`transition-transform duration-300
                      ${dropdownOpen === link.name ? "rotate-180" : ""}`}
                    >
                      <SlArrowDown />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300
                    ${dropdownOpen === link.name ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {link.children.map((child) => (
                      <NavLink key={child.name} href={child.href}>
                        <div
                          className="pl-6 pr-2 py-2 rounded-lg text-gray-600
                          hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.name}
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}

          <Button
            className="w-full mt-6 bg-[#1A2CA3] text-white rounded-3xl hover:bg-[#ffb700]"
            onClick={() => {
              setMobileOpen(false);
              redirect("/");
            }}
          >
            Kontak & Pengaduan
          </Button>
        </div>
      </div>
    </nav>
  );
}
