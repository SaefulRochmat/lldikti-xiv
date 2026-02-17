"use client";

export default function IntroHeadline({ headline }) {
  return (
    <div className="space-y-3">
      <p className="text-[#ffd000] text-sm font-semibold uppercase tracking-wide">
        Tentang LLDIKTI Wilayah XIV
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#153C91] leading-tight">
        {headline}
      </h2>
    </div>
  );
}
