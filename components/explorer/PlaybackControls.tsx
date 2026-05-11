'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  setCurrentTime,
  setPlaybackSpeed,
  setPlaying,
} from '@/store/slices/explorerSlice'

export default function PlaybackControls() {
  const dispatch = useAppDispatch()
  const { currentTime, playing, speed } = useAppSelector(
    (state) => state.explorer,
  )

  return (
    <div className="rounded-[24px] border border-white/8 bg-[#08111f]/75 p-4 backdrop-blur-2xl sm:p-5">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Previous event"
          onClick={() => dispatch(setCurrentTime(Math.max(currentTime - 5, 0)))}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white/70 hover:border-emerald-400/15 hover:text-[#38FF9C] sm:h-12 sm:w-12"
        >
          <FontAwesomeIcon icon={faBackwardStep} className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label={playing ? 'Pause replay' : 'Play replay'}
          onClick={() => dispatch(setPlaying(!playing))}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/15 text-[#38FF9C] shadow-[0_0_24px_rgba(56,255,156,0.18)] sm:h-14 sm:w-14"
        >
          <FontAwesomeIcon icon={playing ? faPause : faPlay} className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next event"
          onClick={() => dispatch(setCurrentTime(Math.min(currentTime + 5, 90)))}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white/70 hover:border-emerald-400/15 hover:text-[#38FF9C] sm:h-12 sm:w-12"
        >
          <FontAwesomeIcon icon={faForwardStep} className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Restart replay"
          onClick={() => dispatch(setCurrentTime(0))}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] text-white/70 hover:border-emerald-400/15 hover:text-[#38FF9C] sm:h-12 sm:w-12"
        >
          <FontAwesomeIcon icon={faRotateRight} className="h-4 w-4" />
        </button>

        <select
          aria-label="Playback speed"
          value={speed}
          onChange={(event) => dispatch(setPlaybackSpeed(Number(event.target.value)))}
          className="h-11 rounded-2xl border border-white/8 bg-[#06101b] px-3 text-sm font-bold text-white outline-none focus:border-emerald-400/25 sm:h-12 sm:px-4"
        >
          {[0.5, 1, 1.5, 2].map((item) => (
            <option key={item} value={item}>
              {item}x
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
