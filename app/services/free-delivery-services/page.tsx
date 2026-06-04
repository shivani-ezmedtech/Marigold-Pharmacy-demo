import ContactInformationSection from '@/components/contact-information-section'
import Footer from '@/components/footer'
import FreeDeliveryServicesSection from '@/components/free-delivery-services-section'
import Header from '@/components/header'

export default function FreeDeliveryServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FreeDeliveryServicesSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
