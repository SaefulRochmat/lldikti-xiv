"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { IoMdClose } from "react-icons/io";

export default function WelcomeModal({
  title = "Selamat Datang",
  description = "Website resmi LLDIKTI Wilayah XIV",
  image = null,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("welcomeModal");
    if (!hasVisited) {
      setOpen(true);
      sessionStorage.setItem("welcomeModal", "true");
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        data-aos="zoom-in"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
          aria-label="Tutup"
        >
          <IoMdClose className="text-white text-lg" />
        </button>

        {/* Image */}
        {image && (
          <div className="relative w-full h-48">
            <Image
              src={image}
              alt="Welcome"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#1A2CA3] mb-2">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              size="md"
              className="rounded-full"
              onClick={() => setOpen(false)}
            >
              Masuk Website
            </Button>
            <Button
              variant="outline"
              size="md"
              className="rounded-full"
              onClick={() => setOpen(false)}
            >
              Isi Survey
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
