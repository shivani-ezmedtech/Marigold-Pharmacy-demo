export default function WelcomeSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Welcome to Marigold Pharmacy
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Are you looking for a pharmacy that cares about your health as much as you do? Well, you have come to the right place.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Marigold Pharmacy, we&apos;re committed to the idea that quality pharmacy care means more than just prompt prescriptions. To us, quality care means that you get the prescriptions and medications you need, along with the care and attention you deserve.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our pharmacy is dedicated to the well-being of your family and the well-being of the community. That&apos;s why we offer services such as immunizations, medication therapy management, multi-dose packaging, medication synchronization, important health screenings, and expert care.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">+</div>
                <span className="text-foreground">Professional pharmacist consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">+</div>
                <span className="text-foreground">Free medication delivery service</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">+</div>
                <span className="text-foreground">Immunizations and health screenings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">+</div>
                <span className="text-foreground">Medication therapy management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">+</div>
                <span className="text-foreground">Multi-dose packaging solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
