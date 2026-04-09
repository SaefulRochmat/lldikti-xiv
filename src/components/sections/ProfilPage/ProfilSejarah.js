const milestones = [
  {
    tahun: "1968",
    judul: "Pembentukan KOPERTI",
    deskripsi:
      "Berdasarkan SK Mendikbud RI No. 1/PK/1968, dibentuk Koordinator Perguruan Tinggi (KOPERTI) sebagai aparatur konsultatif di bidang pendidikan tinggi.",
  },
  {
    tahun: "1975",
    judul: "Transformasi menjadi KOPERTIS",
    deskripsi:
      "Keputusan Mendikbud No. 079/O/1975 mengubah KOPERTI menjadi Koordinasi Perguruan Tinggi Swasta (KOPERTIS) dengan tugas memberikan pelayanan kepada perguruan tinggi swasta.",
  },
  {
    tahun: "2013",
    judul: "KOPERTIS Wilayah XIV Terbentuk",
    deskripsi:
      "Permendikbud No. 1 Tahun 2013 jo No. 42 Tahun 2013 menetapkan pembentukan KOPERTIS Wilayah XIV untuk wilayah Papua dan Papua Barat, melengkapi 14 wilayah kerja nasional.",
  },
  {
    tahun: "2018",
    judul: "Transformasi menjadi LLDikti",
    deskripsi:
      "Sesuai Permenristekdikti No. 15 Tahun 2018, KOPERTIS bertransformasi menjadi Lembaga Layanan Pendidikan Tinggi (LLDikti). Kepala LLDikti Wilayah XIV dilantik pada 26 Juli 2018.",
  },
  {
    tahun: "2021",
    judul: "Penguatan Organisasi",
    deskripsi:
      "Permendikbudristek No. 35 Tahun 2021 memperkuat struktur organisasi LLDikti, memperluas cakupan koordinasi hingga perguruan tinggi negeri di wilayah kerja.",
  },
  {
    tahun: "2024",
    judul: "Di bawah Kemdiktisaintek",
    deskripsi:
      "LLDikti Wilayah XIV kini berada di bawah koordinasi Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemdiktisaintek), memperkuat sinergi untuk mendukung Indonesia Emas 2045.",
  },
];

export default function ProfilSejarah() {
  return (
    <section className="w-full py-20 bg-white" id="sejarah">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#1a4f7a] uppercase">
            Latar Belakang
          </span>
          <h2 className="text-3xl font-bold text-[#1a2e4a] mt-2 mb-4">
            Sejarah Singkat
          </h2>
          <div className="w-12 h-[3px] bg-[#f5c842]" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-[2px] bg-[#e8eef5] hidden md:block" />

          <div className="flex flex-col gap-10">
            {milestones.map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                {/* Year badge */}
                <div className="flex-shrink-0 w-[88px] text-right hidden md:block">
                  <span className="inline-block bg-[#1A2CA3] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.tahun}
                  </span>
                </div>
                {/* Dot */}
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#f5c842] border-4 border-white shadow mt-1 hidden md:block relative z-10" />
                {/* Content */}
                <div className="flex-1 bg-[#f8fafc] rounded-xl p-6 border border-[#e8eef5]">
                  <span className="inline-block bg-[#1a4f7a] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 md:hidden">
                    {item.tahun}
                  </span>
                  <h3 className="text-base font-bold text-[#1a2e4a] mb-2">
                    {item.judul}
                  </h3>
                  <p className="text-sm text-[#6b7a8d] leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
