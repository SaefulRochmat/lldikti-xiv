"use client";

import { useEffect, useState } from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const initialForm = {
  judul: "",
  ringkasan: "",
  isi: "",
  kategori: "Pengumuman",
  tanggal: new Date().toISOString().slice(0, 10),
  penulis: "Tim Humas LLDIKTI XIV",
  featured: false,
};

const kategoriList = [
  "Akreditasi & Mutu",
  "Kerja Sama",
  "Dosen & SDM",
  "Beasiswa",
  "Monitoring",
  "Pengumuman",
];

function displayDate(value) {
  return new Date(value).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsManager() {
  const [form, setForm] = useState(initialForm);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  async function loadNews() {
    const response = await fetch("/api/admin/news", { credentials: "include" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Berita gagal dimuat.");
    setNews(result.data.news);
  }

  useEffect(() => {
    loadNews()
      .catch((error) => setMessage(error.message))
      .finally(() => setLoading(false));
  }, []);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
      if (imageFile) formData.append("gambarFile", imageFile);

      const response = await fetch("/api/admin/news", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || `Berita gagal disimpan (HTTP ${response.status}).`,
        );
      setNews((current) => [result.data.news, ...current]);
      setForm(initialForm);
      setImageFile(null);
      setMessage("Berita berhasil diterbitkan.");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Hapus berita ini?")) return;
    const response = await fetch(`/api/admin/news/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.error || "Berita gagal dihapus.");
      return;
    }
    setNews((current) => current.filter((item) => item.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-5 py-8 text-[#17233d] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7f8ba3]">
              Konten website
            </p>
            <h1 className="mt-1 text-2xl font-bold">Kelola Berita</h1>
            <p className="mt-2 text-sm text-[#7f8ba3]">
              Terbitkan berita yang akan tampil di section berita publik.
            </p>
          </div>
          <a href="/admin" className="text-sm font-semibold text-[#1A2CA3]">
            Kembali ke dashboard
          </a>
        </div>

        {message && (
          <p className="mb-5 rounded-xl bg-white px-4 py-3 text-sm text-[#1A2CA3] shadow-sm">
            {message}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[#e7ebf3] bg-white p-5 shadow-sm md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="md:col-span-2 text-sm font-semibold">
              Judul berita
              <input
                required
                name="judul"
                value={form.judul}
                onChange={updateField}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
            </label>
            <label className="text-sm font-semibold">
              Kategori
              <select
                name="kategori"
                value={form.kategori}
                onChange={updateField}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              >
                {kategoriList.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold">
              Tanggal
              <input
                required
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={updateField}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
            </label>
            <label className="text-sm font-semibold">
              Penulis
              <input
                required
                name="penulis"
                value={form.penulis}
                onChange={updateField}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
            </label>
            <label className="text-sm font-semibold">
              Gambar berita
              <input
                type="file"
                name="gambarFile"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={(event) =>
                  setImageFile(event.target.files?.[0] || null)
                }
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
              <span className="mt-1 block text-xs font-normal text-[#7f8ba3]">
                Format JPG, PNG, WEBP, atau GIF. Maksimal 5 MB.
              </span>
            </label>
            <label className="md:col-span-2 text-sm font-semibold">
              Ringkasan
              <textarea
                required
                name="ringkasan"
                value={form.ringkasan}
                onChange={updateField}
                rows={3}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
            </label>
            <label className="md:col-span-2 text-sm font-semibold">
              Isi berita
              <textarea
                required
                name="isi"
                value={form.isi}
                onChange={updateField}
                rows={7}
                className="mt-2 w-full rounded-lg border border-[#dfe5ef] px-3 py-2.5 font-normal outline-none focus:border-[#1A2CA3]"
              />
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={updateField}
              />{" "}
              Jadikan berita utama
            </label>
          </div>
          <button
            disabled={saving}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#1A2CA3] px-4 py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            <FiPlus /> {saving ? "Menyimpan..." : "Terbitkan berita"}
          </button>
        </form>

        <section className="mt-6 rounded-2xl border border-[#e7ebf3] bg-white p-5 shadow-sm md:p-6">
          <h2 className="font-bold">Berita terbit</h2>
          {loading ? (
            <p className="mt-4 text-sm text-[#7f8ba3]">Memuat berita...</p>
          ) : news.length === 0 ? (
            <p className="mt-4 text-sm text-[#7f8ba3]">
              Belum ada berita dari dashboard.
            </p>
          ) : (
            <div className="mt-4 divide-y divide-[#edf0f5]">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 py-4"
                >
                  <div>
                    <p className="font-semibold">{item.judul}</p>
                    <p className="mt-1 text-xs text-[#7f8ba3]">
                      {item.kategori} · {displayDate(item.tanggal)}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Hapus ${item.judul}`}
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg p-2 text-[#d65c79] hover:bg-[#fce9ee]"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
