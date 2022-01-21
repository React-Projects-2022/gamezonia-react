import { navigateTo } from "../../helpers/navigate";
import "./../styles/cart.css";
import { CONSTANTS } from "@mugan86/react-shop-ui";
import { CartItem } from "./CartItem";
import { useCart } from "../hooks/useCart";
export const Cart = () => {
  const { cart: cartData, clearCart, clearItem, updateValue, updateCart } = useCart()
  /*const [cartData, setCartData] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
  );
  console.log(cartData, Object.keys(cartData).length);*/
  const goToHomePage = () => navigateTo("");
  /*const clearCart = () => {
    localStorage.removeItem("cart");
    setCartData({})
  };
  const clearItem = (removeItem) => {
    
    cartData.products = cartData.products.filter(value => value.id !== removeItem);
    localStorage.setItem("cart", JSON.stringify(cartData))
    console.log(cartData);
    if (cartData.products.length === 0) {
      clearCart();
      return;
    }
    setCartData(JSON.parse(localStorage.getItem("cart")));
  }*/
  const selectMoney = CONSTANTS.CURRENCY_LIST.EURO;

  /*const updateValue = (counter, productId) => {
    if (Object.keys(cartData).length > 0 && cartData.products.length > 0) {
      console.log("Vamos a actualizar...");
      const updateProduct = cartData.products[cartData.products.findIndex(el => el.id === productId)];
      updateProduct.qty = counter;
      localStorage.setItem("cart", JSON.stringify(cartData));
      
    }
  };*/

  // Manage shoppin cart state

  return (
    <>
      {Object.keys(cartData).length > 0 && cartData.products.length > 0 ? (
        <>
          <div className="table-responsive shopping-cart">
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Subtotal</th>
                  <th className="text-center">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={clearCart}
                    >
                      <i className="fas fa-trash-alt"></i> Clear Cart
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData.products.map((product) => (
                  <CartItem product={product} key={product.id} selectMoney={selectMoney} 
                  updateValue={updateValue} clearItem={clearItem}/>
                ))}
              </tbody>
            </table>
          </div>
          <div className="shopping-cart-footer">
            
            <div className="column text-lg">
              To Pay:{" "}
              <span className="text-primary price-total">
                {" "}
                {CONSTANTS.CURRENCIES_SYMBOL[selectMoney]}{" "}
                {Number.parseFloat(cartData.total).toFixed(2)}{" "}
              </span>
            </div>
          </div>
          <div className="shopping-cart-footer">
            <div className="column">
              <button
                className="btn btn-outline-secondary"
                onClick={goToHomePage}
              >
                <i className="fas fa-home"></i>&nbsp;Back to Shopping
              </button>
            </div>
            <div className="column">
              <button
                className="btn btn-danger"
                onClick={clearCart}
              >
                <i className="fas fa-trash-alt"></i> Clear Cart
              </button>
              <button className="btn btn-success" href="#">
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>
            No tienes elementos guardados en el carrito de compra. Añádelos
            desde los productos con la opción de Añadir a la cesta
          </span>
          <button
            onClick={() => updateCart() }
          >
            Load cart
          </button>
        </>
      )}
    </>
  );
};
