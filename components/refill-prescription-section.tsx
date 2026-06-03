'use client'

import { useState } from 'react'
import ServiceFormShell from '@/components/service-form-shell'

function TextInput({
  label,
  placeholder,
  required,
}: {
  label: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
        {label} {required ? '*' : ''}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  )
}

function NumberInput({
  label,
  placeholder,
  required,
}: {
  label: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
        {label} {required ? '*' : ''}
      </span>
      <input
        type="text"
        inputMode="numeric"
        placeholder={placeholder}
        className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  )
}

export default function RefillPrescriptionSection() {
  const [verified, setVerified] = useState(false)

  return (
    <ServiceFormShell
      title="Refill Prescription"
      breadcrumbLabel="Refill Prescription"
      introTitle="You need not worry about running out of your prescription."
      introParagraphs={[
        'Our pharmacist can easily refill it for you and prepare it for pickup or delivery.',
        'Refilling your prescription is easy at Broadway Pharmacy. All you have to do is fill out the form below, and we’ll prepare your medication for delivery or pickup, whichever is more convenient for you.',
      ]}
      imageSrc="/refill-prescription-detail.png"
      imageAlt="Medicine in a light protected bottle"
    >
      <div className="grid gap-8">
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-destructive">
            * Required Information
          </p>
          <div className="mt-4 h-px bg-border" />
          <p className="mt-5 text-base font-semibold text-foreground">Who is this prescription for?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <TextInput label="Last Name" placeholder="Enter last name here" required />
          <TextInput label="First Name" placeholder="Enter first name here" required />
          <TextInput label="Phone Number" placeholder="Enter phone number here" required />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            RX REFILL NUMBERS *
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <NumberInput label="01" placeholder="Enter RX refill number here" />
            <NumberInput label="02" placeholder="Enter RX refill number here" />
            <NumberInput label="03" placeholder="Enter RX refill number here" />
            <NumberInput label="04" placeholder="Enter RX refill number here" />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            ADD MORE PRESCRIPTIONS (OVER THE COUNTER ITEM)
          </p>
          <div className="mt-4 grid gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Name</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <TextInput label="1" placeholder="Enter name here" required />
                <TextInput label="2" placeholder="Enter name here" />
                <TextInput label="3" placeholder="Enter name here" />
                <TextInput label="4" placeholder="Enter name here" />
                <TextInput label="5" placeholder="Enter name here" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Qty</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <NumberInput label="1" placeholder="Enter quantity here" required />
                <NumberInput label="2" placeholder="Enter quantity here" />
                <NumberInput label="3" placeholder="Enter quantity here" />
                <NumberInput label="4" placeholder="Enter quantity here" />
                <NumberInput label="5" placeholder="Enter quantity here" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Pick up or Delivery *
            </span>
            <select className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>Pickup</option>
              <option>Delivery</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Would you like us to notify you when your prescription(s) are ready?
            </span>
            <select className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

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
    </ServiceFormShell>
  )
}
