"use client";

import { useState, useEffect } from "react";
import { testimoniData } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

function TestimoniCard({ data }) {
  const { rating, quote, name, role, avatar } = data;

  return (
    <div className="bg-white rounded-xl p-8 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm md:text-base text-[#3d4f63] leading-relaxed flex-1 mb-8 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[#f0f4f8]">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-[#1A2CA3] flex items-center justify-center flex-shrink-0 border-2 border-yellow-400">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-white font-bold text-base">
              {name?.charAt(0) ?? "?"}
            </span>
          )}
        </div>
        <div>
          <p className="font-bold text-sm text-[#1a2e4a]">{name}</p>
          <p className="text-xs text-[#8a9bb0]">{role}</p>
        </div>
        <span className="ml-auto text-5xl text-[#e8eef5] font-serif leading-none select-none">
          &#8221;
        </span>
      </div>
    </div>
  );
}

export default function TestimoniSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimoniData.length - 1 ? 0 : prev + 1
      );
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Left: Header */}
          <div data-aos="fade-right">
            <SectionHeading
              eyebrow="Testimoni"
              title="Bersama Membangun Tanah Papua"
              subtitle="Kepercayaan mitra, perguruan tinggi, dan masyarakat menjadi landasan kami."
            />

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimoniData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Testimoni ${i + 1}`}
                  className={`h-2 rounded-full border-none cursor-pointer transition-all duration-400 ${
                    i === activeIndex
                      ? "w-6 bg-yellow-400"
                      : "w-2 bg-[#d0dae8] hover:bg-[#b0bec5]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Card slider */}
          <div
            className="relative overflow-hidden rounded-xl border-2 border-yellow-400 shadow-lg"
            data-aos="fade-left"
          >
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
      </div>
    </section>
  );
}
