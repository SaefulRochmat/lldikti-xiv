import BeritaHero from "@/components/sections/BeritaPage/BeritaHero";
import BeritaList from "@/components/sections/BeritaPage/BeritaList";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Berita - LLDikti Wilayah XIV Papua",
  description:
    "Berita dan informasi terkini dari Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua.",
};

export default function BeritaPage() {
  return (
    <>
      <BeritaHero />
      <BeritaList />
      <FloatingWidgets />
    </>
  );
}
