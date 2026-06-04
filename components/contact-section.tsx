'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FieldError, FieldLabel } from '@/components/form-primitives'
import {
  fieldClass,
  roundedFieldClass,
  validateEmail,
  validateMessage,
  validateName,
} from '@/lib/form-validation'

type ContactField = 'name' | 'email' | 'message'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({})

  const validateField = (name: ContactField, value: string) => {
    switch (name) {
      case 'name':
        return validateName(value, 'Full name')
      case 'email':
        return validateEmail(value)
      case 'message':
        return validateMessage(value)
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: ContactField; value: string }

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const nextErrors: Partial<Record<ContactField, string>> = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    }

    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      return
    }

    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="relative overflow-hidden px-1 py-14 sm:px-2">
      <div className="absolute inset-0">
        <Image
          src="/keepintouch-medicine-bg.png"
          alt="Medicine background"
          fill
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-cyan-900/18" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mr-auto grid max-w-4xl animate-rise-in grid-cols-1 overflow-hidden border border-white/40 shadow-xl lg:ml-6 md:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} noValidate className="bg-background/95 p-8 md:p-10">
            <h2 className="text-5xl font-light leading-none text-primary">Keep in Touch</h2>
            <p className="mt-3 text-lg text-foreground/85">
              How can we help you? Please send your message below.
            </p>

            <div className="mt-8 space-y-4">
              <label className="grid gap-2">
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={roundedFieldClass(Boolean(errors.name))}
                  placeholder="Enter Full Name Here"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'home-contact-name-error' : undefined}
                />
                <FieldError id="home-contact-name-error" message={errors.name} />
              </label>

              <label className="grid gap-2">
                <FieldLabel required>Email Address</FieldLabel>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={roundedFieldClass(Boolean(errors.email))}
                  placeholder="Enter Email Address Here"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'home-contact-email-error' : undefined}
                />
                <FieldError id="home-contact-email-error" message={errors.email} />
              </label>

              <label className="grid gap-2">
                <FieldLabel required>Message</FieldLabel>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={fieldClass(Boolean(errors.message))}
                  placeholder="Enter Your Message Here"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'home-contact-message-error' : undefined}
                />
                <FieldError id="home-contact-message-error" message={errors.message} />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-secondary to-primary py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-secondary hover:to-primary"
            >
              SUBMIT MESSAGE &rsaquo;
            </button>
          </form>

          <div className="relative min-h-[520px]">
            <Image
              src="/pharmacy-consultation-marigold.png"
              alt="Pharmacist consulting a customer"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
