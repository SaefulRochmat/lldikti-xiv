import Link from "next/link";

export default function NavLink ({ href, children }) {

    return (
        <Link
            href={href}
            className= "text-md font-light hover:text-[#ffd000] transition"
        >
            {children}
        </Link>
    );
}