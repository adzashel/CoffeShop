
const PaginationPrevButton = ({ setCurrentPage , currentPage }) => {
  return (
    <>
      <button 
        onClick={() => setCurrentPage(currentPage -1)}
        disabled={ currentPage === 1 }
      >
        Prev
      </button>
    </>
  )
}

export default PaginationPrevButton;
