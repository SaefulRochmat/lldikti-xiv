export default function ChatContainer({
  isOpen,
  onClose,
  children,
}) {
  return (
    <div
      className={`
        fixed bottom-24 right-6
        w-[320px] h-105
        bg-white rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
        transition-all duration-300
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
      `}
    >
      <div className="bg-[#1A2CA3] text-white p-3 flex justify-between">
        <p>Chat Support</p>
        <button onClick={onClose}>✕</button>
      </div>

      {children}
    </div>
  );
}
