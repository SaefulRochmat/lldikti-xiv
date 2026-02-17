import Image from "next/image";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/Modals/GlobalModals";
import HeroCarouselSection from "@/components/sections/Carousel Image/HeroCarouselImage";
import IntroductionSection from "@/components/sections/Sections Introduction/IntroductionSections";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroCarouselSection />
      <IntroductionSection />


      <FloatingWidgets />
      <GlobalModals />
    </div>
  );
}
