export function getHeatmapGradient(intensity: number): string {
  if (intensity >= 80) {
    return '#ff6b3d'
  }

  if (intensity >= 50) {
    return '#d9ff3f'
  }

  return '#38ff9c'
}
