export default function Pagination({ total, perPage, currentPage, setPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-2 mt-10 justify-center">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-4 py-2 rounded focus:cursor-grabbing ${
            currentPage === i + 1
              ? "bg-[#ffd000] text-black font-semibold"
              : "bg-[#153C91] hover:bg-[#153C91]/80 text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
