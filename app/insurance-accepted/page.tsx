import Header from '@/components/header'
import Footer from '@/components/footer'
import InsuranceAcceptedSection from '@/components/insurance-accepted-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function InsuranceAcceptedPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <InsuranceAcceptedSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
