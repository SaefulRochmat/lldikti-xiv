"use client";

export default function IntroContent({ content }) {
  return (
    <div className="space-y-8">
      <div className="relative pl-6 border-l-4 border-yellow-400">
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify italic">
          "{content}"
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-[#1A2CA3] rounded-full flex items-center justify-center text-white font-bold">
          XIV
        </div>
        <div>
          <p className="text-[#1A2CA3] font-black uppercase tracking-widest text-sm">
            Kepala LLDIKTI Wilayah XIV
          </p>
          <p className="text-gray-500 text-xs font-medium">Tanah Papua</p>
        </div>
      </div>
    </div>
  );
}
