import React from "react";
import Link from "next/link";
import styled from "styled-components";
import User from "../User";
import Logo from "../Logo";

const Navbar = ({ links, current }) => (
  <StyledNavbar>
    <Logo></Logo>
    <StyledList>
      {links.map(({ href, label }) => (
        <StyledLink isCurrent={href == current} key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </StyledLink>
      ))}
    </StyledList>
    <User></User>
  </StyledNavbar>
);

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  opacity: 0.95;
  background: var(--color-contrasteAcento);
  border-bottom: 0.1em solid var(--color-acento);
  width: 100%;
  min-height: 5em;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  padding: 0em 2em;
  flex-wrap: wrap;
`;

const StyledList = styled.ul`
  display: flex;
  width: auto;
`;

const StyledLink = styled.li`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--color-acento);
  ${props =>
    props.isCurrent
      ? `
  border-bottom: 0.2em solid var(--color-acento);
  font-weight: bold;
  `
      : ``}
`;

export default Navbar;
