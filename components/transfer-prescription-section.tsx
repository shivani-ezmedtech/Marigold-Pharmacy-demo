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

export default function TransferPrescriptionSection() {
  const [verified, setVerified] = useState(false)

  return (
    <ServiceFormShell
      title="Transfer Prescription"
      breadcrumbLabel="Transfer Prescription"
      introTitle="Are you tired of your existing pharmacy?"
      introParagraphs={[
        'At Broadway Pharmacy we can transfer your prescriptions from your pharmacy so you can experience all the good benefits of using our pharmacy.',
        'Please fill out the form below so we can start the transfer for you. Thank you for choosing us as your healthcare partner. You can also stop by our location and have our pharmacist assist you.',
      ]}
      imageSrc="/pharmacy-consultation-marigold.png"
      imageAlt="Pharmacist consulting with a patient about prescription transfer"
    >
      <div className="grid gap-8">
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-destructive">
            * Required Information
          </p>
          <div className="mt-4 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <TextInput label="First Name" placeholder="Enter first name here" required />
          <TextInput label="Last Name" placeholder="Enter last name here" required />
          <TextInput label="Date of Birth" placeholder="Enter date of birth here" required />
          <TextInput label="Phone Number" placeholder="Enter phone number here" required />
          <TextInput label="Address" placeholder="Enter address here" required />
          <TextInput label="City" placeholder="Enter city here" required />
          <label className="grid gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
              State
            </span>
            <select className="w-full border border-border bg-white px-4 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
              <option>Please select state.</option>
            </select>
          </label>
          <TextInput label="Zip/Postal Code" placeholder="Enter zip or postal code here" required />
          <TextInput label="Pharmacy Name" placeholder="Enter pharmacy name here" required />
          <TextInput label="Pharmacy Phone" placeholder="Enter pharmacy phone here" required />
        </div>

        <div className="grid gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Prescription to be transferred
          </p>
          <p className="text-sm text-foreground/75">
            If you would like to transfer all prescription, simply check the box below.
          </p>
          <label className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/5 px-4 py-4">
            <input type="checkbox" className="h-4 w-4 accent-primary" />
            <span className="text-base font-medium text-foreground">Transfer all my prescriptions</span>
          </label>

          <p className="text-sm text-foreground/75">
            If you would like to selectively transfer your prescription, use the option below.
          </p>
        </div>

        <div className="grid gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
              List Specific Prescription to be transferred
            </p>

            <div className="mt-4 grid gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Medication Name
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <TextInput label="Rx1 Med Name" placeholder="Enter medication name here" required />
                  <TextInput label="Rx2 Med Name" placeholder="Enter medication name here" />
                  <TextInput label="Rx3 Med Name" placeholder="Enter medication name here" />
                  <TextInput label="Rx4 Med Name" placeholder="Enter medication name here" />
                  <TextInput label="Rx5 Med Name" placeholder="Enter medication name here" />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Prescription Number from current pharmacy
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <TextInput label="Rx1 Number" placeholder="Enter prescription number here" required />
                  <TextInput label="Rx2 Number" placeholder="Enter prescription number here" />
                  <TextInput label="Rx3 Number" placeholder="Enter prescription number here" />
                  <TextInput label="Rx4 Number" placeholder="Enter prescription number here" />
                  <TextInput label="Rx5 Number" placeholder="Enter prescription number here" />
                </div>
              </div>
            </div>
          </div>
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
