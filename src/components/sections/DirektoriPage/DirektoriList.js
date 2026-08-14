"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { direktoriData, kategoriDirektoriList } from "./DirektoriData";
import { IoSearchOutline } from "react-icons/io5";
import { BsPhone, BsEnvelope, BsGlobe } from "react-icons/bs";
import { HiOutlineTag, HiOutlineDocumentText } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import PDFViewerModal from "./PDFViewerModal";

function DirektoriCard({ direktori, onViewPDF }) {
  return (
    <div className="group w-full bg-white rounded-xl border border-[#e8eef5] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Gambar */}
      <div className="bg-gradient-to-br from-[#1A2CA3] to-[#0f1f7a] flex items-center justify-center h-48">
        {direktori.gambar ? (
          <img
            src={direktori.gambar}
            alt={direktori.nama}
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
          {direktori.kategori}
        </span>

        {/* Nama Institusi */}
        <h3 className="font-bold text-[#1a2e4a] leading-snug mb-2 text-base md:text-lg group-hover:text-[#1A2CA3] transition-colors line-clamp-2">
          {direktori.nama}
        </h3>

        {/* Ringkasan */}
        <p className="text-xs md:text-sm text-[#6b7a8d] leading-relaxed line-clamp-2 flex-1 mb-4">
          {direktori.ringkasan}
        </p>

        {/* Lokasi */}
        <div className="flex items-start gap-2 text-[11px] md:text-[12px] text-[#6b7a8d] mb-4 pb-4 border-b border-[#f0f4f8]">
          <MdLocationOn className="flex-shrink-0 mt-0.5 text-[#1A2CA3]" />
          <span>{direktori.lokasi}</span>
        </div>

        {/* Kontak Info */}
        <div className="space-y-2 mb-4">
          {direktori.kontak && (
            <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-[#6b7a8d]">
              <BsPhone className="text-[#1A2CA3]" />
              <a
                href={`tel:${direktori.kontak}`}
                className="hover:text-[#1A2CA3] transition-colors"
              >
                {direktori.kontak}
              </a>
            </div>
          )}
          {direktori.email && (
            <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-[#6b7a8d]">
              <BsEnvelope className="text-[#1A2CA3]" />
              <a
                href={`mailto:${direktori.email}`}
                className="hover:text-[#1A2CA3] transition-colors"
              >
                {direktori.email}
              </a>
            </div>
          )}
          {direktori.website && (
            <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-[#6b7a8d]">
              <BsGlobe className="text-[#1A2CA3]" />
              <a
                href={direktori.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1A2CA3] transition-colors"
              >
                {direktori.website}
              </a>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewPDF()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1A2CA3] text-white rounded-lg hover:bg-[#0f1f7a] transition-colors text-sm font-medium"
        >
          <HiOutlineDocumentText />
          Lihat Profil PDF
        </button>
      </div>
    </div>
  );
}

export default function DirektoriList() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const filteredDirektori = useMemo(() => {
    return direktoriData.filter((item) => {
      const categoryMatch =
        selectedCategory === "Semua" || item.kategori === selectedCategory;
      const searchMatch =
        item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ringkasan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lokasi.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  const handleViewPDF = (direktori) => {
    setSelectedPdf({
      file: direktori.pdfFile,
      title: direktori.nama,
    });
    setPdfModalOpen(true);
  };

  return (
    <section className="w-full bg-[#f8fafc] py-12 md:py-16">
      <div className="max-w-[1700px] mx-auto px-8 md:px-20">
        {/* Search dan Filter */}
        <div className="mb-8 md:mb-10 space-y-4 md:space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8a9bb0]" />
            <input
              type="text"
              placeholder="Cari dokumen, judul, atau kategori..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 border border-[#e8eef5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2CA3] transition-all text-sm md:text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {kategoriDirektoriList.map((kategori) => (
              <button
                key={kategori}
                onClick={() => setSelectedCategory(kategori)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-medium text-sm md:text-base transition-all ${
                  selectedCategory === kategori
                    ? "bg-[#1A2CA3] text-white shadow-lg"
                    : "bg-white text-[#6b7a8d] border border-[#e8eef5] hover:border-[#1A2CA3] hover:text-[#1A2CA3]"
                }`}
              >
                {kategori}
              </button>
            ))}
          </div>

          {/* Result Count */}
          <p className="text-sm text-[#8a9bb0]">
            Menampilkan <span className="font-semibold">{filteredDirektori.length}</span> dari{" "}
            <span className="font-semibold">{direktoriData.length}</span> institusi
          </p>
        </div>

        {/* Direktori Grid */}
        {filteredDirektori.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredDirektori.map((direktori) => (
              <DirektoriCard
                key={direktori.id}
                direktori={direktori}
                onViewPDF={() => handleViewPDF(direktori)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A2CA3]/10 rounded-full mb-4">
              <IoSearchOutline className="text-[#1A2CA3] text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-[#1a2e4a] mb-2">Tidak ada hasil</h3>
            <p className="text-[#8a9bb0]">
              Coba ubah filter atau gunakan kata kunci pencarian yang berbeda
            </p>
          </div>
        )}
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <PDFViewerModal
          isOpen={pdfModalOpen}
          pdfFile={selectedPdf.file}
          title={selectedPdf.title}
          onClose={() => setPdfModalOpen(false)}
        />
      )}
    </section>
  );
}
