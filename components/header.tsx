'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center group hover:opacity-95 transition-opacity -ml-2 xl:-ml-4">
            <div className="relative h-24 w-[288px]">
              <Image
                src="/marigold-logo-new.png"
                alt="Marigold Pharmacy Logo"
                fill
                priority
                quality={100}
                className="object-contain object-left brightness-[1.18] contrast-[1.08] saturate-[1.05] drop-shadow-sm"
              />
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 flex-col items-center gap-3 px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-muted px-8 py-2 text-sm xl:text-base text-foreground/90 min-w-[460px] text-center">
                4792 Marigold Ave, Kissimmee, FL 34758
              </div>
              <div className="rounded-full bg-gradient-to-r from-primary to-emerald-500 px-8 py-2 text-sm xl:text-base text-white min-w-[360px] text-center font-medium">
                Phone: 407 - 201 - 4640 | Fax: 407 - 201 - 4638
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-4 xl:gap-5">
              <Link href="/" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Home</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Welcome Page</span>
              </Link>
              <Link href="#about" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">About Us</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Who We Are</span>
              </Link>
              <Link href="#services" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Services</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">We Offer</span>
              </Link>
              <Link href="#medical-supplies" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Medical Supplies</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Our Products</span>
              </Link>
              <Link href="#moringa" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Moringa</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Leaf Capsules</span>
              </Link>
              <Link href="#resources" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Resources</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Useful Links</span>
              </Link>
              <Link href="#contact" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors leading-none">Contact Us</span>
                <span className="text-[9px] xl:text-[11px] text-muted-foreground group-hover:text-primary/70 transition-colors mt-1 font-medium">Keep in Touch</span>
              </Link>
            </nav>
          </div>

          {/* Top-right logo */}
          <div className="hidden lg:block relative h-16 w-[130px]">
            <Image
              src="/healthmart-header-right.png"
              alt="HealthMart Pharmacy Logo"
              fill
              priority
              className="object-contain object-right"
            />
          </div>

        </div>
      </div>
    </header>
  )
}
