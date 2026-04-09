const tugasData = [
  {
    icon: "📋",
    judul: "Pemetaan Mutu",
    deskripsi:
      "Melaksanakan pemetaan mutu penyelenggaraan pendidikan tinggi di seluruh perguruan tinggi dalam wilayah kerja Papua.",
  },
  {
    icon: "🏛️",
    judul: "Fasilitasi Mutu",
    deskripsi:
      "Memfasilitasi peningkatan mutu penyelenggaraan dan pengelolaan perguruan tinggi negeri maupun swasta.",
  },
  {
    icon: "✅",
    judul: "Fasilitasi Akreditasi",
    deskripsi:
      "Memfasilitasi kesiapan perguruan tinggi dalam proses penjaminan mutu eksternal dan akreditasi program studi.",
  },
  {
    icon: "🗂️",
    judul: "Pengelolaan Data",
    deskripsi:
      "Mengelola data dan informasi perguruan tinggi secara akurat dan terintegrasi melalui sistem PDDikti.",
  },
  {
    icon: "📊",
    judul: "Evaluasi & Pelaporan",
    deskripsi:
      "Melakukan evaluasi rutin dan melaporkan hasil fasilitasi peningkatan mutu perguruan tinggi kepada Kementerian.",
  },
  {
    icon: "🤝",
    judul: "Koordinasi & Kemitraan",
    deskripsi:
      "Membangun kerja sama antara perguruan tinggi, pemerintah daerah, industri, dan mitra strategis lainnya.",
  },
  {
    icon: "👨‍🎓",
    judul: "Layanan Dosen & Tendik",
    deskripsi:
      "Memproses kenaikan jabatan akademik, sertifikasi dosen, NIDN/NIDK, serta data kepegawaian dosen dan tenaga kependidikan.",
  },
  {
    icon: "🛡️",
    judul: "Pembinaan & Pengawasan",
    deskripsi:
      "Membina dan mengawasi penyelenggaraan pendidikan tinggi swasta agar sesuai standar nasional yang berlaku.",
  },
];

export default function ProfilTugasFungsi() {
  return (
    <section className="w-full py-20 bg-white" id="tugas-fungsi">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#1a4f7a] uppercase">
            Berdasarkan Permendikbudristek No. 35 Tahun 2021
          </span>
          <h2 className="text-3xl font-bold text-[#1A2CA3] mt-2 mb-4">
            Tugas & Fungsi
          </h2>
          <div className="w-12 h-[3px] bg-[#f5c842]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tugasData.map((item, i) => (
            <div
              key={i}
              className="bg-[#f8fafc] rounded-xl p-6 border border-[#e8eef5] hover:shadow-md hover:border-[#1a4f7a] transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-sm font-bold text-[#1A2CA3] mb-2 group-hover:text-[#1a4f7a] transition-colors">
                {item.judul}
              </h3>
              <p className="text-xs text-[#6b7a8d] leading-relaxed">
                {item.deskripsi}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
