import UnderDevelopment from "@/components/ui/UnderDevelopment";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "PPID - LLDIKTI Wilayah XIV",
  description: "Halaman PPID sedang dalam tahap pengembangan.",
};

export default function PPIDPage() {
  return (
    <>
      <UnderDevelopment
        title="PPID (Pejabat Pengelola Informasi dan Dokumentasi)"
        description="Halaman PPID sedang dalam pengembangan. Kami akan segera menyediakan akses informasi publik yang lebih mudah dan transparan."
      />
      <FloatingWidgets />
    </>
  );
}
