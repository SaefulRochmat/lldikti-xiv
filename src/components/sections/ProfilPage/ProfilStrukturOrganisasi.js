// Struktur organisasi berdasarkan Permendikbudristek No. 35 Tahun 2021
// Ganti `foto` dengan path gambar nyata di /public/Assets/
const strukturData = {
  kepala: {
    nama: "Dr. Suriel Semuel Mofu, S.Pd., M.Ed. TEFL., M.Phil (oxon)",
    jabatan: "Kepala LLDikti Wilayah XIV",
    foto: null,
  },
  bagianUmum: {
    nama: "Heru Sukoco, S.Pd., M.Pd.",
    jabatan: "Kepala Bagian Umum",
    foto: null,
  },
  koordinator: [
    {
      nama: "Koordinator",
      jabatan: "Bidang Akademik & Kemahasiswaan",
      foto: null,
    },
    {
      nama: "Koordinator",
      jabatan: "Bidang Kelembagaan & Kemitraan",
      foto: null,
    },
    {
      nama: "Koordinator",
      jabatan: "Bidang SDM, Keuangan & Umum",
      foto: null,
    },
  ],
};

function AvatarCard({ nama, jabatan, foto, size = "md" }) {
  const isLg = size === "lg";
  return (
    <div
      className={`flex flex-col items-center text-center ${
        isLg ? "p-6" : "p-4"
      } bg-white rounded-xl border border-[#e8eef5] shadow-sm`}
    >
      {/* Avatar */}
      <div
        className={`${
          isLg ? "w-20 h-20" : "w-14 h-14"
        } rounded-full overflow-hidden bg-[#1A2CA3] flex items-center justify-center mb-3 border-2 border-[#f5c842]`}
      >
        {foto ? (
          <img src={foto} alt={nama} className="w-full h-full object-cover" />
        ) : (
          <span
            className={`text-white font-bold ${isLg ? "text-2xl" : "text-lg"}`}
          >
            {nama?.charAt(0) ?? "?"}
          </span>
        )}
      </div>
      <p
        className={`font-bold text-[#1A2CA3] ${isLg ? "text-sm" : "text-xs"} mb-1 leading-snug`}
      >
        {nama}
      </p>
      <p
        className={`text-[#6b7a8d] ${isLg ? "text-xs" : "text-[11px]"} leading-snug`}
      >
        {jabatan}
      </p>
    </div>
  );
}

export default function ProfilStrukturOrganisasi() {
  return (
    <section className="w-full py-20 bg-[#f8fafc]" id="struktur-organisasi">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#1a4f7a] uppercase">
            Berdasarkan Permendikbudristek No. 35 Tahun 2021
          </span>
          <h2 className="text-3xl font-bold text-[#1A2CA3] mt-2 mb-4">
            Struktur Organisasi
          </h2>
          <div className="w-12 h-[3px] bg-[#f5c842]" />
        </div>

        <div className="flex flex-col items-center gap-0">
          {/* Kepala */}
          <div className="w-72">
            <AvatarCard
              nama={strukturData.kepala.nama}
              jabatan={strukturData.kepala.jabatan}
              foto={strukturData.kepala.foto}
              size="lg"
            />
          </div>

          {/* Connector */}
          <div className="w-[2px] h-8 bg-[#d0dae8]" />

          {/* Bagian Umum */}
          <div className="w-64">
            <AvatarCard
              nama={strukturData.bagianUmum.nama}
              jabatan={strukturData.bagianUmum.jabatan}
              foto={strukturData.bagianUmum.foto}
            />
          </div>

          {/* Connector horizontal */}
          <div className="w-[2px] h-8 bg-[#d0dae8]" />
          <div className="w-full max-w-3xl h-[2px] bg-[#d0dae8]" />

          {/* Koordinator row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mt-0">
            {strukturData.koordinator.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-[#d0dae8]" />
                <AvatarCard
                  nama={item.nama}
                  jabatan={item.jabatan}
                  foto={item.foto}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-xs text-[#8a9bb0] text-center mt-10">
          * Struktur organisasi berdasarkan Permendikbudristek No. 35 Tahun
          2021. Nama pejabat dapat disesuaikan dengan kondisi terkini.
        </p>
      </div>
    </section>
  );
}
