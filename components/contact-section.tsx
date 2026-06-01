'use client'

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
    <section id="contact" className="py-12 px-1 sm:px-2 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Keep in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Address</h4>
                <p className="text-muted-foreground">123 Healthcare Avenue, Your City, ST 12345</p>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">hello@marigoldpharmacy.com</p>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-2">Hours</h4>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <label className="block text-foreground font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-foreground font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-foreground font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message"
                rows={5}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
