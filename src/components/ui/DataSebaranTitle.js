const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12" data-aos="fade-right">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A2CA3] uppercase tracking-wide">
        {title}
      </h2>

      <div className="flex items-center gap-3 mt-2">
        <p className="text-black text-lg font-medium uppercase">{subtitle}</p>
      </div>
      <div className="w-28 h-1 bg-yellow-400" />
    </div>
  );
};

export default SectionTitle;
