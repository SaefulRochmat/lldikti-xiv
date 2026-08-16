import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/Logos/Logo_LLDIKTI14.png"
        alt="Logo LLDIKTI XIV"
        width={80}
        height={80}
        className="w-[50px] md:w-[70px] h-auto object-contain"
        priority
      />
      <span className="hidden sm:inline-block text-sm md:text-sm font-semibold text-[#153C91] leading-tight">
        <span className="block">LEMBAGA LAYANAN</span>
        <span className="block">PENDIDIKAN TINGGI
        </span>
        <span className="block">XIV</span>
      </span>
    </Link>
  );
}
