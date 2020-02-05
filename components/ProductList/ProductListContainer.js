import React from "react";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import Spinner from "../Spinner";

const ProductListContainer = () => {
  const { fetching, products } = useSelector(state => state.products);


  if (fetching) return <Spinner></Spinner>;
  else return <ProductList products={products}></ProductList>;
};

export default ProductListContainer;
