import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink ({ href, children }) {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className= {`hover:text-blue-400 transition ${
                pathname === href ? "text-slate-400" : ""
            }`}
        >
            {children}
        </Link>
    );
}