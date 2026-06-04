import Image from 'next/image'
import Link from 'next/link'
import { Award, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react'

const values = [
  { title: 'Customer Satisfaction', description: 'We focus on thoughtful service that makes every visit feel personal and reassuring.', Icon: HeartPulse },
  { title: 'Honesty', description: 'We communicate clearly so patients can make confident decisions about their care.', Icon: ShieldCheck },
  { title: 'Integrity', description: 'We do the right thing for our patients, our team, and our community every day.', Icon: Award },
  { title: 'Friendliness', description: 'Warm service matters. We want every interaction to feel welcoming and respectful.', Icon: Sparkles },
]

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-0 top-8 h-72 w-72 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="About Us banner with a bright pharmacy consultation scene"
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
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85 uppercase tracking-[0.12em]">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>ABOUT US</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
            A Pharmacy That Cares
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
            <div className="rounded-[1.75rem] border border-border bg-white/90 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  Personalized Care
                </span>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Community Focused
                </span>
                <span className="rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  Trusted Pharmacy
                </span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl font-light text-primary tracking-tight">
                Our Mission Statement
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                To provide quality care and excellent services to our patients or customers and their loved ones to live happier and healthier lives.
              </p>

              <h3 className="mt-8 text-2xl sm:text-3xl font-light text-primary tracking-tight">
                About Our Pharmacy
              </h3>
              <div className="mt-4 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                <p>
                  Broadway Pharmacy is an extension of The Medicine Shoppe of Apopka which was founded a decade ago by Dr. Appiahene who earned his Doctor of Pharmacy degree at the University of Florida. Dr. Appiahene has over 30 years experience in Retail Pharmacy practice working for Eckerd Drugs, CVS, and Walgreens, as well as Hospital Pharmacy with Orlando Health.
                </p>
                <p>
                  His passion for Pharmacy and patient care has yielded him many achievements and has built him a large clientele base which he serves all over Central Florida. With special emphasis on patient counseling and education, his practice strives to deliver exceptional personalized care that you and your family would benefit.
                </p>
                <p>
                  At Broadway Pharmacy, our way of giving back to the community that has given so much to us is to help every patient young and old alike with their medication and health needs. We are here to provide you with the medicine and services you need to stay healthy.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl bg-secondary/8 p-4 ring-1 ring-secondary/10">
                  <p className="text-2xl font-semibold text-primary">30+</p>
                  <p className="mt-1 text-sm text-foreground/75">Years of experience</p>
                </div>
                <div className="rounded-2xl bg-secondary/8 p-4 ring-1 ring-secondary/10">
                  <p className="text-2xl font-semibold text-primary">1</p>
                  <p className="mt-1 text-sm text-foreground/75">Community-first pharmacy</p>
                </div>
                <div className="rounded-2xl bg-secondary/8 p-4 ring-1 ring-secondary/10">
                  <p className="text-2xl font-semibold text-primary">24/7</p>
                  <p className="mt-1 text-sm text-foreground/75">Care-minded support</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-primary/15 shadow-xl">
                <Image
                  src="/medication-therapy-management-detail.png"
                  alt="Medication therapy management consultation image"
                  fill
                  quality={100}
                  className="object-cover object-[center_26%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>

              <div className="rounded-[1.75rem] border border-border bg-secondary/8 p-6 sm:p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  Our Core Values
                </p>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground/80">
                  These core values are the anchors of our existence and are the guide for our day-to-day operations.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {values.map((value) => (
                    <div key={value.title} className="rounded-2xl bg-white p-4 ring-1 ring-secondary/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
                      <value.Icon className="h-5 w-5 text-secondary" />
                      <h4 className="mt-3 text-base font-semibold text-foreground">{value.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-base sm:text-lg leading-relaxed text-foreground/80">
                  For more information about our pharmacy, do not hesitate to{' '}
                  <Link href="/contact-us" className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
