/* eslint-disable react/prop-types */
import { DOTS, usePagination } from "../hooks/usePagination.js";
const Pagination = ({
  onPageChange,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}) => {
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPageCount,
  });

  if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
    console.warn("Pagination range is invalid:", paginationRange);
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
      <div className="flex items-center">
        <button
          disabled={currentPage === 1}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onPrevious}
        >
          {/* Previous button content */}
        </button>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={`dots-${index}`}
                className="cursor-default w-full px-4 py-2 text-base bg-white border"
              >
                &#8230;
              </button>
            );
          }

          return (
            <button
              key={`page-${index}`}
              type="button"
              className={`w-full px-4 py-2 text-base border ${
                pageNumber === currentPage
                  ? "text-white bg-blue-500"
                  : "text-gray-600 bg-white hover:bg-gray-100"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          disabled={currentPage === lastPage}
          type="button"
          className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
          onClick={onNext}
        >
          {/* Next button content */}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
