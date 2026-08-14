"use client";

import Image from "next/image";

export default function IntroImage({ image }) {
  return (
    <div
      className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white group"
      data-aos="fade-right"
    >
      <Image
        src={image}
        alt="Gedung LLDIKTI Wilayah XIV"
        fill
        className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2CA3]/30 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
    </div>
  );
}
