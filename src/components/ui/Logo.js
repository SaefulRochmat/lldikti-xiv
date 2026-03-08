import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Logos/Logo2.png"
        alt="Logo LLDIKTI XIV"
        width={200}
        height={200}
        className=""
      />
    </Link>
  );
}
