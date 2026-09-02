import Image from "next/image";

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

        <div className="w-full overflow-hidden rounded-xl border border-[#e8eef5] bg-white p-2 shadow-sm sm:p-4">
          <Image
            src="/Assets/struktur-organisasi.png"
            alt="Struktur Organisasi LLDIKTI Wilayah XIV"
            width={1600}
            height={1000}
            className="h-auto w-full"
            sizes="(max-width: 640px) 100vw, 1152px"
          />
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
