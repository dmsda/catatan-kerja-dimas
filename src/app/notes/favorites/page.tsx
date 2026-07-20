"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { FileText, Clock, Hash, MoreVertical, Star, Folder } from "lucide-react"
import Link from "next/link"
import { useNotesStore } from "@/store/useNotesStore"
import { Button } from "@/components/ui/button"

export default function FavoritesNotesPage() {
  const notes = useNotesStore((state) => state.notes)
  
  // Filter active and favorite
  const favoriteNotes = notes.filter(n => n.isFavorite && !n.isTrash && !n.isArchived)
    .sort((a, b) => b.updatedAt - a.updatedAt)

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
        <div>
          <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
            <Star className="w-8 h-8 fill-secondary stroke-[2px]" />
            Favorit
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Catatan prioritas tinggi yang ditandai bintang.
          </p>
        </div>

        {/* List Content */}
        {favoriteNotes.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <Star className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Belum ada Favorit</h3>
            <p className="text-sm font-body text-muted-foreground max-w-sm">
              Tandai catatan penting Anda dengan ikon Bintang pada editor untuk memunculkannya di sini.
            </p>
          </div>
        ) : (
          /* List Pattern */
          <div className="space-y-3">
            {favoriteNotes.map((note) => (
              <div 
                key={note.id} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-border bg-card rounded-[10px] shadow-retro-sm hover:translate-y-[-2px] hover:shadow-retro-md transition-all cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 border-2 border-border bg-muted rounded-[8px] flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-foreground stroke-[2px]" />
                  </div>
                  <div>
                    <Link href={`/notes/${note.id}`} className="font-heading font-bold text-lg hover:underline decoration-2 underline-offset-4 flex items-center gap-2">
                      {note.title || 'Tanpa Judul'}
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
