export type ServiceDetailContent = {
  title: string
  breadcrumbTitle?: string
  barText?: string
  imageSrc: string
  imageAlt: string
  introParagraph?: string
  paragraphs: string[]
  listTitle?: string
  bullets?: string[]
  postCardParagraphs?: string[]
  leftColumnNote?: string
  leftColumnLinkText?: string
  leftColumnLinkHref?: string
  leftColumnNoteSuffix?: string
  contactCta?: {
    prefix: string
    linkText: string
    middleText?: string
    secondLinkText?: string
    secondHref?: string
    suffix?: string
    href: string
  }
  closingHighlight?: string
}

export const serviceDetailContent: Record<string, ServiceDetailContent> = {
  '4-prescription-plan': {
    title: '$4 Prescription Plan',
    barText: 'With our $4 Prescription Plan, you can now have a 30-day supply of your medications.',
    imageSrc: '/4-prescription-plan-detail.png',
    imageAlt: 'Money and medicine',
    paragraphs: [
      'Our prescription plan includes up to a 30-day supply of some covered generic drugs at commonly prescribed dosages for only $4. This service helps our customers adhere effectively to their medications and gives them access to a broad range of medications available as they can avail of their prescribed medicines at a lower cost, along with home delivery options.',
      'Find out whether or not your prescription drugs are available here at our pharmacy and choose the best prescription plan that will suit you.',
    ],
    contactCta: {
      prefix: '',
      linkText: 'Reach us',
      suffix: 'today for inquiries.',
      href: '/contact-us',
    },
  },
  'medication-synchronization': {
    title: 'Medication Synchronization',
    barText:
      'We can synchronize all your medications, those that you take on a regular basis, to be automatically refilled on the same day each month.',
    imageSrc: '/medication-synchronization-detail.png',
    imageAlt: 'Organized prescriptions and medications for synchronization',
    paragraphs: [
      'If you have multiple prescriptions to fill each month, that can mean multiple trips to the pharmacy. It can also mean missed doses if you run out of medication before you pick up the next refill.',
      'At Marigold Pharmacy, our medication synchronization service allows you to get all of your medications in one trip. Our pharmacist will synchronize your prescription refills to a day that works with your schedule. We will have everything ready on that day, then we will contact you to let you know you can stop by at your convenience.',
      'Medication synchronization is a simple way to keep on top of your medication and give yourself more time to do the things you want to do.',
    ],
  },
  'cbd-oil-and-other-herbals': {
    title: 'CBD Oil and Other Herbals',
    imageSrc: '/cbd-oil-and-other-herbals-detail.png',
    imageAlt: 'CBD oil and herbal supplements in pharmacy',
    introParagraph:
      'Marigold Pharmacy stocks CBD Oil and other herbal supplements to provide you with various options for your health and wellness.',
    paragraphs: [
      'Cannabidiol, also known as CBD, is used as a remedy for many common conditions, from boosting the appetite of patients to treating a wide range of mental health problems such as anxiety, addiction, and post-traumatic stress disorder (PTSD). At Marigold Pharmacy, we stock CBD Oil and other herbal supplements to provide you with various options to help you manage and improve your health.',
      'If you are interested in learning everything about what CBD Oil has to offer you, you can consult our pharmacist by calling us or dropping by our location. You can also send us a message online.',
    ],
  },
  'diabetes-specialty-care-center': {
    title: 'Diabetes Specialty Care Center',
    barText:
      'Our pharmacists provide on-going care and support to diabetes patients who require specialty care through disease and drug education.',
    imageSrc: '/diabetes-specialty-care-center-detail.png',
    imageAlt: 'Doctor consulting a patient about diabetes treatment',
    paragraphs: [
      'Understanding how diabetes can impact your life is vital to your overall health and well-being. The Diabetes Specialized Care Center at Marigold Pharmacy can help you discover new ways to monitor and manage your care so you can feel your best.',
      'Our pharmacist and staff take diabetes-specific courses so we can give you up-to-date information and practical tips for everyday living. We also offer free informational sessions at our pharmacy and throughout the community that cover such important topics as blood glucose testing, medication myths, and healthy eating.',
      'An ongoing condition requires ongoing conversation. Talk to us about your diabetes questions, concerns, and victories at the Diabetes Specialized Care Center.',
    ],
  },
  'durable-medical-equipment': {
    title: 'Durable Medical Equipment',
    barText:
      'Marigold Pharmacy stocks a wide variety of medical equipment which you need at home or in your healthcare facility.',
    imageSrc: '/durable-medical-equipment-detail.png',
    imageAlt: 'Durable medical equipment including wheelchair and walker',
    paragraphs: [
      'Our pharmacy offers an extensive variety of medical equipment and supplies. Our medical equipment may include, but is not limited to:',
    ],
    postCardParagraphs: [
      'If you are in need of any medical equipment or supplies or just have a question, ask a staff member today. Our staff will make it as easy as possible to get the equipment you need, including the billing. We will bill Medicare and most insurance companies.',
    ],
    bullets: [
      'Wheelchairs',
      'Assistive devices such as canes and walkers',
      'Bathroom equipment such as benches',
      'Orthopedic supplies such as back support belts and compression stockings',
      'Nebulizers',
    ],
  },
  'health-screenings': {
    title: 'Health Screenings',
    barText:
      'You can take advantage of our free health screenings that include blood glucose testing, blood pressure checks, annual wellness checks, and more.',
    imageSrc: '/health-screenings-detail.png',
    imageAlt: 'Doctor examining wrist of a female patient in medical office',
    paragraphs: [
      'Participating in regular health and wellness screenings is a proactive way to stay healthy. Marigold Pharmacy offers free health screenings, evaluations, and information sessions to help you understand how to maintain and enjoy a healthy, active lifestyle*.',
      'We also host regular clinics and information sessions about various health topics*. Stop by the pharmacy or follow us on social media to find out where and when our next meetup will be. Make Marigold Pharmacy your healthcare destination for these screenings and more.',
      '*At participating Marigold Pharmacy pharmacies',
    ],
  },
  'free-delivery-services': {
    title: 'Free Delivery Services',
    breadcrumbTitle: 'Free Delivery Services',
    imageSrc: '/free-delivery-services-detail.png',
    imageAlt: 'Delivery van driving through a city in daytime',
    paragraphs: [
      'For patients who need to refill their medications but may not have the means to travel, Marigold Pharmacy is proud to offer delivery services for your convenience. CALL TO INQUIRE IF YOUR PRESCRIPTIONS QUALIFY FOR FREE DELIVERY.',
      'You cannot come to our pharmacy? Then, allow us to deliver your prescriptions or other pharmacy products you need right to your doorstep.',
      'To get started, please complete the form below.',
    ],
  },
  'generic-and-brand-name-drugs': {
    title: 'Generic and Brand Name Drugs',
    barText:
      'Whether you need OTC drugs or prescriptions, we have a variety of generic and brand-name medications you can choose from.',
    imageSrc: '/generic-and-brand-name-drugs-detail.png',
    imageAlt: 'Generic prescription medicine on white',
    paragraphs: [
      'Medications usually have a brand name and a generic version. The only difference between the two is that generic drugs are more affordable than those brand-name ones. Generics have the same ingredients and are as effective as their brand-name counterparts. They cost 20 percent to 70 percent less, according to estimates from the FDA.',
      'So, whether you are shopping for OTC drugs or filling a prescription, our pharmacy has a variety of generic and brand-name drugs you can choose from. You can also ask our pharmacist to know if there is a generic medication available for your prescription, or you can have your doctor write a prescription allowing a generic drug product when it is appropriate.',
    ],
  },
  'medication-therapy-management': {
    title: 'Medication Therapy Management',
    barText:
      'We have pharmacists trained to provide you with MTM services who can work closely with you and your doctor to address issues concerning your drug therapy.',
    imageSrc: '/medication-therapy-management-detail.png',
    imageAlt: 'Pill bottles and twice daily medication box',
    paragraphs: [
      'Getting the right medication at the right time is critical to your health, whether you are recovering from an accident or managing an ongoing condition. Let your Marigold Pharmacy pharmacist help you make sure your medications are working their best for you.',
      'If you take multiple medications, ask us about a comprehensive medication review. Many health care plans, including some Medicare and Medicaid plans, cover medication review costs. During this review, we will discuss your current medication schedule, look for concerns such as therapy duplications or conflicts, and answer your questions. We will also look for cost-saving alternatives to your current regimen. You will leave our pharmacy with an updated medication list and a personalized action plan so you can achieve the best results.',
    ],
    postCardParagraphs: [
      'This service is a good option for people who take multiple medications and people who have chronic conditions, such as diabetes, asthma, and high blood pressure. Let us help you get the tools you need to live a healthier life.',
    ],
  },
  'multi-dose-packaging': {
    title: 'Multi-Dose Packaging',
    breadcrumbTitle: 'Multi-Dose Packaging',
    barText:
      'Our pharmacy offers multi-dose packaging for our customers to make remembering to take their medications easier than ever.',
    imageSrc: '/multi-dose-packaging-detail.png',
    imageAlt: 'Colorful capsule pills in blister pack arranged in a pattern',
    paragraphs: [
      'If you take multiple medications throughout the day, you know how much effort goes into keeping your pills and your schedule organized.',
      'Let Marigold Pharmacy organize your medicine for you with multi-dose packaging. When you enroll in this service, our pharmacist places the pills you need for each dose into individual packets.',
      'Instead of picking up different bottles of pills from the pharmacy, you will go home with convenient multi-dose packets. It is a safer, easier way for you to keep on top of your medication.',
      'Stop by our pharmacy to learn how multi-dose packaging can simplify your life.',
    ],
  },
  'next-day-special-order': {
    title: 'Next-Day Special Order',
    breadcrumbTitle: 'Next-Day Special Order',
    barText:
      'We can have the product or prescription you request available the next day for your convenience.',
    imageSrc: '/next-day-special-order-detail.png',
    imageAlt: 'Beautiful young female pharmacist suggesting a medication to a client',
    paragraphs: [
      'Are you looking for hard-to-find medications? Is there a medical equipment, product, or supply you need but cannot find anywhere else? You can request special orders from our pharmacy for medications or products which are not usually available in the market.',
      'We value you as our customer. For your special orders, we can have the product or prescription you request available the next day. You can either choose to pick it up or have our staff deliver it to your home or office.',
    ],
    contactCta: {
      prefix: 'For further questions about this service, please do not hesitate to',
      linkText: 'reach us',
      middleText: 'by phone or you may also',
      secondLinkText: 'send us a message',
      secondHref: '/contact-us',
      suffix: 'online.',
      href: '/contact-us',
    },
  },
  'otc-drugs-and-dollar-wise-items': {
    title: 'OTC Drugs and $1 Dollar (Dollar Wise) Items',
    breadcrumbTitle: 'OTC Drugs and $1 Dollar (Dollar Wise) Items',
    barText:
      'Choose from our wide array of one dollar items here at Marigold Pharmacy.',
    imageSrc: '/otc-drugs-and-dollar-wise-items-detail.png',
    imageAlt: 'Smiling pharmacist showing products to a multiethnic couple at checkout',
    paragraphs: [
      'At Marigold Pharmacy, we make sure to provide you with a wide selection of affordable product options so that you will not only have access to a variety of pharmacy items, but you will also get the most bang for your buck on your purchases from our store.',
      'What are you waiting for? Take advantage of our various one dollar items here at Marigold Pharmacy now. Whether it is cleaning supplies, household items, or personal care products, you can have it at a price that cannot get much lower. Drop by our location to see our whole selection of one dollar products.',
    ],
  },
  'price-matching-insurance-billing': {
    title: 'Price Matching / Insurance billing',
    breadcrumbTitle: 'Price Matching / Insurance billing',
    barText: 'We offer price matching and insurance billing for your prescriptions.',
    imageSrc: '/price-matching-detail.png',
    imageAlt: 'Confident male pharmacist holding clipboard while female colleague arranges stock',
    paragraphs: [
      'Our pharmacy allows customers to have the ability to set up a charge account for their insurance billing. If you have an insurance plan and are looking to save big on your prescriptions, you can visit us today to discuss your coverage. We accept most health and prescription insurance plans, including Medicaid and Medicare.',
      'However, when you are searching for a much more affordable option on your prescription plan but do not have insurance, you can take advantage of our price matching service. We guarantee to offer the lowest cost by matching or beating every published price.',
    ],
    leftColumnNote:
      "For further questions about our price matching and insurance billing services, please don't hesitate to",
    leftColumnLinkText: 'reach us',
    leftColumnLinkHref: '/contact-us',
    leftColumnNoteSuffix: 'at your convenience.',
  },
  'veterinary-drugs': {
    title: 'Veterinary Drugs',
    breadcrumbTitle: 'Veterinary Drugs',
    barText: 'We have a wide selection of medications for your pets or for your veterinary practice.',
    imageSrc: '/veterinary-drugs-detail.png',
    imageAlt: 'Veterinarian giving medication to a cat',
    paragraphs: [
      "One of Marigold Pharmacy's goals is to meet your veterinary needs. We have a pharmacist on staff who has knowledge in the pharmacology of animals and offers ways of treating both domestic and exotic animals through the pet medicines we provide.",
      'So, whether you want to maintain the health of your pets or treat their health conditions, you can count on us to provide you with what you need all in one store.',
      'Drop by our pharmacy today and let our staff walk you through our wide selection of medications for your pets or for your veterinary practice. Our pharmacist can also compound medications, fill prescriptions, and manage drug therapies for animals.',
    ],
  },
}
