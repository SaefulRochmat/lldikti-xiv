import Link from "next/link";

export default function DropDownMenu ({ items }) {
    return (
        <div className="absolute top-full mt-2 bg-gray-900 rounded shadow-lg min-w-44">
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 hover:bg-gray-700"
                >
                    {item.name}
                </Link>
            ))}

        </div>
    ); 
}