"use client"

import * as React from "react"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { CommandPalette } from "../modules/CommandPalette"
import { useUIStore } from "@/store/useUIStore"

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCommandOpen, setIsCommandOpen] = React.useState(false)
  const [isHydrated, setIsHydrated] = React.useState(false)

  // Listen to UI Store if we want to trigger command from Topbar
  React.useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar onOpenCommand={() => setIsCommandOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20">
          {isHydrated ? children : (
            <div className="flex h-full items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </main>
      </div>
      <CommandPalette open={isCommandOpen} setOpen={setIsCommandOpen} />
    </div>
  )
}
