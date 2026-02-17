"use client";

import { useEffect, useState } from "react";
import WhatsappWidget from "@/components/blocks/Widget/Whatsapp Widget/WhatsappWidget";
import ChatbotWidget from "@/components/blocks/Widget/Chatbot Widget/ChatbotWidget";

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <WhatsappWidget />
      <ChatbotWidget />
    </>
  );
}
