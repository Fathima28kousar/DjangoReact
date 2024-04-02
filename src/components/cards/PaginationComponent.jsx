

const PaginationComponent = () => {
  const handlePrevious = () => {
    // Handle logic for navigating to previous page
    console.log("Previous page");
  };

  const handleNext = () => {
    // Handle logic for navigating to next page
    console.log("Next page");
  };

  return (
    <div >
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={handlePrevious}>
            Previous
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => console.log(1)}>
            1
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => console.log(2)}>
            2
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => console.log(3)}>
            3
          </button>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;

