'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FieldError, FieldLabel } from '@/components/form-primitives'
import {
  fieldClass,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
  validateRequired,
} from '@/lib/form-validation'

type ContactUsField = 'name' | 'address' | 'email' | 'phone' | 'message'

export default function ContactUsSection() {
  const [verified, setVerified] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<ContactUsField | 'verified', string>>>({})

  const validateField = (name: ContactUsField, value: string) => {
    switch (name) {
      case 'name':
        return validateName(value, 'Full name')
      case 'address':
        return validateRequired(value, 'Address')
      case 'email':
        return validateEmail(value)
      case 'phone':
        return validatePhone(value, 'Phone number')
      case 'message':
        return validateMessage(value, 'Question / Comment')
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: ContactUsField; value: string }

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Partial<Record<ContactUsField | 'verified', string>> = {
      name: validateField('name', formData.name),
      address: validateField('address', formData.address),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
      verified: verified ? '' : 'Please complete the verification step.',
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    console.log('Contact Us form submitted:', formData)
    setFormData({ name: '', address: '', email: '', phone: '', message: '' })
    setVerified(false)
    setErrors({})
  }

  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px]">
        <Image
          src="/free-consultation-banner.png"
          alt="Contact Us banner"
          fill
          quality={100}
          className="object-cover object-[center_24%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/24 to-white/78" />
        <div className="absolute inset-x-0 bottom-0 bg-white/58 backdrop-blur-[2px]">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center sm:px-6 sm:py-7 lg:px-8">
            <h1 className="text-4xl font-light uppercase tracking-tight text-primary sm:text-5xl">
              CONTACT US
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="animate-rise-in">
          <p className="text-base uppercase tracking-[0.12em] text-foreground/85 sm:text-lg">
            <span className="font-semibold text-secondary">HOME</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>CONTACT US</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10 inline-flex max-w-3xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base font-medium text-white shadow-md sm:text-lg">
            Need help?
          </div>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
            Please reach us if you have further questions and concerns by leaving us a message in the form below.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <p className="text-base font-semibold uppercase tracking-wide text-destructive">
              * Required Information
            </p>
            <div className="mt-4 h-px bg-border" />

            <div className="mt-8 grid gap-6">
              <label className="grid gap-2">
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name here"
                  className={fieldClass(Boolean(errors.name))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-us-name-error' : undefined}
                />
                <FieldError id="contact-us-name-error" message={errors.name} />
              </label>

              <label className="grid gap-2">
                <FieldLabel required>Address</FieldLabel>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter address here"
                  className={fieldClass(Boolean(errors.address))}
                  aria-invalid={Boolean(errors.address)}
                  aria-describedby={errors.address ? 'contact-us-address-error' : undefined}
                />
                <FieldError id="contact-us-address-error" message={errors.address} />
              </label>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <label className="grid gap-2">
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address here"
                    className={fieldClass(Boolean(errors.email))}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-us-email-error' : undefined}
                  />
                  <FieldError id="contact-us-email-error" message={errors.email} />
                </label>

                <label className="grid gap-2">
                  <FieldLabel required>Phone</FieldLabel>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone here"
                    className={fieldClass(Boolean(errors.phone))}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'contact-us-phone-error' : undefined}
                  />
                  <FieldError id="contact-us-phone-error" message={errors.phone} />
                </label>
              </div>

              <label className="grid gap-2">
                <FieldLabel required>Question / Comment</FieldLabel>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your question or comment here"
                  className={fieldClass(Boolean(errors.message))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-us-message-error' : undefined}
                />
                <FieldError id="contact-us-message-error" message={errors.message} />
              </label>

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
                  <FieldError id="contact-us-verified-error" message={errors.verified} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
