export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
    ...options,
  }).format(value)
}
