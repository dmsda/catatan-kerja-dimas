"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Search, Clock, Hash, MoreVertical, Star, Folder } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useNotesStore } from "@/store/useNotesStore"
import { cn } from "@/lib/utils"

export default function NotesPage() {
  const router = useRouter()
  const [search, setSearch] = React.useState("")
  const notes = useNotesStore((state) => state.notes)
  const addNote = useNotesStore((state) => state.addNote)
  
  // Filter only active notes (not trash, not archived)
  const activeNotes = notes.filter(n => !n.isTrash && !n.isArchived)
  
  // Filter by search
  const filteredNotes = activeNotes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) || 
    note.content.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => b.updatedAt - a.updatedAt)

  const handleCreateNote = () => {
    const newId = addNote({
      title: "Catatan Tanpa Judul",
      content: "",
      tags: [],
    })
    router.push(`/notes/editor?id=${newId}`)
  }

  const formatRelativeTime = (timestamp: number) => {
    const rtf = new Intl.RelativeTimeFormat('id', { numeric: 'auto' })
    const daysDifference = Math.round((timestamp - Date.now()) / (1000 * 60 * 60 * 24))
    if (daysDifference === 0) return "Hari Ini"
    return rtf.format(daysDifference, 'day')
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Semua Catatan</h1>
          </div>
          <Button variant="default" onClick={handleCreateNote}>
            <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
            Catatan Baru
          </Button>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-4 border-2 border-border p-2 rounded-[10px] bg-card shadow-retro-sm">
          <Search className="w-5 h-5 ml-2 text-muted-foreground stroke-[2px]" />
          <input 
            type="text" 
            placeholder="Cari dalam catatan..." 
            className="flex-1 bg-transparent border-none outline-none font-body text-sm px-2 h-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* List Content */}
        {filteredNotes.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <FileText className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Belum ada catatan</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Tekan tombol untuk memulai draf pertama Anda di ruang bebas distraksi.
            </p>
            <Button variant="outline" onClick={handleCreateNote}>
              <Plus className="w-4 h-4 mr-2" />
              Tulis Pemikiran Baru
            </Button>
          </div>
        ) : (
          /* List Pattern */
          <div className="space-y-3">
            {filteredNotes.map((note) => (
              <div 
                key={note.id} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-border bg-card rounded-[10px] shadow-retro-sm hover:translate-y-[-2px] hover:shadow-retro-md transition-all cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 border-2 border-border bg-muted rounded-[8px] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-foreground stroke-[2px]" />
                  </div>
                  <div>
                    <Link href={`/notes/editor?id=${note.id}`} className="font-heading font-bold text-lg hover:underline decoration-2 underline-offset-4 flex items-center gap-2">
                      {note.title}
                      {note.isFavorite && <Star className="w-4 h-4 fill-secondary text-border stroke-[2px]" />}
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs font-body text-muted-foreground">
                      {note.folderId && (
                        <span className="flex items-center gap-1 font-bold">
                          <Folder className="w-3 h-3 stroke-[2px]" />
                          {note.folderId}
                        </span>
                      )}
                      {note.tags.length > 0 && (
                        <span className="flex items-center gap-1">
                          <Hash className="w-3 h-3" />
                          {note.tags.join(", ")}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatRelativeTime(note.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-[8px]">
                    <MoreVertical className="w-4 h-4 stroke-[2px]" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
