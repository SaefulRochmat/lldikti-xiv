"use client";

import Button from "@/components/ui/Button";

export default function SurveyForm() {
  return (
    <section className="w-full">
      <div className="md:flex lg:flex justify-between items-center text-[#e0e0e0f1] text-[15px] mx-auto px-0.5 md:px-0.5 py-0.5 md:h-0.5 bg-gray-200"></div>
      <div
        className="
          relative
          w-full
          min-h-[420px] sm:min-h-[520px] md:min-h-[650px] lg:min-h-[780px]
          bg-[url('/Assets/surveyForm.png')]
          bg-cover
          bg-center
          flex
          items-center
        "
      >
        {/* Overlay ringan agar teks terbaca */}
        <div className="absolute inset-0 bg-transparent"></div>

        {/* Content kiri */}
        <div className="pt--20 relative z-10 max-w-6xl px-6 sm:px-10 lg:px-16">
          <h1
            className="
              text-3xl
              sm:text-base
              md:text-5xl
              lg:text-6xl
              font-bold
              text-[#153C91]
              mb-4
            "
          >
            Online Survey
          </h1>

          <p
            className="
              text-sm
              sm:text-base
              sm:max-w-2xl
              md:text-lg
              lg:text-xl
              text-[#153C91]
              max-w-2xl
              leading-relaxed
            "
          >
            Kami mengundang Anda untuk berpartisipasi dalam survei online ini
            guna membantu kami memahami kebutuhan dan pengalaman pengguna secara
            lebih mendalam. Setiap jawaban yang Anda berikan sangat berarti
            dalam meningkatkan kualitas layanan kami. Data yang dikumpulkan akan
            dijaga kerahasiaannya dan hanya digunakan untuk keperluan analisis.
          </p>
          <Button
            className="bg-[#1A2CA3] text-white mt-5 px-6 py-2 rounded-full hover:bg-[#ffb700] transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Isi Survey
          </Button>
        </div>
      </div>
    </section>
  );
}
