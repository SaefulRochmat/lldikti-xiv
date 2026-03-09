"use client";

import Image from "next/image";

export default function IntroImage({ image }) {
  return (
    <div className="relative w-full h-75 md:h-105 rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right" data-aos-duration="1000" >
      <Image
        src={image}
        alt="Introduction"
        fill
        className="object-cover transition duration-900 ease-in-out hover:scale-105"
      />
    </div>
  );
}
