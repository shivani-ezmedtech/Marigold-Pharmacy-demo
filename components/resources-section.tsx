import Image from 'next/image'
import Link from 'next/link'

const resources = [
  { label: 'U.S. Food and Drug Administration', href: 'https://www.fda.gov' },
  { label: 'American Society of Health-System Pharmacists', href: 'https://www.safemedication.com' },
  { label: 'ConsumerMedSafety.org', href: 'https://www.consumermedsafety.org' },
  { label: 'Institute for Safe Medication Practices', href: 'https://www.ismp.org' },
  { label: 'Consumer Healthcare Products Association', href: 'https://www.chpa-info.org' },
  { label: 'RxList - The Internet Drug Index for prescription drugs, medications and pill identifier', href: 'https://www.rxlist.com' },
]

export default function ResourcesSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Resources banner"
          fill
          quality={100}
          className="object-cover object-[center_24%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/24 to-white/78" />
        <div className="absolute inset-x-0 bottom-0 bg-white/58 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight uppercase">
              RESOURCES
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85 uppercase tracking-[0.12em]">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>RESOURCES</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md text-center">
            <span className="max-w-full text-center">Useful Health Resources</span>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
              Explore trusted health and medication resources below. Each link opens in a new tab so you can quickly reference reliable information while staying on our site.
            </p>

            <div className="mt-8 grid gap-4">
              {resources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-secondary/8 via-background to-primary/8 px-4 py-4 ring-1 ring-secondary/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="text-base sm:text-lg leading-relaxed text-foreground/85 group-hover:text-foreground">
                    {resource.label}
                  </span>
                  <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    Visit
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
