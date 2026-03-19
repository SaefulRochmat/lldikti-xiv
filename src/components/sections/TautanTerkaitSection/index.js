"use client";

import { useRef, useEffect } from "react";
import { tautanData } from "@/constant/tautanData";

export default function TautanTerkaitSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    let position = 0;
    const speed = 0.5;
    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => {
      animationId = requestAnimationFrame(animate);
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const allItems = [...tautanData, ...tautanData];

  return (
    <section className="w-full py-12 bg-white">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1A2CA3] uppercase">
          Tautan Terkait
        </h2>
        <div className="mx-auto mt-2 w-12 h-[3px] bg-[#f5c842]" />
      </div>

      {/* Marquee Wrapper */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-12 items-center w-max py-4">
          {allItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tautan-item flex-shrink-0 flex flex-col items-center justify-center gap-2 px-4 transition-all duration-300 w-32"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-20 w-auto object-contain"
              />
              <span className="text-[16px] text-center text-[#4a5568] font-medium leading-tight line-clamp-2">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
