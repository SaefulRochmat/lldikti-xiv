import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { introductionData } from "@/data/introduction";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="w-full px-6 sm:px-12 lg:px-24 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-[#e8eef5] group"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src={introductionData.image}
            alt="Gedung LLDIKTI Wilayah XIV"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2CA3]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Text */}
        <div
          className="space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <SectionHeading
            eyebrow="Tentang LLDIKTI Wilayah XIV"
            title={introductionData.headline}
          />

          <div className="relative pl-5 border-l-4 border-yellow-400">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic whitespace-pre-line">
              "{introductionData.content}"
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-11 h-11 bg-[#153C91] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              XIV
            </div>
            <div>
              <p className="text-[#153C91] font-bold text-sm uppercase tracking-widest">
                Kepala LLDIKTI Wilayah XIV
              </p>
              <p className="text-gray-400 text-xs">Tanah Papua</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
