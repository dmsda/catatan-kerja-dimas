import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Bookmark = {
  id: string
  title: string
  url: string
  category: 'documentation' | 'video' | 'github' | 'tools' | 'other'
  createdAt: number
}

interface BookmarksState {
  bookmarks: Bookmark[]
  addBookmark: (title: string, url: string, category: Bookmark['category']) => void
  deleteBookmark: (id: string) => void
}

export const useBookmarksStore = create<BookmarksState>()(
  persist(
    (set) => ({
      bookmarks: [
        { id: "1", title: "Tailwind CSS v4 Documentation", url: "https://tailwindcss.com", category: "documentation", createdAt: Date.now() },
        { id: "2", title: "Next.js App Router Masterclass", url: "https://youtube.com", category: "video", createdAt: Date.now() },
        { id: "3", title: "Shadcn UI GitHub Repo", url: "https://github.com/shadcn-ui/ui", category: "github", createdAt: Date.now() },
        { id: "4", title: "Figma: Retro UI Kit", url: "https://figma.com", category: "tools", createdAt: Date.now() },
      ], // Seeded with initial data
      
      addBookmark: (title, url, category) => {
        set((state) => ({
          bookmarks: [
            {
              id: crypto.randomUUID(),
              title,
              url,
              category,
              createdAt: Date.now(),
            },
            ...state.bookmarks, // Add to front
          ],
        }))
      },
      
      deleteBookmark: (id) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((b) => b.id !== id),
        }))
      },
    }),
    {
      name: 'dimas-bookmarks-storage',
      storage: createJSONStorage(() => localStorage), 
    }
  )
)
