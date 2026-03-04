import Image from "next/image";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/Modals/GlobalModals";
import HeroCarouselSection from "@/components/sections/Carousel Image/HeroCarouselImage";
import IntroductionSection from "@/components/sections/Sections Introduction/IntroductionSections";
import NewsSection from "@/components/sections/NewsSection/NewsSection";
import Footer from "@/components/sections/Footer/Footer";
import ApplicationSection from "@/components/sections/ApplicationTabsSection/ApplicationTabs";
import DataSebaranSection from "@/components/sections/DataSebaranSection/DataSebaranSection";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroCarouselSection />
      <IntroductionSection />
      <ApplicationSection />
      <DataSebaranSection />
      <NewsSection />

      <FloatingWidgets />
      <GlobalModals />
      <Footer />
    </div>
  );
}
