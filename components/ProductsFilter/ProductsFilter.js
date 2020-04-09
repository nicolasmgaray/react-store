import React from "react";
import { FiltersContainer, ButtonsContainer, SortLabel } from "../../styles/Filters";
import SortButton from "../SortButton";
import SearchInput from "../SearchInput";

const ProductsFilter = ({
  searchTerm,
  handleNewSearchTerm,
  sortTypes,
  ...props
}) => (
  <FiltersContainer>
    <SortLabel>Sort By:</SortLabel>
    <ButtonsContainer>
      {sortTypes.map((x, i) => (
        <SortButton key={i} {...x} {...props} />
      ))}
    </ButtonsContainer>
    <SearchInput
      handleNewSearchTerm={handleNewSearchTerm}
      value={searchTerm}
    ></SearchInput>
  </FiltersContainer>
);

export default ProductsFilter;
