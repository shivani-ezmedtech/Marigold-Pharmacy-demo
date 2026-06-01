const pharmacists = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Clinical Pharmacist',
    credentials: 'RPh, PharmD',
    bio: 'Expert in medication therapy management with 15+ years of experience'
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Lead Pharmacist',
    credentials: 'RPh, PharmD',
    bio: 'Specializes in compounding and immunizations'
  },
  {
    name: 'Dr. Maria Rodriguez',
    title: 'Community Pharmacist',
    credentials: 'RPh, PharmD',
    bio: 'Dedicated to patient education and wellness programs'
  }
]

export default function TeamSection() {
  return (
    <section id="team" className="py-12 px-1 sm:px-2 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Meet Our Pharmacists
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pharmacists.map((person, idx) => (
            <div key={idx} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{person.name}</h3>
              <p className="text-primary font-semibold mb-1">{person.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{person.credentials}</p>
              <p className="text-muted-foreground">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
