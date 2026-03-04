"use client";

export default function AppTabButton({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300
        border-2
        ${
          active
            ? "bg-yellow-400 text-blue-900 border-yellow-400 shadow-lg scale-105"
            : "bg-transparent text-white border-yellow-400 hover:bg-yellow-400 hover:text-blue-900"
        }
      `}
    >
      {label}
    </button>
  );
}