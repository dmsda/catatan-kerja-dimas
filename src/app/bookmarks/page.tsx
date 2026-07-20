"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Bookmark, Plus, ExternalLink, GitBranch, Video, FileCode, MonitorSmartphone, Link as LinkIcon, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useBookmarksStore } from "@/store/useBookmarksStore"

export default function BookmarksPage() {
  const bookmarks = useBookmarksStore(state => state.bookmarks)
  const addBookmark = useBookmarksStore(state => state.addBookmark)
  const deleteBookmark = useBookmarksStore(state => state.deleteBookmark)

  const [filter, setFilter] = React.useState('all')
  const [isAdding, setIsAdding] = React.useState(false)
  const [newTitle, setNewTitle] = React.useState("")
  const [newUrl, setNewUrl] = React.useState("")
  const [newCategory, setNewCategory] = React.useState<'documentation' | 'video' | 'github' | 'tools' | 'other'>('documentation')

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'documentation', label: 'Dokumentasi', icon: FileCode },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'github', label: 'GitHub', icon: GitBranch },
    { id: 'tools', label: 'Perkakas', icon: MonitorSmartphone },
    { id: 'other', label: 'Lainnya', icon: LinkIcon },
  ]

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || !newUrl.trim()) return
    addBookmark(newTitle, newUrl, newCategory)
    setNewTitle("")
    setNewUrl("")
    setIsAdding(false)
  }

  const getIconForCategory = (catId: string) => {
    const found = categories.find(c => c.id === catId)
    return found?.icon || LinkIcon
  }

  const displayedBookmarks = bookmarks.filter(b => filter === 'all' || b.category === filter)

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Markah Buku</h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Koleksi tautan dan referensi eksternal Anda.
            </p>
          </div>
          <Button variant="default" onClick={() => setIsAdding(true)}>
            <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
            Simpan Tautan
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b-2 border-border pb-4">
          {categories.map(cat => (
            <Button 
              key={cat.id}
              variant="ghost" 
              className={cn("h-8 px-4 rounded-[8px] font-bold", filter === cat.id && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm")}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Add Form */}
        {isAdding && (
          <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-3 p-4 border-2 border-border bg-card rounded-[12px] shadow-retro-md">
            <input 
              required
              type="text" 
              placeholder="Judul tautan..." 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              className="flex-1 bg-background border-2 border-border rounded-[8px] px-3 h-10 font-bold outline-none focus:border-primary"
            />
            <input 
              required
              type="url" 
              placeholder="https://..." 
              value={newUrl}
              onChange={e => setNewUrl(e.target.value)}
              className="flex-1 bg-background border-2 border-border rounded-[8px] px-3 h-10 font-mono text-sm outline-none focus:border-primary"
            />
            <select 
              value={newCategory}
              onChange={e => setNewCategory(e.target.value as any)}
              className="w-full sm:w-40 bg-background border-2 border-border rounded-[8px] px-3 h-10 font-bold outline-none"
            >
              {categories.filter(c => c.id !== 'all').map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <div className="flex gap-2">
              <Button type="submit" className="h-10">Simpan</Button>
              <Button type="button" variant="ghost" onClick={() => setIsAdding(false)} className="h-10 border-2 border-transparent">Batal</Button>
            </div>
          </form>
        )}

        {/* List Pattern */}
        {displayedBookmarks.length === 0 && !isAdding ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <Bookmark className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Tautan Kosong</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Tidak ada tautan di kategori ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedBookmarks.map((bookmark) => {
              const Icon = getIconForCategory(bookmark.category)
              return (
                <div 
                  key={bookmark.id} 
                  className="flex items-center gap-4 p-4 border-2 border-border bg-card rounded-[10px] shadow-retro-sm hover:translate-y-[-2px] hover:shadow-retro-md transition-all group relative"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border-2 border-border bg-muted rounded-[8px] group-hover:bg-background transition-colors">
                    <Icon className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <div className="flex-1 min-w-0 pr-8">
                    <h3 className="font-heading font-bold text-base truncate">{bookmark.title}</h3>
                    <a href={bookmark.url} target="_blank" rel="noreferrer" className="text-sm font-body text-muted-foreground hover:text-primary truncate block">
                      {bookmark.url}
                    </a>
                  </div>
                  
                  {/* Actions */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-card px-2 py-1 rounded-[8px]">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive" onClick={() => deleteBookmark(bookmark.id)}>
                      <Trash2 className="w-4 h-4 stroke-[2px]" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-background" asChild>
                      <a href={bookmark.url} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 stroke-[2px]" />
                      </a>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </AppLayout>
  )
}
