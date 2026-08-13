import ProfilVisiMisi from "@/components/sections/ProfilPage/ProfilVisiMisi";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Visi Misi - LLDikti Wilayah XIV Papua",
  description: "Visi Misi Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua.",
};

export default function VisiMisiPage() {
  return (
    <>
      <ProfilVisiMisi />
      <FloatingWidgets />
    </>
  );
}
