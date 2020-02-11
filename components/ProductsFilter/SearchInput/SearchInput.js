import React from "react";
import { SearchIcon, SearchBar, Input } from "../../../styles/Filters";

const SearchInput = ({ value, handleNewSearchTerm }) => (
  <SearchBar>
    <SearchIcon />
    <Input
      value={value}
      onChange={handleNewSearchTerm}
      placeholder="Search an Item"
    ></Input>
  </SearchBar>
);

export default SearchInput;
