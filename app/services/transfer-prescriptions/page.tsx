import Header from '@/components/header'
import Footer from '@/components/footer'
import ContactInformationSection from '@/components/contact-information-section'
import TransferPrescriptionSection from '@/components/transfer-prescription-section'

export default function TransferPrescriptionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TransferPrescriptionSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
