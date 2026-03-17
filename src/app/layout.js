import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
import ScrollToTop from "@/components/sections/ScrollToTop/ScrollToTop";

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

import AOSProvider from "@/components/AOSProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <AOSProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </AOSProvider>
        <Analytics />
      </body>
    </html>
  );
}
