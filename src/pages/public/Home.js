import { useQuery } from "@apollo/client";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";

const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  
  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;
  return (
    <>
        <h1>Home</h1>
        <h2>Carousel</h2>
        {(!loading && !error) ? data.carousel.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
        )): <p>No data</p>}
        <h2>PC</h2>
        {(!loading && !error) ? data.pc.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
        )): <p>No data</p>}
        <h2>Playstation 4</h2>
        {(!loading && !error) ? data.ps4.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
        )): <p>No data</p>}
        <h2>35 € o menos</h2>
        {(!loading && !error) ? data.topPrice35.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
        )): <p>No data</p>}
      
      
    </>
  );
};

export default Home;
