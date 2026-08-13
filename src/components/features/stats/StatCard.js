"use client";

import { useEffect, useState } from "react";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span className="text-2xl sm:text-3xl font-extrabold text-[#1A2CA3] tabular-nums">
      {count.toLocaleString("id-ID")}
    </span>
  );
}

export default function StatCard({ value, label }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#e8eef5] group"
    >
      {/* Number badge */}
      <div className="flex-shrink-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg px-4 py-3 min-w-[80px] text-center shadow-inner">
        <AnimatedNumber value={value} />
      </div>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <p className="text-[#153C91] font-bold uppercase text-xs sm:text-sm tracking-wider leading-tight">
          {label}
        </p>
        <span className="block w-8 h-1 bg-yellow-400 mt-2 rounded-full group-hover:w-12 transition-all duration-300" />
      </div>
    </div>
  );
}
