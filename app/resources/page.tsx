import Header from '@/components/header'
import Footer from '@/components/footer'
import ResourcesSection from '@/components/resources-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResourcesSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
