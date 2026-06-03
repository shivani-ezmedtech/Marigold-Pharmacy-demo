'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactUsSection() {
  const [verified, setVerified] = useState(false)

  return (
    <section className="bg-background">
      <div className="relative min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt="Contact Us banner"
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
              CONTACT US
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85 uppercase tracking-[0.12em]">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>CONTACT US</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 inline-flex max-w-3xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
            Need help?
          </div>

          <p className="mt-8 max-w-4xl text-lg sm:text-xl leading-relaxed text-foreground/85">
            Please reach us if you have further questions and concerns by leaving us a message in the form below.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <p className="text-base font-semibold uppercase tracking-wide text-destructive">
              * Required Information
            </p>
            <div className="mt-4 h-px bg-border" />

            <div className="mt-8 grid gap-6">
              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Full Name <span className="ml-1">*</span>
                </span>
                <input type="text" placeholder="Enter full name here" className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Address <span className="ml-1">*</span>
                </span>
                <input type="text" placeholder="Enter address here" className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Email Address <span className="ml-1">*</span>
                  </span>
                  <input type="email" placeholder="Enter email address here" className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Phone <span className="ml-1">*</span>
                  </span>
                  <input type="tel" placeholder="Enter phone here" className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Question / Comment
                </span>
                <textarea rows={5} placeholder="Enter your question or comment here" className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>

              <div className="flex flex-col md:flex-row md:items-end gap-4 pt-2">
                <div className="w-full max-w-[320px] rounded-md border border-border bg-white shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between gap-3 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-pressed={verified}
                        aria-label={verified ? 'Verification completed' : 'Verify that you are not a robot'}
                        onClick={() => setVerified((value) => !value)}
                        className={`flex h-6 w-6 items-center justify-center rounded-[4px] border transition-all ${
                          verified
                            ? 'border-secondary bg-secondary text-white shadow-sm'
                            : 'border-secondary/40 bg-background hover:border-primary'
                        }`}
                      >
                        {verified ? <span className="text-sm leading-none">✓</span> : null}
                      </button>
                      <div>
                        <p className="text-sm font-medium text-foreground">I&apos;m not a robot</p>
                        <p className="text-[11px] text-muted-foreground">
                          {verified ? 'Verification completed' : 'Click to verify'}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-semibold tracking-wide text-secondary">reCAPTCHA</div>
                      <div className="text-[10px] text-muted-foreground">Privacy - Terms</div>
                    </div>
                  </div>
                  <div className="border-t border-border bg-muted/55 px-4 py-2 text-[10px] text-muted-foreground">
                    reCAPTCHA is changing its terms of service. Take action.
                  </div>
                </div>
                <button
                  type="button"
                  disabled={!verified}
                  className={`inline-flex min-w-[190px] items-center justify-center px-10 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 ${
                    verified
                      ? 'bg-gradient-to-r from-secondary to-primary hover:-translate-y-0.5 hover:shadow-lg'
                      : 'cursor-not-allowed bg-muted-foreground/45 shadow-none'
                  }`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
