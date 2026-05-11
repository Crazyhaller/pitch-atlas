'use client'

import { useEffect, useRef, useState } from 'react'

import { useHeatmapData } from '@/hooks/useHeatmapData'

import AnimatedHeatOverlay from './AnimatedHeatOverlay'
import HeatmapLayer from './HeatmapLayer'

interface PitchCanvasProps {
  currentMinute?: number
  intensityFloor?: number
  showPaths?: boolean
  className?: string
}

export default function PitchCanvas({
  currentMinute = 90,
  intensityFloor = 0,
  showPaths = true,
  className,
}: PitchCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { points } = useHeatmapData()
  const [drawKey, setDrawKey] = useState(0)

  useEffect(() => {
    const handleResize = () => setDrawKey((value) => value + 1)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

    context.fillStyle = '#0D5F33'
    context.fillRect(0, 0, rect.width, rect.height)

    for (let stripe = 0; stripe < 8; stripe += 1) {
      context.fillStyle =
        stripe % 2 === 0 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.06)'
      context.fillRect(
        (rect.width / 8) * stripe,
        0,
        rect.width / 8,
        rect.height,
      )
    }

    context.strokeStyle = 'rgba(255,255,255,0.28)'
    context.lineWidth = 2
    context.strokeRect(18, 18, rect.width - 36, rect.height - 36)

    context.beginPath()
    context.moveTo(rect.width / 2, 18)
    context.lineTo(rect.width / 2, rect.height - 18)
    context.stroke()

    context.beginPath()
    context.arc(
      rect.width / 2,
      rect.height / 2,
      Math.min(rect.width, rect.height) * 0.13,
      0,
      Math.PI * 2,
    )
    context.stroke()

    const boxWidth = rect.width * 0.13
    const boxHeight = rect.height * 0.46
    context.strokeRect(18, (rect.height - boxHeight) / 2, boxWidth, boxHeight)
    context.strokeRect(
      rect.width - 18 - boxWidth,
      (rect.height - boxHeight) / 2,
      boxWidth,
      boxHeight,
    )
  }, [drawKey])

  return (
    <div
      className={`relative w-full aspect-[1.6/1] min-h-64 overflow-hidden rounded-[24px] border border-white/8 bg-[#06101b] sm:min-h-72 ${className ?? ''}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <AnimatedHeatOverlay />
      <HeatmapLayer
        key={drawKey}
        points={points}
        currentMinute={currentMinute}
        intensityFloor={intensityFloor}
        showPaths={showPaths}
      />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.05]" />
    </div>
  )
}
