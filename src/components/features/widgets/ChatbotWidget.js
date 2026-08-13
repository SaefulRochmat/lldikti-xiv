"use client";

import { useState } from "react";
import { FaComments } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { getBotResponse } from "@/lib/chatbot";

function ChatBubble({ message, sender }) {
  const isUser = sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isUser
            ? "bg-[#1A2CA3] text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
          }`}
      >
        {message}
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", message: "Halo 👋 Selamat datang! Ada yang bisa kami bantu?" },
  ]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;
    const userMsg = { sender: "user", message: text };
    setMessages((prev) => [...prev, userMsg]);
    setText("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", message: getBotResponse(text) },
      ]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#1A2CA3] text-white shadow-lg hover:bg-[#153C91] hover:scale-110 active:scale-95 transition-all duration-200 z-40 cursor-pointer"
        aria-label="Buka chat support"
      >
        <FaComments size={22} />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-20 right-4 sm:bottom-24 sm:right-6 w-[calc(100%-2rem)] sm:w-[360px] h-[70vh] sm:h-[480px] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50
          ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-[#1A2CA3] text-white px-4 py-3.5 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <div>
              <p className="font-semibold text-sm">Chat Support</p>
              <p className="text-xs text-white/60">LLDIKTI Wilayah XIV</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Tutup chat"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1">
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg.message} sender={msg.sender} />
          ))}
          {typing && (
            <p className="text-xs text-gray-400 pl-1">Bot sedang mengetik...</p>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-3 bg-gray-50 flex gap-2 flex-shrink-0">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Tulis pesan..."
            className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1A2CA3] focus:ring-1 focus:ring-[#1A2CA3]/30 transition-all"
            aria-label="Tulis pesan"
          />
          <button
            onClick={handleSend}
            className="bg-[#1A2CA3] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 hover:text-[#1A2CA3] transition-all active:scale-95 cursor-pointer"
            aria-label="Kirim pesan"
          >
            Kirim
          </button>
        </div>
      </div>
    </>
  );
}
