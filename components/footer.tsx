import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg max-w-[180px] hover:opacity-90 transition">
              <div className="relative h-12 w-[160px]">
                <Image
                  src="/marigold-logo-new.png"
                  alt="Marigold Pharmacy Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm">
              Your trusted community pharmacy dedicated to quality care and wellness.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="#team" className="hover:text-white transition">Our Team</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Mon - Fri: 9AM - 7PM</li>
              <li>Saturday: 10AM - 5PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="#" className="hover:text-white transition">Refill Prescription</Link></li>
              <li><Link href="#" className="hover:text-white transition">Immunizations</Link></li>
              <li><Link href="#" className="hover:text-white transition">Compounding</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/70 text-sm">
            &copy; 2024 Marigold Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
