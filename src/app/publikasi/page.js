import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Pelayanan - LLDIKTI Wilayah XIV",
  description: "Halaman pelayanan sedang dalam tahap pengembangan.",
};

export default function PelayananPage() {
  return (
    <>
      <UnderDevelopment
        title="Pelayanan"
        description="Halaman pelayanan sedang dalam pengembangan. Kami akan segera menyediakan informasi lengkap tentang berbagai pelayanan LLDIKTI Wilayah XIV."
      />
      <FloatingWidgets />
    </>
  );
}
