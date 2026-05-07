export function scaleCoordinatesToPitch(
  x: number,
  y: number,
  width: number,
  height: number,
) {
  return {
    scaledX: (x / 100) * width,
    scaledY: (y / 100) * height,
  }
}
