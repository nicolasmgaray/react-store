import React from "react";
import { Container, ButtonsContainer, SortLabel } from "../../styles/Filters";
import SortButton from "./SortButton";
import SearchInput from "./SearchInput";

const ProductsFilter = ({
  searchTerm,
  handleNewSearchTerm,
  sortTypes,
  ...props
}) => (
  <Container>
    <SortLabel>Sort By:</SortLabel>
    <ButtonsContainer>
      {sortTypes.map((x, i) => (
        <SortButton {...x} {...props} />
      ))}
    </ButtonsContainer>
    <SearchInput
      handleNewSearchTerm={handleNewSearchTerm}
      value={searchTerm}
    ></SearchInput>
  </Container>
);

export default ProductsFilter;
