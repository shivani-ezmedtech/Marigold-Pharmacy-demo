import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import WelcomeSection from '@/components/welcome-section'
import ServicesGrid from '@/components/services-grid'
import TeamSection from '@/components/team-section'
import ContactSection from '@/components/contact-section'
import ContactInformationSection from '@/components/contact-information-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <WelcomeSection />
      <ServicesGrid />
      <ContactSection />
      <TeamSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
