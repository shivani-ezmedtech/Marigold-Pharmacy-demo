import Image from 'next/image'
import Link from 'next/link'

export default function InsuranceAcceptedSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Insurance Accepted banner"
          fill
          quality={100}
          className="object-cover object-[center_22%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/38 to-white/72" />
        <div className="absolute inset-x-0 bottom-0 bg-white/55 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight uppercase">
              INSURANCE ACCEPTED
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85 uppercase tracking-[0.12em]">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>INSURANCE ACCEPTED</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md text-center">
            <span className="max-w-full text-center">Health Insurance</span>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-6 items-start">
              <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                <div className="relative min-h-[300px] sm:min-h-[380px]">
                  <Image
                    src="/pharmacy-consultation-marigold.png"
                    alt="Pharmacist discussing insurance coverage with a patient"
                    fill
                    quality={100}
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-primary tracking-tight">
                  Marigold Pharmacy accepts most insurance plans as payment for your prescriptions.
                </h2>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
                  You only need to present your prescription card to our staff, and we&apos;ll do the rest for you.
                </p>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                  If you have further questions about the insurance plans we accept or about your coverage, please don&apos;t hesitate to stop by our pharmacy or{' '}
                  <Link
                    href="/contact-us"
                    className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                  >
                    send us a message
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
