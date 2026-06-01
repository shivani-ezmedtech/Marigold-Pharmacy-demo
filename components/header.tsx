'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-16 h-16">
              <Image
                src="/marigold-logo-final.png"
                alt="Marigold Pharmacy Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary group-hover:text-primary/90 transition">
                Marigold
              </span>
              <span className="text-xs text-muted-foreground">Pharmacy</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-foreground hover:text-primary transition">
              Services
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="#team" className="text-foreground hover:text-primary transition">
              Team
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-6 py-2.5 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary/5 transition">
              Refill Rx
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition">
              Transfer Rx
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
