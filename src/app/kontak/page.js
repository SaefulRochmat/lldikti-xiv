import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Kontak & Pengaduan - LLDIKTI Wilayah XIV",
  description: "Halaman kontak dan pengaduan sedang dalam tahap pengembangan.",
};

export default function KontakPage() {
  return (
    <>
      <UnderDevelopment
        title="Kontak & Pengaduan"
        description="Halaman kontak dan pengaduan sedang dalam pengembangan. Untuk sementara, Anda dapat menghubungi kami melalui WhatsApp atau email yang tertera di footer."
      />
      <FloatingWidgets />
    </>
  );
}
