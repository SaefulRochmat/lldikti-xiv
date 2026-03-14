"use client";

export default function TestimoniCard({ data }) {
  const { rating, quote, name, role, avatar } = data;

  return (
    <div className="bg-gray-100 p-10 transition-shadow duration-300 relative">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-xl ${i < rating ? "text-[#f5c842]" : "text-[#d0dae8]"}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[15px] text-[#3d4f63] leading-relaxed mb-8">{quote}</p>

      {/* Author */}
      <div className="flex items-center gap-4 relative">
        <div className="flex-shrink-0 w-13 h-13 rounded-full overflow-hidden border-2 border-[#e8eef5]">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#1a4f7a] text-white flex items-center justify-center font-bold text-xl">
              {name?.charAt(0) ?? "?"}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="font-bold text-[15px] text-[#1a2e4a]">{name}</span>
          <span className="text-[13px] text-[#8a9bb0]">{role}</span>
        </div>

        {/* Decorative quote mark */}
        <span className="absolute right-0 bottom-[-4px] text-[64px] text-[#e0eaf4] font-serif leading-none select-none pointer-events-none">
          &#8221;
        </span>
      </div>
    </div>
  );
}
