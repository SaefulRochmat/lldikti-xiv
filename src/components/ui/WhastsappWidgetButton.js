export default function FloatingButton({
  children,
  className = "",
  href,
  onClick
}) {
  const baseStyle = `
    fixed bottom-4 right-4
    sm:bottom-6 sm:right-6
    w-12 h-12 sm:w-14 sm:h-14
    flex items-center justify-center
    rounded-full
    shadow-lg
    transition-all duration-300
    hover:scale-110
    active:scale-95
    cursor-pointer
    z-40
  `;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
}
