import { CircleDollarSign, FlaskConical, MessageCircleHeart, PlusCircle, Syringe } from 'lucide-react'

const services = [
  { highlight: 'Free', rest: 'Consultation', Icon: MessageCircleHeart, tone: 'text-secondary' },
  { highlight: 'Compounding', rest: '(Non-Sterile)', Icon: FlaskConical, tone: 'text-primary' },
  { highlight: 'Seasonal', rest: 'Vaccinations', Icon: Syringe, tone: 'text-secondary' },
  { highlight: 'Price', rest: 'Matching', Icon: CircleDollarSign, tone: 'text-primary' },
  { highlight: 'View More', rest: 'Services', Icon: PlusCircle, tone: 'text-secondary' },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-14 px-1 sm:px-2 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-4">
          Here&apos;s What We Can Do For You
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg max-w-4xl mx-auto">
          Marigold Pharmacy offers a wide range of services designed to help you and your loved ones get quality pharmacy care for an enhanced quality of life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl p-5 shadow-sm border border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px] flex flex-col bg-gradient-to-b from-primary/30 via-accent/25 to-secondary/30 animate-rise-in"
            >
              <div className="mb-3">
                <service.Icon className={`h-12 w-12 ${service.tone}`} strokeWidth={2.1} />
              </div>

              <h3 className="mb-3 leading-tight">
                <span className="block text-[22px] font-semibold text-secondary">{service.highlight}</span>
                <span className="block text-[20px] font-medium text-foreground">{service.rest}</span>
              </h3>

              <button className="mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary/85 to-accent hover:from-primary hover:to-accent px-3.5 py-1.5 text-primary-foreground text-xs font-medium hover:opacity-95 transition-all duration-300 hover:-translate-y-0.5 shadow-sm w-fit">
                Click Here &rsaquo;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
