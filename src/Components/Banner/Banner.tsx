// Import bootstrap components
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// Import assets
import BannerPhoto from "../../Assets/Images/shope.jpg";

import { StyledImage, StyledContainer, BuyButton } from "./Banner.styled";

const Banner = () => {
  return (
    <StyledContainer>
      <Container>
        <h1>
          50% off everything. Limited time only. Use code 50OFF. Shop now and
          save big!
        </h1>
        <BuyButton variant="light">Buy now</BuyButton>
      </Container>
      <StyledImage src={BannerPhoto}></StyledImage>
    </StyledContainer>
  );
};

export default Banner;
