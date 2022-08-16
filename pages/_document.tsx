import {CssBaseline} from '@nextui-org/react';
import Document, {DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps, styles: <>{initialProps.styles}</>};
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          {CssBaseline.flush()}
          <title>Pokemon App</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
