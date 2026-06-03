import Image from 'next/image'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="pt-10 pb-0 px-1 sm:px-2 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_1.25fr_0.72fr] gap-7 items-start">
          <div className="relative min-h-[620px] animate-rise-in overflow-hidden rounded-[2rem]">
            <Image
              src="/welcome-ai-natural-left.png"
              alt="Two women in a pharmacy reviewing a file"
              fill
              quality={100}
              className="object-cover object-[center_10%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent" />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Stay Healthy, Be Well with
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Marigold Pharmacy
            </h3>

            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              Are you looking for a pharmacy that cares about your health as much as you do? Well, you have come to the right place.
            </p>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              At <span className="font-semibold text-secondary">Marigold Pharmacy</span>, we&apos;re committed to the idea that quality pharmacy care means more than just prompt prescriptions. To us, quality care means that you get the prescriptions and medications you need, along with the care and attention you deserve.
            </p>
            <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
              Our pharmacy is dedicated to the well-being of your family and the well-being of the community. That&apos;s why we offer services such as <span className="font-medium text-foreground">immunizations</span>, <span className="font-medium text-foreground">medication therapy management</span>, multi-dose packaging, medication synchronization, important health screenings, and expert care. We strive to make it convenient for you and the people you care about to live a healthy life. Think of us as your community healthcare destination.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are located at the beautiful Traditional Downtown of Kissimmee. Come right in to meet with our friendly staff or call us at <span className="font-semibold text-foreground">407-750-5999</span> and speak with our knowledgeable staff. We can&apos;t wait to give you the support you deserve!
            </p>
          </div>

          <aside className="border border-secondary/10 bg-secondary/10 p-8 animate-rise-in min-h-[560px] flex flex-col">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="h-16 w-16 text-secondary flex items-center justify-center mb-3">
                <FileText className="h-14 w-14 stroke-[1.5]" />
              </div>
              <h4 className="text-4xl leading-[0.95] font-light text-primary tracking-tight">Insurance</h4>
              <h4 className="text-4xl leading-[0.95] font-light text-foreground tracking-tight">Accepted</h4>
            </div>

            <p className="text-foreground/85 leading-relaxed text-lg mb-6">
              We accept most insurance plans. If you do not have insurance, you may take advantage of our{' '}
              <Link href="/services/4-prescription-plan" className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary">
                $4 prescription plan
              </Link>
              . Please give us a call for more details.
            </p>

            <Link
              href="/insurance-accepted"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary/85 to-accent hover:from-primary hover:to-accent px-7 py-3 text-primary-foreground font-medium hover:opacity-95 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              Click Here &rsaquo;
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
