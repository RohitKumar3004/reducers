import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./Navbar.css";
function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;
  cart.forEach((item) => (count += item.quantity));
  return (
    <nav>
      <h2 className="banner">My Myntra</h2>
      <div className="rightLayout">
        <AiOutlineShoppingCart />
        <h3>{count}</h3>
      </div>
    </nav>
  );
}
export default Navbar;
