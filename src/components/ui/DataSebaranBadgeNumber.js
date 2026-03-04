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
    <div className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-lg text-lg min-w-17.5 text-center">
      {count.toLocaleString("id-ID")}
    </div>
  );
};

export default BadgeNumber;