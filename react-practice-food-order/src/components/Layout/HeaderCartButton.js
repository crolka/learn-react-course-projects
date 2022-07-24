import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // reduce function is a built in method that allows us to transform an 
  // array of data into a single value. In this case curNumber is the accumulator
  // variable. It's value is retained with each successive function call and 
  // is automatically assigned the value returned by the function argument.
  const numberOfCartItems = cartCtx.orderList.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>({numberOfCartItems})</span>
      </button>
  );
};

export default HeaderCartButton;
