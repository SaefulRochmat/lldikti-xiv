export default function Button({ children, className = "", variant = "primary", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-[#1A2CA3] text-white hover:bg-[#153C91] focus:ring-[#1A2CA3]/40 shadow-sm hover:shadow-md",
    accent: "bg-[#f5c842] text-[#1A2CA3] hover:bg-[#e6b800] focus:ring-[#f5c842]/40 shadow-sm hover:shadow-md",
    outline: "border-2 border-[#1A2CA3] text-[#1A2CA3] hover:bg-[#1A2CA3] hover:text-white focus:ring-[#1A2CA3]/40",
    ghost: "text-[#1A2CA3] hover:bg-[#1A2CA3]/10 focus:ring-[#1A2CA3]/20",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? ""} ${sizes[size] ?? ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
