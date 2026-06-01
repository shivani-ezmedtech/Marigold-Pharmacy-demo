import Image from 'next/image'

const heroSlides = [
  '/pharmacy-family-hero.png',
  '/pharmacy-consultation-marigold.png',
  '/pharmacy-services.png',
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
            quality={95}
            sizes="100vw"
            className="object-cover brightness-[1.14] contrast-[1.08] saturate-[1.08]"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-white/62 via-white/40 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 min-h-[620px] md:min-h-[700px]">
        <div className="max-w-[560px] pt-8 md:pt-12">
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground tracking-tight">
            The Marigold way to <br />
            <span className="font-bold text-secondary text-4xl md:text-6xl">Quality Care & Excellence</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/80 max-w-md">
            We make it a priority to help your family achieve better health and wholesome lifestyle.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-1 max-w-[520px]">
            <button className="bg-[#efefef]/95 p-6 min-h-[170px] text-left border border-white/70 hover:bg-white transition">
              <div className="text-4xl mb-3">💊</div>
              <div className="text-primary text-[24px] leading-[1]">Auto RX</div>
              <div className="text-foreground text-[20px] leading-[1]">Refills</div>
            </button>
            <button className="bg-[#efefef]/95 p-6 min-h-[170px] text-left border border-white/70 hover:bg-white transition">
              <div className="text-4xl mb-3">💉</div>
              <div className="text-primary text-[24px] leading-[1]">Refill</div>
              <div className="text-foreground text-[20px] leading-[1]">Prescription</div>
            </button>
            <button className="bg-[#efefef]/95 p-6 min-h-[170px] text-left border border-white/70 hover:bg-white transition">
              <div className="text-4xl mb-3">🧰</div>
              <div className="text-primary text-[24px] leading-[1]">Free Delivery</div>
              <div className="text-foreground text-[20px] leading-[1]">Services</div>
            </button>
            <button className="bg-[#efefef]/95 p-6 min-h-[170px] text-left border border-white/70 hover:bg-white transition">
              <div className="text-4xl mb-3">📦</div>
              <div className="text-primary text-[24px] leading-[1]">Transfer</div>
              <div className="text-foreground text-[20px] leading-[1]">Prescription</div>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
