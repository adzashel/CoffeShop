import PaginationPrevButton from "./PaginationPrevButton";
import { NextButton } from "../Components/NextButton";

const Page = ({ pages, active, setCurrentPage,currentPage }) => {
  return (
    <div className="pagination">
      <PaginationPrevButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {pages.map((page, i) => {
        return (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={page == active ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <NextButton
        currentPage={currentPage}
        pages={pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Page;
