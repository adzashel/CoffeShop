const Page = ({ pages , active , setCurrentPage}) => {
  return (
    <div className="pagination">
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
    </div>
  );
};

export default Page;
