'use client'

import { PropsWithChildren } from 'react'

import { Provider } from 'react-redux'

import { AnimatePresence } from 'motion/react'

import { usePathname } from 'next/navigation'

import { store } from '@/store'

export default function Providers({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </Provider>
  )
}
