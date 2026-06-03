import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactInformationSection from '@/components/contact-information-section'
import PriceMatchingInsuranceSection from '@/components/price-matching-insurance-section'

export default function PriceMatchingInsuranceBillingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PriceMatchingInsuranceSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
