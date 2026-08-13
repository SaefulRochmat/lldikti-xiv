import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Publikasi - LLDIKTI Wilayah XIV",
  description: "Halaman publikasi sedang dalam tahap pengembangan.",
};

export default function PublikasiPage() {
  return (
    <>
      <UnderDevelopment
        title="Publikasi"
        description="Halaman publikasi sedang dalam pengembangan. Kami akan segera menyediakan berita, info, dan buletin terkini dari LLDIKTI Wilayah XIV."
      />
      <FloatingWidgets />
    </>
  );
}
