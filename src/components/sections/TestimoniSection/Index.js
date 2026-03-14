"use client";

import { useState, useEffect } from "react";
import TestimoniCard from "./TestimoniCard";
import { testimoniData } from "./TestimoniData";

export default function TestimoniSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimoniData.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-center">
        {/* Left: Header */}
        <div>
          {/* <span className="inline-block text-sm font-semibold tracking-widest text-[#1a4f7a] uppercase mb-4">
            TESTIMONI
          </span>*/}
          <h2 className="text-3xl font-bold text-[#1a2e4a] leading-snug mb-5">
            Bersama membangun Tanah Papua
          </h2>
          <p className="text-[20px] text-[#6b7a8d] leading-relaxed mb-9 max-w-xs">
            Kepercayaan mitra, perguruan tinggi, dan masyarakat menjadi landasan
            kami...
          </p>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimoniData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full border-none cursor-pointer transition-all duration-500 ${
                  i === activeIndex ? "w-6 bg-[#1a4f7a]" : "w-2 bg-[#d0dae8]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Card */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimoniData.map((item, i) => (
              <div key={i} className="min-w-full">
                <TestimoniCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
