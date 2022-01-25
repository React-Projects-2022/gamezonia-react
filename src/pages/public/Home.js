import { useQuery } from "@apollo/client";
import Loading from "../../components/core/Loading";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { navigateTo } from "../../helpers/navigate";
import { useEffect, useState } from "react";

import { CONSTANTS, Carousel, ProductItemGroup } from "./../../react-shop-ui";
import { useCart } from "../../react-shop-ui/hooks/useCart";
const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE, {
    variables: { showPlatform: true, relationScreens: false },
  });
  const [carousel, setCarousel] = useState([]);
  const { manageProduct } = useCart();

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
  const addCart = (item) => {
    console.log(`Add to cart one unit: ${item.product.name} product`);
    // alert(`No implementado. ID del producto: ${itemId}`)
    const productToCart = {
      description: item.platform.name,
      id: item.id,
      img: item.product.img,
      name: item.product.name,
      price: item.price,
      qty: 1,
      rating: {
        count: item.product.rating.count,
        value: item.product.rating.value,
      },
      stock: item.stock,
    };
    manageProduct(productToCart);
  }
    

  const selectMoney = CONSTANTS.CURRENCY_LIST.EURO;
  return (
    <>
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
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
