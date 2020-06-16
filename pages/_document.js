import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://dl.airtable.com" />
          <link rel="preconnect" href="https://dl.airtable.com" />

          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="description" content="Kafa açan içerikler" />

          <meta property="og:url" content="https://feyz.li" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Feyz" />
          <meta property="og:description" content="Kafa açan içerikler" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://feyz.li" />
          <meta name="twitter:title" content="Feyz" />
          <meta name="twitter:description" content="Kafa açan içerikler" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <meta name="application-name" content="Feyz" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Feyz" />

          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤯</text></svg>"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EEJXF1ZGSX"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-EEJXF1ZGSX');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
