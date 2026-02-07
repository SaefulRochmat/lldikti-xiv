export default function Button ({ children }) {
    return (
        <button className="bg-blue-500 px-4 y-2 rounded hover:bg-blue-600 transition">
            {children}
        </button>
    );
}