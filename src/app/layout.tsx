import { LayoutProvider } from '@/Contexts/LayoutContext'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import * as React from "react"

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quickex',
  description: 'Quickex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}
        suppressHydrationWarning={true} >
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  )
}
