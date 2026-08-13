"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappWidget() {
  return (
    <button
      onClick={() => window.open("https://wa.me/6281223487355", "_blank")}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 active:scale-95 transition-all duration-200 z-40 cursor-pointer"
      aria-label="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
}
