export default function ChatBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`
          max-w-[75%] px-4 py-2 rounded-2xl text-sm
          ${isUser
            ? "bg-[#1A2CA3] text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"}
        `}
      >
        {message}
      </div>
    </div>
  );
}
