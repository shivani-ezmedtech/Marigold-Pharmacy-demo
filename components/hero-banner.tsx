import Image from 'next/image'

const heroSlides = [
  '/hero-ai-1.png',
  '/hero-ai-2.png',
  '/hero-ai-3.png',
]

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8">
      {heroSlides.map((src, idx) => (
        <div key={src} className={`hero-slide hero-slide-${idx + 1} absolute inset-0`}>
          <Image
            src={src}
            alt="Pharmacy hero background"
            fill
            priority={idx === 0}
            quality={100}
            sizes="100vw"
            className="object-cover object-[center_16%]"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-white/36 via-white/14 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 min-h-[620px] md:min-h-[700px]">
        <div className="max-w-[560px] pt-8 md:pt-12">
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground tracking-tight">
            The Marigold way to <br />
            <span className="font-bold text-secondary text-4xl md:text-6xl">Quality Care & Excellence</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
            We make it a priority to help your family achieve better health and wholesome lifestyle.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 max-w-[320px]">
            <button className="group bg-white p-3 aspect-square text-left border border-border shadow-sm hover:bg-white/95 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-md animate-rise-in">
              <div className="mb-2 relative h-10 w-10">
                <Image src="/icon-auto-rx.png" alt="Auto RX icon" fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="text-primary text-[21px] leading-[1.05]">Auto RX</div>
              <div className="text-foreground text-[18px] leading-[1.05]">Refills</div>
            </button>
            <button className="group bg-white p-3 aspect-square text-left border border-border shadow-sm hover:bg-white/95 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-md animate-rise-in">
              <div className="mb-2 relative h-10 w-10">
                <Image src="/icon-refill-prescription.png" alt="Refill prescription icon" fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="text-primary text-[21px] leading-[1.05]">Refill</div>
              <div className="text-foreground text-[18px] leading-[1.05]">Prescription</div>
            </button>
            <button className="group bg-white p-3 aspect-square text-left border border-border shadow-sm hover:bg-white/95 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-md animate-rise-in">
              <div className="mb-2 relative h-10 w-10">
                <Image src="/icon-free-delivery.png" alt="Free delivery icon" fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="text-primary text-[21px] leading-[1.05]">Free Delivery</div>
              <div className="text-foreground text-[18px] leading-[1.05]">Services</div>
            </button>
            <button className="group bg-white p-3 aspect-square text-left border border-border shadow-sm hover:bg-white/95 hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-md animate-rise-in">
              <div className="mb-2 relative h-10 w-10">
                <Image src="/icon-transfer-prescription.png" alt="Transfer prescription icon" fill className="object-contain transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="text-primary text-[21px] leading-[1.05]">Transfer</div>
              <div className="text-foreground text-[18px] leading-[1.05]">Prescription</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
