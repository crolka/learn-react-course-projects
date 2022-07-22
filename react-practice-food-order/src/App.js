import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartVisible, setCartVisible] = useState(false);
  return (
    <Fragment>
      {isCartVisible && (<Cart />)}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
