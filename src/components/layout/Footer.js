import Image from "next/image";
import Link from "next/link";
import { linkTerkait, layanan, profil, publikasi, informasiPublik } from "@/data/footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

function FooterLinkGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">
        {title}
      </h3>
      <span className="block w-10 h-0.5 bg-yellow-400 mb-5" />
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="text-sm text-white/70 hover:text-yellow-400 transition-colors leading-snug"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#153C91] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-6">
        {/* Brand column */}
        <div className="md:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/Logos/logo-tutwuri1.png"
              alt="Logo Tut Wuri Handayani"
              width={52}
              height={52}
              className="object-contain"
            />
            <Image
              src="/Logos/Logo1.png"
              alt="Logo LLDIKTI XIV"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>

          <p className="text-sm font-medium text-white/80 mb-6 leading-relaxed">
            Kementerian Pendidikan Tinggi, Sains dan Teknologi
            <br />
            Lembaga Layanan Pendidikan Tinggi Wilayah XIV
          </p>

          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-0.5 text-yellow-400 flex-shrink-0" />
              <span>R38M+C3M, Fandoi, Biak Kota, Biak Numfor, Papua 98111</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 flex-shrink-0" />
              <span>09812911065</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-yellow-400 flex-shrink-0" />
              <span>Senin – Jumat: 08.00 – 15.00 WIT</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 flex-shrink-0" />
              <span>lldikti14@kemdikbud.go.id</span>
            </li>
          </ul>

          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">
              Ikuti Kami
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
                { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
                { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
                { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok" },
              ].map(({ href, icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-[#153C91] transition-all duration-200"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="lg:col-span-1">
          <FooterLinkGroup title="Link Terkait" items={linkTerkait} />
        </div>
        <div className="lg:col-span-1">
          <FooterLinkGroup title="Layanan" items={layanan} />
        </div>
        <div className="lg:col-span-1">
          <FooterLinkGroup title="Profil" items={profil} />
        </div>
        <div className="lg:col-span-1">
          <FooterLinkGroup title="Publikasi" items={publikasi} />
        </div>
        <div className="lg:col-span-1">
          <FooterLinkGroup title="Informasi Publik" items={informasiPublik} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0f2a6e] text-center text-white/60 py-5 text-xs">
        © 2026 LLDIKTI Wilayah XIV Papua. Hak cipta dilindungi undang-undang.
      </div>
    </footer>
  );
}
