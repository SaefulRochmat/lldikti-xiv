"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FiActivity,
  FiBell,
  FiBookOpen,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiFileText,
  FiGrid,
  FiHelpCircle,
  FiHome,
  FiMenu,
  FiMoreHorizontal,
  FiPlus,
  FiSearch,
  FiSettings,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { faqItems } from "@/data/faq";
import { newsList } from "@/data/news";
import { applicationData } from "@/data/applications";

const navigation = [
  { label: "Ringkasan", icon: FiGrid, active: true },
  { label: "Konten", icon: FiFileText, count: newsList.length },
  { label: "Layanan", icon: FiBookOpen, count: applicationData.length },
  { label: "FAQ", icon: FiHelpCircle, count: faqItems.length },
  { label: "Pengguna", icon: FiUsers },
];

const barData = [
  { label: "Sen", value: 62 },
  { label: "Sel", value: 78 },
  { label: "Rab", value: 54 },
  { label: "Kam", value: 86 },
  { label: "Jum", value: 72 },
  { label: "Sab", value: 41 },
  { label: "Min", value: 66 },
];

const activities = [
  {
    type: "content",
    title: "Berita baru dipublikasikan",
    detail: "Pengumuman LLDIKTI Wilayah XIV",
    time: "12 menit lalu",
  },
  {
    type: "service",
    title: "Layanan diperbarui",
    detail: "Validasi data PDDIKTI",
    time: "45 menit lalu",
  },
  {
    type: "faq",
    title: "FAQ ditambahkan",
    detail: "Informasi layanan publik",
    time: "2 jam lalu",
  },
  {
    type: "user",
    title: "Akun editor dibuat",
    detail: "editor@lldikti14.go.id",
    time: "Kemarin",
  },
];

const activityIcons = {
  content: FiFileText,
  service: FiActivity,
  faq: FiHelpCircle,
  user: FiUsers,
};

function StatCard({ label, value, caption, icon: Icon, tone }) {
  return (
    <div className="rounded-2xl border border-[#e7ebf3] bg-white p-5 shadow-[0_4px_18px_rgba(25,42,77,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7f8ba3]">
            {label}
          </p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-[#17233d]">
            {value}
          </p>
        </div>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}
        >
          <Icon className="text-lg" />
        </span>
      </div>
      <p className="mt-4 text-xs text-[#7f8ba3]">{caption}</p>
    </div>
  );
}

function AdminSidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Tutup navigasi"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-[#101936]/40 lg:hidden"
        />
      )}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-40 flex w-[250px] flex-col bg-[#101936] px-5 py-6 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-2">
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5c842] text-sm font-black text-[#101936]">
              XIV
            </span>
            <span>
              <span className="block text-sm font-bold tracking-wide">
                LLDIKTI XIV
              </span>
              <span className="block text-[10px] text-white/50">
                ADMIN CONSOLE
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup navigasi"
            className="text-white/60 hover:text-white lg:hidden"
          >
            <FiX />
          </button>
        </div>

        <div className="mt-10">
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
            Workspace
          </p>
          <nav className="mt-3 space-y-1">
            {navigation.map(({ label, icon: Icon, active, count }) => (
              <button
                key={label}
                type="button"
                onClick={onClose}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors ${active ? "bg-white/10 font-semibold text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
              >
                <Icon
                  className={`text-base ${active ? "text-[#f5c842]" : ""}`}
                />
                <span className="flex-1">{label}</span>
                {count && (
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/60">
                    {count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto space-y-1">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white"
          >
            <FiSettings /> Pengaturan
          </button>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/60 hover:bg-white/5 hover:text-white"
          >
            <FiHome /> Lihat website
          </Link>
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 px-3 pt-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dbe5ff] text-xs font-bold text-[#1A2CA3]">
              AD
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">Admin LLDIKTI</p>
              <p className="truncate text-[10px] text-white/45">
                Administrator
              </p>
            </div>
            <FiMoreHorizontal className="ml-auto text-white/45" />
          </div>
        </div>
      </aside>
    </>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [period, setPeriod] = useState("7 hari terakhir");

  const filteredActivities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return activities;
    return activities.filter((item) =>
      `${item.title} ${item.detail}`.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#17233d] lg:flex">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#e7ebf3] bg-[#f5f7fb]/95 px-5 backdrop-blur md:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Buka navigasi"
              className="rounded-lg p-2 text-[#17233d] hover:bg-white lg:hidden"
            >
              <FiMenu className="text-xl" />
            </button>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7f8ba3]">
                Selasa, 8 September 2026
              </p>
              <h1 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
                Ringkasan dashboard
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <label className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#96a0b3]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari aktivitas"
                className="w-52 rounded-xl border border-[#e7ebf3] bg-white py-2.5 pl-9 pr-3 text-xs outline-none transition focus:border-[#9aa8c8]"
              />
            </label>
            <button
              type="button"
              aria-label="Notifikasi"
              className="relative rounded-xl border border-[#e7ebf3] bg-white p-2.5 text-[#64708a] hover:text-[#1A2CA3]"
            >
              <FiBell />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#e85d75]" />
            </button>
            <div className="hidden h-8 w-px bg-[#e1e6ef] md:block" />
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dbe5ff] text-xs font-bold text-[#1A2CA3]">
              AD
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1480px] px-5 py-7 md:px-8 md:py-9">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf7f1] px-3 py-1 text-[11px] font-bold text-[#25845b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#36a976]" /> Mode
                demo aktif
              </span>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#7f8ba3]">
                Pantau kesehatan konten dan aktivitas layanan website LLDIKTI
                Wilayah XIV dari satu ruang kerja.
              </p>
            </div>
            <Link
              href="/category/berita"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A2CA3] px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#153C91]"
            >
              <FiPlus /> Konten baru
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="Total konten"
              value={newsList.length}
              caption="Konten berita tersimpan"
              icon={FiFileText}
              tone="bg-[#e9edff] text-[#4458c7]"
            />
            <StatCard
              label="Layanan aktif"
              value={applicationData.length}
              caption="Aplikasi layanan terhubung"
              icon={FiActivity}
              tone="bg-[#e6f7f2] text-[#27936e]"
            />
            <StatCard
              label="FAQ tersedia"
              value={faqItems.length}
              caption="Pertanyaan siap dijawab"
              icon={FiHelpCircle}
              tone="bg-[#fff4d9] text-[#bd8512]"
            />
            <StatCard
              label="Pengunjung"
              value="2.4k"
              caption="Naik 12% dari minggu lalu"
              icon={FiUsers}
              tone="bg-[#fce9ee] text-[#d65c79]"
            />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)]">
            <section className="rounded-2xl border border-[#e7ebf3] bg-white p-5 shadow-[0_4px_18px_rgba(25,42,77,0.04)] md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold">Aktivitas website</h2>
                  <p className="mt-1 text-xs text-[#7f8ba3]">
                    Ringkasan kunjungan halaman publik
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setPeriod((current) =>
                      current === "7 hari terakhir"
                        ? "30 hari terakhir"
                        : "7 hari terakhir",
                    )
                  }
                  className="flex items-center gap-2 rounded-lg border border-[#e7ebf3] px-3 py-2 text-xs font-semibold text-[#64708a]"
                >
                  {period}
                  <FiChevronDown />
                </button>
              </div>
              <div className="mt-8 flex h-52 items-end gap-2 border-b border-l border-[#eef1f6] px-3 pb-0 pt-4 md:gap-5 md:px-5">
                {barData.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      className={`w-full max-w-10 rounded-t-lg transition-opacity hover:opacity-80 ${index === 3 ? "bg-[#1A2CA3]" : "bg-[#ccd5ff]"}`}
                      style={{ height: `${item.value}%` }}
                    />
                    <span className="text-[10px] text-[#9aa5b8]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#7f8ba3]">
                <span className="h-2 w-2 rounded-full bg-[#1A2CA3]" /> Kamis
                menjadi hari dengan kunjungan tertinggi
              </div>
            </section>

            <section className="rounded-2xl border border-[#e7ebf3] bg-white p-5 shadow-[0_4px_18px_rgba(25,42,77,0.04)] md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-bold">Tindakan cepat</h2>
                  <p className="mt-1 text-xs text-[#7f8ba3]">
                    Pekerjaan yang sering digunakan
                  </p>
                </div>
                <FiMoreHorizontal className="text-[#9aa5b8]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  href="/category/berita"
                  className="group rounded-xl border border-[#edf0f5] p-4 hover:border-[#b7c2ea] hover:bg-[#f8f9ff]"
                >
                  <FiFileText className="text-[#1A2CA3]" />
                  <p className="mt-3 text-xs font-bold">Kelola berita</p>
                  <p className="mt-1 text-[10px] text-[#8c98ac]">
                    {newsList.length} konten
                  </p>
                </Link>
                <Link
                  href="/faq"
                  className="group rounded-xl border border-[#edf0f5] p-4 hover:border-[#b7c2ea] hover:bg-[#f8f9ff]"
                >
                  <FiHelpCircle className="text-[#bd8512]" />
                  <p className="mt-3 text-xs font-bold">Kelola FAQ</p>
                  <p className="mt-1 text-[10px] text-[#8c98ac]">
                    {faqItems.length} pertanyaan
                  </p>
                </Link>
                <Link
                  href="/layanan"
                  className="group rounded-xl border border-[#edf0f5] p-4 hover:border-[#b7c2ea] hover:bg-[#f8f9ff]"
                >
                  <FiBookOpen className="text-[#27936e]" />
                  <p className="mt-3 text-xs font-bold">Kelola layanan</p>
                  <p className="mt-1 text-[10px] text-[#8c98ac]">
                    {applicationData.length} layanan
                  </p>
                </Link>
                <button
                  type="button"
                  className="rounded-xl border border-dashed border-[#d9dfeb] p-4 text-left hover:border-[#9aa8c8]"
                >
                  <FiPlus className="text-[#7f8ba3]" />
                  <p className="mt-3 text-xs font-bold">Tambah modul</p>
                  <p className="mt-1 text-[10px] text-[#8c98ac]">
                    Segera hadir
                  </p>
                </button>
              </div>
            </section>
          </div>

          <section className="mt-6 rounded-2xl border border-[#e7ebf3] bg-white shadow-[0_4px_18px_rgba(25,42,77,0.04)]">
            <div className="flex flex-col justify-between gap-3 border-b border-[#edf0f5] px-5 py-5 md:flex-row md:items-center md:px-6">
              <div>
                <h2 className="font-bold">Aktivitas terbaru</h2>
                <p className="mt-1 text-xs text-[#7f8ba3]">
                  Perubahan terakhir pada workspace admin
                </p>
              </div>
              <button
                type="button"
                className="flex items-center gap-1 text-xs font-bold text-[#1A2CA3]"
              >
                Lihat semua <FiChevronRight />
              </button>
            </div>
            <div className="divide-y divide-[#f0f2f6]">
              {filteredActivities.map((activity) => {
                const Icon = activityIcons[activity.type];
                return (
                  <div
                    key={`${activity.title}-${activity.time}`}
                    className="flex items-center gap-4 px-5 py-4 md:px-6"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f1f4ff] text-[#5266d2]">
                      <Icon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-[#25324d]">
                        {activity.title}
                      </p>
                      <p className="mt-1 truncate text-xs text-[#8995aa]">
                        {activity.detail}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-[10px] text-[#a0aabc]">
                      <FiClock /> {activity.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
