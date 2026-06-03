import Link from 'next/link'
import { serviceLinks } from '@/lib/service-links'

export default function ServicesOverviewSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/free-consultation-banner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/38 to-white/72" />
        <div className="absolute inset-x-0 bottom-0 bg-white/55 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight">
              Services
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85">
            <span className="font-semibold text-secondary">Home</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>Services</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md text-center">
            <span className="max-w-full text-center">Your Way to Wellness</span>
          </div>

          <p className="mt-8 max-w-5xl text-base sm:text-lg leading-relaxed text-foreground/80">
            At Marigold Pharmacy, our service is centered on the belief that quality pharmacy care is more than just providing prompt prescriptions. When you stop by our pharmacy, we see to it that you won&apos;t only get the prescriptions and medications you need, but you also receive the care and attention you deserve. We are committed to helping you and your family achieve an improved level of wellness by providing you with a variety of pharmaceutical products and services.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
              Services We Offer:
            </h2>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-secondary/8 via-background to-primary/8 px-4 py-4 ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-primary/20 shadow-sm">
                    <span className="relative h-3.5 w-7 overflow-hidden rounded-full border border-primary/20">
                      <span className="absolute inset-y-0 left-0 w-1/2 bg-secondary" />
                      <span className="absolute inset-y-0 right-0 w-1/2 bg-primary/85" />
                      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80" />
                    </span>
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed text-foreground/85 group-hover:text-foreground">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-xl sm:text-2xl font-semibold text-primary">
              Please Stop by Our Pharmacy Today or Give us a Call!
            </p>

            <p className="mt-4 max-w-5xl text-base sm:text-lg leading-relaxed text-foreground/80">
              We are located at the beautiful Traditional Downtown of Kissimmee. Come right in to meet with our friendly staff or call us at 407-750-5999 and speak with our knowledgeable staff. We would be glad to serve you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
