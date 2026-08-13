/**
 * Reusable section heading component for consistent SaaS-style section titles.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) {
  const alignClass = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col gap-2 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold tracking-[0.2em] uppercase ${
            light ? "text-yellow-400" : "text-[#1A2CA3]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl font-bold leading-tight ${
          light ? "text-white" : "text-[#1a2e4a]"
        }`}
      >
        {title}
      </h2>
      <span
        className={`block w-12 h-1 rounded-full bg-[#f5c842] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed mt-1 max-w-2xl ${
            light ? "text-white/70" : "text-[#6b7a8d]"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
