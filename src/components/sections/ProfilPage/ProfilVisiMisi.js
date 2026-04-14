const misiList = [
  "Meningkatkan mutu penyelenggaraan pendidikan tinggi di seluruh wilayah Papua secara inklusif dan berkeadilan.",
  "Memperluas akses pendidikan tinggi bagi putra-putri Papua, termasuk di daerah terpencil dan pedalaman.",
  "Mendorong peningkatan kapasitas dosen, tenaga kependidikan, dan pimpinan perguruan tinggi swasta.",
  "Memfasilitasi akreditasi institusi dan program studi agar memenuhi standar nasional pendidikan tinggi.",
  "Memperkuat sinergi antara perguruan tinggi, pemerintah daerah, industri, dan masyarakat sebagai ekosistem pendidikan yang berdampak.",
  "Mewujudkan tata kelola lembaga yang bersih, transparan, dan akuntabel menuju Zona Integritas WBK/WBBM.",
];

export default function ProfilVisiMisi() {
  return (
    <section className="w-full py-20 pt-44 bg-[#f8fafc]" id="visi-misi">
      <div className="max-w-6xl mx-auto px-10">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#1a4f7a] uppercase">
            Arah Strategis
          </span>
          <h2 className="text-3xl font-bold text-[#1A2CA3] mt-2 mb-4">
            Visi & Misi
          </h2>
          <div className="w-12 h-[3px] bg-[#f5c842]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-[#1A2CA3] rounded-2xl p-8 text-white">
            <div className="w-12 h-12 rounded-full bg-[#f5c842] flex items-center justify-center mb-5">
              <span className="text-[#1a2e4a] font-bold text-lg">V</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Visi</h3>
            <p className="text-[#c8dff0] leading-relaxed text-[15px]">
              Terwujudnya Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua
              yang prima, inklusif, dan berdampak dalam mendukung peningkatan
              mutu pendidikan tinggi di Tanah Papua menuju Indonesia Emas 2045.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-2xl p-8 border border-[#e8eef5] shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#1A2CA3] flex items-center justify-center mb-5">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a2e4a] mb-4">Misi</h3>
            <ol className="flex flex-col gap-3">
              {misiList.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f5c842] text-[#1a2e4a] text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#3d4f63] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
