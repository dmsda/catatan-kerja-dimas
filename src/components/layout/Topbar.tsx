"use client"

import * as React from "react"
import { Menu, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useUIStore } from "@/store/useUIStore"

export function Topbar({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const toggleMobileMenu = useUIStore(state => state.toggleMobileMenu)

  return (
    <header className="h-16 flex-shrink-0 border-b-2 border-border bg-background flex items-center justify-between px-4 md:px-6 z-30 sticky top-0">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          <Menu className="w-5 h-5 stroke-[2px]" />
        </Button>

        {/* Breadcrumb Placeholder */}
        <nav className="hidden sm:flex text-sm font-bold text-muted-foreground font-sans">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">Dashboard</span>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Trigger Placeholder */}
        <Button 
          variant="outline" 
          className="hidden sm:flex text-muted-foreground justify-start w-[240px] px-3 font-normal"
          onClick={onOpenCommand}
        >
          <Search className="mr-2 w-4 h-4 stroke-[2px]" />
          <span>Search or jump to...</span>
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded-[4px] border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <Button variant="outline" size="icon" className="sm:hidden" onClick={onOpenCommand}>
          <Search className="w-5 h-5 stroke-[2px]" />
        </Button>

        <ThemeToggle />
      </div>
    </header>
  )
}
