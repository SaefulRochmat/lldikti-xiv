"use client";

import { useEffect, useState } from "react";
import WhatsappWidget from "../blocks/WhatsappWidget";
import ChatbotWidget from "../blocks/ChatbotWidget";

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
