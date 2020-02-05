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
  padding-top:6em;
`;

const ProductList = ({ products }) => (
  <StyledProductList>
    {products.map(x => (
      <Product key={x._id} {...x}></Product>
    ))}
  </StyledProductList>
);

export default ProductList;
