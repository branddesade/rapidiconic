import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

const meskaDisplay = localFont({
  src: '../fonts/MeskaDisplay-Regular.woff2',
  display: 'swap',
  variable: '--font-meska',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Meska IT — Practical AI for Miami Businesses',
  description:
    'Practical AI systems for 5–50 person Miami businesses. Fixed-price English & Spanish lead responders, automatic invoice entry, and private company file & handbook assistants—live in 7 days, with your data kept private.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'dark h-full scroll-smooth antialiased',
        inter.variable,
        monaSans.variable,
        meskaDisplay.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-gray-950 text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
