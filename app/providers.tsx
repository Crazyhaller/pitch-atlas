'use client'

import { PropsWithChildren, useEffect } from 'react'
import { Provider } from 'react-redux'
import { AnimatePresence } from 'motion/react'
import { store } from '@/store'

export default function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty(
      '--font-sans',
      `"Inter", "SF Pro Display", sans-serif`,
    )

    root.style.setProperty('--font-mono', `"JetBrains Mono", monospace`)
  }, [])

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
    </Provider>
  )
}
