export default function FloatingButton({
  children,
  className = "",
  href,
  onClick
}) {
  const baseStyle = `
    fixed bottom-6 right-6
    w-14 h-14
    flex items-center justify-center
    rounded-full
    shadow-lg
    transition-all duration-300
    hover:scale-110
    cursor-pointer
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
