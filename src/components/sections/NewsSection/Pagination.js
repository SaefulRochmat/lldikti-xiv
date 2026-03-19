export default function Pagination({ total, perPage, currentPage, setPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-3 mt-12 justify-center" data-aos="fade-up">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 font-bold text-sm shadow-md hover:shadow-lg cursor-pointer ${
            currentPage === i + 1
              ? "bg-yellow-400 text-[#1A2CA3] scale-110 shadow-yellow-400/20"
              : "bg-white text-gray-500 hover:bg-[#1A2CA3] hover:text-white"
          }`}
          aria-label={`Go to page ${i + 1}`}
          aria-current={currentPage === i + 1 ? "page" : undefined}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
