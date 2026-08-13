"use client";

import { useEffect, useState } from "react";
import WhatsappWidget from "./WhatsappWidget";
import ChatbotWidget from "./ChatbotWidget";

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
