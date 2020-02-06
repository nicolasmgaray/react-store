import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
