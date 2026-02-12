"use client";

import { useEffect, useState } from "react";
import ModalContainer from "../ui/ModalsContainer";
import Image from "next/image";
import Button from "../ui/Button";

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

  return (
    <ModalContainer isOpen={open} onClose={() => setOpen(false)}>

      {/* Image */}
      {image && (
        <div
          className="mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Image
            src={image}
            alt="welcome"
            width={500}
            height={250}
            className="rounded-xl object-cover w-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="text-center">

        <h2
          className="text-2xl md:text-3xl font-bold text-[#1A2CA3] mb-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h2>

        <p
          className="text-gray-600 mb-6 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {description}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            className="bg-[#1A2CA3] text-white px-6 py-2 rounded-full hover:bg-[#ffb700] transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Masuk Website
          </Button>
        </div>

      </div>

    </ModalContainer>
  );
}
