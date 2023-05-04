import React from "react";
import { addToCart, removeToCart } from "../../redux/slices/cartSlice";
import "./SingleNote.css";
import { useDispatch, useSelector } from "react-redux";
function SingleNote({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart)
  const currItem = cart.find(item => item.id == product.id);
  const currQuantity = currItem ? currItem.quantity : 0;
  return (
    <div className="singleNote">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <h4 className="productPrice">{product.price}</h4>
      </div>
      <div className="cartInfo">
        <button
          className="leftSide"
          onClick={() => dispatch(removeToCart(product.id))}
        >
          -
        </button>
        <h4>{ currQuantity}</h4>
        <button
          className="rightSide"
          onClick={() => dispatch(addToCart(product.id))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleNote;
