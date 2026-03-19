const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12" data-aos="fade-right">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
        {title}
      </h2>

      <div className="flex items-center gap-3 mt-3">
        <p className="text-gray-100 text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest">
          {subtitle}
        </p>
      </div>
      <div className="w-20 sm:w-28 h-1.5 bg-yellow-400 mt-4 rounded-full" />
    </div>
  );
};

export default SectionTitle;
