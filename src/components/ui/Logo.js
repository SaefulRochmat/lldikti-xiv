import Image from "next/image";
import Link from "next/link";

export default function Logo () {
    return (
        <Link href="/">
            {/* <Image
                src="/public/vercel.svg"
                alt="Logo LLDIKTI XIV"
                width={300}
                height={300}
                className=""
            /> */}
            LLDIKTI XIV
        </Link>
    );
}