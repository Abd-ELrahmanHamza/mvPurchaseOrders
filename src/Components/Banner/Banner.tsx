// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import assets
import background from "../../Assets/Images/sale.jpg";

import {
  StyledContainer,
  BuyButton,
  InnerContainer,
} from "./Banner.styled";
import NavBar from "../NavBar/NavBar";

const Banner = () => {
  return (
    <StyledContainer image={background} fluid>
      <NavBar />
      <InnerContainer>
        <Container>
          <h1>
            Looking for a great deal? You're in luck! We're excited to offer a
            fantastic 50% discount on all of our products for a limited time.
            Yes, that's right - half price on everything!
          </h1>
          <BuyButton variant="light">Buy now</BuyButton>
        </Container>
        {/* <StyledImage src={BannerPhoto}></StyledImage> */}
      </InnerContainer>
    </StyledContainer>
  );
};

export default Banner;
