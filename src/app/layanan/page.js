import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Layanan - LLDIKTI Wilayah XIV",
  description: "Halaman layanan sedang dalam tahap pengembangan.",
};

export default function LayananPage() {
  return (
    <>
      <UnderDevelopment
        title="Layanan Kami"
        description="Halaman layanan sedang dalam pengembangan. Kami akan segera menyediakan informasi lengkap tentang layanan-layanan LLDIKTI Wilayah XIV Papua."
      />
      <FloatingWidgets />
    </>
  );
}
