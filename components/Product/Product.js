import React from "react";
import styled from "styled-components";
import Ellipse from "../Ellipse";

const Product = ({
  name,
  cost,
  category,
  img,
  redeem,
  isRedeeming,
  points
}) => (
  <Container>
    {points >= cost ? (
      <BuyLogo />
    ) : (
      <MissingPoints>
        {`You need ${cost - points} `} <Coin></Coin>
      </MissingPoints>
    )}
    {points >= cost ? (
      <Hover>
        <Points>
          {cost}
          <Coin></Coin>
        </Points>
        <ReedemButton onClick={redeem}>
          {isRedeeming ? <Ellipse /> : `Redeem Now`}
        </ReedemButton>
      </Hover>
    ) : null}

    <ImageContainer>
      <ProductImage src={img.url} alt={name}></ProductImage>
    </ImageContainer>
    <Category>{category}</Category>
    <ProductName>{name}</ProductName>
  </Container>
);

const Hover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background: rgba(17, 205, 247, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  visibility: hidden;
`;

const BuyLogo = styled.div`
  position: absolute;
  z-index: 5;
  right: 1.33em;
  width: 2.62em;
  height: 2.62em;
  top: 1.33em;
  background-image: url("/icons/buy-blue.svg");
  background-repeat: no-repeat;
`;

const Coin = styled.img.attrs({
  src: "/icons/coin.svg",
  alt: "coin"
})`
  max-height: 90%;
  margin-top:0.1em;
  margin-left:0.2em;
`;


const Points = styled.div`
  font-size: 2.25em;
  color: #ffffff;
  letter-spacing: -0.08px;
  text-align: center;
  width: auto;
  display: flex;
  justify-content: center;
  padding: 0.3em;
`;

const MissingPoints = styled.div`
  opacity: 0.8;
  background: #616161;
  border-radius: 100px;
  width: auto;
  padding:0.4em 1em;
  height: 42px;
  position: absolute;
  right: 1.33em;
  top: 1.33em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  
`;

const ReedemButton = styled.button`
  background: #ffffff;
  width: 228px;
  height: 42px;
  border-radius: 25px;
  border: none;
  font-size: 1.1em;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 15.75em;
  height: 11.3em;
  border-bottom: 0.1em solid var(--color-gray);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0.1em;
`;

const Category = styled.div`
  text-align: left;
  font-size: 1em;
  color: #a3a3a3;
  letter-spacing: -0.04px;
  margin-top: 1em;
`;

const ProductName = styled.div`
  text-align: left;
  font-size: 1.2em;
  color: #616161;
  letter-spacing: -0.04px;
  margin-bottom: 0.5em;
`;

const ProductImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: cover;
`;

const Container = styled.div`
  cursor: pointer;
  position: relative;
  background: white;
  padding: 0.75em;
  width: 17.25em;
  height: 17.25em;
  display: flex;
  margin: 1em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  &:hover > div {
    visibility: visible;
  }
  &:hover > ${BuyLogo} {
    background-image: url("/icons/buy-white.svg");
  }
`;

export default Product;
