import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import ToasterContext from './context/toasterContext'
import AuthContext from './context/AuthContext';

const comfortaa = Comfortaa({ subsets: ['latin'] });

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
      <body className={comfortaa.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
