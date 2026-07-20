"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  FileText, 
  CheckSquare, 
  CalendarDays, 
  Users, 
  Bookmark, 
  Settings,
  Folder,
  Star,
  Archive,
  Trash2,
  Calendar,
  Clock,
  CheckCircle2,
  Bell
} from "lucide-react"

// Nested Menu Structure
const SIDEBAR_MENU = [
  {
    title: "Utama",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
    ]
  },
  {
    title: "Notes",
    items: [
      { name: "All Notes", href: "/notes", icon: FileText },
      { name: "Folder", href: "/notes/folder", icon: Folder },
      { name: "Favorites", href: "/notes/favorites", icon: Star },
      { name: "Archive", href: "/notes/archive", icon: Archive },
      { name: "Trash", href: "/notes/trash", icon: Trash2 },
    ]
  },
  {
    title: "Tasks",
    items: [
      { name: "Today", href: "/tasks", icon: Calendar },
      { name: "Upcoming", href: "/tasks/upcoming", icon: Clock },
      { name: "Completed", href: "/tasks/completed", icon: CheckCircle2 },
      { name: "Reminder", href: "/tasks/reminder", icon: Bell },
    ]
  },
  {
    title: "Workspace",
    items: [
      { name: "Meetings", href: "/meetings", icon: Users },
      { name: "Calendar", href: "/calendar", icon: CalendarDays },
      { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
    ]
  }
]

import { useUIStore } from "@/store/useUIStore"

export function Sidebar() {
  const pathname = usePathname()
  const isMobileMenuOpen = useUIStore(state => state.isMobileMenuOpen)
  const closeMobileMenu = useUIStore(state => state.closeMobileMenu)

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar Content */}
      <aside className={cn(
        "w-[250px] flex-shrink-0 border-r-2 border-border bg-background flex flex-col h-full z-50 fixed md:static transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
      <div className="h-16 flex items-center px-6 border-b-2 border-border">
        <span className="font-heading font-bold text-xl tracking-tight">DimasOS.</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        {SIDEBAR_MENU.map((section, idx) => (
          <div key={idx}>
            {section.title !== "Utama" && (
              <h4 className="px-3 mb-2 text-xs font-bold font-heading text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h4>
            )}
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm font-bold font-sans transition-all border-2",
                      isActive 
                        ? "bg-secondary text-secondary-foreground border-border shadow-retro-sm" 
                        : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border hover:shadow-retro-sm"
                    )}
                  >
                    <Icon className="w-[18px] h-[18px] stroke-[2px]" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t-2 border-border">
        <Link
          href="/settings"
          onClick={closeMobileMenu}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-[10px] text-sm font-bold font-sans transition-all border-2",
            pathname.startsWith("/settings")
              ? "bg-secondary text-secondary-foreground border-border shadow-retro-sm" 
              : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border hover:shadow-retro-sm"
          )}
        >
          <Settings className="w-[18px] h-[18px] stroke-[2px]" />
          Settings
        </Link>
      </div>
    </aside>
    </>
  )
}
