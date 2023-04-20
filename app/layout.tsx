import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ReactNode } from 'react'
import cx from '@/utils/cx'
import AnalyticsWrapper from './analytics'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        interDisplay.variable,
        'scroll-smooth antialiased'
      )}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        <AnalyticsWrapper />
      </body>
    </html>
  )
}

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin']
})

const interDisplay = localFont({
  variable: '--font-display',
  src: [
    {
      path: './fonts/inter/Inter-Display.woff2',
      weight: '400'
    },
    {
      path: './fonts/inter/Inter-DisplayBlack.woff2',
      weight: '900'
    }
  ]
})

const title = 'Feyz'
const description = 'Kafa açıcı içerikler'

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | Feyz`
  },
  description,
  openGraph: {
    title,
    description,
    url: 'https://feyz.vercel.app',
    siteName: title,
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title,
    description,
    site: '@ademilter'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/static/favicon-32x32.png',
    apple: '/static/apple-touch-icon.png'
  }
}
