import React from "react";
import Head from "next/head";
import HistoryList from "../components/HistoryList";

import { actions as userActions } from "../redux/ducks/User";

const History = () => (
  <div>
    <Head>
      <title>History</title>
    </Head>
    <HistoryList></HistoryList>
  </div>
);

History.getInitialProps = async ({ req, reduxStore }) => {
  const isServer = !!req;

  // If we are on the server side, we wait for the fetching to finish,
  // otherwise we just load the page and show a spinner while fetching is in progress
  if (isServer) {
    await reduxStore.dispatch(userActions.getHistory());
    await reduxStore.dispatch(userActions.getUser());
  } else {
    reduxStore.dispatch(userActions.getHistory());
    reduxStore.dispatch(userActions.getUser());
  }

  return { getInitial: true };
};

export default History;
