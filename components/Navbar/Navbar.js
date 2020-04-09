import React from "react";
import Link from "next/link";
import { NavbarContainer, Menu, StyledLink } from "../../styles/Navbar";
import User from "../User";

const Navbar = ({ links, current }) => (
  <NavbarContainer>
    <Menu>
      {links.map(({ href, label }) => (
        <StyledLink className={href == current ? "current" : ""} key={href}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </StyledLink>
      ))}
    </Menu>
    <User></User>
  </NavbarContainer>
);

export default Navbar;
