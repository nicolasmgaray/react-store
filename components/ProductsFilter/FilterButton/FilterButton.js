import React from "react";
import styled from "styled-components";

const FilterButton = ({ text, value, handleFilterClick, orderBy }) => (
  <StyledButton
    onClick={handleFilterClick(value)}
    className={orderBy == value ? "active" : null}
  >
    {text}
  </StyledButton>
);

const StyledButton = styled.button`
  background: var(--color-bg-gray);
  color: var(--color-gray);
  width: 8em;
  margin: 0.5em 0em 0.5em 2em;
  padding: 0.5em 1em;
  font-size: 0.7em;
  border: 0;
  border-radius: 1em;
  cursor: pointer;
  outline: none;
  &.active {
    background: var(--color-main);
    color: white;
  }
`;

export default FilterButton;
