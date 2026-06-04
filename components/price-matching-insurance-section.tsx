import Image from 'next/image'

export default function PriceMatchingInsuranceSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Marigold Pharmacy price matching banner"
          fill
          quality={100}
          className="object-cover object-[center_24%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/24 to-white/78" />
        <div className="absolute inset-x-0 bottom-0 bg-white/58 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight">
              Price Matching / Insurance Billing
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85">
            <span className="font-semibold text-secondary">Home</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span className="font-medium text-foreground/80">Services</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>Price Matching / Insurance Billing</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10">
            <div className="inline-flex max-w-4xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
              We offer price matching and insurance billing for your prescriptions.
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-6 items-start">
                <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                  <div className="relative min-h-[300px] sm:min-h-[380px]">
                    <Image
                      src="/price-matching-detail.png"
                      alt="Portrait of confident male pharmacist holding clipboard while female colleague arranging stock in pharmacy"
                      fill
                      quality={100}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl font-light text-primary tracking-tight">
                    Flexible savings and billing support
                  </h2>
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
                    Our pharmacy allows customers to have the ability to set up a charge account for their insurance billing. If you have an insurance plan and are looking to save big on your prescriptions, you can visit us today to discuss your coverage.
                  </p>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/80">
                    We accept most health and prescription insurance plans, including Medicaid and Medicare.
                  </p>

                  <div className="mt-6 rounded-2xl bg-secondary/8 p-5 ring-1 ring-secondary/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                      Price Matching Service
                    </p>
                    <p className="mt-3 text-base sm:text-lg leading-relaxed text-foreground/80">
                      However, when you are searching for a much affordable option on your prescription plan but don&apos;t have insurance, you can take advantage of our price matching service. We guarantee to offer the lowest cost by matching or beating every published price.
                    </p>
                  </div>

                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80">
                    For further questions about our price matching and insurance billing services, please don&apos;t hesitate to reach us at your convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
