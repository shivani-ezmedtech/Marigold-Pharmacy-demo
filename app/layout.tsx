import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Marigold Pharmacy | Quality Care & Community Health',
  description: 'Your trusted community pharmacy providing prescription services, immunizations, delivery, and comprehensive medication management. Expert pharmacists dedicated to your health.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon-symbol.png',
    shortcut: '/favicon-symbol.png',
    apple: '/favicon-symbol.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
