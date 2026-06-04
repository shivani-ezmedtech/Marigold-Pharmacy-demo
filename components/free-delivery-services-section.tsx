'use client'

import { useState } from 'react'
import { FieldError, FieldLabel } from '@/components/form-primitives'
import ServiceFormShell from '@/components/service-form-shell'
import {
  fieldClass,
  validateEmail,
  validateName,
  validatePhone,
  validateRequired,
} from '@/lib/form-validation'

type DeliveryField =
  | 'lastName'
  | 'firstName'
  | 'phone'
  | 'email'
  | 'notifyReady'
  | 'verified'

export default function FreeDeliveryServicesSection() {
  const [verified, setVerified] = useState(false)
  const [wantsDelivery, setWantsDelivery] = useState(true)
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    notifyReady: '- Please Select -',
  })
  const [errors, setErrors] = useState<Partial<Record<DeliveryField, string>>>({})

  const validateField = (name: DeliveryField, value: string) => {
    switch (name) {
      case 'lastName':
        return validateName(value, 'Last name')
      case 'firstName':
        return validateName(value, 'First name')
      case 'phone':
        return validatePhone(value, 'Phone number')
      case 'email':
        return validateEmail(value)
      case 'notifyReady':
        return value === '- Please Select -' ? 'Notification preference is required.' : ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof typeof formData; value: string }
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (name === 'lastName' || name === 'firstName' || name === 'phone' || name === 'email' || name === 'notifyReady') {
      const fieldName = name as Exclude<DeliveryField, 'verified'>
      setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, value) }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Partial<Record<DeliveryField, string>> = {
      lastName: validateField('lastName', formData.lastName),
      firstName: validateField('firstName', formData.firstName),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      notifyReady: validateField('notifyReady', formData.notifyReady),
      verified: verified ? '' : 'Please complete the verification step.',
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    console.log('Free delivery form submitted:', { ...formData, wantsDelivery })
  }

  return (
    <ServiceFormShell
      title="Free Delivery Services"
      breadcrumbLabel="Free Delivery Services"
      introTitle="For patients who need to refill their medications but may not have the means to travel, Marigold Pharmacy is proud to offer delivery services for your convenience. CALL TO INQUIRE IF YOUR PRESCRIPTIONS QUALIFY FOR FREE DELIVERY."
      introParagraphs={[
        'You cannot come to our pharmacy? Then, allow us to deliver your prescriptions or other pharmacy products you need right to your doorstep.',
        'To get started, please complete the form below.',
      ]}
      imageSrc="/free-delivery-services-detail.png"
      imageAlt="Prescription delivery service"
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
            <FieldError id="delivery-last-name-error" message={errors.lastName} />
          </label>
          <label className="grid gap-2">
            <FieldLabel required>First Name</FieldLabel>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name here" className={fieldClass(Boolean(errors.firstName))} />
            <FieldError id="delivery-first-name-error" message={errors.firstName} />
          </label>
          <label className="grid gap-2">
            <FieldLabel required>Phone Number</FieldLabel>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number here" className={fieldClass(Boolean(errors.phone))} />
            <FieldError id="delivery-phone-error" message={errors.phone} />
          </label>
          <label className="grid gap-2">
            <FieldLabel required>Email Address</FieldLabel>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address here" className={fieldClass(Boolean(errors.email))} />
            <FieldError id="delivery-email-error" message={errors.email} />
          </label>
        </div>

        <label className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/5 px-4 py-4">
          <input
            type="checkbox"
            checked={wantsDelivery}
            onChange={(e) => setWantsDelivery(e.target.checked)}
            className="h-4 w-4 accent-primary"
          />
          <span className="text-base font-medium text-foreground">
            Yes, I want free pick-up and delivery of RX.
          </span>
        </label>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <label className="grid gap-2">
            <FieldLabel required>
              Would you like us to notify you when your prescription(s) are ready?
            </FieldLabel>
            <select name="notifyReady" value={formData.notifyReady} onChange={handleChange} className={fieldClass(Boolean(errors.notifyReady))}>
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <FieldError id="delivery-notify-error" message={errors.notifyReady} />
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
            <FieldError id="delivery-verified-error" message={errors.verified} />
          </div>
        </div>
      </form>
    </ServiceFormShell>
  )
}
