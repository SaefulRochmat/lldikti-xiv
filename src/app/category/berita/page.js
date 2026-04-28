import BeritaHero from "@/components/sections/BeritaPage/BeritaHero";
import BeritaList from "@/components/sections/BeritaPage/BeritaList";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";

export const metadata = {
  title: "Berita - LLDikti Wilayah XIV Papua",
  description:
    "Berita dan informasi terkini dari Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua.",
};

export default function BeritaPage() {
  return (
    <main>
      <BeritaHero />
      <BeritaList />
      <FloatingWidgets />
    </main>
  );
}
