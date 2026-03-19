import BadgeNumber from "@/components/ui/DataSebaranBadgeNumber";

const StatCard = ({ value, label }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-2xl p-6 flex items-center gap-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-in-out border border-gray-100"
    >
      <BadgeNumber value={value} />

      <div className="flex-1">
        <p className="text-[#1A2CA3] font-bold uppercase text-xs sm:text-sm md:text-base tracking-wider leading-tight">
          {label}
        </p>
        <span className="block w-10 h-1.5 bg-yellow-400 mt-2 rounded-full" />
      </div>
    </div>
  );
};

export default StatCard;