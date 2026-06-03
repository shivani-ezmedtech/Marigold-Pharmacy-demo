'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center group hover:opacity-95 transition-opacity -ml-6 xl:-ml-10">
            <div className="relative h-16 w-[220px]">
              <Image
                src="/marigold-logo-generated-bright-v2.png"
                alt="Marigold Pharmacy Logo"
                fill
                priority
                quality={100}
                className="object-contain object-left brightness-[1.3] contrast-[1.14] saturate-[1.2] drop-shadow-[0_2px_6px_rgba(255,200,0,0.25)]"
              />
            </div>
          </Link>

          <div className="hidden lg:flex flex-1 flex-col items-center gap-3 px-6">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-muted px-8 py-2 text-sm xl:text-base text-foreground/90 min-w-[460px] text-center">
                4792 Marigold Ave, Kissimmee, FL 34758
              </div>
              <div className="rounded-full bg-gradient-to-r from-primary/85 to-accent px-8 py-2 text-sm xl:text-base text-primary-foreground min-w-[360px] text-center font-medium whitespace-nowrap">
                Phone: 407 - 201 - 4640 | Fax: 407 - 201 - 4638
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-4 xl:gap-5">
              <Link href="/" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">HOME</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="/about-us" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">ABOUT US</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="/services" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">SERVICES</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="#medical-supplies" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">MEDICAL SUPPLIES</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="https://gatusmoringa.com/" target="_blank" rel="noreferrer" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">MORINGA</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="/resources" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">RESOURCES</span>
              </Link>
              <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
              <Link href="/contact-us" className="group flex flex-col items-center text-center">
                <span className="text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-primary transition-colors leading-none">CONTACT US</span>
              </Link>
            </nav>
          </div>

          {/* Top-right logo */}
          <div className="hidden lg:block relative h-16 w-[150px] mr-1 xl:mr-0">
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
