'use client'

import { PropsWithChildren } from 'react'

import { AnimatePresence } from 'motion/react'

import { usePathname } from 'next/navigation'

import StoreProvider from '@/store/provider'

export default function Providers({ children }: PropsWithChildren) {
  const pathname = usePathname()

  return (
    <StoreProvider>
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </StoreProvider>
  )
}
