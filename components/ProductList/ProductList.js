import React from "react";
import styled from "styled-components";
import Product from "../Product";

const StyledProductList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0em 3em;
  background: var(--color-bg-grey);
  position: relative;
`;

const ProductList = ({ products, points }) => (
  <StyledProductList>
    {products.map(x => (
      <Product key={x._id} {...x} points={points}></Product>
    ))}
  </StyledProductList>
);

export default ProductList;
