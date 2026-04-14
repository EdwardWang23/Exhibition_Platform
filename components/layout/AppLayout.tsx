'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setCollapsed(!collapsed)} />
        <main className="flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
