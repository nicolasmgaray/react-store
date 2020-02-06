import React from "react";
import Link from "next/link";
import styled from "styled-components";
import User from "../User";

const Navbar = ({ links, current }) => (
  <NavbarContainer>
    <Logo></Logo>
    <Menu>
      {links.map(({ href, label }) => (
        <StyledLink isCurrent={href == current} key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </StyledLink>
      ))}
    </Menu>
    <User></User>
  </NavbarContainer>
);

const Logo = styled.img.attrs({ src: "/icons/cart.svg", alt: "logo" })`
  height: 3rem;
  width: auto;
  color:red;
`;
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
  ${props =>
    props.isCurrent
      ? `
  border-bottom: 0.1em solid var(--color-main);
  font-weight: bold;
  `
      : ``}
`;

export default Navbar;
