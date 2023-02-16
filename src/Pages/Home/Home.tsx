import Banner from "../../Components/Banner/Banner";
import ItemsContainer from "../../Components/ItemsContainer/ItemsContainer";

// Import contexts
import { useData } from "../../Contexts/data";

// Import data
import { data } from "../../Data/data";

// Import react hooks
import { useEffect } from "react";

const Home = () => {
  const { setProducts } = useData();
  useEffect(() => {
    setProducts(data);
  }, []);
  console.log(data);
  return (
    // <Container>
    <>
      <Banner />
      <ItemsContainer />
    </>

    // </Container>
  );
};

export default Home;
