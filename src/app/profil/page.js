import ProfilHero from "@/components/sections/ProfilPage/ProfilHero";
import ProfilSejarah from "@/components/sections/ProfilPage/ProfilSejarah";
import ProfilTugasFungsi from "@/components/sections/ProfilPage/ProfilTugasFungsi";
import ProfilStrukturOrganisasi from "@/components/sections/ProfilPage/ProfilStrukturOrganisasi";

export const metadata = {
  title: "Profil - LLDikti Wilayah XIV Papua",
  description:
    "Profil Lembaga Layanan Pendidikan Tinggi Wilayah XIV Papua — sejarah, visi misi, tugas fungsi, dan struktur organisasi.",
};

export default function ProfilPage() {
  return (
    <main>
      <ProfilHero />
      <ProfilSejarah />
      <ProfilTugasFungsi />
      <ProfilStrukturOrganisasi />
    </main>
  );
}
