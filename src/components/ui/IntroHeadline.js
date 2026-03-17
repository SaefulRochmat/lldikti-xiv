"use client";

export default function IntroHeadline({ headline }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="w-8 h-0.5 bg-yellow-500 rounded-full" />
        <p className="text-yellow-600 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">
          Tentang LLDIKTI Wilayah XIV
        </p>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1A2CA3] leading-[1.15] tracking-wide">
        {headline}
      </h2>
    </div>
  );
}
