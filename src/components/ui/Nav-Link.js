import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-sm font-bold hover:text-[#ffd000] transition"
    >
      {children}
    </Link>
  );
}
