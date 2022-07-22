import React from "react";

import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
// Amount: {item.amount} Extended Cost: $
//           {item.amount * item.price}
const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Sheeme", amount: 4, price: 24.99 }
  ].map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });
  //  header="Food Order Cart" footer="Thank you for your order!"
  return (
    <Modal>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
