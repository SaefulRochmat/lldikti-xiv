"use client";
import FloatingButton from "../ui/WhastsappWidgetButton";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappWidget() {
  return (
    <FloatingButton
      onClick={() =>
        window.open(
          "https://wa.me/6281223487355",
          "_blank"
        )
      }
      className="bg-green-500 text-white hover:bg-green-600 bottom-24"
    >
      <FaWhatsapp size={24} />
    </FloatingButton>
  );
}
