import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Meeting = {
  id: string
  title: string
  date: number
  time: string
  participants: number
  hasNote: boolean
  type: 'video' | 'offline'
  createdAt: number
}

interface MeetingsState {
  meetings: Meeting[]
  addMeeting: (title: string, date: number, time: string, participants: number, type: 'video' | 'offline') => void
  deleteMeeting: (id: string) => void
  toggleNoteStatus: (id: string) => void
}

export const useMeetingsStore = create<MeetingsState>()(
  persist(
    (set) => ({
      meetings: [
        { id: "1", title: "Sync Produk & Desain", date: Date.now(), time: "14:00 - 15:00", participants: 4, hasNote: true, type: "video", createdAt: Date.now() },
        { id: "2", title: "Review Arsitektur Frontend", date: Date.now() + 86400000, time: "10:00 - 11:30", participants: 2, hasNote: false, type: "offline", createdAt: Date.now() },
      ], // Seeded with initial data
      
      addMeeting: (title, date, time, participants, type) => {
        set((state) => ({
          meetings: [
            ...state.meetings,
            {
              id: crypto.randomUUID(),
              title,
              date,
              time,
              participants,
              type,
              hasNote: false,
              createdAt: Date.now(),
            },
          ],
        }))
      },
      
      deleteMeeting: (id) => {
        set((state) => ({
          meetings: state.meetings.filter((m) => m.id !== id),
        }))
      },

      toggleNoteStatus: (id) => {
        set((state) => ({
          meetings: state.meetings.map((m) => m.id === id ? { ...m, hasNote: !m.hasNote } : m),
        }))
      }
    }),
    {
      name: 'dimas-meetings-storage',
    }
  )
)
