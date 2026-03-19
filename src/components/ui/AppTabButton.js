"use client";

export default function AppTabButton({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300
        border-2 shadow-sm cursor-pointer
        ${
          active
            ? "bg-yellow-400 text-[#1A2CA3] border-yellow-400 shadow-xl scale-110"
            : "bg-[#1A2CA3] text-white border-white/20 hover:border-yellow-400 hover:text-yellow-400"
        }
      `}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}
