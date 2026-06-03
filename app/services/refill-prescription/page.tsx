import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactInformationSection from '@/components/contact-information-section'
import RefillPrescriptionSection from '@/components/refill-prescription-section'

export default function RefillPrescriptionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RefillPrescriptionSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
