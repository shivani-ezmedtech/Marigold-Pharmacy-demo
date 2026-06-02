import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-white/10 pb-8">
          <Link href="/" className="flex items-center justify-start">
            <div className="relative h-16 w-[220px]">
              <Image
                src="/marigold-logo-generated-bright-v2.png"
                alt="Marigold Pharmacy Logo"
                fill
                className="object-contain object-left brightness-[1.3] contrast-[1.14] saturate-[1.2] drop-shadow-[0_2px_6px_rgba(255,200,0,0.25)]"
              />
            </div>
          </Link>

          <div className="flex flex-col items-center gap-4 text-center">
            <div className="rounded-full bg-white/10 px-8 py-2 text-sm xl:text-base text-white/90 min-w-[460px] text-center">
              4792 Marigold Ave, Kissimmee, FL 34758
            </div>

            <nav className="flex items-center flex-wrap justify-center gap-4 xl:gap-5 text-white/90">
              <Link href="/" className="hover:text-white transition text-sm font-medium">Home</Link>
              <span className="text-white/35">|</span>
              <Link href="#about" className="hover:text-white transition text-sm font-medium">About Us</Link>
              <span className="text-white/35">|</span>
              <Link href="#services" className="hover:text-white transition text-sm font-medium">Services</Link>
              <span className="text-white/35">|</span>
              <Link href="#medical-supplies" className="hover:text-white transition text-sm font-medium">Medical Supplies</Link>
              <span className="text-white/35">|</span>
              <Link href="#moringa" className="hover:text-white transition text-sm font-medium">Moringa</Link>
              <span className="text-white/35">|</span>
              <Link href="#resources" className="hover:text-white transition text-sm font-medium">Resources</Link>
              <span className="text-white/35">|</span>
              <Link href="#contact" className="hover:text-white transition text-sm font-medium">Contact Us</Link>
            </nav>

            <div className="rounded-full bg-gradient-to-r from-primary/85 to-accent px-8 py-2 text-sm xl:text-base text-primary-foreground min-w-[360px] text-center font-medium whitespace-nowrap">
              Phone: 407 - 201 - 4640 | Fax: 407 - 201 - 4638
            </div>
          </div>

          <Link href="/" className="flex items-center justify-end">
            <div className="relative h-16 w-[150px]">
              <Image
                src="/healthmart-header-right.png"
                alt="HealthMart Pharmacy Logo"
                fill
                className="object-contain object-right"
              />
            </div>
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; 2024 Marigold Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
