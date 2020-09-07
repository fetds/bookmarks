import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Private bookmarks application with end-to-end encryption." />

          <link rel="preconnect" href="https://v1.userbase.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
