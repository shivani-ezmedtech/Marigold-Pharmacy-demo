import type { ReactNode } from 'react'

export function RequiredStar() {
  return <span className="ml-1 text-red-500" aria-hidden="true">*</span>
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="text-sm text-red-600" role="alert">
      {message}
    </p>
  )
}

export function FieldLabel({
  children,
  required,
}: {
  children: ReactNode
  required?: boolean
}) {
  return (
    <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
      {children}
      {required ? <RequiredStar /> : null}
    </span>
  )
}
