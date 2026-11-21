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
  title: 'Meska IT — Miami AI Workflow Automation Studio',
  description:
    'Miami-based AI workflow automation studio for 5–50 person businesses. Fixed-price bilingual lead agents, invoice & PDF autopilot, and private company copilots deployed in 7 days on your own infrastructure.',
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
