import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Informasi Publik - LLDIKTI Wilayah XIV",
  description: "Halaman informasi publik sedang dalam tahap pengembangan.",
};

export default function InformasiPublikPage() {
  return (
    <>
      <UnderDevelopment
        title="Informasi Publik"
        description="Halaman informasi publik sedang dalam pengembangan. Transparansi dan akuntabilitas adalah prioritas kami."
      />
      <FloatingWidgets />
    </>
  );
}
