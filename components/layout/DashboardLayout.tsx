'use client'

import { PropsWithChildren } from 'react'

import Navbar from './Navbar'
import AppSidebar from './AppSidebar'

type DashboardLayoutProps = PropsWithChildren

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />

      <div className="flex">
        <AppSidebar />

        <main className="min-h-screen flex-1 overflow-hidden pt-24">
          <div className="container-wrapper py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
