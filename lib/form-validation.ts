export type FieldErrors<T extends string = string> = Partial<Record<T, string>>

const NAME_PATTERN = /^[A-Za-z][A-Za-z\s'.-]*$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_ALLOWED_PATTERN = /^[\d\s()+-]+$/

export function validateRequired(value: string, label: string) {
  if (!value.trim()) {
    return `${label} is required.`
  }

  return ''
}

export function validateName(value: string, label = 'Name') {
  const trimmed = value.trim()

  if (!trimmed) {
    return `${label} is required.`
  }

  if (trimmed.length < 2) {
    return `${label} must be at least 2 characters.`
  }

  if (trimmed.length > 30) {
    return `${label} must be 30 characters or fewer.`
  }

  if (!NAME_PATTERN.test(trimmed)) {
    return `${label} contains invalid characters.`
  }

  return ''
}

export function validateEmail(value: string) {
  const trimmed = value.trim()

  if (!trimmed) {
    return 'Email address is required.'
  }

  if (!EMAIL_PATTERN.test(trimmed)) {
    return 'Enter a valid email address.'
  }

  return ''
}

export function validatePhone(value: string, label = 'Phone number') {
  const trimmed = value.trim()

  if (!trimmed) {
    return `${label} is required.`
  }

  if (!PHONE_ALLOWED_PATTERN.test(trimmed)) {
    return 'Enter a valid phone number.'
  }

  const digits = trimmed.replace(/\D/g, '')

  if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith('1'))) {
    return 'Enter a valid phone number.'
  }

  return ''
}

export function validateMessage(value: string, label = 'Message') {
  if (!value.trim()) {
    return `${label} cannot be empty.`
  }

  return ''
}

export function fieldClass(hasError: boolean) {
  return `w-full border bg-white px-4 py-4 text-base outline-none transition focus:ring-2 ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
      : 'border-border focus:border-primary focus:ring-primary/20'
  }`
}

export function roundedFieldClass(hasError: boolean) {
  return `w-full rounded-full border bg-white px-6 py-3 outline-none transition focus:ring-2 ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
      : 'border-border focus:border-primary focus:ring-primary/60'
  }`
}
