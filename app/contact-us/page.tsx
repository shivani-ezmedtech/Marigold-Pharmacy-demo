import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactUsSection from '@/components/contact-us-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactUsSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
