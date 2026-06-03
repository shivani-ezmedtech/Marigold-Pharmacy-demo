export type ServiceLink = {
  href: string
  slug: string
  title: string
}

export const serviceLinks: ServiceLink[] = [
  { href: '/services/4-prescription-plan', slug: '4-prescription-plan', title: '$4 Prescription Plan' },
  { href: '/services/medication-synchronization', slug: 'medication-synchronization', title: 'Medication Synchronization' },
  { href: '/services/refill-prescription', slug: 'refill-prescription', title: 'Refill Prescription' },
  { href: '/services/cbd-oil-and-other-herbals', slug: 'cbd-oil-and-other-herbals', title: 'CBD Oil and Other Herbals' },
  { href: '/compounding', slug: 'compounding', title: 'Compounding' },
  { href: '/services/diabetes-specialty-care-center', slug: 'diabetes-specialty-care-center', title: 'Diabetes Specialty Care Center' },
  { href: '/services/durable-medical-equipment', slug: 'durable-medical-equipment', title: 'Durable Medical Equipment' },
  { href: '/services/health-screenings', slug: 'health-screenings', title: 'Health Screenings' },
  { href: '/services/free-delivery-services', slug: 'free-delivery-services', title: 'Free Delivery Services' },
  { href: '/free-consultation', slug: 'free-consultations', title: 'Free Consultations' },
  { href: '/services/generic-and-brand-name-drugs', slug: 'generic-and-brand-name-drugs', title: 'Generic and Brand Name Drugs' },
  { href: '/services/medication-therapy-management', slug: 'medication-therapy-management', title: 'Medication Therapy Management' },
  { href: '/services/multi-dose-packaging', slug: 'multi-dose-packaging', title: 'Multi-Dose Packaging' },
  { href: '/services/next-day-special-order', slug: 'next-day-special-order', title: 'Next-Day Special Order' },
  { href: '/services/otc-drugs-and-dollar-wise-items', slug: 'otc-drugs-and-dollar-wise-items', title: 'OTC Drugs and $1 Dollar (Dollar Wise) Items' },
  { href: '/price-matching-insurance-billing', slug: 'price-matching-insurance-billing', title: 'Price Matching / Insurance Billing' },
  { href: '/seasonal-vaccinations', slug: 'seasonal-vaccinations', title: 'Seasonal Vaccinations' },
  { href: '/services/transfer-prescriptions', slug: 'transfer-prescriptions', title: 'Transfer Prescriptions' },
  { href: '/services/veterinary-drugs', slug: 'veterinary-drugs', title: 'Veterinary Drugs' },
]

export const serviceLinkMap = new Map(serviceLinks.map((service) => [service.slug, service]))
