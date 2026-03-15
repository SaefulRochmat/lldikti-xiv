import ApplicationTabsBlock from "@/components/blocks/ApplicationTabs/ApplicationTabsBlock";

export default function ApplicationSection() {
  return (
    <section
      className="
      w-full
      mx-auto
      px-6 
      sm:px-12 
      lg:px-24 
      py-16 
      bg-white
    "
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-[#1A2CA3] text-2xl sm:text-3xl font-bold tracking-wide relative inline-block">
            APLIKASI LLDIKTI XIV
            <span className="block w-28 h-1 bg-yellow-400 mt-2 mx-auto"></span>
          </h2>
        </div>

        <ApplicationTabsBlock />
      </div>
    </section>
  );
}
