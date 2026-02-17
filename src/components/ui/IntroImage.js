"use client";

import Image from "next/image";

export default function IntroImage({ image }) {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt="Introduction"
        fill
        className="object-cover"
      />
    </div>
  );
}
