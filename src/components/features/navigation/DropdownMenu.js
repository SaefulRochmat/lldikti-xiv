import Link from "next/link";

export default function DropdownMenu({ items, isOpen }) {
  return (
    <>
      {/* Invisible bridge - 8px tall area between button and dropdown */}
      <div
        className={`absolute left-0 right-0 h-2 ${isOpen ? '' : 'pointer-events-none'}`}
        style={{ top: '100%' }}
      />
      
      {/* Dropdown menu */}
      <div
        className={`absolute left-0 bg-white rounded-lg shadow-xl border border-gray-200 min-w-56 overflow-hidden transition-all duration-200 ease-out z-50
          ${isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
          }
        `}
        style={{ top: 'calc(100% + 8px)' }}
      >
        <div className="py-1.5">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-gray-600 hover:text-[#1A2CA3] hover:bg-[#1A2CA3]/5 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-yellow-400 flex-shrink-0" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
