"use client";

import { useState } from "react";
import Link from "next/link";
import { beritaData, kategoriList } from "./BeritaData";
import { IoSearchOutline } from "react-icons/io5";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import { HiOutlineTag } from "react-icons/hi";

function BeritaCard({ berita, featured = false }) {
  return (
    <div
      className={`group w-full bg-white rounded-xl border border-[#e8eef5] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        featured ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      {/* Gambar */}
      <div
        className={`bg-gradient-to-br from-[#1A2CA3] to-[#0f1f7a] flex items-center justify-center flex-shrink-0 ${
          featured ? "md:w-80 h-52 md:h-auto" : "h-44"
        }`}
      >
        {berita.gambar ? (
          <img
            src={berita.gambar}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-30">
            <div className="w-12 h-12 rounded-lg border-2 border-white/50" />
            <div className="w-20 h-1.5 bg-white/50 rounded" />
            <div className="w-14 h-1.5 bg-white/30 rounded" />
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Kategori */}
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1A2CA3] bg-[#1A2CA3]/10 px-3 py-1 rounded-lg w-fit mb-3">
          <HiOutlineTag className="text-xs" />
          {berita.kategori}
        </span>

        {/* Judul */}
        <h3
          className={`font-bold text-[#1a2e4a] leading-snug mb-2 md:mb-3 group-hover:text-[#1A2CA3] transition-colors ${
            featured ? "text-lg md:text-xl" : "text-sm md:text-base"
          }`}
        >
          {berita.judul}
        </h3>

        {/* Ringkasan */}
        <p className="text-xs md:text-sm text-[#6b7a8d] leading-relaxed line-clamp-3 flex-1 mb-4 max-w-prose">
          {berita.ringkasan}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] md:text-[12px] text-[#8a9bb0] border-t border-[#f0f4f8] pt-3">
          <span className="flex items-center gap-1.5">
            <BsCalendar3 />
            {berita.tanggal}
          </span>
          <span className="flex items-center gap-1.5">
            <BsPerson />
            {berita.penulis}
          </span>
          <Link
            href={`/berita/${berita.id}`}
            className="ml-auto text-[#1A2CA3] font-semibold hover:underline"
          >
            Baca →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BeritaList() {
  const [aktifKategori, setAktifKategori] = useState("Semua");
  const [query, setQuery] = useState("");

  const filtered = beritaData.filter((b) => {
    const cocokKategori =
      aktifKategori === "Semua" || b.kategori === aktifKategori;
    const cocokQuery =
      b.judul.toLowerCase().includes(query.toLowerCase()) ||
      b.ringkasan.toLowerCase().includes(query.toLowerCase());
    return cocokKategori && cocokQuery;
  });

  const featured = filtered.find((b) => b.featured);
  const lainnya = filtered.filter(
    (b) => !b.featured || filtered.indexOf(b) > 0,
  );

  return (
    <section className="w-full py-10 md:py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari berita..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#e8eef5] bg-white text-sm text-[#1a2e4a] placeholder-gray-400 outline-none focus:border-[#1A2CA3] focus:ring-2 focus:ring-[#1A2CA3]/10 transition-all"
            />
          </div>

          {/* Kategori */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {kategoriList.map((kat) => (
              <button
                key={kat}
                onClick={() => setAktifKategori(kat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all ${
                  aktifKategori === kat
                    ? "bg-[#1A2CA3] text-white shadow"
                    : "bg-white text-[#6b7a8d] border border-[#e8eef5] hover:border-[#1A2CA3] hover:text-[#1A2CA3]"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <IoSearchOutline className="text-5xl mx-auto mb-3 text-gray-300" />
            <p>Tidak ada berita ditemukan.</p>
          </div>
        ) : (
          <>
            {/* Featured */}
            {featured && aktifKategori === "Semua" && !query && (
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest text-[#1A2CA3] uppercase mb-4">
                  Berita Utama
                </p>
                <BeritaCard berita={featured} featured />
              </div>
            )}

            {/* Grid */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#1A2CA3] uppercase mb-4">
                {query || aktifKategori !== "Semua"
                  ? `${filtered.length} Berita Ditemukan`
                  : "Berita Terbaru"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {(aktifKategori === "Semua" && !query ? lainnya : filtered).map(
                  (berita) => (
                    <BeritaCard key={berita.id} berita={berita} />
                  ),
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
