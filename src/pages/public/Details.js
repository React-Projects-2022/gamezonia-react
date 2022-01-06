import { useState, useEffect } from "react";
import { QuantitySelector, Rating } from "../../react-shop-ui";
import { useLazyQuery } from "@apollo/client";
import { DETAILS_PAGE } from "./../../graphql/operations/query/details-page";
import { useParams } from "react-router-dom";
import "./../../styles/public/details.css";
import { navigateTo } from "../../helpers/navigate";
import Loading from "../../components/core/Loading";
const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [idProduct, setIdProduct] = useState(useParams().id)
  const [principalImage, setPrincipalImage] = useState("");
  const [getDetails, { data, loading }] = useLazyQuery(DETAILS_PAGE);
  const detailsSelect = !!data && data.details.shopProduct;
  const relationalItems = !!data && data.randomItems.shopProducts;
  useEffect(
    () =>
      getDetails({
        variables: {
          id: +idProduct,
          showPlatform: true,
          relationScreens: true,
        },
      }),
    [getDetails, idProduct]
  );

  useEffect(() => {
    if (!!detailsSelect) {
      setPrincipalImage(detailsSelect.product.screenshoot[0]);
    }
  }, [detailsSelect]);

  const updateValue = (qty) => setQuantity(qty);

  const imageClick = (item) =>
    setPrincipalImage(detailsSelect.product.screenshoot[item]);

  const selectOtherPlatform = (event) => {
    const id = +event.target.value;
    setIdProduct(id);
    window.history.replaceState({}, '', `/games/details/${id}`);
  }

  return (
    <>
      {loading && <Loading />}
      {!!data && (
        <>
          <div className="row game-details">
            <div className="col-md-1" id="screens-section">
              {detailsSelect.product.screenshoot.map((item, index) => (
                <img
                  key={index}
                  className="img-fluid mini"
                  src={item}
                  alt=""
                  onClick={() => imageClick(index)}
                />
              ))}
            </div>
            <div className="col-md-7">
              <img className="img-fluid" src={principalImage} alt="" />
            </div>

            <div className="col-md-4">
              <h3 className="my-3">{<p>{detailsSelect.product.name} ({detailsSelect.platform.name})</p>}</h3>
              {
                <Rating
                  max={5}
                  ratingItem={{
                    value: detailsSelect.product.rating.value,
                    count: detailsSelect.product.rating.count,
                  }}
                />
              }
              <p className="price mt-2">€ {detailsSelect.price}</p>
              {<p className="mt-3">Stock: {detailsSelect.stock}</p>}
              <hr />
              { (detailsSelect.stock === 0) ?
                <span>No hay stock. Producto no disponible en este momento.</span> :
                <QuantitySelector
                  stock={detailsSelect.stock}
                  updateValue={updateValue}
                />
              }
              <br/>
              <span className="h5">Plataformas:</span>&nbsp;&nbsp;
              <select onChange={selectOtherPlatform}>
                <option value={detailsSelect.id}>{ detailsSelect.platform.name }</option>
                { detailsSelect.relationalProducts.map((item) => (
                  <option value={item.id} key={item.id}>{item.platform.name }</option>
                ))}
              </select>
              <br/>
            </div>
          </div>

          <h3 className="my-4">Juegos que te puedan interesar</h3>
          <div className="row other-interest-games">
            {
              // Bucle con los items
              relationalItems.map((item, index) => (
                <div className="col-md-2 col-sm-6 mb-4" key={index}>
                  <a
                    onClick={() => navigateTo("games/details", item.id)}
                    title={item.product.name.concat(` (${item.platform.name})`)}
                  >
                    <img
                      className="img-fluid more-games"
                      src={item.product.img}
                      alt="{{ itemInfo.name }} ( {{ itemInfo.description }})"
                    />
                  </a>
                </div>
              ))
            }
          </div>
        </>
      )}
    </>
  );
};

export default Details;
