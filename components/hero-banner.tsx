import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
          Stay Healthy, Be Well with Marigold Pharmacy
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <button className="bg-white border-2 border-primary rounded-lg p-4 hover:shadow-md transition text-center">
            <div className="text-primary font-bold mb-2">Auto RX Refills</div>
            <p className="text-sm text-muted-foreground">Set and forget automatic refills</p>
          </button>
          
          <button className="bg-white border-2 border-primary rounded-lg p-4 hover:shadow-md transition text-center">
            <div className="text-primary font-bold mb-2">Refill Prescription</div>
            <p className="text-sm text-muted-foreground">Manage your prescriptions easily</p>
          </button>
          
          <button className="bg-white border-2 border-primary rounded-lg p-4 hover:shadow-md transition text-center">
            <div className="text-primary font-bold mb-2">Free Delivery</div>
            <p className="text-sm text-muted-foreground">Convenient medication delivery</p>
          </button>
          
          <button className="bg-white border-2 border-primary rounded-lg p-4 hover:shadow-md transition text-center">
            <div className="text-primary font-bold mb-2">Transfer RX</div>
            <p className="text-sm text-muted-foreground">Transfer from other pharmacies</p>
          </button>
        </div>
      </div>
    </section>
  )
}
