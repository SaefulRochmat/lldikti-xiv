"use client";

import Image from "next/image";

export default function IntroImage({ image }) {
  return (
    <div
      className="relative w-full aspect-video sm:aspect-video lg:aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group"
      data-aos="fade-right"
    >
      <Image
        src={image}
        alt="Gedung LLDIKTI Wilayah XIV"
        fill
        className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A2CA3]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
