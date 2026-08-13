import StatCard from "@/components/features/stats/StatCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { statsData } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="bg-[#153C91] max-w-7xl mx-auto py-14 px-6 md:px-12 rounded-2xl shadow-xl">
        <div
          className="mb-10"
          data-aos="fade-right"
        >
          <SectionHeading
            eyebrow="LLDIKTI Wilayah XIV"
            title="Data Sebaran Perguruan Tinggi"
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {statsData.map((item) => (
            <StatCard key={item.id} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
