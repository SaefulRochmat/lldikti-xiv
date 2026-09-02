export default function DirektoriHero() {
  return (
    <section className="w-full bg-[#1A2CA3] py-16 pt-40">
      <div className="max-w-[1700px] mx-auto px-8 md:px-64">
        <p className="text-xs font-semibold tracking-widest text-[#f5c842] uppercase mb-3">
          Dokumentasi Resmi
        </p>
        <h1 className="text-4xl font-bold text-white leading-snug mb-4">
          Akuntabilitas LLDIKTI XIV
        </h1>
        <p className="text-[#b8d4e8] text-base max-w-2xl leading-relaxed">
          Akses dokumentasi resmi, kebijakan, laporan kinerja, dan rencana
          strategis LLDIKTI Wilayah XIV.
        </p>
        <div className="flex items-center gap-2 mt-6 text-sm text-[#b8d4e8]">
          <a href="/" className="hover:text-white transition-colors">
            Beranda
          </a>
          <span>/</span>
          <a
            href="/informasi-publik"
            className="hover:text-white transition-colors"
          >
            Informasi Publik
          </a>
          <span>/</span>
          <span className="text-white font-medium">Akuntabilitas</span>
        </div>
      </div>
    </section>
  );
}
