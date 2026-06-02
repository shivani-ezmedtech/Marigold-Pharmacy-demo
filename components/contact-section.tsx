'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-14 px-1 sm:px-2 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mr-auto lg:ml-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] overflow-hidden shadow-xl border border-white/40 animate-rise-in">
          <form onSubmit={handleSubmit} className="bg-background/95 p-8 md:p-10">
            <h2 className="text-5xl font-light leading-none text-primary">Keep in Touch</h2>
            <p className="mt-3 text-foreground/85 text-lg">
              How can we help you? Please send your message below.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="* full name"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="* email address"
                required
              />

              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-3 border border-border rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="enter your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-primary/85 to-accent hover:from-primary hover:to-accent py-3 text-primary-foreground font-medium transition-all duration-300 hover:-translate-y-0.5"
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
