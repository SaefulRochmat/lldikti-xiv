import Image from "next/image";
import Link from "next/link";

export default function Logo () {
    return (
            <Link 
                href="/"
                className="flex items-center">
                <Image
                    src="/Logos/Logo.png"
                    alt="Logo LLDIKTI XIV"
                    width={75}
                    height={75}
                    className=""
                /> 
                <div className="ml-3">
                    <h1 className="text-3xl font-bold text-[#153C91] tracking-wider">LLDIKTI</h1>
                    <p className="text-sm text-[#153C91] tracking-wide">Wilayah XIV</p>
                </div>
            </Link>
    );
}