'use client'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

import { SprintBurst } from '@/types/player'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

interface SprintBarChartProps {
  sprints: SprintBurst[]
}

export default function SprintBarChart({ sprints }: SprintBarChartProps) {
  const data: ChartData<'bar'> = {
    labels: sprints.map((sprint) => `${sprint.minute}'`),
    datasets: [
      {
        label: 'Sprint speed',
        data: sprints.map((sprint) => sprint.speed),
        backgroundColor: 'rgba(56,255,156,0.72)',
        borderRadius: 8,
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255,255,255,0.42)',
        },
      },
      y: {
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
    <div className="relative h-64 rounded-[24px] border border-white/6 bg-[#06101b] p-3 sm:h-72 sm:p-4">
      <Bar data={data} options={options} />
    </div>
  )
}
