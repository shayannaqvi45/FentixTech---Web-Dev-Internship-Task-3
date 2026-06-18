export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 py-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded text-sm font-semibold transition-all duration-200 ${
          currentPage === 1
            ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
            : 'border-gray-300 text-gray-700 hover:border-brand-teal hover:text-brand-teal bg-white'
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 border rounded text-sm font-semibold transition-all duration-200 ${
            currentPage === page
              ? 'bg-brand-teal border-brand-teal text-white'
              : 'border-gray-300 text-gray-700 hover:border-brand-teal hover:text-brand-teal bg-white'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded text-sm font-semibold transition-all duration-200 ${
          currentPage === totalPages
            ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50'
            : 'border-gray-300 text-gray-700 hover:border-brand-teal hover:text-brand-teal bg-white'
        }`}
      >
        Next
      </button>
    </div>
  );
}
