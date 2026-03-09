"use client";

import { useState, useEffect } from "react";
import CarouselSlide from "@/components/ui/CarouselSlide";
import { carouselData } from "@/constant/CarouselData";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  // Remove initial load state after first transition
  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
          <CarouselSlide
            {...slide}
            isInitialLoad={isInitialLoad}
          />
        </div>
      ))}
    </div>
  );
}
