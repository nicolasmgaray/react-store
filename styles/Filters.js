import styled from "styled-components";

const Button = styled.button`
  background: var(--color-bg-gray);
  color: var(--color-gray);
  width: 8em;
  flex: 0 0 8em;
  margin: 0.5em 0em;
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

const SearchIcon = styled.img.attrs({
  src: "icons/search.svg",
  alt: "Search Icon"
})`
  height: 1em;
  width: 1.5em;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  margin: 0em;
  flex: 0 0 9em;
`;

const Input = styled.input`
  width: 20em;
  flex: 1;
  border-radius: 1em;
  height: 3em;
  border: 0em;
  padding: 1em;
  background: var(--color-bg-gray);
`;

const SortLabel = styled.div`
  flex: 0 0 4em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5em 0em;
  flex: 0 1 22em;
`;

const FiltersContainer = styled.div`
  font-size: 1.8rem;
  width: calc(100% - 8em);
  margin: 1em 0em;
  color: var(--color-gray);
  padding: 0.5em;
  font-weight: regular;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.05em solid var(--color-gray);
  @media (max-width: 600px) {
    width: calc(100%);
  }
`;

export {
  FiltersContainer,
  ButtonsContainer,
  SortLabel,
  Button,
  SearchIcon,
  SearchBar,
  Input
};
