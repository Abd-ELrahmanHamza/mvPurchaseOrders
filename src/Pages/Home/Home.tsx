import { Container } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner";
import CardItem from "../../Components/CardItem/CardItem";
import ItemsContainer from "../../Components/ItemsContainer/ItemsContainer";

const Home = () => {
  return (
    <Container>
      <Banner />
      <ItemsContainer />
    </Container>
  );
};

export default Home;
