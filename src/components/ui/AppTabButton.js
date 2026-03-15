"use client";

export default function AppTabButton({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-sm text-sm font-semibold transition-all duration-300
        border
        ${
          active
            ? "bg-yellow-400 text-[#153C91] border-yellow-400 shadow-lg scale-105"
            : "bg-transparent text-[#153C91] border-gray-300 hover:bg-yellow-400 hover:text-blue-900"
        }
      `}
    >
      {label}
    </button>
  );
}
