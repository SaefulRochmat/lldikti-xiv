import Image from "next/image";
import FloatingWidgets from "@/components/sections/FloatingWhatsappWidget";
import GlobalModals from "@/components/sections/GlobalModals";

export default function Home() {
  return (
    <div className="w-full h-screen">
      home
      <FloatingWidgets />
      <GlobalModals />
    </div>
  );
}
