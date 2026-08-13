import ApplicationTabs from "@/components/features/applications/ApplicationTabs";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ApplicationSection() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-24 py-20 bg-[#153C91]">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <SectionHeading
            eyebrow="Sistem Digital"
            title="Aplikasi LLDIKTI XIV"
            align="center"
            light
          />
        </div>
        <ApplicationTabs />
      </div>
    </section>
  );
}
