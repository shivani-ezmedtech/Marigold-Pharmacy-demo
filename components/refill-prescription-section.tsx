'use client'

import { useState } from 'react'
import { FieldError, FieldLabel } from '@/components/form-primitives'
import ServiceFormShell from '@/components/service-form-shell'
import { fieldClass, validateName, validatePhone, validateRequired } from '@/lib/form-validation'

type RefillField =
  | 'lastName'
  | 'firstName'
  | 'phone'
  | 'rx01'
  | 'otcName1'
  | 'otcQty1'
  | 'pickupOrDelivery'

export default function RefillPrescriptionSection() {
  const [verified, setVerified] = useState(false)
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    rx01: '',
    rx02: '',
    rx03: '',
    rx04: '',
    otcName1: '',
    otcName2: '',
    otcName3: '',
    otcName4: '',
    otcName5: '',
    otcQty1: '',
    otcQty2: '',
    otcQty3: '',
    otcQty4: '',
    otcQty5: '',
    pickupOrDelivery: 'Pickup',
    notifyReady: '- Please Select -',
  })
  const [errors, setErrors] = useState<Partial<Record<RefillField | 'verified', string>>>({})

  const validateField = (name: RefillField, value: string) => {
    switch (name) {
      case 'lastName':
        return validateName(value, 'Last name')
      case 'firstName':
        return validateName(value, 'First name')
      case 'phone':
        return validatePhone(value, 'Phone number')
      case 'rx01':
        return validateRequired(value, 'RX refill number 01')
      case 'otcName1':
        return validateRequired(value, 'Name 1')
      case 'otcQty1':
        return validateRequired(value, 'Qty 1')
      case 'pickupOrDelivery':
        return validateRequired(value, 'Pick up or Delivery')
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof typeof formData; value: string }
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'lastName' || name === 'firstName' || name === 'phone' || name === 'rx01' || name === 'otcName1' || name === 'otcQty1' || name === 'pickupOrDelivery') {
      const fieldName = name as RefillField
      setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, value) }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Partial<Record<RefillField | 'verified', string>> = {
      lastName: validateField('lastName', formData.lastName),
      firstName: validateField('firstName', formData.firstName),
      phone: validateField('phone', formData.phone),
      rx01: validateField('rx01', formData.rx01),
      otcName1: validateField('otcName1', formData.otcName1),
      otcQty1: validateField('otcQty1', formData.otcQty1),
      pickupOrDelivery: validateField('pickupOrDelivery', formData.pickupOrDelivery),
      verified: verified ? '' : 'Please complete the verification step.',
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    console.log('Refill prescription form submitted:', formData)
  }

  return (
    <ServiceFormShell
      title="Refill Prescription"
      breadcrumbLabel="Refill Prescription"
      introTitle="You need not worry about running out of your prescription."
      introParagraphs={[
        'You need not worry about running out of your prescription! Our pharmacist can easily refill it for you and prepare it for pickup or delivery.',
        'Refilling your prescription is easy at Broadway Pharmacy. All you have to do is fill out the form below, and we’ll prepare your medication for delivery or pickup, whichever is more convenient for you.',
      ]}
      imageSrc="/refill-prescription-detail.png"
      imageAlt="Medicine in a light protected bottle"
      showIntroBar={false}
    >
      <form onSubmit={handleSubmit} noValidate className="grid gap-8">
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-destructive">
            * Required Information
          </p>
          <div className="mt-4 h-px bg-border" />
          <p className="mt-5 text-base font-semibold text-foreground">Who is this prescription for?</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <label className="grid gap-2">
            <FieldLabel required>Last Name</FieldLabel>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name here" className={fieldClass(Boolean(errors.lastName))} />
            <FieldError id="refill-last-name-error" message={errors.lastName} />
          </label>
          <label className="grid gap-2">
            <FieldLabel required>First Name</FieldLabel>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name here" className={fieldClass(Boolean(errors.firstName))} />
            <FieldError id="refill-first-name-error" message={errors.firstName} />
          </label>
          <label className="grid gap-2">
            <FieldLabel required>Phone Number</FieldLabel>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number here" className={fieldClass(Boolean(errors.phone))} />
            <FieldError id="refill-phone-error" message={errors.phone} />
          </label>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            RX REFILL NUMBERS <span className="ml-1 text-red-500">*</span>
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <label className="grid gap-2">
              <FieldLabel required>01</FieldLabel>
              <input type="text" inputMode="numeric" name="rx01" value={formData.rx01} onChange={handleChange} placeholder="Enter RX refill number here" className={fieldClass(Boolean(errors.rx01))} />
              <FieldError id="refill-rx01-error" message={errors.rx01} />
            </label>
            <label className="grid gap-2"><FieldLabel>02</FieldLabel><input type="text" inputMode="numeric" name="rx02" value={formData.rx02} onChange={handleChange} placeholder="Enter RX refill number here" className={fieldClass(false)} /></label>
            <label className="grid gap-2"><FieldLabel>03</FieldLabel><input type="text" inputMode="numeric" name="rx03" value={formData.rx03} onChange={handleChange} placeholder="Enter RX refill number here" className={fieldClass(false)} /></label>
            <label className="grid gap-2"><FieldLabel>04</FieldLabel><input type="text" inputMode="numeric" name="rx04" value={formData.rx04} onChange={handleChange} placeholder="Enter RX refill number here" className={fieldClass(false)} /></label>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            ADD MORE PRESCRIPTIONS (OVER THE COUNTER ITEM)
          </p>
          <div className="mt-4 grid gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Name</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <label className="grid gap-2"><FieldLabel required>1</FieldLabel><input type="text" name="otcName1" value={formData.otcName1} onChange={handleChange} placeholder="Enter name here" className={fieldClass(Boolean(errors.otcName1))} /><FieldError id="refill-otc-name1-error" message={errors.otcName1} /></label>
                <label className="grid gap-2"><FieldLabel>2</FieldLabel><input type="text" name="otcName2" value={formData.otcName2} onChange={handleChange} placeholder="Enter name here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>3</FieldLabel><input type="text" name="otcName3" value={formData.otcName3} onChange={handleChange} placeholder="Enter name here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>4</FieldLabel><input type="text" name="otcName4" value={formData.otcName4} onChange={handleChange} placeholder="Enter name here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>5</FieldLabel><input type="text" name="otcName5" value={formData.otcName5} onChange={handleChange} placeholder="Enter name here" className={fieldClass(false)} /></label>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Qty</p>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <label className="grid gap-2"><FieldLabel required>1</FieldLabel><input type="text" inputMode="numeric" name="otcQty1" value={formData.otcQty1} onChange={handleChange} placeholder="Enter quantity here" className={fieldClass(Boolean(errors.otcQty1))} /><FieldError id="refill-otc-qty1-error" message={errors.otcQty1} /></label>
                <label className="grid gap-2"><FieldLabel>2</FieldLabel><input type="text" inputMode="numeric" name="otcQty2" value={formData.otcQty2} onChange={handleChange} placeholder="Enter quantity here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>3</FieldLabel><input type="text" inputMode="numeric" name="otcQty3" value={formData.otcQty3} onChange={handleChange} placeholder="Enter quantity here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>4</FieldLabel><input type="text" inputMode="numeric" name="otcQty4" value={formData.otcQty4} onChange={handleChange} placeholder="Enter quantity here" className={fieldClass(false)} /></label>
                <label className="grid gap-2"><FieldLabel>5</FieldLabel><input type="text" inputMode="numeric" name="otcQty5" value={formData.otcQty5} onChange={handleChange} placeholder="Enter quantity here" className={fieldClass(false)} /></label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <label className="grid gap-2">
            <FieldLabel required>Pick up or Delivery</FieldLabel>
            <select name="pickupOrDelivery" value={formData.pickupOrDelivery} onChange={handleChange} className={fieldClass(Boolean(errors.pickupOrDelivery))}>
              <option>Pickup</option>
              <option>Delivery</option>
            </select>
            <FieldError id="refill-pickup-error" message={errors.pickupOrDelivery} />
          </label>

          <label className="grid gap-2">
            <FieldLabel>Would you like us to notify you when your prescription(s) are ready?</FieldLabel>
            <select name="notifyReady" value={formData.notifyReady} onChange={handleChange} className={fieldClass(false)}>
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-end">
          <div className="w-full max-w-[320px] overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-pressed={verified}
                  aria-label={verified ? 'Verification completed' : 'Verify that you are not a robot'}
                  onClick={() => {
                    setVerified((value) => !value)
                    setErrors((prev) => ({ ...prev, verified: '' }))
                  }}
                  className={`flex h-6 w-6 items-center justify-center rounded-[4px] border transition-all ${
                    verified
                      ? 'border-secondary bg-secondary text-white shadow-sm'
                      : 'border-secondary/40 bg-background hover:border-primary'
                  }`}
                >
                  {verified ? <span className="text-[10px] font-semibold leading-none">OK</span> : null}
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

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className={`inline-flex min-w-[190px] items-center justify-center px-10 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 ${
                verified
                  ? 'bg-gradient-to-r from-secondary to-primary hover:-translate-y-0.5 hover:shadow-lg'
                  : 'cursor-not-allowed bg-muted-foreground/45 shadow-none'
              }`}
            >
              SUBMIT
            </button>
            <FieldError id="refill-verified-error" message={errors.verified} />
          </div>
        </div>
      </form>
    </ServiceFormShell>
  )
}
