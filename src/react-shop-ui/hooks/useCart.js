import { useState } from "react";
import { SHOPING_CART_MOCK } from "../constants/shopping-cart";

export const useCart = () => {
  const [cartData, setCartData] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
  );
  const [total, setTotal] = useState(cartData ? cartData.total : 0);
  const [empty, setEmpty] = useState(localStorage.getItem("cart") ? false : true)

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartData({});
    setEmpty(true);
    updateTotal();
  };

  const updateTotal = () => {
    if (!empty) {
      let total = 0;
      cartData.products.map(
        (product) => (total += product.price * product.qty)
      );
      setTotal(total);
    }
  };
  const clearItem = (removeItem) => {
    cartData.products = cartData.products.filter(
      (value) => value.id !== removeItem
    );
    localStorage.setItem("cart", JSON.stringify(cartData));
    if (cartData.products.length === 0) {
      clearCart();
      return;
    }
    setCartData(JSON.parse(localStorage.getItem("cart")));
    updateTotal();
  };

  const updateValue = (counter, productId) => {
    if (Object.keys(cartData).length > 0 && cartData.products.length > 0) {
      const updateProduct =
        cartData.products[
          cartData.products.findIndex((el) => el.id === productId)
        ];
      updateProduct.qty = counter;
      // Update
      localStorage.setItem("cart", JSON.stringify(cartData));
      updateTotal();
    }
  };

  const updateCart = (cartItems = SHOPING_CART_MOCK) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartData(JSON.parse(localStorage.getItem("cart")));
    setEmpty(false);
    updateTotal();
  };

  return {
    cart: cartData,
    clearItem,
    clearCart,
    updateValue,
    updateCart,
    total,
  };
};
