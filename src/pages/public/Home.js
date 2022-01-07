import { useQuery } from "@apollo/client";
import Loading from "../../components/core/Loading";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { navigateTo } from "../../helpers/navigate";
import { useEffect, useState } from "react";
import { Carousel, ProductItemGroup } from "../../react-shop-ui";
const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE, {
    variables: { showPlatform: true, relationScreens: false },
  });
  const [carousel, setCarousel] = useState([]);
  document.title = "Gamezonia - Home";
  const showDetails = (params) => navigateTo("games/details", params);
  const addCart = (itemId) =>
    console.log(`Add to cart one unit: ${itemId} product`);
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
      console.log(carouselItems);
      setCarousel(carouselItems);
    }
  }, [data]);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <h1>Home</h1>
          {carousel.length > 2 && <Carousel carousel={carousel} />}
          <div className="container mb-5">
            <ProductItemGroup
              title={"Juegos de PS4"}
              products={data.ps4.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
            />
            <ProductItemGroup
              showDesc={true}
              title={"Juegos más económicos (<35 €)"}
              products={data.topPrice35.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
            />
            <ProductItemGroup
              title={"Juegos de PC"}
              products={data.pc.shopProducts}
              showDetails={showDetails}
              addCart={addCart}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
