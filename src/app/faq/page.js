import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "FAQ - LLDIKTI Wilayah XIV",
  description: "Halaman FAQ sedang dalam tahap pengembangan.",
};

export default function FAQPage() {
  return (
    <>
      <UnderDevelopment
        title="Frequently Asked Questions (FAQ)"
        description="Halaman FAQ sedang dalam pengembangan. Kami akan segera menyediakan jawaban atas pertanyaan yang sering diajukan tentang layanan LLDIKTI Wilayah XIV."
      />
      <FloatingWidgets />
    </>
  );
}
