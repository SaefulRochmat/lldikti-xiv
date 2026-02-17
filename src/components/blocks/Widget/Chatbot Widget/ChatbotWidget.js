"use client";

import { useState } from "react";
import FloatingButton from "@/components/ui/WhastsappWidgetButton";
import ChatContainer from "@/components/ui/ChatContainer";
import ChatBubble from "@/components/ui/ChatBubble";
import ChatInput from "@/components/ui/ChatInput";
import { getBotResponse } from "@/utils/ChatbotLogic";
import { FaComments } from "react-icons/fa";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", message: "Halo 👋 Selamat datang!" },
  ]);

  const [typing, setTyping] = useState(false);

  const handleSend = (text) => {
    const userMsg = { sender: "user", message: text };

    setMessages((prev) => [...prev, userMsg]);

    setTyping(true);

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        message: getBotResponse(text),
      };

      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      <FloatingButton
        onClick={() => setOpen(!open)}
        className="bg-[#1A2CA3] text-white hover:bg-[#ffb700]"
      >
        <FaComments />
      </FloatingButton>

      <ChatContainer isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex-1 p-3 overflow-y-auto">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.message}
              sender={msg.sender}
            />
          ))}

          {typing && (
            <p className="text-xs text-gray-400">Bot sedang mengetik...</p>
          )}
        </div>

        <ChatInput onSend={handleSend} />
      </ChatContainer>
    </>
  );
}
