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
  const [principalImage, setPrincipalImage] = useState("");
  const [getDetails, { data, loading }] = useLazyQuery(DETAILS_PAGE);
  const params = useParams();
  const paramsId = +params.id;
  const detailsSelect = !!data && data.details.shopProduct;
  const relationalItems = !!data && data.randomItems.shopProducts;
  useEffect(
    () =>
      getDetails({
        variables: {
          id: paramsId,
          showPlatform: true,
          relationScreens: true,
        },
      }),
    [getDetails, paramsId]
  );

  useEffect(() => {
    if (!!detailsSelect) {
      setPrincipalImage(detailsSelect.product.screenshoot[0]);
    }
  }, [detailsSelect]);

  const updateValue = (qty) => setQuantity(qty);

  const imageClick = (item) =>
    setPrincipalImage(detailsSelect.product.screenshoot[item]);

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
              {<p className="mt-3">Stock: {detailsSelect.stock}</p>}
              <hr />
              {
                <QuantitySelector
                  stock={detailsSelect.stock}
                  updateValue={updateValue}
                />
              }

              <h3 className="my-3">Project Details</h3>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Dolor Sit Amet</li>
                <li>Consectetur</li>
                <li>Adipiscing Elit</li>
              </ul>
            </div>
          </div>

          <h3 className="my-4">Juegos que te puedan interesar</h3>
          <div className="row other-interest-games">
            {
              // Bucle con los items
              relationalItems.map((item, index) => (
                <div className="col-md-2 col-sm-6 mb-4" key={index}>
                  <a
                    onClick={() => navigateTo("details", item.id)}
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
