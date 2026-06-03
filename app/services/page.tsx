import Footer from '@/components/footer'
import Header from '@/components/header'
import ContactInformationSection from '@/components/contact-information-section'
import ServicesOverviewSection from '@/components/services-overview-section'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesOverviewSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
