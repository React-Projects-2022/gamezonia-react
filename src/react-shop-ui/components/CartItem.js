import { CONSTANTS } from "./../constants";
import { QuantitySelector } from "./QuantitySelector";
import { useState } from "react";
export const CartItem = ({
  product,
  selectMoney,
  updateValue,
  clearItem,
}) => {
  const [subtotal, setSubtotal] = useState(product.qty * product.price)
  return (
    <tr key={product.id}>
      <td>
        <div className="product-item">
          <span className="product-thumb">
            <img src={product.img} alt={product.name} />
          </span>
          <div className="product-info">
            <h4 className="product-title">{product.name}</h4>
            <span>
              <em>Price:</em> {CONSTANTS.CURRENCIES_SYMBOL[selectMoney]}{" "}
              {product.price}
            </span>
            <span>
              <em>Platform:</em> {product.description}
            </span>
          </div>
        </div>
      </td>
      <td className="text-center">
        <QuantitySelector
          stock={product.stock}
          updateValue={(counter) => {
            updateValue(counter, product.id);
            product.qty = counter;
            setSubtotal(product.price * product.qty);
          }}
          count={product.qty}
        />
      </td>
      <td className="text-center text-lg text-medium">
        {CONSTANTS.CURRENCIES_SYMBOL[selectMoney]}{" "}
        {Number.parseFloat(subtotal).toFixed(2)}
      </td>
      <td className="text-center">
        <button
          onClick={() => clearItem(product.id)}
          className="remove-from-cart"
        >
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );
};