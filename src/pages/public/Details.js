import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyQuery, useSubscription, gql } from "@apollo/client";

import { Rating, QuantitySelector } from "@mugan86/react-shop-ui";
import { DETAILS_PAGE } from "./../../graphql/operations/query/details-page";

import { navigateTo } from "../../helpers/navigate";
import Loading from "../../components/core/Loading";

import "./../../styles/public/details.css";
const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [idProduct, setIdProduct] = useState(useParams().id);
  const [principalImage, setPrincipalImage] = useState("");
  const [getDetails, { data: dataDetails, loading }] = useLazyQuery(DETAILS_PAGE);
  const detailsSelect = !!dataDetails && dataDetails.details.shopProduct;
  const relationalItems = !!dataDetails && dataDetails.randomItems.shopProducts;
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

  const { data: stock } = useSubscription(gql`
    subscription obtenerDetallesActualizados($id: Int!) {
      selectProductStockUpdate(id: $id) {
        id
        stock
      }
    }
  `);
  

  const updateValue = (qty) => setQuantity(qty);

  const imageClick = (item) =>
    setPrincipalImage(detailsSelect.product.screenshoot[item]);

  const selectOtherPlatform = (event) => {
    const id = +event.target.value;
    setIdProduct(id);
    window.history.replaceState({}, "", `/games/details/${id}`);
  };

  const addCart = () => {
    console.log(`Add cart product: ${detailsSelect.product.name} ${quantity}`);
    alert(`No implementado: ${detailsSelect.product.name} ${quantity}`);
  };

  if (stock) {
    console.log("Nuevo stock", stock);
  }

  /**
   * this.productService.stockUpdateListener(id).subscribe(
      (result) => {
        console.log('Actualización', result);
        this.product.stock = result.stock;

        // COmprobar que cantidad seleccionada es mayor que stock.
        // Si se da esta situación, el toope pasarña al valor del stock
        if (this.product.qty > this.product.stock) {
          this.product.qty = this.product.stock;
        }

        if (this.product.stock === 0) {
          this.product.qty = 1;
        }
      }
    );
   */

  return (
    <>
      {loading && <Loading />}
      {!!dataDetails && (
        <div className="container mb-2">
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
              <h3 className="my-3">
                {
                  <p>
                    {detailsSelect.product.name} ({detailsSelect.platform.name})
                  </p>
                }
              </h3>
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
              {detailsSelect.stock === 0 ? (
                <span>
                  No hay stock. Producto no disponible en este momento.
                </span>
              ) : (
                <QuantitySelector
                  stock={detailsSelect.stock}
                  updateValue={updateValue}
                />
              )}
              <br />
              <span className="h5">Plataformas:</span>&nbsp;&nbsp;
              <select onChange={selectOtherPlatform}>
                <option value={detailsSelect.id}>
                  {detailsSelect.platform.name}
                </option>
                {detailsSelect.relationalProducts.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.platform.name}
                  </option>
                ))}
              </select>
              <br />
              <button className="btn btn-outline-dark mt-2" onClick={addCart}>
                <i className="fas fa-cart-plus"></i>&nbsp;Add cart
              </button>
            </div>
          </div>

          <h3 className="my-4">Juegos que te puedan interesar</h3>
          <div className="row other-interest-games">
            {
              // Bucle con los items
              relationalItems.map((item, index) => (
                <div
                  className="col-md-2 col-sm-6 mb-4"
                  key={index}
                  onClick={() => navigateTo("games/details", item.id)}
                  title={item.product.name.concat(` (${item.platform.name})`)}
                >
                  <img
                    className="img-fluid more-games"
                    src={item.product.img}
                    alt="{{ itemInfo.name }} ( {{ itemInfo.description }})"
                  />
                </div>
              ))
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
