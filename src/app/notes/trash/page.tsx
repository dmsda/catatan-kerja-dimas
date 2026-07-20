"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Clock, Trash2, RefreshCw, AlertTriangle } from "lucide-react"
import { useNotesStore } from "@/store/useNotesStore"
import { Button } from "@/components/ui/button"

export default function TrashNotesPage() {
  const notes = useNotesStore((state) => state.notes)
  const restoreNote = useNotesStore((state) => state.restoreNote)
  const permanentlyDeleteNote = useNotesStore((state) => state.permanentlyDeleteNote)
  
  // Filter trash only
  const trashNotes = notes.filter(n => n.isTrash)
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-3 text-destructive">
              <Trash2 className="w-8 h-8 stroke-[2px]" />
              Tong Sampah
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1 flex items-center gap-1">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Catatan di sini akan dihapus permanen secara otomatis setelah 30 hari.
            </p>
          </div>
          {trashNotes.length > 0 && (
            <Button variant="outline" className="text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
              Kosongkan Sampah
            </Button>
          )}
        </div>

        {/* List Content */}
        {trashNotes.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <Trash2 className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Tong Sampah Kosong</h3>
            <p className="text-sm font-body text-muted-foreground max-w-sm">
              Tidak ada catatan yang terbuang.
            </p>
          </div>
        ) : (
          /* List Pattern */
          <div className="space-y-3">
            {trashNotes.map((note) => (
              <div 
                key={note.id} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-destructive/20 bg-destructive/5 rounded-[10px] shadow-none hover:bg-destructive/10 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 border-2 border-destructive/20 bg-background rounded-[8px] flex items-center justify-center shrink-0">
                    <Trash2 className="w-5 h-5 text-destructive stroke-[2px]" />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-lg text-foreground line-through opacity-70">
                      {note.title || 'Tanpa Judul'}
                    </span>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs font-body text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Dihapus {formatRelativeTime(note.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-0 flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-8 border-border bg-background"
                    onClick={() => restoreNote(note.id)}
                  >
                    <RefreshCw className="w-3 h-3 mr-2 stroke-[2px]" />
                    Pulihkan
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="h-8"
                    onClick={() => permanentlyDeleteNote(note.id)}
                  >
                    Hapus Permanen
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
