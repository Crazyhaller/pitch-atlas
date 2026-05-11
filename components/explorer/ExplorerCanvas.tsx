'use client'

import { useEffect, useRef } from 'react'

import { MatchEvent } from '@/types/match'
import { PlayerMovementPoint } from '@/types/player'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCurrentTime, setSelectedEvent } from '@/store/slices/explorerSlice'

import HeatmapLayer from '@/components/heatmap/HeatmapLayer'

import EventPathRenderer from './EventPathRenderer'

interface ExplorerCanvasProps {
  events: MatchEvent[]
  movement: PlayerMovementPoint[]
}

export default function ExplorerCanvas({
  events,
  movement,
}: ExplorerCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dispatch = useAppDispatch()
  const currentTime = useAppSelector((state) => state.explorer.currentTime)
  const playing = useAppSelector((state) => state.explorer.playing)
  const speed = useAppSelector((state) => state.explorer.speed)

  useEffect(() => {
    if (!playing) {
      return
    }

    const interval = window.setInterval(() => {
      dispatch(setCurrentTime(currentTime >= 90 ? 0 : currentTime + speed))
    }, 700)

    return () => window.clearInterval(interval)
  }, [currentTime, dispatch, playing, speed])

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

    context.fillStyle = '#0b5f35'
    context.fillRect(0, 0, rect.width, rect.height)

    for (let stripe = 0; stripe < 10; stripe += 1) {
      context.fillStyle =
        stripe % 2 === 0 ? 'rgba(255,255,255,0.035)' : 'rgba(0,0,0,0.065)'
      context.fillRect(
        (rect.width / 10) * stripe,
        0,
        rect.width / 10,
        rect.height,
      )
    }

    context.strokeStyle = 'rgba(255,255,255,0.28)'
    context.lineWidth = 2
    context.strokeRect(24, 24, rect.width - 48, rect.height - 48)
    context.beginPath()
    context.moveTo(rect.width / 2, 24)
    context.lineTo(rect.width / 2, rect.height - 24)
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
  }, [])

  return (
    <div className="relative aspect-[1.55/1] min-h-72 overflow-hidden rounded-[24px] border border-white/8 bg-[#06101b] sm:min-h-80">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <HeatmapLayer
        points={movement}
        currentMinute={currentTime}
        intensityFloor={35}
        showPaths
      />
      <EventPathRenderer
        events={events}
        currentMinute={currentTime}
        onSelect={(event) => dispatch(setSelectedEvent(event))}
      />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-[0.05]" />
    </div>
  )
}
