'use client'

import { useState } from 'react'
import { FieldError, FieldLabel } from '@/components/form-primitives'
import ServiceFormShell from '@/components/service-form-shell'
import { fieldClass, validateName, validatePhone, validateRequired } from '@/lib/form-validation'

type TransferField =
  | 'firstName'
  | 'lastName'
  | 'dateOfBirth'
  | 'phone'
  | 'address'
  | 'city'
  | 'state'
  | 'zip'
  | 'pharmacyName'
  | 'pharmacyPhone'
  | 'rx1MedName'
  | 'rx1Number'

export default function TransferPrescriptionSection() {
  const [verified, setVerified] = useState(false)
  const [transferAll, setTransferAll] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    address: '',
    city: '',
    state: 'Please select state.',
    zip: '',
    pharmacyName: '',
    pharmacyPhone: '',
    rx1MedName: '',
    rx2MedName: '',
    rx3MedName: '',
    rx4MedName: '',
    rx5MedName: '',
    rx1Number: '',
    rx2Number: '',
    rx3Number: '',
    rx4Number: '',
    rx5Number: '',
  })
  const [errors, setErrors] = useState<Partial<Record<TransferField | 'verified', string>>>({})

  const validateField = (name: TransferField, value: string) => {
    switch (name) {
      case 'firstName':
        return validateName(value, 'First name')
      case 'lastName':
        return validateName(value, 'Last name')
      case 'dateOfBirth':
        return validateRequired(value, 'Date of birth')
      case 'phone':
        return validatePhone(value, 'Phone number')
      case 'address':
        return validateRequired(value, 'Address')
      case 'city':
        return validateRequired(value, 'City')
      case 'state':
        return value === 'Please select state.' ? 'State is required.' : ''
      case 'zip':
        return validateRequired(value, 'Zip/Postal Code')
      case 'pharmacyName':
        return validateRequired(value, 'Pharmacy name')
      case 'pharmacyPhone':
        return validatePhone(value, 'Pharmacy phone')
      case 'rx1MedName':
        return transferAll ? '' : validateRequired(value, 'Rx1 medication name')
      case 'rx1Number':
        return transferAll ? '' : validateRequired(value, 'Rx1 prescription number')
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as { name: keyof typeof formData; value: string }
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (
      name === 'firstName' ||
      name === 'lastName' ||
      name === 'dateOfBirth' ||
      name === 'phone' ||
      name === 'address' ||
      name === 'city' ||
      name === 'state' ||
      name === 'zip' ||
      name === 'pharmacyName' ||
      name === 'pharmacyPhone' ||
      name === 'rx1MedName' ||
      name === 'rx1Number'
    ) {
      const fieldName = name as TransferField
      setErrors((prev) => ({ ...prev, [fieldName]: validateField(fieldName, value) }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Partial<Record<TransferField | 'verified', string>> = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      dateOfBirth: validateField('dateOfBirth', formData.dateOfBirth),
      phone: validateField('phone', formData.phone),
      address: validateField('address', formData.address),
      city: validateField('city', formData.city),
      state: validateField('state', formData.state),
      zip: validateField('zip', formData.zip),
      pharmacyName: validateField('pharmacyName', formData.pharmacyName),
      pharmacyPhone: validateField('pharmacyPhone', formData.pharmacyPhone),
      rx1MedName: validateField('rx1MedName', formData.rx1MedName),
      rx1Number: validateField('rx1Number', formData.rx1Number),
      verified: verified ? '' : 'Please complete the verification step.',
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    console.log('Transfer prescription form submitted:', { ...formData, transferAll })
  }

  return (
    <ServiceFormShell
      title="Transfer Prescription"
      breadcrumbLabel="Transfer Prescription"
      introTitle="Are you tired of your existing pharmacy?"
      introParagraphs={[
        'At Marigold Pharmacy we can transfer your prescriptions from your pharmacy so you can experience all the good benefits of using our pharmacy.',
        'Please fill out the form below so we can start the transfer for you. Thank you for choosing us as your healthcare partner. You can also stop by our location and have our pharmacist assist you.',
      ]}
      imageSrc="/pharmacy-consultation-marigold.png"
      imageAlt="Pharmacist consulting with a patient about prescription transfer"
    >
      <form onSubmit={handleSubmit} noValidate className="grid gap-8">
        <div>
          <p className="text-base font-semibold uppercase tracking-wide text-destructive">
            * Required Information
          </p>
          <div className="mt-4 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <label className="grid gap-2"><FieldLabel required>First Name</FieldLabel><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter first name here" className={fieldClass(Boolean(errors.firstName))} /><FieldError id="transfer-first-name-error" message={errors.firstName} /></label>
          <label className="grid gap-2"><FieldLabel required>Last Name</FieldLabel><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter last name here" className={fieldClass(Boolean(errors.lastName))} /><FieldError id="transfer-last-name-error" message={errors.lastName} /></label>
          <label className="grid gap-2"><FieldLabel required>Date of Birth</FieldLabel><input type="text" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Enter date of birth here" className={fieldClass(Boolean(errors.dateOfBirth))} /><FieldError id="transfer-dob-error" message={errors.dateOfBirth} /></label>
          <label className="grid gap-2"><FieldLabel required>Phone Number</FieldLabel><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number here" className={fieldClass(Boolean(errors.phone))} /><FieldError id="transfer-phone-error" message={errors.phone} /></label>
          <label className="grid gap-2"><FieldLabel required>Address</FieldLabel><input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter address here" className={fieldClass(Boolean(errors.address))} /><FieldError id="transfer-address-error" message={errors.address} /></label>
          <label className="grid gap-2"><FieldLabel required>City</FieldLabel><input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter city here" className={fieldClass(Boolean(errors.city))} /><FieldError id="transfer-city-error" message={errors.city} /></label>
          <label className="grid gap-2">
            <FieldLabel required>State</FieldLabel>
            <select name="state" value={formData.state} onChange={handleChange} className={fieldClass(Boolean(errors.state))}>
              <option>Please select state.</option>
            </select>
            <FieldError id="transfer-state-error" message={errors.state} />
          </label>
          <label className="grid gap-2"><FieldLabel required>Zip/Postal Code</FieldLabel><input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="Enter zip or postal code here" className={fieldClass(Boolean(errors.zip))} /><FieldError id="transfer-zip-error" message={errors.zip} /></label>
          <label className="grid gap-2"><FieldLabel required>Pharmacy Name</FieldLabel><input type="text" name="pharmacyName" value={formData.pharmacyName} onChange={handleChange} placeholder="Enter pharmacy name here" className={fieldClass(Boolean(errors.pharmacyName))} /><FieldError id="transfer-pharmacy-name-error" message={errors.pharmacyName} /></label>
          <label className="grid gap-2"><FieldLabel required>Pharmacy Phone</FieldLabel><input type="tel" name="pharmacyPhone" value={formData.pharmacyPhone} onChange={handleChange} placeholder="Enter pharmacy phone here" className={fieldClass(Boolean(errors.pharmacyPhone))} /><FieldError id="transfer-pharmacy-phone-error" message={errors.pharmacyPhone} /></label>
        </div>

        <div className="grid gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Prescription to be transferred
          </p>
          <p className="text-sm text-foreground/75">
            If you would like to transfer all prescription, simply check the box below.
          </p>
          <label className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/5 px-4 py-4">
            <input
              type="checkbox"
              checked={transferAll}
              onChange={(e) => {
                setTransferAll(e.target.checked)
                setErrors((prev) => ({ ...prev, rx1MedName: '', rx1Number: '' }))
              }}
              className="h-4 w-4 accent-primary"
            />
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
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                  <label className="grid gap-2"><FieldLabel required={!transferAll}>Rx1 Med Name</FieldLabel><input type="text" name="rx1MedName" value={formData.rx1MedName} onChange={handleChange} placeholder="Enter medication name here" className={fieldClass(Boolean(errors.rx1MedName))} /><FieldError id="transfer-rx1-med-error" message={errors.rx1MedName} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx2 Med Name</FieldLabel><input type="text" name="rx2MedName" value={formData.rx2MedName} onChange={handleChange} placeholder="Enter medication name here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx3 Med Name</FieldLabel><input type="text" name="rx3MedName" value={formData.rx3MedName} onChange={handleChange} placeholder="Enter medication name here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx4 Med Name</FieldLabel><input type="text" name="rx4MedName" value={formData.rx4MedName} onChange={handleChange} placeholder="Enter medication name here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx5 Med Name</FieldLabel><input type="text" name="rx5MedName" value={formData.rx5MedName} onChange={handleChange} placeholder="Enter medication name here" className={fieldClass(false)} /></label>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Prescription Number from current pharmacy
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                  <label className="grid gap-2"><FieldLabel required={!transferAll}>Rx1 Number</FieldLabel><input type="text" name="rx1Number" value={formData.rx1Number} onChange={handleChange} placeholder="Enter prescription number here" className={fieldClass(Boolean(errors.rx1Number))} /><FieldError id="transfer-rx1-number-error" message={errors.rx1Number} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx2 Number</FieldLabel><input type="text" name="rx2Number" value={formData.rx2Number} onChange={handleChange} placeholder="Enter prescription number here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx3 Number</FieldLabel><input type="text" name="rx3Number" value={formData.rx3Number} onChange={handleChange} placeholder="Enter prescription number here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx4 Number</FieldLabel><input type="text" name="rx4Number" value={formData.rx4Number} onChange={handleChange} placeholder="Enter prescription number here" className={fieldClass(false)} /></label>
                  <label className="grid gap-2"><FieldLabel>Rx5 Number</FieldLabel><input type="text" name="rx5Number" value={formData.rx5Number} onChange={handleChange} placeholder="Enter prescription number here" className={fieldClass(false)} /></label>
                </div>
              </div>
            </div>
          </div>
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
            <FieldError id="transfer-verified-error" message={errors.verified} />
          </div>
        </div>
      </form>
    </ServiceFormShell>
  )
}
