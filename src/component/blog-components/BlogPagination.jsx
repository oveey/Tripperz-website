const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="blog__pag">
      {/* Previous Button */}
      <button
        className={`blog__button ${
          currentPage === 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Current Page Info */}
      <span className="text-gray-800 mx-4">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        className={`blog__button ${
          currentPage === totalPages
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BlogPagination;
