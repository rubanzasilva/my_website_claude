import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
