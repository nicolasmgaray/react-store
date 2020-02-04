import React from "react";
import styled from "styled-components";

const StyledProduct = styled.div`
  background: cyan;
  width: 20em;
  height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 0.1em solid black;
  margin: 1em 1em;
  flex: 20em 1 0;
`;

const Product = ({ name, cost, category, img }) => (
  <StyledProduct>
    <div>{name}</div>
    <img alt={name} src={img.url}></img>
    <div>{cost}</div>
  </StyledProduct>
);

export default Product;
