import Image from 'next/image'
import Link from 'next/link'
import { ServiceDetailContent } from '@/lib/service-detail-content'

function CapsuleIcon() {
  return (
    <span className="flex h-7 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-primary/20 shadow-sm">
      <span className="relative h-3.5 w-7 overflow-hidden rounded-full border border-primary/20">
        <span className="absolute inset-y-0 left-0 w-1/2 bg-secondary" />
        <span className="absolute inset-y-0 right-0 w-1/2 bg-primary/85" />
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80" />
      </span>
    </span>
  )
}

export default function ServiceDetailSection({ content }: { content: ServiceDetailContent }) {
  const breadcrumbTitle = content.breadcrumbTitle ?? content.title

  return (
    <section className="bg-background">
      <div className="relative min-h-[300px] sm:min-h-[380px] overflow-hidden">
        <Image
          src="/free-consultation-banner.png"
          alt={`${content.title} banner`}
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
              {content.title}
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
            <span>{breadcrumbTitle}</span>
          </p>
          <div className="mt-4 h-px bg-secondary/55" />

          <div className="mt-10">
            {content.barText ? (
              <div className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary px-6 py-3 text-base sm:text-lg font-medium text-white shadow-md text-center">
                <span className="max-w-full text-center">{content.barText}</span>
              </div>
            ) : null}

            {content.introParagraph ? (
              <p className={`${content.barText ? 'mt-8' : 'mt-2'} max-w-5xl text-base sm:text-lg leading-relaxed text-foreground/80`}>
                {content.introParagraph}
              </p>
            ) : null}

            <div className="mt-8 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-6 items-start">
                <div>
                  <div className="overflow-hidden rounded-[1.5rem] border border-primary/15 bg-white shadow-xl">
                    <div className="relative min-h-[300px] sm:min-h-[380px]">
                      <Image
                        src={content.imageSrc}
                        alt={content.imageAlt}
                        fill
                        quality={100}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 36vw"
                      />
                    </div>
                  </div>

                  {content.leftColumnNote ? (
                    <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80">
                      {content.leftColumnNote}
                    </p>
                  ) : null}
                </div>

                <div>
                  {content.paragraphs.map((paragraph, index) => {
                    if (content.bullets && index === 1) {
                      return null
                    }

                    const isFootnote = paragraph.startsWith('*')
                    return (
                      <p
                        key={paragraph}
                        className={`${index === 0 ? 'mt-0' : 'mt-4'} ${
                          isFootnote ? 'text-sm italic text-muted-foreground' : 'text-base sm:text-lg leading-relaxed text-foreground/80'
                        }`}
                      >
                        {paragraph}
                      </p>
                    )
                  })}

                  {content.bullets ? (
                    <div className="mt-6 rounded-2xl bg-secondary/8 p-5 ring-1 ring-secondary/10">
                      <div className="grid gap-4">
                        {content.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-4">
                            <CapsuleIcon />
                            <p className="text-sm sm:text-base leading-relaxed text-foreground/85">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {content.bullets && content.paragraphs[1] ? (
                    <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/80">
                      {content.paragraphs[1]}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            {content.postCardParagraphs?.length ? (
              <div className="mt-8 grid gap-4">
                {content.postCardParagraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-5xl text-base sm:text-lg leading-relaxed text-foreground/80">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {content.contactCta ? (
              <p className="mt-6 max-w-5xl text-base sm:text-lg leading-relaxed text-foreground/80">
                {content.contactCta.prefix ? `${content.contactCta.prefix} ` : ''}
                <Link
                  href={content.contactCta.href}
                  className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                >
                  {content.contactCta.linkText}
                </Link>
                {content.contactCta.suffix ? ` ${content.contactCta.suffix}` : ''}
              </p>
            ) : null}

            {content.closingHighlight ? (
              <p className="mt-8 text-xl sm:text-2xl font-semibold text-primary">
                {content.closingHighlight}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
