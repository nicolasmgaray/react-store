import styled from "styled-components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 1em;
  height: 5rem;
  width: 100%;
  color: var(--color-black);
  font-size: 1.5rem;
  letter-spacing: -0.15px;
  z-index: 10;
`;

const Menu = styled.ul`
  display: flex;
  width: auto;
`;

const StyledLink = styled.li`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--color-primary);
  &.current {
    border-bottom: 0.1em solid var(--color-main);
    font-weight: bold;
  }
`;

export { NavbarContainer, Menu, StyledLink };
