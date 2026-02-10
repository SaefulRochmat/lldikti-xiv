import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="border-t p-2 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Tulis pesan..."
        className="flex-1 border rounded-lg px-3 py-2 outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-[#1A2CA3] text-white px-4 rounded-lg"
      >
        Kirim
      </button>
    </div>
  );
}
