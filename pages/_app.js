import App from "next/app";
import React from "react";
import withReduxStore from "../hoc/with-redux-store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import '../styles.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
