import { useState, useEffect } from "react";
import { QuantitySelector } from "../../react-shop-ui";
import { useLazyQuery } from "@apollo/client";
import { DETAILS_PAGE } from "./../../graphql/operations/query/details-page";
import { useParams } from "react-router-dom";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const [getDetails, { data }] = useLazyQuery(DETAILS_PAGE);
  const params = useParams();
  const paramsId = +params.id;
  const actualStock = 3;

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
  const detailsSelect = !!data && data.details.shopProduct;
  const relationalItems = !!data && data.randomItems.shopProducts;
  console.log(detailsSelect, relationalItems);
  const updateValue = (qty) => setQuantity(qty);
  return (
    <>
      <h1>Details</h1>
      <p>Details layout</p>
      {!!data && <p>{detailsSelect.product.name}</p>}
      <p>
        Select quantity: {quantity} / Stock máximo: {actualStock}{" "}
      </p>
      <QuantitySelector stock={actualStock} updateValue={updateValue} />
    </>
  );
};

export default Details;
