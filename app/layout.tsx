import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moments with Mom',
  description: 'Created by Mau for her mom',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
