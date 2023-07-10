import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'

const confortaa = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to One Chat MM',
  description: 'Welcome to One Chat MM. One Messaging',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={confortaa.className}>{children}</body>
    </html>
  )
}
