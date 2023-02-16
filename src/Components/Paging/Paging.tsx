// Import bootstrap components
import Pagination from "react-bootstrap/Pagination";

// Import styled components
import { StyledPagination } from "./Paging.styled";

// Import data
import { data } from "../../Data/data";
interface PagingProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}
const Paging = ({ setPage, page }: PagingProps) => {
  const numberOfPages = Math.ceil(data["mvPurchaseOrders"].length / 10);
  const handlePrev = () => {
    setPage((prev: number) => (prev > 1 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setPage((prev: number) => (prev < numberOfPages ? prev + 1 : prev));
  };
  return (
    <StyledPagination>
      <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
      <Pagination.Prev onClick={handlePrev} disabled={page === 1} />
      <Pagination.Item onClick={() => setPage(1)} active={page === 1}>
        {1}
      </Pagination.Item>
      {page - 2 > 1 && <Pagination.Ellipsis />}
      {Array.from(Array(5).keys())
        .map((x) => x + page - 2)
        .filter((x) => x > 1 && x < numberOfPages)
        .map((x) => (
          <Pagination.Item
            key={x}
            onClick={() => setPage(x)}
            active={page === x}
          >
            {x}
          </Pagination.Item>
        ))}
      {page + 3 < numberOfPages && <Pagination.Ellipsis />}
      {numberOfPages !== 1 && (
        <Pagination.Item
          onClick={() => setPage(numberOfPages)}
          active={page === numberOfPages}
        >
          {numberOfPages}
        </Pagination.Item>
      )}
      <Pagination.Next onClick={handleNext} disabled={page === numberOfPages} />
      <Pagination.Last
        onClick={() => setPage(numberOfPages)}
        disabled={page === numberOfPages}
      />
    </StyledPagination>
  );
};

export default Paging;
