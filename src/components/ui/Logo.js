import Image from "next/image";
import Link from "next/link";

export default function Logo () {
    return (
        <Link href="/">
            <Image
                src="/Logos/Logo.png"
                alt="Logo LLDIKTI XIV"
                width={75}
                height={75}
                className=""
            /> 
        </Link>
    );
}