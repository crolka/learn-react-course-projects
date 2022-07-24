import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartProvider";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);

  const handleModalClose = () => {
    setCartVisible(false);
  };
  const handleModalOpen = () => {
    setCartVisible(true);
  };
  return (
    <CartContextProvider>
      {isCartVisible && (
        <Cart onClick={handleModalClose}  />
      )}
      <Header onCartButtonClick={handleModalOpen} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
