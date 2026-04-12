"use client";

import { useState, useEffect, useRef } from "react";
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
import { IoSearchOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";

// Daftar halaman/konten yang bisa dicari
const searchSuggestions = [
  { label: "Profil LLDikti Wilayah XIV", href: "/profil" },
  { label: "Visi & Misi", href: "/profil#visi-misi" },
  { label: "Sejarah Lembaga", href: "/profil#sejarah" },
  { label: "Tugas & Fungsi", href: "/profil#tugas-fungsi" },
  { label: "Struktur Organisasi", href: "/profil#struktur-organisasi" },
  { label: "Berita Terbaru", href: "/berita" },
  { label: "Pengumuman", href: "/pengumuman" },
  { label: "Akreditasi Program Studi", href: "/layanan/akreditasi" },
  { label: "KIP Kuliah", href: "/layanan/kip-kuliah" },
  { label: "SISTER Dosen", href: "/layanan/sister" },
  { label: "PDDikti", href: "/layanan/pddikti" },
  { label: "Kontak & Pengaduan", href: "/kontak" },
  { label: "Tautan Terkait", href: "/#tautan-terkait" },
];

function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filtered = query.trim()
    ? searchSuggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase()),
      )
    : searchSuggestions.slice(0, 6);

  // Autofocus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Tutup dengan Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-[70] w-full max-w-xl px-4 animate-slideDown">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e8eef5]">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#f0f4f8]">
            <IoSearchOutline className="text-[#1A2CA3] text-xl flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari halaman, layanan, atau informasi..."
              className="flex-1 text-[15px] text-[#1a2e4a] placeholder-gray-400 outline-none bg-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoMdClose className="text-lg" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-gray-400 bg-gray-100 rounded border border-gray-200">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="py-2 max-h-72 overflow-y-auto">
            {filtered.length > 0 ? (
              <>
                <p className="px-5 pt-1 pb-2 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  {query ? `Hasil untuk "${query}"` : "Halaman populer"}
                </p>
                {filtered.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-[#1A2CA3]/5 transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1A2CA3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A2CA3]/20 transition-colors">
                      <IoSearchOutline className="text-[#1A2CA3] text-sm" />
                    </div>
                    <span className="text-[14px] text-[#1a2e4a] group-hover:text-[#1A2CA3] transition-colors">
                      {item.label}
                    </span>
                    <span className="ml-auto text-xs text-gray-300 group-hover:text-[#1A2CA3]/50 transition-colors">
                      →
                    </span>
                  </Link>
                ))}
              </>
            ) : (
              <div className="py-10 text-center text-gray-400 text-sm">
                <IoSearchOutline className="text-3xl mx-auto mb-2 text-gray-300" />
                Tidak ada hasil untuk{" "}
                <span className="font-medium text-[#1A2CA3]">"{query}"</span>
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-5 py-3 bg-[#f8fafc] border-t border-[#f0f4f8] flex items-center justify-between">
            <p className="text-[11px] text-gray-400">
              Tekan{" "}
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-medium">
                ↵
              </kbd>{" "}
              untuk membuka
            </p>
            <p className="text-[11px] text-gray-400">
              LLDikti Wilayah XIV Papua
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(null);
  const [waktu, setWaktu] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

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
    <>
      <nav className="bg-[#fffffff1] text-black shadow-md z-50 sticky top-0">
        {/* ===== TOP BAR ===== */}
        <div
          className="hidden md:flex lg:flex justify-between items-center text-[#e0e0e0f1] text-[15px] mx-auto px-8 md:px-64 py-4 md:h-10 bg-[#153C91]"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill className="text-yellow-400" />
              <p className="font-medium">0981-2911065</p>
            </div>
            <span className="text-white/30">|</span>
            <Link
              href="https://wa.me/6281223487355"
              className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
              aria-label="Contact us on Whatsapp"
            >
              <FaWhatsapp className="text-green-400 text-lg" />
              <p className="font-medium">Whatsapp</p>
            </Link>
            <span className="text-white/30">|</span>
            <div className="flex items-center space-x-2 text-[15px] text-white/80">
              <MdAccessTime className="text-yellow-400 text-base" />
              <span>{tanggal}</span>
              <span className="text-yellow-400 font-mono font-semibold tracking-wide">
                {waktu}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center space-x-5 text-[15px]">
            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-yellow-400" />
              <p className="group-hover:text-yellow-400 transition-colors font-medium">
                lldikti14@kemdikbud.go.id
              </p>
            </div>
            <span className="text-white/30">|</span>
            <Link
              href="https://www.instagram.com"
              className="hover:text-yellow-400 transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="https://www.tiktok.com"
              className="hover:text-yellow-400 transition-all hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok />
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="https://www.youtube.com"
              className="hover:text-yellow-400 transition-all hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube />
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="https://www.facebook.com"
              className="hover:text-yellow-400 transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>

        {/* ===== MAIN NAV ===== */}
        <div className="mx-auto px-8 md:px-64">
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
                    <button className="hover:text-[#153C91] transition-colors">
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

              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all duration-200 hover:scale-110"
                aria-label="Cari"
              >
                <IoSearchOutline className="text-xl" />
              </button>

              <Button
                className="bg-[#153C91] text-white font-medium rounded-3xl hover:bg-[#ffb700]"
                onClick={() => redirect("/")}
              >
                Kontak & Pengaduan
              </Button>
            </div>

            {/* ===== MOBILE RIGHT (search + hamburger) ===== */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all"
                aria-label="Cari"
              >
                <IoSearchOutline className="text-xl" />
              </button>
              <button
                className="text-3xl text-[#1A2CA3]"
                onClick={() => setMobileOpen(true)}
              >
                <IoIosMenu />
              </button>
            </div>
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
          <div className="flex justify-between items-center p-6 border-b">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-4xl text-gray-600 hover:text-[#1A2CA3]"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-[#1A2CA3]/5 border-b text-[13px] text-[#1A2CA3]">
            <MdAccessTime className="text-[#1A2CA3] text-base flex-shrink-0" />
            <span>{tanggal}</span>
            <span className="font-mono font-semibold text-[#1A2CA3] ml-auto">
              {waktu}
            </span>
          </div>

          <div className="p-6 space-y-3 overflow-y-auto">
            {MenuItems.map((link) => (
              <div key={link.name}>
                {!link.children && (
                  <NavLink href={link.href}>
                    <div
                      className="py-3 px-2 rounded-lg border-b hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </div>
                  </NavLink>
                )}
                {link.children && (
                  <>
                    <button
                      className={`w-full text-left py-3 px-2 rounded-lg border-b flex justify-between items-center transition-all hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]
                      ${dropdownOpen === link.name ? "bg-[#1A2CA3]/5 text-[#1A2CA3]" : ""}`}
                      onClick={() =>
                        setDropDownOpen(
                          dropdownOpen === link.name ? null : link.name,
                        )
                      }
                    >
                      {link.name}
                      <span
                        className={`transition-transform duration-300 ${dropdownOpen === link.name ? "rotate-180" : ""}`}
                      >
                        <SlArrowDown />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${dropdownOpen === link.name ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      {link.children.map((child) => (
                        <NavLink key={child.name} href={child.href}>
                          <div
                            className="pl-6 pr-2 py-2 rounded-lg text-gray-600 hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
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
        <div className="md:flex lg:flex justify-between items-center text-[#e0e0e0f1] text-[15px] mx-auto px-1 md:px-1 py-1 md:h-1 bg-[#153C91]"></div>
      </nav>

      {/* ===== SEARCH MODAL ===== */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
