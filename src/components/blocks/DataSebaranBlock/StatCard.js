import BadgeNumber from "@/components/ui/DataSebaranBadgeNumber";

const StatCard = ({ value, label }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gray-100 rounded-xl px-6 py-5 flex items-center gap-4 shadow-md hover:scale-105 transition duration-900 ease-in-out"
    >
      <BadgeNumber value={value} />

      <div>
        <p className="text-blue-900 font-semibold uppercase text-sm md:text-base tracking-wide relative inline-block">
          {label}
          <span className="block w-8 h-1 bg-yellow-400 mt-1" />
        </p>
      </div>
    </div>
  );
};

export default StatCard;