"use client";

import Image from "next/image";

export default function CarouselSlide({
  image,
  headline,
  content,
  isInitialLoad,
}) {
  return (
    <>
      <Image
        src={image}
        alt={headline}
        fill
        priority
        className={`object-cover ${
          isInitialLoad ? "opacity-0 scale-105" : ""
        } transition-all duration-1000 ease-out`}
        style={{
          animation: isInitialLoad ? "carouselInitialFade 1s ease-out forwards" : "none",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A2CA3]/70 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
          {headline}
        </h2>

        <p className="text-white text-xs sm:text-sm md:text-base max-w-2xl">
          {content}
        </p>
      </div>
    </>
  );
}
