const services = [
  {
    title: 'Free Consultation',
    description: 'Get personalized advice from our experienced pharmacists about your medications and health concerns.',
    icon: '💬'
  },
  {
    title: 'Compounding Services',
    description: 'Custom medication formulations tailored to your specific medical needs and preferences.',
    icon: '⚗️'
  },
  {
    title: 'Seasonal Vaccinations',
    description: 'Professional immunization services including flu shots and other recommended vaccines.',
    icon: '💉'
  },
  {
    title: 'Price Matching',
    description: 'We match competitor prices to ensure you get the best value on your medications.',
    icon: '💰'
  },
  {
    title: 'Medication Synchronization',
    description: 'Align your prescription refills to make monthly medication management simpler.',
    icon: '📅'
  },
  {
    title: 'Health Screenings',
    description: 'Preventive health screenings including blood pressure monitoring and more.',
    icon: '🏥'
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 px-1 sm:px-2 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-4">
          Here&apos;s What We Can Do For You
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Marigold Pharmacy offers a wide range of services designed to help you and your loved ones get quality pharmacy care for an enhanced quality of life.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}
