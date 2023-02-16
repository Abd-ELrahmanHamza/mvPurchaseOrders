// Import components
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
  }, [setProducts]);
  return (
    <>
      <Banner />
      <ItemsContainer />
    </>
  );
};

export default Home;
