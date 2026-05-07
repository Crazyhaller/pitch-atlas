export function generateElevationCurve(values: number[]) {
  return values.map((value, index) => ({
    x: index,
    y: Math.sin(index / 2) * 12 + value,
  }))
}
