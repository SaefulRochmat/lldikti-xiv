import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t p-3 sm:p-4 bg-gray-50 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Tulis pesan..."
        className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[#1A2CA3] focus:ring-1 focus:ring-[#1A2CA3] transition-all"
        aria-label="Tulis pesan chatbot"
      />

      <button
        onClick={handleSend}
        className="bg-[#1A2CA3] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-blue-900 transition-all active:scale-95 shadow-md"
        aria-label="Kirim pesan"
      >
        Kirim
      </button>
    </div>
  );
}
