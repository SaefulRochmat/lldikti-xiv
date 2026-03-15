import ImageCarousel from "@/components/blocks/Carousel Image/ImageCarousel";

export default function HeroCarouselSection() {
  return (
    <section className="w-full" data-aos="fade-up" data-aos-duration="1000">
      <div
        className="
        bg-black/90
      "
      >
        <ImageCarousel />
      </div>
    </section>
  );
}
