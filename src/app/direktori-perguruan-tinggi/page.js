import DirektoriHero from "@/components/sections/DirektoriPage/DirektoriHero";
import DirektoriList from "@/components/sections/DirektoriPage/DirektoriList";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";

export const metadata = {
  title: "Dokumen Publikasi - LLDikti Wilayah XIV",
  description:
    "Akses dokumentasi resmi, kebijakan, laporan kinerja, dan rencana strategis LLDIKTI Wilayah XIV Papua dengan tampilan PDF interaktif.",
};

export default function DirektoriPage() {
  return (
    <>
      <DirektoriHero />
      <DirektoriList />
      <FloatingWidgets />
    </>
  );
}
