"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AOSProvider from "@/components/AOSProvider";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <AOSProvider>
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAdminRoute && <ScrollToTop />}
      {!isAdminRoute && <Footer />}
    </AOSProvider>
  );
}
