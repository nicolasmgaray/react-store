import React from "react";
import styled from "styled-components";

const StyledProduct = styled.div`
  background: white;
  width: 20em;
  min-height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 0.1em solid black;
  margin: 1em 1em;
  padding: 1em 1em;
  flex: 20em 1 0;
  transition: all 0.5s;
  &:hover {
    box-shadow: -5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const StyledName = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  margin: 0.5em 0em;
`;
const StyledCategory = styled.div`
  width: 100%;
  font-weight: 200;
  font-size: 1em;
  text-align: center;
  margin: 0em 0em;
`;

const StyledRedeemTag = styled.div`
  padding: 1em;
  background: var(--color-acento);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-contrasteAcento);
  width: 18em;
  font-weight: bold;
  margin: 1em;
  cursor: pointer;
  &:hover {
    background: var(--color-principal);
  }
`;

const Product = ({ name, cost, category, img, redeem }) => (
  <StyledProduct>
    <StyledName>{name}</StyledName>
    <StyledCategory>{category}</StyledCategory>
    <img alt={name} src={img.url}></img>
    <StyledRedeemTag onClick={redeem}>Redeem: {cost} Points</StyledRedeemTag>
  </StyledProduct>
);

export default Product;
