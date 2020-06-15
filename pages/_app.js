import React from 'react'
import Head from 'next/head'
import { Settings } from 'luxon'

Settings.defaultLocale = 'tr'

import '../styles/app.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Feyz</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
