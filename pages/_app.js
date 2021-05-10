import "../styles/globals.css";
import Head from "../components/Head";
import React from "react";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
