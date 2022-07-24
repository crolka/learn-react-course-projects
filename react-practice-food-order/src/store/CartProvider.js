// provides a wrapper to any component that needs access to the cart data.

import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

// The job of this component is to manage the CartContext data.
// and to provide that data to all components who want access to it.
// It also contains all the logic for managing the context data for 
// this component. This encapsulates all data and all logic for dealing
// with that data into a single component so that no other component has
// to deal with that.
const CartContextProvider = (props) => {
  // const [orderList, addOrderItem] = useState({});

  const addOrderItemHandler = (orderItem) => {
    alert(`Just a test of the addOrderItemHandler. The orderItem is: ${orderItem.id}`);
  };

  const removeOrderItemHandler = (key) => {
    alert(`Just a test of the removeOrderItemHandler. The orderItem is: ${key}`);
  };

  // This is just a helper object that allows us to establish the 
  // skeleton of our data that we will be keeping track of.
  const cartContextHelper = {
    orderList: [],
    totalAmount: 0,
    addOrderItem: addOrderItemHandler,
    removeOrderItem: removeOrderItemHandler,
  };

  useEffect(() => {
    const storedCartList = localStorage.getItem("orderList");
  }, []);
  return (
    <CartContext.Provider value={cartContextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;