import { Container } from "react-bootstrap";
import CardItem from "../CardItem/CardItem";

import { StyledContainer } from "./ItemsContainer.styled";
const ItemsContainer = () => {
  return (
    <StyledContainer>
      <h1>Products</h1>
      <>
        <CardItem />
      </>
    </StyledContainer>
  );
};

export default ItemsContainer;
