import ImageCarousel from "@/components/blocks/Carousel Image/ImageCarousel";
import Image from "next/image";

export default function HeroCarouselSection() {
  return (
    <section className="w-full" data-aos="fade-up" data-aos-duration="1000">
      <div className="bg-black/90 pt-20">
        <ImageCarousel />

        <div className="w-full flex justify-center">
          <div className="w-full bg-white">
            <div className="bg-white overflow-hidden">
              <Image
                src="/Assets/Banner.png"
                alt="Banner LLDIKTI XIV"
                width={1200}
                height={300}
                className="w-full h-auto object-fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
