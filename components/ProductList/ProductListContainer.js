import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const productsState = useSelector(state => state.products); 
  return <ProductList products={productsState.products}></ProductList>;
};

export default ProductListContainer;
