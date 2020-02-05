import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  padding: 0.5em 1.5em;
  font-weight: bold;
  color:var(--color-contrasteAcento);
  background: var(--color-acento);
  border-radius: 25px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:auto;
  text-align:center;
  margin:1em;
`;

const Logo = () => <StyledLogo>React Store</StyledLogo>;

export default Logo;
