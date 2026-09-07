"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FaChevronDown,
  FaMagnifyingGlass,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { faqCategories, faqItems } from "@/data/faq";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <article className="border-b border-[#e8eef5] last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors hover:bg-[#f8fafc] md:px-6"
      >
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A2CA3]/10 text-xs font-bold text-[#1A2CA3]">
          ?
        </span>
        <span className="flex-1 pr-2 text-sm font-semibold leading-relaxed text-[#1a2e4a] md:text-[15px]">
          {item.question}
        </span>
        <FaChevronDown
          className={`mt-1 shrink-0 text-xs text-[#1A2CA3] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={`faq-answer-${item.id}`}
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-16 md:px-6 md:pb-6 md:pl-[4.5rem]">
            <p className="text-sm leading-7 text-[#64748b]">{item.answer}</p>
            {item.relatedLink && (
              <Link
                href={item.relatedLink.href}
                className="mt-3 inline-flex text-xs font-bold text-[#1A2CA3] hover:text-[#153C91] hover:underline"
              >
                {item.relatedLink.label} <span className="ml-1">-&gt;</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FaqContent() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState([]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "Semua" || item.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${item.question} ${item.answer} ${item.category}`
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const toggleItem = (id) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id],
    );
  };

  const allVisibleItemsOpen =
    filteredItems.length > 0 &&
    filteredItems.every((item) => openItems.includes(item.id));

  const toggleAll = () => {
    setOpenItems((current) => {
      if (allVisibleItemsOpen) {
        return current.filter(
          (id) => !filteredItems.some((item) => item.id === id),
        );
      }
      return Array.from(
        new Set([...current, ...filteredItems.map((item) => item.id)]),
      );
    });
  };

  return (
    <section className="bg-[#f8fafc] px-4 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-6 rounded-2xl bg-[#153C91] px-6 py-8 text-white shadow-lg md:grid-cols-[1fr_24rem] md:items-center md:px-10 md:py-10">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f5c842]">
              Pusat bantuan
            </p>
            <h1 className="max-w-xl text-2xl font-bold leading-tight md:text-4xl">
              Temukan jawaban untuk pertanyaan Anda
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 md:text-base">
              Jelajahi informasi umum tentang layanan, PDDIKTI, dosen, dan
              informasi publik LLDIKTI Wilayah XIV.
            </p>
          </div>
          <div className="relative">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2CA3]" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari pertanyaan..."
              aria-label="Cari pertanyaan FAQ"
              className="w-full rounded-xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm text-[#1a2e4a] outline-none ring-[#f5c842] placeholder:text-[#94a3b8] focus:ring-2"
            />
          </div>
        </div>

        <div
          className="mb-8 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Kategori FAQ"
        >
          {faqCategories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-lg px-4 py-2.5 text-xs font-semibold transition-all md:text-sm ${
                activeCategory === category
                  ? "bg-[#1A2CA3] text-white shadow"
                  : "border border-[#e8eef5] bg-white text-[#64748b] hover:border-[#1A2CA3] hover:text-[#1A2CA3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-[#e8eef5] bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-[#e8eef5] px-5 py-4 md:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1A2CA3]">
                  Pertanyaan umum
                </p>
                <p className="mt-1 text-xs text-[#94a3b8]">
                  {filteredItems.length} pertanyaan ditemukan
                </p>
              </div>
              {filteredItems.length > 0 && (
                <button
                  type="button"
                  onClick={toggleAll}
                  className="text-xs font-semibold text-[#1A2CA3] hover:underline"
                >
                  {allVisibleItemsOpen ? "Tutup semua" : "Buka semua"}
                </button>
              )}
            </div>

            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))
            ) : (
              <div className="px-6 py-16 text-center">
                <FaRegCircleQuestion className="mx-auto mb-4 text-4xl text-[#cbd5e1]" />
                <h2 className="text-base font-bold text-[#1a2e4a]">
                  Pertanyaan tidak ditemukan
                </h2>
                <p className="mt-2 text-sm text-[#64748b]">
                  Coba gunakan kata kunci lain atau pilih kategori Semua.
                </p>
              </div>
            )}
          </div>

          <aside className="rounded-2xl border border-[#e8eef5] bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5c842]/20 text-[#1A2CA3]">
              <FaRegCircleQuestion />
            </div>
            <h2 className="text-base font-bold text-[#1a2e4a]">
              Belum menemukan jawaban?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">
              Tim kami siap membantu menjawab pertanyaan yang belum tersedia di
              halaman ini.
            </p>
            <Link
              href="/kontak"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#1A2CA3] px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#153C91]"
            >
              Hubungi LLDIKTI XIV
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
