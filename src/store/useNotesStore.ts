import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Note = {
  id: string
  title: string
  content: string
  folderId?: string
  isFavorite: boolean
  isArchived: boolean
  isTrash: boolean
  tags: string[]
  createdAt: number
  updatedAt: number
}

interface NotesState {
  notes: Note[]
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'isFavorite' | 'isArchived' | 'isTrash'>) => string
  updateNote: (id: string, data: Partial<Note>) => void
  deleteNote: (id: string) => void // moves to trash
  restoreNote: (id: string) => void
  permanentlyDeleteNote: (id: string) => void
  toggleFavorite: (id: string) => void
  toggleArchive: (id: string) => void
  getNote: (id: string) => Note | undefined
}

export const useNotesStore = create<NotesState>()(
  persist(
    (set, get) => ({
      notes: [],
      
      addNote: (noteData) => {
        const newId = crypto.randomUUID()
        const timestamp = Date.now()
        set((state) => ({
          notes: [
            ...state.notes,
            {
              ...noteData,
              id: newId,
              isFavorite: false,
              isArchived: false,
              isTrash: false,
              createdAt: timestamp,
              updatedAt: timestamp,
            },
          ],
        }))
        return newId
      },
      
      updateNote: (id, data) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, ...data, updatedAt: Date.now() } : note
          ),
        }))
      },

      deleteNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isTrash: true, updatedAt: Date.now() } : note
          ),
        }))
      },

      restoreNote: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isTrash: false, updatedAt: Date.now() } : note
          ),
        }))
      },

      permanentlyDeleteNote: (id) => {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }))
      },

      toggleFavorite: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isFavorite: !note.isFavorite, updatedAt: Date.now() } : note
          ),
        }))
      },

      toggleArchive: (id) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, isArchived: !note.isArchived, updatedAt: Date.now() } : note
          ),
        }))
      },

      getNote: (id) => {
        return get().notes.find((note) => note.id === id)
      },
    }),
    {
      name: 'dimas-notes-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), 
    }
  )
)
