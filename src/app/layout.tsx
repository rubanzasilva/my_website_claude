import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next';

const googleTagManagerId = 'GTM-WZBVT4WV'
const enableGoogleTagManager = process.env.NODE_ENV === 'production'

export const metadata: Metadata = {
  metadataBase: new URL('https://silverrubanza.com'),
  title: 'Silver Rubanza - Machine Learning Engineer & Software Developer',
  description: 'Portfolio of Silver Rubanza - Machine Learning Engineer specializing in the ML lifecycle from data analysis to model deployment, integrated into software solutions.',
  keywords: 'machine learning, software engineer, fastai, python, data science, web development',
  authors: [{ name: 'Silver Rubanza' }],
  openGraph: {
    title: 'Silver Rubanza - ML Engineer & Software Developer',
    description: 'Portfolio showcasing machine learning projects and software development work',
    url: 'https://silverrubanza.com',
    siteName: 'Silver Rubanza Portfolio',
    images: [
      {
        url: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp',
        width: 1200,
        height: 630,
        alt: 'Silver Rubanza',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Silver Rubanza - ML Engineer & Software Developer',
    description: 'Portfolio showcasing machine learning projects and software development work',
    images: ['https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {enableGoogleTagManager && (
          <Script id="google-tag-manager" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </Script>
        )}
      </head>
      <body>
        {enableGoogleTagManager && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
