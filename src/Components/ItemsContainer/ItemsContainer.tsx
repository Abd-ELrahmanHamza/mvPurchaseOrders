// Import components
import CardItems from "../CardItems/CardItems";
import Paging from "../Paging/Paging";

// Import styled components
import { StyledContainer } from "./ItemsContainer.styled";

// Import hooks
import { useState } from "react";

const ItemsContainer = () => {
  const [page, setPage] = useState(1);
  return (
    <StyledContainer id="products">
      <h1>Products</h1>
      <CardItems page={page} />
      <Paging setPage={setPage} page={page} />
    </StyledContainer>
  );
};

export default ItemsContainer;
