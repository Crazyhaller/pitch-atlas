'use client'

import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import AppSidebar from './AppSidebar'

type DashboardLayoutProps = PropsWithChildren

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      <div className="flex min-w-0">
        <AppSidebar />

        <main className="min-w-0 flex-1 overflow-x-clip pt-20 sm:pt-24">
          <div className="container-wrapper py-5 sm:py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
