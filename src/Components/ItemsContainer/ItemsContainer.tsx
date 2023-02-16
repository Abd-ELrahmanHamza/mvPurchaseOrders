import CardItem from "../CardItems/CardItems";

import { StyledContainer } from "./ItemsContainer.styled";
const ItemsContainer = () => {
  return (
    <StyledContainer id="products">
      <h1>Products</h1>
      <>
        <CardItem />
      </>
    </StyledContainer>
  );
};

export default ItemsContainer;
