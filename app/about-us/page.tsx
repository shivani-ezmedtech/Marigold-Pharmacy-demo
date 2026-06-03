import Header from '@/components/header'
import Footer from '@/components/footer'
import AboutUsSection from '@/components/about-us-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutUsSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
