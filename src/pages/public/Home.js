import { useQuery } from "@apollo/client";
import Loading from "../../components/core/Loading";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { navigateTo } from "../../helpers/navigate";
import { useEffect, useState } from "react";
import { CONSTANTS, Carousel, ProductItemGroup } from "@mugan86/react-shop-ui";

const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE, {
    variables: { showPlatform: true, relationScreens: false },
  });
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    if (!!data && data.carousel.shopProducts) {
      let carouselItems = [];
      data.carousel.shopProducts.map((item) =>
        carouselItems.push({
          id: item.id,
          title: item.product.name,
          description: item.platform.name,
          url: window.location.origin.concat(`/games/details/${item.id}`),
          background: item.product.img,
        })
      );
      setCarousel(carouselItems);
    }
  }, [data]);

  const showDetails = (params) => navigateTo("games/details", params);
  const addCart = (itemId) => {
    console.log(`Add to cart one unit: ${itemId} product`);
    alert(`No implementado. ID del producto: ${itemId}`)
  }
    

  const selectMoney = CONSTANTS.CURRENCY_LIST.EURO;
  return (
    <>
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <h1>Home</h1>
          {carousel.length > 2 && <Carousel carousel={carousel} />}
          <div className="container mb-5">
            <ProductItemGroup
              title={"Juegos de PS4"}
              products={data.ps4.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
              selectMoney={selectMoney}
            />
            <ProductItemGroup
              showDesc={true}
              title={"Juegos más económicos (<35 €)"}
              products={data.topPrice35.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
              selectMoney={selectMoney}
            />
            <ProductItemGroup
              title={"Juegos de PC"}
              products={data.pc.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
              selectMoney={selectMoney}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
