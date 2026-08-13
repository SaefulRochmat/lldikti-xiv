import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function SurveySection() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[360px] sm:min-h-[480px] md:min-h-[580px] lg:min-h-[680px] overflow-hidden">
        <Image
          src="/Assets/surveyForm.png"
          alt="Survey LLDIKTI XIV"
          fill
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-2xl px-8 sm:px-12 lg:px-24 py-16">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#1A2CA3] mb-3">
              Partisipasi Anda Penting
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#153C91] mb-4 leading-tight">
              Online Survey
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed mb-8">
              Kami mengundang Anda untuk berpartisipasi dalam survei online ini
              guna membantu kami memahami kebutuhan dan pengalaman pengguna
              secara lebih mendalam. Data yang dikumpulkan dijaga kerahasiaannya.
            </p>
            <Link href="/survey" passHref>
              <Button variant="primary" size="lg" className="rounded-full shadow-lg">
                Isi Survey Sekarang →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
