import ProfilVisiMisi from "@/components/sections/ProfilPage/ProfilVisiMisi";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";

export const metadata = {
  title: "Visi Misi - LLDikti Wilayah XIV Papua",
  description: "Visi Misi Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua.",
};

export default function visiMisi() {
  return (
    <main>
      <ProfilVisiMisi />
      <FloatingWidgets />
    </main>
  );
}
