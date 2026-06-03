import Header from '@/components/header'
import Footer from '@/components/footer'
import FreeConsultationSection from '@/components/free-consultation-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function FreeConsultationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FreeConsultationSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
