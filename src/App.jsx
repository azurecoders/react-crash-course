import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { cartItems } from "./constants/cart.js";

const App = () => {
  let logoName = "Muzammil";

  const [cart, setCart] = useState(cartItems);
  // ["Shirts", "Pents", "Jeans", "Shoes", "Hats"]

  // Destructuring

  const handleClick = () => {
    setCart([...cart, "New Item"]);
    // ["Shirts", "Pents", "Jeans", "Shoes", "Hats", "New Item"]
  };

  return (
    <div>
      {cart.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
      {/* <Navbar name={count} /> */}
      {/* <Footer nameForFooter={count} /> */}
      <button onClick={handleClick}>Click me to add a value in the cart</button>
    </div>
  );
};

export default App;
