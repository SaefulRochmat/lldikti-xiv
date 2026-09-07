import FaqContent from "@/components/features/faq/FaqContent";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "FAQ - LLDIKTI Wilayah XIV",
  description:
    "Temukan jawaban atas pertanyaan umum tentang layanan, PDDIKTI, dosen, dan informasi publik LLDIKTI Wilayah XIV.",
};

export default function FAQPage() {
  return (
    <>
      <FaqContent />
      <FloatingWidgets />
    </>
  );
}
