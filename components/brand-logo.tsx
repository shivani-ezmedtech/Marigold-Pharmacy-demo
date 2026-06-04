import Image from 'next/image'
import Link from 'next/link'

type BrandLogoProps = {
  className?: string
  href?: string
  priority?: boolean
  variant?: 'header' | 'footer'
}

const sizeMap = {
  header: {
    wrapper: 'h-16 w-[260px] sm:h-20 sm:w-[320px] lg:h-[112px] lg:w-[500px]',
    sizes: '(max-width: 640px) 260px, (max-width: 1024px) 320px, 500px',
  },
  footer: {
    wrapper: 'h-24 w-[280px] sm:h-28 sm:w-[360px] lg:h-[130px] lg:w-[520px]',
    sizes: '(max-width: 640px) 280px, (max-width: 1024px) 360px, 520px',
  },
} as const

export default function BrandLogo({
  className = '',
  href = '/',
  priority = false,
  variant = 'header',
}: BrandLogoProps) {
  const config = sizeMap[variant]

  return (
    <Link href={href} className={className} aria-label="Marigold Pharmacy home">
      <div className={`relative ${config.wrapper}`}>
        <Image
          src="/image-Photoroom.png"
          alt="Marigold Pharmacy logo"
          fill
          priority={priority}
          className="object-contain object-left brightness-[1.22] contrast-[1.12] saturate-[1.08] drop-shadow-[0_4px_14px_rgba(8,73,67,0.2)]"
          sizes={config.sizes}
        />
      </div>
    </Link>
  )
}
