import React from "react";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const openCartClickHandler = (event) => {
  
};

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={openCartClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
