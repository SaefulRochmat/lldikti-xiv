import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ item }) {
  const [day, month] = item.date?.split(" ") || [];

  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-full">
      {/* IMAGE */}
      <div className="relative w-full h-[260px]">
        <Image
          src="/Assets/Gedung-lldikti.jpg" // langsung pakai default
          alt={item.title}
          fill
          className="object-cover"
        />

        {/* Label */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-semibold px-4 py-1 shadow-sm">
          {item.tag}
        </div>

        {/* Date Box */}
        <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-4 py-2 text-center leading-tight">
          <div className="text-lg font-bold">{day}</div>
          <div className="text-xs">{month}</div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 border-l-4 border-blue-600">
        <h3 className="text-lg font-bold text-black leading-snug mb-3">
          {item.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        <Link
          href="/#"
          className="text-black font-medium hover:text-[#ffd000] transition"
        >
          Selengkapnya »
        </Link>
      </div>
    </div>
  );
}
