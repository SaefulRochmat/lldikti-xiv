"use client";

export default function IntroContent({ content }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify">
        {content}
      </p>

      <p className="text-gray-800 font-medium">
        Kepala LLDIKTI Wilayah XIV
      </p>
    </div>
  );
}
