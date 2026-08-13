import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Galeri - LLDIKTI Wilayah XIV",
  description: "Halaman galeri sedang dalam tahap pengembangan.",
};

export default function GaleriPage() {
  return (
    <>
      <UnderDevelopment
        title="Galeri Kegiatan"
        description="Halaman galeri sedang dalam pengembangan. Kami akan segera menampilkan dokumentasi kegiatan dan momen penting LLDIKTI Wilayah XIV."
      />
      <FloatingWidgets />
    </>
  );
}
