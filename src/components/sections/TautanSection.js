"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { tautanData } from "@/data/links";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TautanSection() {
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
      if (Math.abs(position) >= totalWidth) position = 0;
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

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
    <section className="w-full py-14 bg-white" id="tautan-terkait">
      <div className="text-center mb-8 px-6">
        <SectionHeading
          eyebrow="Ekosistem Digital"
          title="Tautan Terkait"
          align="center"
        />
      </div>

      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex gap-10 items-center w-max py-4">
          {allItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex flex-col items-center gap-2 px-4 w-28 group"
              title={item.name}
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-[11px] text-center text-gray-500 font-medium leading-tight line-clamp-2 group-hover:text-[#1A2CA3] transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
