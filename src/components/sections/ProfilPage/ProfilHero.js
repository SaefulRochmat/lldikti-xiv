export default function ProfilHero() {
  return (
    <section className="w-full bg-[#1A2CA3] py-16 pt-40">
      <div className="max-w-6xl mx-auto px-10">
        <p className="text-xs font-semibold tracking-widest text-[#f5c842] uppercase mb-3">
          Tentang Kami
        </p>
        <h1 className="text-4xl font-bold text-white leading-snug mb-4">
          Profil LLDikti Wilayah XIV
        </h1>
        <p className="text-[#b8d4e8] text-base max-w-2xl leading-relaxed">
          Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua — hadir untuk
          memfasilitasi, membina, dan meningkatkan mutu penyelenggaraan
          pendidikan tinggi di seluruh Tanah Papua.
        </p>
        {/* Breadcrumb 
        <div className="flex items-center gap-2 mt-6 text-sm text-[#b8d4e8]">
          <a href="/" className="hover:text-white transition-colors">
            Beranda
          </a>
          <span>/</span>
          <span className="text-white font-medium">Profil</span>
        </div>*/}
      </div>
    </section>
  );
}
