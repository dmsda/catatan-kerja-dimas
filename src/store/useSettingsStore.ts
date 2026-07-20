import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface SettingsState {
  syncPin: string
  setSyncPin: (pin: string) => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      syncPin: '',
      setSyncPin: (pin) => set({ syncPin: pin }),
    }),
    {
      name: 'dimas-settings-storage',
      storage: createJSONStorage(() => localStorage), 
    }
  )
)
