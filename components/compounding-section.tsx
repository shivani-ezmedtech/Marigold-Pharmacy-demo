import Image from 'next/image'

const examples = [
  'If you are allergic to an inactive ingredient in a prescribed medication, such as a preservative or dye, our pharmacist can make that medication without the inactive ingredient.',
  'If your child cannot swallow pills, we can make a liquid option that she can ingest more easily.',
  'If you take hormones, your body may react better to bioidentical hormone therapy.',
]

export default function CompoundingSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Marigold Pharmacy compounding banner"
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
              Compounding
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
            <span>Compounding</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10">
            <div>
              <div className="mt-6 inline-flex max-w-4xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
                We offer non-sterile compounding for any medications that will be taken orally, such as pills and liquids.
              </div>

              <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
                <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-foreground/80">
                  A compounding pharmacy makes custom medication tailored to individual needs. For example:
                </p>

                <div className="mt-7 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-6 lg:gap-8 items-start">
                  <div className="grid gap-4">
                    {examples.map((example) => (
                      <div
                        key={example}
                        className="flex items-start gap-4 rounded-2xl bg-gradient-to-r from-secondary/8 via-background to-primary/8 px-4 py-4 ring-1 ring-secondary/10"
                      >
                        <div className="mt-1.5 flex h-7 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-primary/20 shadow-sm">
                          <div className="relative h-3.5 w-7 overflow-hidden rounded-full border border-primary/20">
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-secondary" />
                            <div className="absolute inset-y-0 right-0 w-1/2 bg-primary/85" />
                            <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80" />
                          </div>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-foreground/85">{example}</p>
                      </div>
                    ))}
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                    <div className="relative min-h-[320px] sm:min-h-[380px]">
                      <Image
                        src="/compounding-detail.png"
                        alt="Non-sterile compounding preparation"
                        fill
                        quality={100}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-7 max-w-4xl text-base sm:text-lg leading-relaxed text-foreground/80">
                  At <span className="font-semibold text-secondary">Marigold Pharmacy</span>, our focus is on your health and wellness. Talk to our pharmacist about using compounding to tailor your medication to your unique needs. Together with your doctor, we can find a treatment that works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
