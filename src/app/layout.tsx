import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rubanza Silver - Machine Learning Engineer & Software Developer',
  description: 'Portfolio of Rubanza Silver - Machine Learning Engineer specializing in the ML lifecycle from data analysis to model deployment, integrated into software solutions.',
  keywords: 'machine learning, software engineer, fastai, python, data science, web development',
  authors: [{ name: 'Rubanza Silver' }],
  openGraph: {
    title: 'Rubanza Silver - ML Engineer & Software Developer',
    description: 'Portfolio showcasing machine learning projects and software development work',
    url: 'https://rubanzasilver.com',
    siteName: 'Rubanza Silver Portfolio',
    images: [
      {
        url: 'https://d3q0oijmiduzg2.cloudfront.net/rubanzasilver/silverPotraitCompressed.webp',
        width: 1200,
        height: 630,
        alt: 'Rubanza Silver',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rubanza Silver - ML Engineer & Software Developer',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}