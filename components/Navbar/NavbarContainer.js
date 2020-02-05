import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const links = [
  { label: "Home", href: "/" },
  { label: "History", href: "/history" }
];

const NavbarContainer = () => {
  const { route } = useRouter();
  return <Navbar current={route} links={links}></Navbar>;
};

export default NavbarContainer;
