import WelcomeModal from "../blocks/WelcomeModals";

export default function GlobalModals() {
  return (
    <>
      <WelcomeModal
        title="Selamat Datang di Website LLDIKTI Wilayah XIV"
        description="Portal resmi layanan informasi, pelaporan, dan data pendidikan tinggi."
        image="/images/welcome-education.jpg" // optional
      />
    </>
  );
}
