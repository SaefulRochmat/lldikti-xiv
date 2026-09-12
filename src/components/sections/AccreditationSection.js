import SectionHeading from "@/components/ui/SectionHeading";
import { accreditationData } from "@/data/accreditation";

export default function AccreditationSection() {
  return (
    <section className="bg-[#f8fafc] px-6 py-16 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div data-aos="fade-right">
            <SectionHeading
              eyebrow="Data Mutu Pendidikan Tinggi"
              title="Statistik Akreditasi PT"
            />
          </div>
          <p
            className="max-w-sm text-sm leading-6 text-gray-500 md:text-right"
            data-aos="fade-left"
          >
            Distribusi status akreditasi perguruan tinggi di lingkungan LLDIKTI
            Wilayah XIV.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {accreditationData.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl border border-[#e8eef5] bg-white px-4 py-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              <span
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-3xl font-black tracking-tight text-[#17233d] md:text-4xl">
                {item.value || "-"}
              </p>
              <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-wide text-[#68778b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
