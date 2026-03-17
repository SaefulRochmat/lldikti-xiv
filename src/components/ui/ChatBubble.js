export default function ChatBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3 animate-fadeIn`}>
      <div
        className={`
          max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
          ${isUser
            ? "bg-[#1A2CA3] text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"}
        `}
      >
        {message}
      </div>
    </div>
  );
}
