import Header from '@/components/header'
import Footer from '@/components/footer'
import CompoundingSection from '@/components/compounding-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function CompoundingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CompoundingSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
