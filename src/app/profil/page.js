import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Profil - LLDIKTI Wilayah XIV",
  description: "Halaman profil sedang dalam tahap pengembangan.",
};

export default function ProfilPage() {
  return (
    <>
      <UnderDevelopment
        title="Profil LLDIKTI XIV"
        description="Halaman profil sedang dalam pengembangan. Silakan kunjungi halaman Profil LLDIKTI XIV atau Visi & Misi untuk informasi lengkap."
      />
      <FloatingWidgets />
    </>
  );
}
