export default function ChatContainer({
  isOpen,
  onClose,
  children,
}) {
  return (
    <div
      className={`
        fixed 
        bottom-20 right-4 
        sm:bottom-24 sm:right-6
        w-[calc(100%-2rem)] sm:w-[360px] 
        h-[70vh] sm:h-120
        max-h-[600px]
        bg-white rounded-2xl shadow-2xl
        flex flex-col overflow-hidden
        transition-all duration-300 z-50
        ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95 pointer-events-none"}
      `}
    >
      <div className="bg-[#1A2CA3] text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <p className="font-medium">Chat Support</p>
        </div>
        <button 
          onClick={onClose} 
          className="hover:bg-white/20 p-1 rounded-full transition-colors"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      {children}
    </div>
  );
}
