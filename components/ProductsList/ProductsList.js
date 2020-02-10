import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const ProductList = ({ products, points }) => (
  <StyledProductList>
    {products.map(x => (
      <ProductItem key={x._id} {...x} points={points}></ProductItem>
    ))}
  </StyledProductList>
);

const StyledProductList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0em 6em;
  background: var(--color-bg-grey);
  position: relative;
`;

export default ProductList;
