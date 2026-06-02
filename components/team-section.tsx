import Image from 'next/image'
import Link from 'next/link'

export default function TeamSection() {
  return (
    <section id="team" className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_9fr] overflow-hidden rounded-2xl border border-primary/15 shadow-md bg-white animate-rise-in">
          <div className="p-8 lg:p-10 flex flex-col justify-center bg-secondary/10 border-r border-primary/10 animate-rise-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Meet Our
              <span className="block text-primary">Pharmacist</span>
            </h2>
            <p className="mt-6 text-lg font-semibold text-foreground">Jon Borra</p>
            <p className="mt-2 text-muted-foreground">Pharmacist and owner of Marigold Pharmacy</p>
            <Link
              href="#contact"
              className="mt-8 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-primary/85 to-accent hover:from-primary hover:to-accent px-6 py-3 text-primary-foreground font-semibold hover:opacity-95 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>

          <div className="animate-slide-in-right -ml-px">
            <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] overflow-hidden bg-gradient-to-br from-white via-background to-primary/5 h-full">
              <div className="relative min-h-[320px] lg:min-h-[460px]">
              <Image
                src="/jon-borra-pharmacist.png"
                alt="Pharmacist in pharmacy"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-foreground animate-rise-in">
                  <span className="text-primary">Our Mission</span>
                  <span className="block">Statement</span>
                </h3>
                <p className="mt-6 text-muted-foreground text-lg leading-relaxed animate-rise-in [animation-delay:120ms]">
                  To provide quality care and excellent services to our patients and their loved ones,
                  helping every family in our community live healthier and happier lives.
                </p>
                <Link
                  href="#about"
                  className="mt-8 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-primary/85 to-accent hover:from-primary hover:to-accent px-7 py-3 text-primary-foreground font-semibold hover:opacity-95 transition-all duration-300 hover:-translate-y-0.5 animate-rise-in [animation-delay:240ms]"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
