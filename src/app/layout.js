import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SiteShell from "@/components/layout/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website Lembaga Layanan Pendidikan Tinggi Wilayah XIV",
  description:
    "Website resmi Lembaga Layanan Pendidikan Tinggi Wilayah XIV, menyediakan informasi terkini tentang pendidikan tinggi, layanan, dan pengumuman penting untuk mahasiswa dan masyarakat umum.",
  icons: {
    icon: "/Logos/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#f8fafc]`}
      >
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
