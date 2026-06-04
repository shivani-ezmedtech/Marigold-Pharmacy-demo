import Image from 'next/image'
import Link from 'next/link'

export default function MedicalSuppliesSection() {
  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Medical Supplies banner"
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
              MEDICAL SUPPLIES
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85 uppercase tracking-[0.12em]">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>MEDICAL SUPPLIES</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md text-center">
            <span className="max-w-full text-center">Quality Products for a Better Life</span>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-6 items-start">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                  <div className="relative min-h-[300px] sm:min-h-[380px]">
                    <Image
                      src="/durable-medical-equipment-detail.png"
                      alt="Medical support items for back pain and mobility care"
                      fill
                      quality={100}
                      className="object-cover object-[center_18%]"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
                  Looking for something else? Visit our pharmacy or{' '}
                  <Link
                    href="/contact-us"
                    className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                  >
                    send us a message
                  </Link>
                  {' '}if you&apos;re searching for a specific medical supply or equipment. Our staff is ready to assist you.
                </p>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-primary tracking-tight">
                  Our goal is to ensure that you can get the needed supplies that best complement your health care regimen.
                </h2>
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/80">
                  We make this possible by offering a wide range of medical supplies and equipment designed to not just meet your health needs but to also help you achieve an improved quality of life.
                </p>

                <div className="mt-6 rounded-2xl border border-secondary/15 bg-secondary/5 p-5 sm:p-6">
                  <p className="text-base sm:text-lg font-semibold text-foreground">We have available medical supplies for the following:</p>
                  <ul className="mt-4 space-y-2 text-base sm:text-lg leading-relaxed text-foreground/80 list-disc pl-5">
                    <li>Bathroom safety</li>
                    <li>Diabetic patients</li>
                    <li>Pain management</li>
                    <li>Ambulatory aids</li>
                    <li>Everyday health needs</li>
                    <li>And more</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
