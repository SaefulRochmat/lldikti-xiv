"use client";

export default function AppCTAButton({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-yellow-400 text-[#153C91] px-8 py-3 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/20"
    >
      Masuk Aplikasi
      <span className="text-lg">→</span>
    </a>
  );
}
