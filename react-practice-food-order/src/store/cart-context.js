import React from "react";

const CartContext = React.createContext({
  orderList: [],
  totalAmount: 0,
  addOrderItem: (item) => {},
  removeOrderItem: (id) => {}
});

export default CartContext;
