import React from "react";
import Head from "next/head";
import ProductList from "../components/ProductList";
import { actions as productActions } from "../redux/ducks/Products";
import { actions as userActions } from "../redux/ducks/User";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <ProductList />
  </div>
);

Home.getInitialProps = async ({ req, reduxStore }) => {
  const isServer = !!req;

  // If we are on the server side, we wait for the fetching to finish,
  // otherwise we just load the page and show a spinner while fetching is in progress
  if (isServer) {
    await reduxStore.dispatch(productActions.getProducts());
    await reduxStore.dispatch(userActions.getUser());
  } else {
    reduxStore.dispatch(productActions.getProducts());
    reduxStore.dispatch(userActions.getUser());
  }

  return { getInitial: true };
};

export default Home;
