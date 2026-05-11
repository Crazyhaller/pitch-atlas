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

import { EnduranceDataPoint } from '@/types/player'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
)

interface EnduranceGraphProps {
  data: EnduranceDataPoint[]
}

export default function EnduranceGraph({ data }: EnduranceGraphProps) {
  const chartData: ChartData<'line'> = {
    labels: data.map((point) => `${point.minute}'`),
    datasets: [
      {
        label: 'Stamina',
        data: data.map((point) => point.stamina),
        borderColor: '#38FF9C',
        backgroundColor: 'rgba(56,255,156,0.12)',
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const options: ChartOptions<'line'> = {
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
          color: 'rgba(255,255,255,0.04)',
        },
        ticks: {
          color: 'rgba(255,255,255,0.42)',
        },
      },
      y: {
        min: 0,
        max: 100,
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
    <div className="relative h-72 rounded-[24px] border border-white/6 bg-[#06101b] p-3 sm:h-80 sm:p-4">
      <Line data={chartData} options={options} />
    </div>
  )
}
