import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/sections/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Geist({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Website Lembaga Layanan Pendidikan Tinggi Wilayah XIV",
  description:
    "Website resmi Lembaga Layanan Pendidikan Tinggi Wilayah XIV, menyediakan informasi terkini tentang pendidikan tinggi, layanan, dan pengumuman penting untuk mahasiswa dan masyarakat umum.",
  images: [
    {
      url: "/images/favicon.ico",
      width: 1200,
      height: 630,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
