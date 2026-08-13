"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsList, announcementList } from "@/data/news";
import SectionHeading from "@/components/ui/SectionHeading";

function NewsCard({ item }) {
  const [day, month] = item.date?.split(" ") || [];

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#e8eef5] flex flex-col"
      data-aos="fade-up"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
        <Image
          src="/Assets/Gedung-lldikti.jpg"
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-yellow-400 text-[#153C91] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {item.tag}
        </div>
        <div className="absolute bottom-0 left-0 bg-[#153C91] text-white px-4 py-2 text-center rounded-tr-lg">
          <div className="text-lg font-black leading-none">{day}</div>
          <div className="text-[9px] uppercase font-bold tracking-tight">{month}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#1A2CA3] transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
          {item.description}
        </p>
        <Link
          href="/#"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A2CA3] hover:text-yellow-500 transition-colors mt-auto"
        >
          Baca Selengkapnya »
        </Link>
      </div>
    </div>
  );
}

function AnnouncementList({ data }) {
  return (
    <div
      className="bg-[#153C91] text-white rounded-xl p-6 h-full shadow-sm"
      data-aos="fade-left"
    >
      <div className="flex justify-between items-baseline mb-6">
        <h3 className="text-base font-bold border-b-2 border-yellow-400 pb-1">
          Pengumuman
        </h3>
        <Link
          href="/#"
          className="text-xs font-bold text-yellow-400 hover:text-white transition-colors"
        >
          Lihat Semua »
        </Link>
      </div>

      <div className="space-y-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="group border-b border-white/10 pb-5 last:border-none last:pb-0"
          >
            <Link href="/#" className="block">
              <p className="text-sm font-medium mb-2 leading-relaxed group-hover:text-yellow-400 transition-colors line-clamp-3">
                {item.title}
              </p>
              <div className="flex items-center gap-2 text-yellow-400/80">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                <span className="text-[11px] font-semibold uppercase tracking-wide">
                  {item.date}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pagination({ total, perPage, currentPage, setPage }) {
  const pages = Math.ceil(total / perPage);
  return (
    <div className="flex gap-2 mt-10 justify-center" data-aos="fade-up">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer
            ${currentPage === i + 1
              ? "bg-yellow-400 text-[#1A2CA3] shadow-md scale-110"
              : "bg-white text-gray-500 border border-[#e8eef5] hover:bg-[#153C91] hover:text-white hover:border-[#153C91]"
            }`}
          aria-label={`Halaman ${i + 1}`}
          aria-current={currentPage === i + 1 ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;
  const start = (currentPage - 1) * perPage;
  const selectedNews = newsList.slice(start, start + perPage);

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div data-aos="fade-right" data-aos-duration="800">
            <SectionHeading
              eyebrow="Informasi Terkini"
              title="Berita LLDIKTI XIV"
            />
          </div>
          <Link
            href="/category/berita"
            className="text-sm font-semibold text-[#153C91] hover:text-yellow-500 transition-colors hidden sm:block"
            data-aos="fade-left"
          >
            Selengkapnya »
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {selectedNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
          <AnnouncementList data={announcementList} />
        </div>

        <Pagination
          total={newsList.length}
          perPage={perPage}
          currentPage={currentPage}
          setPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
