"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { carouselData } from "@/data/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[380px] sm:h-[490px] md:h-[640px] lg:h-[850px] overflow-hidden">
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            isInitialLoad && index === 0
              ? "opacity-100 scale-100"
              : index === currentIndex
              ? "translate-x-0 opacity-100"
              : index < currentIndex
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            priority={index === 0}
            className={`object-cover ${
              isInitialLoad && index === 0 ? "opacity-0 scale-105" : ""
            } transition-all duration-1000 ease-out`}
            style={{
              animation:
                isInitialLoad && index === 0
                  ? "carouselInitialFade 1s ease-out forwards"
                  : "none",
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-yellow-400 mb-3 opacity-90">
                LLDIKTI Wilayah XIV Papua
              </span>
              <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {slide.headline}
              </h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                {slide.content}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200 border border-white/30"
        aria-label="Slide sebelumnya"
      >
        <FiChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200 border border-white/30"
        aria-label="Slide berikutnya"
      >
        <FiChevronRight className="text-xl" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 bg-yellow-400" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
