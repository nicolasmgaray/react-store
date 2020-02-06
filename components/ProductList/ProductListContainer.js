import React from "react";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import Spinner from "../Spinner";

const ProductListContainer = () => {
  const { products: productsStore, user } = useSelector(state => state);
  const { fetching, products } = productsStore;

  if (fetching) return <Spinner></Spinner>;
  else return <ProductList points={user.points} products={products}></ProductList>;
};

export default ProductListContainer;
