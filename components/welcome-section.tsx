import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="py-12 px-1 sm:px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.45fr_0.9fr] gap-8 items-start">
          <div className="relative min-h-[520px] rounded-2xl overflow-hidden border border-border/40 bg-[#f5f5f5] shadow-sm">
            <Image
              src="/pharmacy-team.png"
              alt="Two pharmacy professionals discussing care details"
              fill
              quality={100}
              className="object-contain object-bottom"
            />
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

          <aside className="rounded-2xl border border-primary/20 bg-gradient-to-b from-white via-primary/10 to-accent/15 p-6 shadow-md lg:sticky lg:top-36">
            <div className="flex items-start gap-3 mb-4">
              <div className="h-11 w-11 rounded-full bg-primary/15 text-primary flex items-center justify-center shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground leading-tight">Insurance Accepted</h4>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              We accept most insurance plans. If you do not have insurance, you may take advantage of our $4 prescription plan. Please give us a call for more details.
            </p>

            <button className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-emerald-500 px-6 py-2.5 text-white font-medium hover:opacity-95 transition shadow-sm">
              Click Here &rsaquo;
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}
