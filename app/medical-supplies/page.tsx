import Header from '@/components/header'
import Footer from '@/components/footer'
import MedicalSuppliesSection from '@/components/medical-supplies-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function MedicalSuppliesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MedicalSuppliesSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
