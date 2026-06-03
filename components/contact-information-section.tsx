import { Clock3, MapPin, Navigation2, Printer } from 'lucide-react'

export default function ContactInformationSection() {
  return (
    <section
      id="contact-information"
      className="relative overflow-hidden py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-secondary/18 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-36 w-36 rounded-full bg-accent/16 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] overflow-hidden rounded-[1.25rem] border border-white/25 bg-white/72 shadow-lg backdrop-blur-sm">
          <div className="bg-background/92 p-4 sm:p-5 lg:p-5.5 animate-rise-in">
            <h2 className="text-2xl sm:text-3xl font-light leading-tight text-primary">
              Contact
              <span className="block text-foreground">Information</span>
            </h2>

            <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-foreground/80">
              Service Areas Covered: Osceola and Orange Counties and Greater Orlando Area
            </p>

            <a
              href="tel:4072014640"
              className="mt-3 inline-flex w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-primary/90 to-accent px-5 py-2.5 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Phone: 407 - 201 - 4640
            </a>

            <div className="my-3 h-px bg-border" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-foreground/85">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="leading-snug">
                  4792 Marigold Ave
                  <br />
                  Kissimmee, FL 34758
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Printer className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <p>Fax: 407 - 201 - 4638</p>
              </div>
            </div>

            <div className="mt-3 rounded-2xl bg-secondary/10 p-3 ring-1 ring-secondary/10">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Business Hours</p>
                  <p className="mt-0.5 text-xs text-foreground/80">Monday-Friday: 10:00 am - 6:00 pm</p>
                  <p className="text-xs text-foreground/80">Saturday-Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=4792+Marigold+Ave,+Kissimmee,+FL+34758"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5"
            >
              <Navigation2 className="h-3.5 w-3.5" />
              Get Directions
            </a>
          </div>

          <div className="relative min-h-[210px] lg:min-h-[260px] animate-slide-in-right">
            <iframe
              title="Marigold Pharmacy location map"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=4792+Marigold+Ave,+Kissimmee,+FL+34758&z=15&output=embed"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
