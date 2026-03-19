import Link from "next/link";
export default function AnnouncementList({ data }) {
  return (
    <div
      className="bg-[#1A2CA3] text-white rounded-2xl p-8 h-full shadow-xl"
      data-aos="fade-left"
    >
      <div className="flex justify-between items-baseline mb-8">
        <h3 className="text-2xl font-bold tracking-tight border-b-2 border-yellow-400 pb-1">
          Pengumuman
        </h3>
        <Link
          href="/#"
          className="text-sm font-bold text-yellow-400 hover:text-white transition-colors flex items-center gap-1 group"
        >
          Lihat Semua
          <span className="group-hover:translate-x-1 transition-transform">
            »
          </span>
        </Link>
      </div>

      <div className="space-y-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer border-b border-white/10 pb-6 last:border-none last:pb-0"
          >
            <Link href="/#" className="block">
              <p className="text-sm md:text-base font-medium mb-3 leading-relaxed group-hover:text-yellow-400 transition-colors">
                {item.title}
              </p>
              <div className="flex items-center gap-2 text-yellow-400/80 group-hover:text-yellow-400 transition-colors">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
