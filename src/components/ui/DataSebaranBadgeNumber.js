import { useEffect, useState } from "react";

const BadgeNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 text-[#1A2CA3] font-extrabold px-5 py-3 rounded-2xl text-xl sm:text-2xl min-w-[80px] sm:min-w-[100px] text-center shadow-inner">
      {count.toLocaleString("id-ID")}
    </div>
  );
};

export default BadgeNumber;