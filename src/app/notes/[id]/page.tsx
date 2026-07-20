"use client"
export const runtime = 'edge'


import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Share2, MoreVertical, Star, Trash2 } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { NoteEditor } from "@/components/modules/Editor"
import { useNotesStore } from "@/store/useNotesStore"

export default function NoteDetailPage() {
  const params = useParams()
  const router = useRouter()
  const noteId = params.id as string
  
  const note = useNotesStore(state => state.getNote(noteId))
  const updateNote = useNotesStore(state => state.updateNote)
  const toggleFavorite = useNotesStore(state => state.toggleFavorite)
  const deleteNote = useNotesStore(state => state.deleteNote)
  
  const [title, setTitle] = React.useState("")

  React.useEffect(() => {
    if (note) {
      setTitle(note.title)
    }
  }, [note])

  if (!note) {
    return (
      <AppLayout>
        <div className="max-w-[800px] mx-auto py-20 text-center">
          <h2 className="text-xl font-heading font-bold">Catatan Tidak Ditemukan</h2>
          <Button variant="outline" className="mt-4" onClick={() => router.push('/notes')}>
            Kembali ke Daftar Catatan
          </Button>
        </div>
      </AppLayout>
    )
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    updateNote(noteId, { title: e.target.value })
  }

  const handleDelete = () => {
    deleteNote(noteId)
    router.push('/notes')
  }

  return (
    <AppLayout>
      <div className="max-w-[800px] mx-auto space-y-6">
        
        {/* Editor Topbar */}
        <div className="flex items-center justify-between sticky top-0 bg-background/95 backdrop-blur z-20 py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.push('/notes')} className="h-8 w-8">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div className="flex flex-col">
              <span className="text-sm font-bold truncate max-w-[150px] sm:max-w-xs">{title || 'Tanpa Judul'}</span>
              <span className="text-xs text-muted-foreground">Otosimpan aktif</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => toggleFavorite(noteId)}
            >
              <Star className={`w-4 h-4 ${note.isFavorite ? 'fill-secondary text-border' : ''}`} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleDelete}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <Button variant="default" size="sm" className="hidden sm:flex" onClick={() => router.push('/notes')}>
              <Save className="w-4 h-4 mr-2" />
              Selesai
            </Button>
          </div>
        </div>

        {/* Title Input */}
        <input 
          type="text" 
          value={title}
          onChange={handleTitleChange}
          placeholder="Judul Catatan" 
          className="w-full bg-transparent border-none outline-none font-heading text-4xl sm:text-5xl font-bold placeholder:text-muted focus:ring-0 px-0"
        />

        {/* TipTap Editor */}
        <NoteEditor noteId={noteId} initialContent={note.content} />
        
      </div>
    </AppLayout>
  )
}
