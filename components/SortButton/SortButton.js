import React from "react";
import { Button } from "../../styles/Filters";

const SortButton = ({ text, value, handleFilterClick, orderBy }) => (
  <Button
    onClick={handleFilterClick(value)}
    className={orderBy == value ? "active" : null} >
    {text}
  </Button>
);

export default SortButton;
