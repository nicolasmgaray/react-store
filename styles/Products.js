import styled from "styled-components";

const List = styled.div`
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

const RedeemScreen = styled.div`
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
`;

const BuyLogo = styled.img`
  position: absolute;
  z-index: 5;
  right: 1.33em;
  width: 2.62em;
  height: 2.62em;
  top: 1.33em;
`;

const Coin = styled.img.attrs({
  src: "/icons/coin.svg",
  alt: "coin"
})`
  max-height: 90%;
  margin-top: 0.1em;
  margin-left: 0.2em;
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
  padding: 0.4em 1em;
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
  max-width:95%;
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

const ProductImage = styled.img`
  width: 15.75em;
  height: 11.3em;
  object-fit: cover;
`;

const Break = styled.div`
  border-bottom: 0.1em solid var(--color-gray);
  padding: 0.1em;
  width: 15.75em;
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
`;

export {
  List,
  BuyLogo,
  Break,
  Container,
  ProductName,
  RedeemScreen,
  ReedemButton,
  ProductImage,
  Category,
  MissingPoints,
  Points,
  Coin
};
