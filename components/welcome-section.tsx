import Image from 'next/image'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="relative z-10 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1fr_0.46fr] lg:items-start">
          <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#f7f7f4] lg:min-h-[760px]">
            <Image
              src="/welcome-ai-natural-left.png"
              alt="Staff looking at a record"
              fill
              quality={100}
              className="object-cover object-center"
            />
          </div>

          <div className="px-1 lg:px-0">
            <p className="text-[26px] font-light leading-none text-foreground/80 md:text-[32px]">
              Stay Healthy, Be Well with
            </p>
            <h2 className="mt-1 text-[54px] font-light leading-[0.92] text-primary md:text-[76px]">
              Marigold
            </h2>
            <h3 className="text-[42px] font-light leading-none text-secondary md:text-[56px]">
              Pharmacy
            </h3>

            <div className="mt-5 h-1 w-14 rounded-full bg-border" />

            <div className="mt-6 space-y-6 text-[18px] leading-[1.6] text-foreground/78 md:text-[20px]">
              <p>
                Are you looking for a pharmacy that cares about your health as much as you do? Well, you have come to the right place.
              </p>

              <p>
                At <span className="font-semibold text-primary">Marigold Pharmacy</span>, we&apos;re committed to the idea that quality pharmacy care means more than just prompt prescriptions. To us, quality care means that you get the prescriptions and medications you need, along with the care and attention you deserve.
              </p>

              <p>
                Our pharmacy is dedicated to the well-being of your family and the well-being of the community. That&apos;s why we offer services such as immunizations, medication therapy management, multi-dose packaging, medication synchronization, important health screenings, and expert care. We strive to make it convenient for you and the people you care about to live a healthy life. Think of us as your community healthcare destination.
              </p>
            </div>
          </div>

          <aside className="rounded-[1.25rem] border border-primary/10 bg-[#f8f3e8] px-6 py-8 text-center lg:mt-2">
            <div className="mx-auto flex h-24 w-24 items-center justify-center text-secondary/75">
              <FileText className="h-20 w-20 stroke-[1.5]" />
            </div>

            <h4 className="mt-4 text-[30px] font-light leading-[0.95] text-primary md:text-[38px]">
              INSURANCE
            </h4>
            <h5 className="text-[28px] font-light leading-[0.95] text-foreground md:text-[36px]">
              ACCEPTED
            </h5>

            <p className="mt-6 text-[18px] leading-[1.65] text-foreground/78">
              We accept most insurance plans. If you do not have insurance, you may take advantage of our{' '}
              <Link
                href="/services/4-prescription-plan"
                className="text-secondary underline decoration-secondary/35 underline-offset-4"
              >
                $4 prescription plan
              </Link>
              . Please give us a call for more details.
            </p>

            <Link
              href="/insurance-accepted"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-8 py-3 text-lg font-medium text-white transition hover:opacity-95"
            >
              CLICK HERE &#8250;
            </Link>
          </aside>
        </div>
      </div>
    </section>
  )
}
