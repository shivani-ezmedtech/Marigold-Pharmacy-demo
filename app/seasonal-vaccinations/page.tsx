import Header from '@/components/header'
import Footer from '@/components/footer'
import SeasonalVaccinationsSection from '@/components/seasonal-vaccinations-section'
import ContactInformationSection from '@/components/contact-information-section'

export default function SeasonalVaccinationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SeasonalVaccinationsSection />
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
