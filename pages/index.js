import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { actions as productActions } from "../redux/ducks/Products";
import { actions as userActions } from "../redux/ducks/User";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <ProductList />
  </div>
);

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(productActions.getProducts());
  await reduxStore.dispatch(userActions.getUser());
  return {serverRendered: true};
};

export default Home;
