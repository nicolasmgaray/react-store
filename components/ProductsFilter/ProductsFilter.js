import React from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";

const ProductsFilter = props => (
  <Container>
    Sort By:
    <Buttons>
      <FilterButton {...props} text="Most Recent" value="recent" />
      <FilterButton {...props} text="Lowest price" value="lowest" />
      <FilterButton {...props} text="Highest price" value="highest" />
    </Buttons>
  </Container>
);

const Buttons = styled.div`
  display:flex;
  background:Red;
  justify-content:flex-start;
  align-items:center;
  flex-wrap:wrap;
  flex:1;
  width:auto;
`;

const Container = styled.div`
  font-size: 1.8rem;
  width: calc(100% - 8em);
  margin: 1em 0em;
  color: var(--color-gray);
  padding: 1em;
  font-weight: regular;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: green;
  border-bottom: 0.05em solid var(--color-gray);
`;

export default ProductsFilter;
