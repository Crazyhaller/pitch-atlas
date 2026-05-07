export function throttle<T extends (...args: never[]) => void>(
  callback: T,
  delay = 250,
) {
  let shouldWait = false

  return (...args: Parameters<T>) => {
    if (shouldWait) {
      return
    }

    callback(...args)

    shouldWait = true

    setTimeout(() => {
      shouldWait = false
    }, delay)
  }
}
