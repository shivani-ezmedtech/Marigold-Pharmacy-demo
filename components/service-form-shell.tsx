import Image from 'next/image'
import type { ReactNode } from 'react'

type ServiceFormShellProps = {
  title: string
  breadcrumbLabel: string
  introTitle: string
  introParagraphs: string[]
  imageSrc: string
  imageAlt: string
  showIntroBar?: boolean
  children: ReactNode
}

export default function ServiceFormShell({
  title,
  breadcrumbLabel,
  introTitle,
  introParagraphs,
  imageSrc,
  imageAlt,
  showIntroBar = true,
  children,
}: ServiceFormShellProps) {
  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt={`${title} banner`}
          fill
          quality={100}
          className="object-cover object-[center_24%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/24 to-white/78" />
        <div className="absolute inset-x-0 bottom-0 bg-white/58 backdrop-blur-[2px]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 text-center">
            <h1 className="text-4xl sm:text-5xl font-light text-primary tracking-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="animate-rise-in">
          <p className="text-base sm:text-lg text-foreground/85">
            <span className="font-semibold text-secondary">Home</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span className="font-medium text-foreground/80">Services</span>
            <span className="mx-1 text-foreground/60">&gt;</span>
            <span>{breadcrumbLabel}</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10">
            {showIntroBar ? (
              <div className="inline-flex max-w-4xl items-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md">
                {introTitle}
              </div>
            ) : null}

            <div className={`${showIntroBar ? 'mt-8' : 'mt-0'} rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm`}>
              <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-6 items-start">
                <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                  <div className="relative min-h-[300px] sm:min-h-[380px]">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      quality={100}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                  </div>
                </div>

                <div>
                  {introParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={`${index === 0 ? 'mt-0' : 'mt-4'} text-base sm:text-lg leading-relaxed text-foreground/80`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
