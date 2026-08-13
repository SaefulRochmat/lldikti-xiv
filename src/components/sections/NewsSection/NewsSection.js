"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import AnnouncementList from "./AnnouncementList";
import Pagination from "./Pagination";
import { newsList, announcementList } from "@/data/news";
import Link from "next/link";

export default function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 2;

  const start = (currentPage - 1) * perPage;
  const selectedNews = newsList.slice(start, start + perPage);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6 sm:px-12 bg-gray-100 rounded-lg">
        {/* Title */}
        <div className="flex justify-between items-center mb-12">
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-xl font-bold text-[#153C91] max-w-7xl tracking-wide">
              BERITA LLDIKTI XIV
            </h3>
            <span className="block w-28 h-1 bg-yellow-400 mt-2"></span>
            <div className="w-28 h-1 bg-accent mt-3"></div>
          </div>
          <Link
            href="/"
            className="text-primary font-semibold hover:text-[#ffd000]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Selengkapnya »
          </Link>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {selectedNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {/* Right */}
          <AnnouncementList data={announcementList} />
        </div>

        {/* Pagination */}
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
