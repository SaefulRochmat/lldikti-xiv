"use client";

import { useState, useEffect } from "react";
import CarouselSlide from "@/components/ui/CarouselSlide";
import { carouselData } from "@/contant/CarouselData";

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative">

      <CarouselSlide {...carouselData[current]} />

    </div>
  );
}
