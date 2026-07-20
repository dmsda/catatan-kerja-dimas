"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import { Search, FileText, CheckSquare, Settings, CalendarDays } from "lucide-react"

export function CommandPalette({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  if (!open) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 transition-all duration-200"
        onClick={() => setOpen(false)}
      />
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-2 border-border bg-background p-0 shadow-retro-lg duration-200 sm:rounded-[12px] overflow-hidden">
        <Command className="w-full flex flex-col font-sans" label="Command Menu" loop>
          <div className="flex items-center border-b-2 border-border px-3" cmdk-input-wrapper="">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 stroke-[2px]" />
            <Command.Input 
              autoFocus
              placeholder="Ketik perintah atau cari..." 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm">Tidak ditemukan.</Command.Empty>
            
            <Command.Group heading="Halaman Utama" className="text-xs font-bold text-muted-foreground px-2 py-1 uppercase tracking-wider font-heading">
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/notes'))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 mt-1 hover:bg-muted font-bold cursor-pointer"
              >
                <FileText className="mr-2 h-4 w-4 stroke-[2px]" />
                <span>Semua Catatan</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/tasks'))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-muted font-bold cursor-pointer"
              >
                <CheckSquare className="mr-2 h-4 w-4 stroke-[2px]" />
                <span>Tugas Hari Ini</span>
              </Command.Item>
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/calendar'))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-muted font-bold cursor-pointer"
              >
                <CalendarDays className="mr-2 h-4 w-4 stroke-[2px]" />
                <span>Kalender</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Sistem" className="text-xs font-bold text-muted-foreground px-2 py-1 uppercase tracking-wider font-heading mt-2">
              <Command.Item 
                onSelect={() => runCommand(() => router.push('/settings'))}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-muted font-bold cursor-pointer mt-1"
              >
                <Settings className="mr-2 h-4 w-4 stroke-[2px]" />
                <span>Pengaturan</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </>
  )
}
