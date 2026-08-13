import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Zona Integritas - LLDIKTI Wilayah XIV",
  description: "Halaman Zona Integritas sedang dalam tahap pengembangan.",
};

export default function ZonaIntegritasPage() {
  return (
    <>
      <UnderDevelopment
        title="Zona Integritas"
        description="Halaman Zona Integritas sedang dalam pengembangan. Komitmen kami untuk mewujudkan Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM)."
      />
      <FloatingWidgets />
    </>
  );
}
