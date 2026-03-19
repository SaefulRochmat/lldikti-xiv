import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ item }) {
  const [day, month] = item.date?.split(" ") || [];

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden w-full group hover:shadow-2xl transition-all duration-500"
      data-aos="fade-up"
    >
      {/* IMAGE */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        <Image
          src="/Assets/Gedung-lldikti.jpg"
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Label */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-blue-900 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
          {item.tag}
        </div>

        {/* Date Box */}
        <div className="absolute bottom-0 left-0 bg-[#1A2CA3] text-white px-5 py-3 text-center leading-tight rounded-tr-2xl shadow-lg">
          <div className="text-xl font-black">{day}</div>
          <div className="text-[10px] uppercase font-bold tracking-tighter">
            {month}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 flex flex-col h-full">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-[#1A2CA3] transition-colors line-clamp-2">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {item.description}
        </p>

        <div className="mt-auto">
          <Link
            href="/#"
            className="inline-flex items-center gap-2 text-[#1A2CA3] font-bold hover:text-yellow-500 transition-colors group/link"
            aria-label={`Baca selengkapnya tentang ${item.title}`}
          >
            Baca Selengkapnya
            <span className="group-hover/link:translate-x-1 transition-transform">
              »
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
