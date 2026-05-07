export function formatDate(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  try {
    const parsedDate = typeof date === 'string' ? new Date(date) : date

    if (Number.isNaN(parsedDate.getTime())) {
      return 'Invalid date'
    }

    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      ...options,
    }).format(parsedDate)
  } catch {
    return 'Invalid date'
  }
}
