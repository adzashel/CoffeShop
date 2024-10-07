
export const NextButton = ({ currentPage , pages , setCurrentPage }) => {
  return (
    <>
      <button 
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={ currentPage === pages.length}
      >
        Next
      </button>
    </>
  )
}


