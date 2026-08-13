import Link from "next/link";

export default function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full mt-3 bg-white rounded-xl shadow-xl border border-[#e8eef5] min-w-56 transition-all duration-200 ease-out z-50
        ${isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }
      `}
    >
      <div className="py-1.5">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#374151] hover:text-[#1A2CA3] hover:bg-[#1A2CA3]/5 transition-colors"
          >
            <span className="w-1 h-1 rounded-full bg-[#f5c842] flex-shrink-0" />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
