'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BrandLogo from '@/components/brand-logo'

export default function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const navItemClass = (href: string) =>
    `text-xs sm:text-sm xl:text-[15px] font-semibold uppercase tracking-[0.12em] transition-colors leading-none ${
      isActive(href) ? 'text-primary' : 'text-foreground group-hover:text-primary'
    }`

  const mobileNavClass = (href: string) =>
    `shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
      isActive(href)
        ? 'border-primary bg-primary text-white'
        : 'border-primary/10 bg-white text-foreground hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center lg:grid lg:h-28 lg:grid-cols-[500px_minmax(0,1fr)_500px] lg:items-center">
          <BrandLogo variant="header" priority className="relative z-10 shrink-0 justify-self-start lg:-ml-6" />

          <nav className="relative z-10 hidden items-center justify-center gap-3 whitespace-nowrap text-center lg:flex xl:gap-4">
            <Link href="/" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/')}>HOME</span>
            </Link>
            <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
            <Link href="/about-us" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/about-us')}>ABOUT US</span>
            </Link>
            <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
            <Link href="/services" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/services')}>SERVICES</span>
            </Link>
            <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
            <Link href="/medical-supplies" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/medical-supplies')}>MEDICAL SUPPLIES</span>
            </Link>
            <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
            <Link href="/resources" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/resources')}>RESOURCES</span>
            </Link>
            <span className="text-muted-foreground/60 text-sm leading-none select-none">|</span>
            <Link href="/contact-us" className="group flex flex-col items-center text-center">
              <span className={navItemClass('/contact-us')}>CONTACT US</span>
            </Link>
          </nav>

          <div className="relative z-10 hidden pointer-events-none lg:flex justify-end lg:-mr-6">
            <div className="relative h-[84px] w-[240px] xl:h-[92px] xl:w-[260px]">
              <Image
                src="/healthmart-attached-logo.png"
                alt="HealthMart Pharmacy logo"
                fill
                className="object-contain object-right"
                sizes="(max-width: 1280px) 240px, 260px"
              />
            </div>
          </div>
        </div>

        <nav className="relative z-10 -mx-2 flex items-center gap-3 overflow-x-auto px-2 pb-4 pt-1 whitespace-nowrap text-center lg:hidden">
          <Link href="/" className={mobileNavClass('/')}>
            HOME
          </Link>
          <Link href="/about-us" className={mobileNavClass('/about-us')}>
            ABOUT US
          </Link>
          <Link href="/services" className={mobileNavClass('/services')}>
            SERVICES
          </Link>
          <Link href="/medical-supplies" className={mobileNavClass('/medical-supplies')}>
            MEDICAL SUPPLIES
          </Link>
          <Link href="/resources" className={mobileNavClass('/resources')}>
            RESOURCES
          </Link>
          <Link href="/contact-us" className={mobileNavClass('/contact-us')}>
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  )
}
