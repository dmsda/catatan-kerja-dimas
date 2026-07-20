"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Folder, Plus, FileText, ChevronRight } from "lucide-react"
import { useNotesStore } from "@/store/useNotesStore"
import { Button } from "@/components/ui/button"

export default function FolderNotesPage() {
  const notes = useNotesStore((state) => state.notes)
  
  // Aggregate folders from notes
  const folderMap = notes.reduce((acc, note) => {
    if (!note.isTrash && !note.isArchived) {
      const folderName = note.folderId || "Tanpa Folder"
      if (!acc[folderName]) acc[folderName] = 0
      acc[folderName]++
    }
    return acc
  }, {} as Record<string, number>)

  const folders = Object.entries(folderMap).map(([name, count]) => ({ name, count }))

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
              <Folder className="w-8 h-8 stroke-[2px]" />
              Folder
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Pengelompokan struktural catatan Anda.
            </p>
          </div>
          <Button variant="default">
            <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
            Folder Baru
          </Button>
        </div>

        {/* List Content */}
        {folders.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <Folder className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Belum ada Folder</h3>
            <p className="text-sm font-body text-muted-foreground max-w-sm">
              Buat folder untuk mengkategorikan catatan kerja Anda secara rapi.
            </p>
          </div>
        ) : (
          /* Folder Grid Pattern */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {folders.map((folder, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col p-5 border-2 border-border bg-card rounded-[12px] shadow-retro-md hover:-translate-y-[4px] hover:shadow-retro-lg transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border-2 border-border bg-muted rounded-[8px]">
                    <Folder className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5 stroke-[2px]" />
                  </Button>
                </div>
                
                <h3 className="font-heading font-bold text-xl mb-1">{folder.name}</h3>
                <div className="flex items-center gap-1 text-sm font-body text-muted-foreground mt-auto">
                  <FileText className="w-4 h-4" />
                  {folder.count} Dokumen
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
