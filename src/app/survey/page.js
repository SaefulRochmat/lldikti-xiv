"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaClipboardCheck,
  FaMagnifyingGlass,
  FaRegClock,
  FaRotateLeft,
  FaShieldHalved,
} from "react-icons/fa6";

const serviceOptions = [
  "Verifikasi dan Validasi Ijazah",
  "Alih Kelola Perguruan Tinggi Swasta",
  "Perubahan Nama Badan Penyelenggara Perguruan Tinggi Swasta",
  "Pendirian Perguruan Tinggi Swasta",
  "Perubahan Bentuk Perguruan Tinggi Swasta",
  "Pengembangan Kampus dan Program Studi Diluar Kampus Utama",
  "Pembukaan Program Studi Baru",
  "Rekomendasi Sarana dan Prasarana Perguruan Tinggi",
  "Rekomendasi Akreditasi Perguruan Tinggi",
  "Rekomendasi Akreditasi Program Studi",
  "Pelaporan Data Wisuda",
  "Usulan Penerima Beasiswa dan Bantuan Biaya Pendidikan",
  "Penandatanganan E-Kontrak Hibah Program Kreativitas Mahasiswa 5 Bidang",
  "Penandatanganan Kontrak Hibah Dikti Penelitian dan Pengabdian Masyarakat",
  "Pendataan Hak Kekayaan Intelektual (HKI)",
  "Penerbitan Surat Rekomendasi Migrasi Data Program Studi Pada PDDIKTI",
  "Validasi Perubahan Data Dosen pada PDDIKTI",
  "Validasi Pembukaan Periode Pelaporan pada PDDIKTI",
  "Validasi Pindah Homebase pada PDDIKTI",
  "Pengusulan Jabatan Fungsional Akademik Dosen Asisten Ahli, Lektor",
  "Pengusulan Jabatan Fungsional Akademik Dosen Lektor Kepala",
  "Pengusulan Jabatan Fungsional Akademik Dosen Guru Besar",
  "Usulan Perubahan Afiliasi Dosen di SINTA",
  "Penerbitan Surat Keputusan Tugas Belajar DPK",
  "Surat Rekomendasi Mutasi PNS dari PNS Non Dosen ke Dosen",
  "Validasi Perubahan Data Dosen pada SISTER",
  "Kenaikan Pangkat/Golongan Dosen PNS DPK",
  "Penetapan Inpasing/Penyetaraan Pangkat Dosen Bukan PNS",
];

const ratingQuestions = [
  [
    "persyaratan",
    "Bagaimana pendapat Saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",
    ["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"],
  ],
  [
    "prosedur",
    "Bagaimana pemahaman Saudara tentang kemudahan prosedur/mekanisme pelayanan di unit ini?",
    ["Sangat Mudah", "Mudah", "Kurang Mudah", "Tidak Mudah"],
  ],
  [
    "waktu",
    "Bagaimana pendapat Saudara tentang ketepatan waktu dalam memberikan pelayanan?",
    ["Sangat Cepat", "Cepat", "Kurang Cepat", "Tidak Cepat"],
  ],
  [
    "biaya",
    "Bagaimana pendapat Saudara tentang kesesuaian biaya/tarif pelayanan dengan yang diinformasikan/dipublikasikan?",
    [
      "Sangat Sesuai / Gratis",
      "Sesuai / Murah",
      "Kurang Sesuai / Cukup Mahal",
      "Tidak Sesuai / Sangat Mahal",
    ],
  ],
  [
    "produk",
    "Bagaimana pendapat Saudara tentang kesesuaian produk pelayanan antara yang tercantum dalam standar pelayanan dengan hasil yang diberikan?",
    ["Sangat Sesuai", "Sesuai", "Kurang Sesuai", "Tidak Sesuai"],
  ],
  [
    "kompetensi",
    "Bagaimana pendapat Saudara tentang kompetensi/kemampuan petugas dalam pelayanan?",
    ["Sangat Kompeten", "Kompeten", "Kurang Kompeten", "Tidak Kompeten"],
  ],
  [
    "perilaku",
    "Bagaimana pendapat Saudara tentang perilaku petugas dalam pelayanan terkait kesopanan dan keramahan?",
    [
      "Sangat Sopan dan Ramah",
      "Sopan dan Ramah",
      "Kurang Sopan dan Ramah",
      "Tidak Sopan dan Ramah",
    ],
  ],
  [
    "pengaduan",
    "Bagaimana pendapat Saudara mengenai penanganan pengaduan pengguna layanan?",
    [
      "Dikelola dengan Baik",
      "Berfungsi Kurang Maksimal",
      "Ada Tetapi Tidak Berfungsi",
      "Tidak Ada",
    ],
  ],
  [
    "fasilitas",
    "Bagaimana pendapat Saudara mengenai ketersediaan fasilitas maupun sarana dan prasarana?",
    ["Sangat Memadai", "Memadai", "Kurang Memadai", "Tidak Memadai"],
  ],
];

const initialForm = {
  age: "",
  gender: "",
  job: "",
  otherJob: "",
  services: [],
  ratings: {},
  feedback: "",
};
const steps = [
  "Profil responden",
  "Layanan yang digunakan",
  "Penilaian pelayanan",
];

function FieldLabel({ children, required = false }) {
  return (
    <span className="mb-2 block text-sm font-bold text-[#153C91]">
      {children} {required && <span className="text-[#d98c00]">*</span>}
    </span>
  );
}

function ChoiceCard({ checked, onChange, name, value, children }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${checked ? "border-[#1A2CA3] bg-[#eef2ff] text-[#1A2CA3]" : "border-[#dfe7f2] bg-white text-slate-600 hover:border-[#9db2d8]"}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#1A2CA3]"
      />
      {children}
    </label>
  );
}

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [serviceSearch, setServiceSearch] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const filteredServices = useMemo(() => {
    const query = serviceSearch.trim().toLowerCase();
    return query
      ? serviceOptions.filter((service) =>
          service.toLowerCase().includes(query),
        )
      : serviceOptions;
  }, [serviceSearch]);
  const updateField = (field, value) =>
    setForm((current) => ({ ...current, [field]: value }));
  const toggleService = (service) =>
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  const validateStep = () => {
    if (
      step === 0 &&
      (!form.age ||
        !form.gender ||
        !form.job ||
        (form.job === "Pekerjaan lainnya" && !form.otherJob))
    ) {
      setError("Lengkapi profil responden terlebih dahulu.");
      return false;
    }
    if (step === 1 && form.services.length === 0) {
      setError("Pilih minimal satu layanan yang pernah digunakan.");
      return false;
    }
    if (
      step === 2 &&
      Object.keys(form.ratings).length !== ratingQuestions.length
    ) {
      setError(
        "Berikan penilaian untuk seluruh pertanyaan sebelum mengirim survei.",
      );
      return false;
    }
    setError("");
    return true;
  };
  const nextStep = () => {
    if (validateStep())
      setStep((current) => Math.min(current + 1, steps.length - 1));
  };
  const submitSurvey = async (event) => {
    event.preventDefault();
    if (!validateStep()) return;

    setError("");
    try {
      // Prepare survey data
      const surveyData = {
        age: parseInt(form.age, 10),
        gender: form.gender,
        job: form.job,
        otherJob: form.otherJob || undefined,
        services: form.services,
        persyaratan: form.ratings.persyaratan,
        prosedur: form.ratings.prosedur,
        waktu: form.ratings.waktu,
        biaya: form.ratings.biaya,
        produk: form.ratings.produk,
        kompetensi: form.ratings.kompetensi,
        perilaku: form.ratings.perilaku,
        pengaduan: form.ratings.pengaduan,
        fasilitas: form.ratings.fasilitas,
        feedback: form.feedback || undefined,
      };

      // Submit to API
      const response = await fetch("/api/survey/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(surveyData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim survey");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  if (submitted)
    return (
      <main className="min-h-screen bg-[#f6f9fd] px-4">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-[#e2eaf5] bg-white px-6 py-14 text-center shadow-[0_20px_60px_rgba(21,60,145,0.1)] sm:px-12">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e9f8ef] text-4xl text-[#218b51]">
            <FaCheck />
          </div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#d18b00]">
            Terima kasih
          </p>
          <h1 className="mb-4 text-3xl font-black text-[#153C91] sm:text-4xl">
            Survei berhasil diisi
          </h1>
          <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Masukan Anda membantu LLDIKTI Wilayah XIV meningkatkan kualitas
            pelayanan publik.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setStep(0);
                setSubmitted(false);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d7e1f0] px-5 py-3 text-sm font-bold text-[#1A2CA3]"
            >
              <FaRotateLeft /> Isi survei baru
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#1A2CA3] px-5 py-3 text-sm font-bold text-white"
            >
              Kembali ke beranda
            </Link>
          </div>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen bg-[#f6f9fd]">
      <section className="relative overflow-hidden bg-[#153C91] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border-[32px] border-white/10" />
        <div className="absolute -bottom-48 left-1/3 h-80 w-80 rounded-full border-[22px] border-[#f5c842]/20" />
        <div className="relative mx-auto max-w-6xl pt-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-[#f5c842]">
              Survei kepuasan masyarakat
            </p>
            <h1 className="text-3xl font-black leading-tight sm:text-5xl">
              Bantu kami memberikan pelayanan yang lebih baik.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Sampaikan pengalaman Anda saat menerima layanan dari LLDIKTI
              Wilayah XIV. Pengisian hanya membutuhkan beberapa menit.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-xs font-semibold text-blue-100 sm:gap-8 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <FaRegClock className="text-[#f5c842]" /> ± 3 menit
            </span>
            <span className="inline-flex items-center gap-2">
              <FaShieldHalved className="text-[#f5c842]" /> Data terjaga
            </span>
            <span className="inline-flex items-center gap-2">
              <FaClipboardCheck className="text-[#f5c842]" /> 3 langkah mudah
            </span>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="-mt-6 rounded-2xl border border-[#e1e8f2] bg-white p-4 shadow-[0_12px_30px_rgba(21,60,145,0.08)] sm:p-5">
          <div className="flex items-start justify-between gap-2 sm:items-center">
            {steps.map((label, index) => (
              <div
                key={label}
                className="flex flex-1 items-center gap-2 sm:gap-3"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-black ${index <= step ? "bg-[#1A2CA3] text-white" : "bg-[#edf2f8] text-slate-400"}`}
                >
                  {index < step ? <FaCheck className="text-xs" /> : index + 1}
                </div>
                <span
                  className={`hidden text-xs font-bold sm:block ${index === step ? "text-[#153C91]" : "text-slate-400"}`}
                >
                  {label}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-1 h-px flex-1 ${index < step ? "bg-[#1A2CA3]" : "bg-[#e3eaf4]"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-center text-xs font-bold text-[#153C91] sm:hidden">
            Langkah {step + 1} dari {steps.length}: {steps[step]}
          </div>
        </div>
        <form
          onSubmit={submitSurvey}
          className="mt-6 rounded-3xl border border-[#e1e8f2] bg-white p-5 shadow-[0_12px_35px_rgba(21,60,145,0.06)] sm:p-8 lg:p-10"
        >
          {step === 0 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d18b00]">
                  Langkah 01
                </p>
                <h2 className="text-2xl font-black text-[#153C91] sm:text-3xl">
                  Kenali responden
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Informasi ini membantu kami membaca hasil survei dengan lebih
                  tepat.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <FieldLabel required>Umur responden</FieldLabel>
                  <div className="relative">
                    <input
                      type="number"
                      min="15"
                      max="100"
                      value={form.age}
                      onChange={(event) =>
                        updateField("age", event.target.value)
                      }
                      placeholder="Contoh: 35"
                      className="w-full rounded-xl border border-[#dfe7f2] px-4 py-3 text-sm font-medium text-slate-700 outline-none placeholder:text-slate-300 focus:border-[#1A2CA3] focus:ring-4 focus:ring-[#1A2CA3]/10"
                    />
                    <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">
                      tahun
                    </span>
                  </div>
                </div>
                <div>
                  <FieldLabel required>Jenis kelamin</FieldLabel>
                  <div className="grid grid-cols-2 gap-3">
                    <ChoiceCard
                      name="gender"
                      value="Laki-laki"
                      checked={form.gender === "Laki-laki"}
                      onChange={(event) =>
                        updateField("gender", event.target.value)
                      }
                    >
                      Laki-laki
                    </ChoiceCard>
                    <ChoiceCard
                      name="gender"
                      value="Perempuan"
                      checked={form.gender === "Perempuan"}
                      onChange={(event) =>
                        updateField("gender", event.target.value)
                      }
                    >
                      Perempuan
                    </ChoiceCard>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <FieldLabel required>Pekerjaan utama</FieldLabel>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      "Pimpinan Perguruan Tinggi",
                      "Dosen PNS DPK",
                      "Dosen Tetap Yayasan",
                      "Dosen Tidak Tetap Yayasan",
                      "PNS di Lingkungan Pemda atau Provinsi",
                      "Karyawan Swasta",
                      "Operator PTS",
                      "Pekerjaan lainnya",
                    ].map((job) => (
                      <ChoiceCard
                        key={job}
                        name="job"
                        value={job}
                        checked={form.job === job}
                        onChange={(event) =>
                          updateField("job", event.target.value)
                        }
                      >
                        {job}
                      </ChoiceCard>
                    ))}
                  </div>
                  {form.job === "Pekerjaan lainnya" && (
                    <input
                      value={form.otherJob}
                      onChange={(event) =>
                        updateField("otherJob", event.target.value)
                      }
                      placeholder="Sebutkan pekerjaan Anda"
                      className="mt-3 w-full rounded-xl border border-[#dfe7f2] px-4 py-3 text-sm outline-none focus:border-[#1A2CA3] focus:ring-4 focus:ring-[#1A2CA3]/10"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
          {step === 1 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d18b00]">
                  Langkah 02
                </p>
                <h2 className="text-2xl font-black text-[#153C91] sm:text-3xl">
                  Layanan yang pernah digunakan
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Pilih satu atau beberapa layanan yang pernah Anda terima.
                </p>
              </div>
              <div className="relative mb-4">
                <FaMagnifyingGlass className="absolute left-4 top-3.5 text-slate-400" />
                <input
                  value={serviceSearch}
                  onChange={(event) => setServiceSearch(event.target.value)}
                  placeholder="Cari nama layanan..."
                  className="w-full rounded-xl border border-[#dfe7f2] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#1A2CA3] focus:ring-4 focus:ring-[#1A2CA3]/10"
                />
              </div>
              <div className="mb-5 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>{filteredServices.length} layanan tersedia</span>
                <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-[#1A2CA3]">
                  {form.services.length} dipilih
                </span>
              </div>
              <div className="grid max-h-[500px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
                {filteredServices.map((service) => (
                  <label
                    key={service}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-sm leading-5 transition ${form.services.includes(service) ? "border-[#1A2CA3] bg-[#eef2ff] text-[#153C91]" : "border-[#e3eaf4] text-slate-600 hover:border-[#9db2d8]"}`}
                  >
                    <input
                      type="checkbox"
                      checked={form.services.includes(service)}
                      onChange={() => toggleService(service)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#1A2CA3]"
                    />
                    {service}
                  </label>
                ))}
              </div>
              {filteredServices.length === 0 && (
                <p className="py-8 text-center text-sm text-slate-400">
                  Layanan tidak ditemukan.
                </p>
              )}
            </div>
          )}
          {step === 2 && (
            <div>
              <div className="mb-8">
                <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#d18b00]">
                  Langkah 03
                </p>
                <h2 className="text-2xl font-black text-[#153C91] sm:text-3xl">
                  Bagaimana pengalaman Anda?
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Pilih satu jawaban yang paling sesuai untuk setiap pernyataan.
                </p>
              </div>
              <div className="space-y-5">
                {ratingQuestions.map(([id, text, options], index) => (
                  <fieldset
                    key={id}
                    className="rounded-2xl border border-[#e3eaf4] p-4 sm:p-5"
                  >
                    <legend className="sr-only">{text}</legend>
                    <p className="mb-4 text-sm font-bold leading-6 text-[#153C91]">
                      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#edf2f8] text-xs text-[#1A2CA3]">
                        {index + 1}
                      </span>
                      {text}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                      {options.map((option, optionIndex) => (
                        <label
                          key={option}
                          className={`flex min-h-[52px] cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-semibold leading-5 transition ${form.ratings[id] === optionIndex + 1 ? "border-[#1A2CA3] bg-[#eef2ff] text-[#1A2CA3]" : "border-[#e3eaf4] text-slate-600 hover:border-[#9db2d8]"}`}
                        >
                          <input
                            type="radio"
                            name={id}
                            value={optionIndex + 1}
                            checked={form.ratings[id] === optionIndex + 1}
                            onChange={() =>
                              updateField("ratings", {
                                ...form.ratings,
                                [id]: optionIndex + 1,
                              })
                            }
                            className="h-4 w-4 shrink-0 accent-[#1A2CA3]"
                          />
                          <span>
                            <b className="mr-1 text-[#d18b00]">
                              {4 - optionIndex}
                            </b>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                ))}
              </div>
              <div className="mt-6">
                <FieldLabel>
                  Saran dan masukan untuk pelayanan LLDIKTI Wilayah XIV
                </FieldLabel>
                <textarea
                  value={form.feedback}
                  onChange={(event) =>
                    updateField("feedback", event.target.value)
                  }
                  rows="5"
                  placeholder="Tuliskan saran, apresiasi, atau hal yang perlu kami tingkatkan..."
                  className="w-full resize-y rounded-xl border border-[#dfe7f2] px-4 py-3 text-sm leading-6 outline-none focus:border-[#1A2CA3] focus:ring-4 focus:ring-[#1A2CA3]/10"
                />
              </div>
            </div>
          )}
          {error && (
            <p
              className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
              role="alert"
            >
              {error}
            </p>
          )}
          <div className="mt-8 flex flex-col-reverse justify-between gap-3 border-t border-[#edf1f7] pt-6 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep((current) => Math.max(current - 1, 0));
              }}
              disabled={step === 0}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-slate-500 disabled:opacity-30"
            >
              <FaArrowLeft /> Kembali
            </button>
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A2CA3] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#1A2CA3]/20"
              >
                Lanjutkan <FaArrowRight />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d18b00] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#d18b00]/20"
              >
                <FaCheck /> Kirim survei
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
