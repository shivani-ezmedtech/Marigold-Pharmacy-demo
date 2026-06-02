import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marigold Pharmacy | Quality Care & Community Health',
  description: 'Your trusted community pharmacy providing prescription services, immunizations, delivery, and comprehensive medication management. Expert pharmacists dedicated to your health.',
  generator: 'v0.app',
  icons: {
    icon: '/marigold-logo-generated-bright-v2.png',
    shortcut: '/marigold-logo-generated-bright-v2.png',
    apple: '/marigold-logo-generated-bright-v2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
