import React from "react";
import {
  Container,
  ProductName,
  RedeemScreen,
  ReedemButton,
  ProductImage,
  Category,
  MissingPoints,
  Points,
  BuyLogo,
  Break,
  Coin
} from "../../../styles/Products";
import Ellipse from "../../UI/Ellipse";

const Product = ({
  name,
  cost,
  category,
  img,
  redeem,
  isRedeeming,
  points,
  isHovered,
  setHover
}) => {
  return (
    <Container
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseDown={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {points >= cost ? (
        <BuyLogo
          src={
            isHovered || isRedeeming
              ? "/icons/buy-white.svg"
              : "/icons/buy-blue.svg"
          }
        />
      ) : (
        <MissingPoints>
          {`You need ${cost - points} `} <Coin />
        </MissingPoints>
      )}
      {(points >= cost && isHovered) || isRedeeming ? (
        <RedeemScreen>
          <Points>
            {cost}
            <Coin />
          </Points>
          <ReedemButton onClick={redeem}>
            {isRedeeming ? <Ellipse /> : `Redeem Now`}
          </ReedemButton>
        </RedeemScreen>
      ) : null}

      <ProductImage src={img.url} alt={name}></ProductImage>
      <Break />
      <Category>{category}</Category>
      <ProductName>{name}</ProductName>
    </Container>
  );
};

export default Product;
