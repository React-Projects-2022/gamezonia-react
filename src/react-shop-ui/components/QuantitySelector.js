import React from "react";
import PropTypes from "prop-types";

import "./../styles/quantity-selector.css";
import { useCounter } from "../hooks/useCounter";

export const QuantitySelector = ({ stock, updateValue }) => {
  const { counter, increment, decrement } = useCounter(1);

  const changeValue = (action) => {
    if (action === "-" && counter > 1) {
      decrement();
    } else if (action === "+" && counter < stock) {
      increment();
    }
  };
  updateValue(counter);
  return (
    <div>
      <button
        type="button"
        class="btn btn-dark qty-btn"
        onClick={() => changeValue("-")}
      >
        -
      </button>
      <input
        type="text"
        value={counter}
        name="quantity"
        class="text-center quantity"
        disabled
      />
      <button
        type="button"
        class="btn btn-dark qty-btn"
        onClick={() => changeValue("+")}
      >
        +
      </button>
    </div>
  );
};


QuantitySelector.propTypes = {
    stock: PropTypes.number.isRequired,
    updateValue: PropTypes.func.isRequired,
  };