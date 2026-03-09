"use client";

import AppCTAButton from "./AppCTAButton";

export default function AppContentCard({ title, description, link }) {
  return (
    <div className="
      bg-blue-800/60 
      rounded-2xl 
      p-8 
      mt-8
      backdrop-blur-sm
      transition-all duration-500
      animate-fadeIn
    "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">

        <div>
          <h3 className="text-2xl font-semibold tracking-wide text-white mb-4">
            {title}
          </h3>

          <AppCTAButton link={link} />
        </div>

        <div className="relative pl-6 border-l-4 border-yellow-400">
          <p className="text-gray-200 text-base leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}