import "../css/index.css";

import Head from "next/head";
import PropTypes from "prop-types";
import { ProvideAuthentication } from "../providers/authentication";

export default function CustomApplication({ Component, pageProps }) {
  return (
    <ProvideAuthentication>
      <main>
        <Head>
          <title>Bookmarks</title>
        </Head>

        <Component {...pageProps} />
      </main>
    </ProvideAuthentication>
  );
}

CustomApplication.propTypes = {
  Component : PropTypes.func,
  pageProps : PropTypes.object
};
