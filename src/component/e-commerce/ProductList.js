import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadproducts } from "../../redux/slices/productSlice";
import SingleNote from "./SingleNote";
import "./ProductList.css"
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.productReducer.products);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch(loadproducts(data));
  }
  return (
    <div className="productList">
      {products.map(item => 
        <SingleNote key={item.id} product={item } />
      )}
    </div>
  );
}

export default ProductList;
