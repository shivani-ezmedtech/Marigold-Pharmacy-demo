import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import BrandLogo from '@/components/brand-logo'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
]

const footerLinks = [
  { href: '/resources', label: 'Resources' },
  { href: '/medical-supplies', label: 'Medical Supplies' },
  { href: '/free-consultation', label: 'Free Consultation' },
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: Facebook,
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: Instagram,
    hoverClass: 'hover:bg-[#E1306C] hover:border-[#E1306C]',
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: Linkedin,
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f6f0e6] px-4 py-10 text-foreground sm:px-6 sm:py-12 lg:px-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute -left-12 top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 gap-10 border-b border-primary/10 pb-8 lg:grid-cols-[520px_minmax(0,1fr)_0.7fr] lg:items-center">
          <div className="flex items-center">
            <BrandLogo variant="footer" className="block" />
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary/75">
              Explore
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-[0.14em] text-foreground/85 transition hover:text-primary sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary/75">
              Social Media
            </h3>
            <div className="mt-5 flex items-center justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border border-secondary/12 bg-white/70 text-secondary transition hover:-translate-y-0.5 hover:text-white ${social.hoverClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 text-sm text-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Marigold Pharmacy. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
