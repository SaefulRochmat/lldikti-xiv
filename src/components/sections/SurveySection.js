import Button from "@/components/ui/Button";
import Link from "next/link";

export default function SurveySection() {
  return (
    <section className="w-full bg-[#f8fafc] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div
        className="relative mx-auto min-h-[430px] max-w-7xl overflow-hidden rounded-2xl border border-[#e8eef5] bg-[#dbe7f6] bg-cover bg-center shadow-xl sm:min-h-[460px] lg:min-h-[500px]"
        style={{ backgroundImage: "url('/Assets/surveyForm.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />

        <div className="relative z-10 flex min-h-[430px] items-center px-6 py-12 sm:min-h-[460px] sm:px-12 lg:min-h-[500px] lg:px-20">
          <div className="max-w-xl">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#1A2CA3]">
              Partisipasi Anda Penting
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#153C91] sm:text-4xl lg:text-5xl">
              Online Survey
            </h2>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
              Kami mengundang Anda untuk berpartisipasi dalam survei online ini
              guna membantu kami memahami kebutuhan dan pengalaman pengguna
              secara lebih mendalam. Data yang dikumpulkan dijaga
              kerahasiaannya.
            </p>
            <Link href="/survey">
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-full shadow-lg hover:bg-amber-500 sm:w-auto"
              >
                Isi Survey Sekarang →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
