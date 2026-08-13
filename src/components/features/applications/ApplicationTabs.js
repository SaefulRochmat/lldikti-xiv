"use client";

import { useState } from "react";
import { applicationData } from "@/data/applications";
import Link from "next/link";

export default function ApplicationTabs() {
  const [active, setActive] = useState(applicationData[0].id);
  const activeData = applicationData.find((item) => item.id === active);

  return (
    <div>
      {/* Tab buttons */}
      <div
        className="flex flex-wrap gap-3 justify-center mt-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {applicationData.map((app) => (
          <button
            key={app.id}
            onClick={() => setActive(app.id)}
            aria-pressed={active === app.id}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 border cursor-pointer
              ${
                active === app.id
                  ? "bg-yellow-400 text-[#153C91] border-yellow-400 shadow-lg scale-105"
                  : "bg-white/10 text-white border-white/20 hover:border-yellow-400 hover:text-yellow-400"
              }
            `}
          >
            {app.label}
          </button>
        ))}
      </div>

      {/* Content card */}
      <div
        className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 transition-all duration-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-5">
              {activeData.title}
            </h3>
            <Link
              href={activeData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-[#153C91] px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Masuk Aplikasi
              <span>→</span>
            </Link>
          </div>

          <div className="relative pl-6 border-l-2 border-yellow-400/60">
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {activeData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
