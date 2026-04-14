import Image from "next/image";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/Modals/GlobalModals";
import HeroCarouselSection from "@/components/sections/Carousel Image/HeroCarouselImage";
import IntroductionSection from "@/components/sections/Sections Introduction/IntroductionSections";
import NewsSection from "@/components/sections/NewsSection/NewsSection";
import ApplicationSection from "@/components/sections/ApplicationTabsSection/ApplicationTabs";
import DataSebaranSection from "@/components/sections/DataSebaranSection/DataSebaranSection";
import TestimoniSection from "@/components/sections/TestimoniSection/Index";
import TautanTerkaitSection from "@/components/sections/TautanTerkaitSection";
import SurveyForm from "@/components/sections/SurveyForm/SurveyForm";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 bg-[url('/Assets/pattern.png')] bg-repeat opacity-3 pointer-events-none"></div>
      <div className="relative z-10"></div>
      <HeroCarouselSection />
      <IntroductionSection />
      <SurveyForm />
      <ApplicationSection />
      <DataSebaranSection />
      <NewsSection />

      <FloatingWidgets />
      <GlobalModals />
      <TautanTerkaitSection />
      <TestimoniSection />
    </div>
  );
}
