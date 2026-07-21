import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Task = {
  id: string
  title: string
  completed: boolean
  dueDate: number | null
  hasReminder: boolean
  priority: 'low' | 'medium' | 'high'
  projectId?: string
  createdAt: number
  updatedAt: number
}

interface TasksState {
  tasks: Task[]
  addTask: (title: string, priority?: 'low' | 'medium' | 'high', dueDate?: number | null, hasReminder?: boolean) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
  updateTask: (id: string, data: Partial<Task>) => void
}

export const useTasksStore = create<TasksState>()(
  persist(
    (set) => ({
      tasks: [],
      
      addTask: (title, priority = 'medium', dueDate = null, hasReminder = false) => {
        const timestamp = Date.now()
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              completed: false,
              priority,
              dueDate,
              hasReminder,
              createdAt: timestamp,
              updatedAt: timestamp,
            },
          ],
        }))
      },
      
      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed, updatedAt: Date.now() } : task
          ),
        }))
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }))
      },

      updateTask: (id, data) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...data, updatedAt: Date.now() } : task
          ),
        }))
      },
    }),
    {
      name: 'dimas-tasks-storage',
    }
  )
)
