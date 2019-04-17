import Document, { NextDocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRendererPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRendererPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
