import React from "react";
import styled from "styled-components";

const Header = () => (
  <Container>
    <HeaderText>Electronics</HeaderText>
    <HeaderImage></HeaderImage>
  </Container>
);

const Container = styled.div`
  position: relative;
  color: white;
  font-size: 0.8rem;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const HeaderText = styled.div`
  position: absolute;
  bottom: 0.5em;
  left: 1em;
  font-weight: bold;
  font-size: 5em;
`;

const HeaderImage = styled.img.attrs({ src: "/header-x1.png", alt: "Header" })`
  width: 100%;
  max-height: 30vh;
  object-fit: cover;
`;

export default Header;
