export function debounce<T extends (...args: never[]) => void>(
  callback: T,
  delay = 300,
) {
  let timeoutId: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
