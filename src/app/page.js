import Image from "next/image";
import FloatingWidgets from "@/components/sections/Floating Widgets/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/Modals/GlobalModals";
import HeroCarouselSection from "@/components/sections/Carousel Image/HeroCarouselImage";
export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroCarouselSection />


      <FloatingWidgets />
      <GlobalModals />
    </div>
  );
}
