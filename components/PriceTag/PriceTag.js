import React from "react";
import styled from "styled-components";

const StyledPriceTag = styled.div``;

const PriceTag = ({ value }) => {
  return <StyledPriceTag>{value}</StyledPriceTag>;
};

export default PriceTag;
