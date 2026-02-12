"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ModalContainer({
  isOpen,
  onClose,
  children,
}) {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        data-aos="fade-in"
      />

      {/* Modal Content */}
      <div
        data-aos="zoom-in"
        className="
          relative 
          bg-white 
          rounded-3xl 
          shadow-2xl 
          w-full 
          max-w-lg 
          p-6 
          md:p-8
        "
      >
        {children}
      </div>

    </div>
  );
}
