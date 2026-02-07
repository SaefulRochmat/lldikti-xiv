export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-1.5 rounded transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
