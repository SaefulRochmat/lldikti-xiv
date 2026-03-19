import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/Logos/Logo2.png"
        alt="Logo LLDIKTI XIV"
        width={180}
        height={60}
        className="w-[160px] md:w-[180px] h-auto object-contain"
        priority
      />
    </Link>
  );
}
