import Image from "next/image";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/Modals/GlobalModals";
import HeroCarouselSection from "@/components/sections/Carousel Image/HeroCarouselImage";
import IntroductionSection from "@/components/sections/Sections Introduction/IntroductionSections";
import NewsSection from "@/components/sections/NewsSection/NewsSection";
import ApplicationSection from "@/components/sections/ApplicationTabsSection/ApplicationTabs";
import DataSebaranSection from "@/components/sections/DataSebaranSection/DataSebaranSection";
import TestimoniSection from "@/components/sections/TestimoniSection/Index";
export default function Home() {
  return (
    <div>
      <HeroCarouselSection />
      <IntroductionSection />
      <ApplicationSection />
      <DataSebaranSection />
      <NewsSection />

      <FloatingWidgets />
      <GlobalModals />
      <TestimoniSection />
    </div>
  );
}
