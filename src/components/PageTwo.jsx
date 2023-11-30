/* eslint-disable react/prop-types */
// PageTwo.jsx



const PageTwo = ({ totalPageCount, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPageCount }, (_, index) => index + 1);
console.log(currentPage)
  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  return (
    <div>
      <button className="disabled:cursor-not-allowed disabled:opacity-60"
      disabled={currentPage === 1}
       onClick={() => onPageChange(currentPage - 1)} >
        Previous
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
        
        key={pageNumber} onClick={() => onPageChange(pageNumber)}>
          {pageNumber} ok
        </button>
      ))}
      <button
      disabled={currentPage === totalPageCount}
      onClick={onNext} >
        Next
      </button>
    </div>
  );
};

export default PageTwo;



