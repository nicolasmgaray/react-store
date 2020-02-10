import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductsList";
import Spinner from "../UI/Spinner";

const ProductListContainer = ({filters}) => {
  const { products: productsStore, user } = useSelector(state => state);
  const { fetching, products } = productsStore;

  if (fetching) return <Spinner></Spinner>;
  else
    return <ProductList points={user.points} products={products}></ProductList>;
};

export default ProductListContainer;
