import React from "react";
import Link from "next/link";
import styled from "styled-components";

const links = []; 

const StyledNav = styled.nav`
  background: cyan;
  width: 100%;
  height: 5em;
  display: flex;
`;


const Navbar = () => (
  <StyledNav>
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </StyledNav>
);

export default Navbar;
