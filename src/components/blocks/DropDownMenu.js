import Link from "next/link";

export default function DropDownMenu ({ items, isOpen }) {
    return (
        <div className={`absolute top-full mt-2 bg-[#ececec] rounded-xl shadow-xl min-w-44 transition-all duration-500 ease-in-out
            ${isOpen 
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
            }
        `}>
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:text-[#1A2CA3]"
                >
                    {item.name}
                </Link>
            ))}

        </div>
    ); 
}