'use client'

import { useEffect, useRef } from 'react'

import { PlayerMovementPoint } from '@/types/player'

import { getHeatmapGradient } from '@/lib/visualization/getHeatmapGradient'
import { scaleCoordinatesToPitch } from '@/lib/visualization/scaleCoordinatesToPitch'

interface HeatmapLayerProps {
  points: PlayerMovementPoint[]
  currentMinute?: number
  intensityFloor?: number
  showPaths?: boolean
}

export default function HeatmapLayer({
  points,
  currentMinute = 90,
  intensityFloor = 0,
  showPaths = true,
}: HeatmapLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1

    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    context.clearRect(0, 0, rect.width, rect.height)

    const visiblePoints = points.filter(
      (point) =>
        point.minute <= currentMinute && point.intensity >= intensityFloor,
    )

    if (showPaths && visiblePoints.length > 1) {
      context.beginPath()
      visiblePoints.forEach((point, index) => {
        const { scaledX, scaledY } = scaleCoordinatesToPitch(
          point.x,
          point.y,
          rect.width,
          rect.height,
        )

        if (index === 0) {
          context.moveTo(scaledX, scaledY)
        } else {
          context.lineTo(scaledX, scaledY)
        }
      })
      context.strokeStyle = 'rgba(255,255,255,0.22)'
      context.lineWidth = 2
      context.setLineDash([10, 10])
      context.stroke()
      context.setLineDash([])
    }

    visiblePoints.forEach((point) => {
      const { scaledX, scaledY } = scaleCoordinatesToPitch(
        point.x,
        point.y,
        rect.width,
        rect.height,
      )
      const radius = 22 + point.intensity * 0.42
      const gradient = context.createRadialGradient(
        scaledX,
        scaledY,
        0,
        scaledX,
        scaledY,
        radius,
      )

      gradient.addColorStop(0, `${getHeatmapGradient(point.intensity)}cc`)
      gradient.addColorStop(0.45, `${getHeatmapGradient(point.intensity)}55`)
      gradient.addColorStop(1, 'rgba(56,255,156,0)')

      context.fillStyle = gradient
      context.beginPath()
      context.arc(scaledX, scaledY, radius, 0, Math.PI * 2)
      context.fill()
    })
  }, [points, currentMinute, intensityFloor, showPaths])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
}
