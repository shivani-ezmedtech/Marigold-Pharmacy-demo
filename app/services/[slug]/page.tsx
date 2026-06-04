import { notFound } from 'next/navigation'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ContactInformationSection from '@/components/contact-information-section'
import ServiceDetailSection from '@/components/service-detail-section'
import { serviceLinkMap, serviceLinks } from '@/lib/service-links'
import { serviceDetailContent } from '@/lib/service-detail-content'

export function generateStaticParams() {
  return serviceLinks
    .filter((service) => service.href.startsWith('/services/'))
    .map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceLinkMap.get(slug)

  if (!service || !service.href.startsWith('/services/')) {
    notFound()
  }

  const detailContent = serviceDetailContent[slug]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      {detailContent ? (
        <ServiceDetailSection content={detailContent} />
      ) : (
        <section className="bg-background">
          <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/free-consultation-banner.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/24 to-white/78" />
            <div className="absolute inset-x-0 bottom-0 bg-white/58 backdrop-blur-[2px]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 text-center">
                <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight">
                  {service.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="animate-rise-in rounded-2xl border border-border bg-white p-8 sm:p-10 shadow-sm">
              <div className="inline-flex max-w-3xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
                More details for this service will be added here.
              </div>
              <p className="mt-8 max-w-4xl text-base sm:text-lg leading-relaxed text-foreground/80">
                We&apos;re preparing a dedicated page for <span className="font-semibold text-secondary">{service.title}</span>. Share the content whenever you&apos;re ready and I&apos;ll style it in the same Marigold Pharmacy format as the other service pages.
              </p>
            </div>
          </div>
        </section>
      )}
      <ContactInformationSection />
      <Footer />
    </main>
  )
}
