import { useState } from "react";
import { QuantitySelector } from "../../react-shop-ui";

const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const actualStock = 3;
  const updateValue = (qty) => setQuantity(qty);
  return (
    <>
      <h1>Details</h1>
      <p>Details layout</p>
      {
          (quantity === actualStock) ? <p class="alert alert-danger">No puedes seleccionar más cantidad por no haber + stock</p>: ""
      }
      <p>Select quantity: {quantity} </p>
      <QuantitySelector stock={actualStock} updateValue={updateValue} />
    </>
  );
};

export default Details;
