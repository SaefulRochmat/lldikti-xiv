import Link from "next/link";
export default function AnnouncementList({ data }) {
  return (
    <div className="bg-[#153C91] text-white rounded-2xl p-8 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Pengumuman</h3>
        <Link
          href="/#"
          className="text-accent font-semibold text-[#ffd000] hover:text-[#fade62]"
        >
          Selengkapnya »
        </Link>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className="border-b border-accent pb-4 mb-4 last:border-none"
        >
          <p className="text-sm mb-2 leading-relaxed">{item.title}</p>
          <span className="text-accent text-xs text-[#ffd000]">
            {item.date}
          </span>
        </div>
      ))}
    </div>
  );
}
