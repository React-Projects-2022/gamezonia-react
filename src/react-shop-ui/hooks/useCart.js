import { useState } from "react";
import { SHOPING_CART_MOCK } from "../constants/shopping-cart";

export const useCart = () => {
  const [cartData, setCartData] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {}
  );

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartData({});
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
  };

  const updateValue = (counter, productId) => {
    if (Object.keys(cartData).length > 0 && cartData.products.length > 0) {
      const updateProduct =
        cartData.products[
          cartData.products.findIndex((el) => el.id === productId)
        ];
      updateProduct.qty = counter;
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  };

  const updateCart = (cartItems = SHOPING_CART_MOCK) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartData(cartItems);
  };

  return {
    cart: cartData,
    clearItem,
    clearCart,
    updateValue,
    updateCart,
  };
};
