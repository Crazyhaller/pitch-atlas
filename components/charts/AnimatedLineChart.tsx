'use client'

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { THEME } from '@/constants/theme'
import { generateElevationCurve } from '@/lib/visualization/generateElevationCurve'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
)

export interface LineChartPoint {
  label: string
  value: number
}

interface AnimatedLineChartProps {
  points: LineChartPoint[]
  label?: string
  color?: string
  heightClassName?: string
}

export default function AnimatedLineChart({
  points,
  label = 'Momentum',
  color = THEME.colors.primary,
  heightClassName = 'h-72',
}: AnimatedLineChartProps) {
  const elevated = generateElevationCurve(points.map((point) => point.value))

  const data: ChartData<'line'> = {
    labels: points.map((point) => point.label),
    datasets: [
      {
        label,
        data: elevated.map((point) => Number(point.y.toFixed(1))),
        borderColor: color,
        backgroundColor: 'rgba(56,255,156,0.14)',
        borderWidth: 3,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        tension: 0.45,
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1200,
      easing: 'easeOutQuart',
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(8,17,31,0.96)',
        borderColor: 'rgba(56,255,156,0.22)',
        borderWidth: 1,
        displayColors: false,
        titleColor: '#ffffff',
        bodyColor: '#9FFFCF',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,0.04)',
        },
        ticks: {
          color: 'rgba(255,255,255,0.42)',
          maxRotation: 0,
        },
      },
      y: {
        min: 0,
        max: 110,
        grid: {
          color: 'rgba(255,255,255,0.05)',
        },
        ticks: {
          color: 'rgba(255,255,255,0.42)',
        },
      },
    },
  }

  return (
    <div className={`relative ${heightClassName}`}>
      <Line data={data} options={options} />
    </div>
  )
}
