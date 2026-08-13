"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuItems, searchSuggestions } from "@/data/navigation";
import DropdownMenu from "@/components/features/navigation/DropdownMenu";
import Button from "@/components/ui/Button";
import {
  IoIosMenu,
  IoMdClose,
} from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

// ─── Search Modal ────────────────────────────────────────────────────────────
function SearchModal({ onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filtered = query.trim()
    ? searchSuggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : searchSuggestions.slice(0, 6);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />
      <div className="fixed top-[72px] left-1/2 -translate-x-1/2 z-[70] w-full max-w-xl px-4 animate-slideDown">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#e8eef5]">
          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#f0f4f8]">
            <IoSearchOutline className="text-[#1A2CA3] text-xl flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari halaman, layanan, atau informasi..."
              className="flex-1 text-sm text-[#1a2e4a] placeholder-gray-400 outline-none bg-transparent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <IoMdClose className="text-lg" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[10px] font-medium text-gray-400 bg-gray-100 rounded border border-gray-200">
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
                    <span className="text-sm text-[#1a2e4a] group-hover:text-[#1A2CA3] transition-colors">
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

          <div className="px-5 py-3 bg-[#f8fafc] border-t border-[#f0f4f8] flex items-center justify-between">
            <p className="text-[11px] text-gray-400">
              Tekan{" "}
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-medium">
                ↵
              </kbd>{" "}
              untuk membuka
            </p>
            <p className="text-[11px] text-gray-400">LLDikti Wilayah XIV Papua</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.2s ease-out forwards; }
      `}</style>
    </>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [waktu, setWaktu] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  // Realtime clock
  useEffect(() => {
    const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const bulanList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const update = () => {
      const now = new Date();
      setTanggal(`${hariList[now.getDay()]}, ${now.getDate()} ${bulanList[now.getMonth()]} ${now.getFullYear()}`);
      setWaktu(`${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")} WIT`);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  return (
    <>
      <nav className="bg-white text-black shadow-sm z-50 top-0 fixed w-full">
        {/* ── Top bar ── */}
        <div className="hidden md:flex justify-between items-center bg-[#153C91] text-white/90 text-[13px] px-6 lg:px-16 xl:px-24 h-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <BsFillTelephoneFill className="text-yellow-400 text-xs" />
              <span>0981-2911065</span>
            </div>
            <span className="text-white/20">|</span>
            <Link
              href="https://wa.me/6281223487355"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-green-400" />
              <span>WhatsApp</span>
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2 text-white/70">
              <MdAccessTime className="text-yellow-400" />
              <span>{tanggal}</span>
              <span className="text-yellow-400 font-mono font-semibold">{waktu}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>lldikti14@kemdikbud.go.id</span>
            </div>
            <span className="text-white/20">|</span>
            {[
              { href: "https://www.instagram.com", icon: <FaInstagram />, label: "Instagram" },
              { href: "https://www.tiktok.com", icon: <FaTiktok />, label: "TikTok" },
              { href: "https://www.youtube.com", icon: <FaYoutube />, label: "YouTube" },
              { href: "https://www.facebook.com", icon: <FaFacebookF />, label: "Facebook" },
            ].map(({ href, icon, label }, i, arr) => (
              <span key={label} className="flex items-center gap-4">
                <Link href={href} className="hover:text-yellow-400 transition-all hover:scale-110" aria-label={label}>
                  {icon}
                </Link>
                {i < arr.length - 1 && <span className="text-white/20">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main nav ── */}
        <div className="px-6 lg:px-16 xl:px-24">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/Logos/Logo2.png"
                alt="Logo LLDIKTI XIV"
                width={180}
                height={60}
                className="w-[140px] md:w-[160px] h-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1A2CA3] rounded-lg hover:bg-[#1A2CA3]/5 transition-all"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <SlArrowDown className={`text-[10px] transition-transform duration-200 ${dropdownOpen === item.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                  {item.hasDropdown && item.children && (
                    <DropdownMenu
                      items={item.children}
                      isOpen={dropdownOpen === item.name}
                    />
                  )}
                </div>
              ))}

              <button
                onClick={() => setSearchOpen(true)}
                className="ml-2 w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-[#1A2CA3]/10 hover:text-[#1A2CA3] transition-all"
                aria-label="Cari"
              >
                <IoSearchOutline className="text-lg" />
              </button>

              <Button
                variant="primary"
                size="sm"
                className="ml-2 rounded-lg"
                onClick={() => {}}
              >
                Kontak & Pengaduan
              </Button>
            </div>

            {/* Mobile right */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all"
                aria-label="Cari"
              >
                <IoSearchOutline className="text-xl" />
              </button>
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[#1A2CA3] hover:bg-[#1A2CA3]/10 transition-all"
                onClick={() => setMobileOpen(true)}
                aria-label="Buka menu"
              >
                <IoIosMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 bg-gradient-to-r from-[#153C91] via-yellow-400 to-[#153C91]" />
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
          <Image
            src="/Logos/Logo2.png"
            alt="Logo LLDIKTI XIV"
            width={140}
            height={48}
            className="h-auto object-contain"
          />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Tutup menu"
          >
            <IoMdClose className="text-xl" />
          </button>
        </div>

        <div className="flex items-center gap-2 px-5 py-2.5 bg-[#1A2CA3]/5 border-b border-gray-100 text-xs text-[#1A2CA3]">
          <MdAccessTime className="flex-shrink-0" />
          <span>{tanggal}</span>
          <span className="font-mono font-semibold ml-auto">{waktu}</span>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-120px)]">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {!item.hasDropdown ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3] transition-all"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex justify-between items-center transition-all
                        ${dropdownOpen === item.name ? "bg-[#1A2CA3]/5 text-[#1A2CA3]" : "text-gray-700 hover:bg-[#1A2CA3]/5 hover:text-[#1A2CA3]"}`}
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <SlArrowDown
                        className={`text-xs transition-transform duration-300 ${dropdownOpen === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        dropdownOpen === item.name ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 pl-8 pr-4 py-2.5 text-sm text-gray-500 hover:text-[#1A2CA3] hover:bg-[#1A2CA3]/5 rounded-lg transition-all"
                        >
                          <span className="w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <Button
              variant="primary"
              size="md"
              className="w-full rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Kontak & Pengaduan
            </Button>
          </div>
        </div>
      </div>

      {/* ── Search modal ── */}
      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
}
