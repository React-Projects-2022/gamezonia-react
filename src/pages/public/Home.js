import { useQuery } from "@apollo/client";
import Loading from "../../components/core/Loading";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { navigateTo } from "../../helpers/navigate";
import { ProductItemGroup } from "../../react-shop-ui";
const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  document.title = "Gamezonia - Home";
  const showDetails = (params) => navigateTo("games/details", params);
  const addCart = (itemId) =>
    console.log(`Add to cart one unit: ${itemId} product`);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <h1>Home</h1>
          {data.carousel.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
          ))}
          <ProductItemGroup
            title={"PC"}
            products={data.pc.shopProducts}
            showDetails={showDetails}
            addCart={addCart}
          />
          <ProductItemGroup
            title={"Playstation 4"}
            products={data.ps4.shopProducts}
            showDetails={showDetails}
            addCart={addCart}
          />
          <ProductItemGroup
            title={"35 € o menos"}
            products={data.topPrice35.shopProducts}
            showDetails={showDetails}
            addCart={addCart}
          />
        </>
      )}
    </>
  );
};

export default Home;
