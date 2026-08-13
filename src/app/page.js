import HeroSection from "@/components/sections/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import SurveySection from "@/components/sections/SurveySection";
import ApplicationSection from "@/components/sections/ApplicationSection";
import StatsSection from "@/components/sections/StatsSection";
import NewsSection from "@/components/sections/NewsSection";
import TestimoniSection from "@/components/features/testimonials/TestimoniSection";
import TautanSection from "@/components/sections/TautanSection";
import FloatingWidgets from "@/components/features/widgets/FloatingWidgets";
import WelcomeModal from "@/components/features/modals/WelcomeModal";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <SurveySection />
      <ApplicationSection />
      <StatsSection />
      <NewsSection />
      <TestimoniSection />
      <TautanSection />
      <FloatingWidgets />
      <WelcomeModal
        title="Selamat Datang di Website LLDIKTI Wilayah XIV"
        description="Portal resmi layanan informasi, pelaporan, dan data pendidikan tinggi."
        image="/Assets/Image-Modals.jpg"
      />
    </div>
  );
}
