"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Plus, CheckSquare, Clock, AlertCircle, Trash2, Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTasksStore } from "@/store/useTasksStore"

export default function TasksPage() {
  const tasks = useTasksStore(state => state.tasks)
  const addTask = useTasksStore(state => state.addTask)
  const toggleTask = useTasksStore(state => state.toggleTask)
  const deleteTask = useTasksStore(state => state.deleteTask)
  
  const [filter, setFilter] = React.useState<'all' | 'today' | 'completed'>('all')
  const [newTaskTitle, setNewTaskTitle] = React.useState("")
  const [isAdding, setIsAdding] = React.useState(false)

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskTitle.trim()) return
    // Simple today deadline for 'today' filter
    const today = new Date().setHours(0,0,0,0)
    addTask(newTaskTitle, 'medium', today)
    setNewTaskTitle("")
    setIsAdding(false)
  }

  const isToday = (timestamp: number | null) => {
    if (!timestamp) return false
    const today = new Date().setHours(0,0,0,0)
    const taskDate = new Date(timestamp).setHours(0,0,0,0)
    return today === taskDate
  }

  const displayedTasks = tasks.filter(t => {
    if (filter === 'today') return isToday(t.dueDate) && !t.completed
    if (filter === 'completed') return t.completed
    return !t.completed // 'all' active
  }).sort((a, b) => b.createdAt - a.createdAt)

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Tugas</h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Anda memiliki <strong className="text-foreground">{tasks.filter(t => !t.completed).length}</strong> tugas aktif.
            </p>
          </div>
          <Button variant="default" onClick={() => setIsAdding(true)}>
            <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
            Tugas Baru
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 border-b-2 border-border pb-4 overflow-x-auto whitespace-nowrap">
          <Button 
            variant="ghost" 
            className={cn("h-8 px-4 rounded-[8px] font-bold", filter === 'all' && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm hover:shadow-retro-md")}
            onClick={() => setFilter('all')}
          >
            Semua Aktif
          </Button>
          <Button 
            variant="ghost" 
            className={cn("h-8 px-4 rounded-[8px] font-bold", filter === 'today' && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm hover:shadow-retro-md")}
            onClick={() => setFilter('today')}
          >
            Hari Ini
          </Button>
          <Button 
            variant="ghost" 
            className={cn("h-8 px-4 rounded-[8px] font-bold", filter === 'completed' && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm hover:shadow-retro-md")}
            onClick={() => setFilter('completed')}
          >
            Selesai
          </Button>
        </div>

        {/* Add Task Form */}
        {isAdding && (
          <form onSubmit={handleAddTask} className="flex gap-2">
            <input 
              type="text" 
              autoFocus
              placeholder="Ketik tugas baru lalu tekan Enter..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1 bg-card border-2 border-border rounded-[10px] shadow-retro-sm px-4 h-12 outline-none font-bold font-body focus:shadow-retro-md transition-shadow"
            />
            <Button type="submit" className="h-12 border-2">Simpan</Button>
            <Button type="button" variant="ghost" onClick={() => setIsAdding(false)} className="h-12 border-2 border-transparent">Batal</Button>
          </form>
        )}

        {/* Task List */}
        {displayedTasks.length === 0 && !isAdding ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <CheckSquare className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Tidak ada tugas</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Nikmati waktu luang Anda atau buat tugas baru.
            </p>
            <Button variant="outline" onClick={() => setIsAdding(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Buat Tugas
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {displayedTasks.map((task) => (
              <div 
                key={task.id} 
                className={cn(
                  "group flex items-center justify-between p-3 sm:p-4 border-2 border-border rounded-[10px] shadow-retro-sm transition-all",
                  task.completed ? "bg-muted opacity-60 shadow-none" : "bg-card hover:-translate-y-[2px] hover:shadow-retro-md"
                )}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Checkbox Retro */}
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "w-6 h-6 border-2 flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      task.completed 
                        ? "bg-accent border-accent text-accent-foreground" 
                        : "border-border bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    )}
                  >
                    {task.completed && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                    <span className={cn(
                      "text-base font-bold font-sans",
                      task.completed ? "line-through text-muted-foreground" : "text-foreground"
                    )}>
                      {task.title}
                    </span>
                    
                    <div className="flex items-center gap-3 mt-1 sm:mt-0 text-xs font-body">
                      {task.priority === 'high' && !task.completed && (
                        <span className="flex items-center gap-1 text-destructive font-bold">
                          <AlertCircle className="w-3 h-3" /> Tinggi
                        </span>
                      )}
                      {task.dueDate && isToday(task.dueDate) && !task.completed && (
                        <span className="flex items-center gap-1 text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-[4px] border-2 border-border font-bold">
                          <CalendarIcon className="w-3 h-3" /> Hari Ini
                        </span>
                      )}
                      {task.projectId && (
                        <span className="flex items-center gap-1 text-muted-foreground bg-muted px-1.5 py-0.5 rounded-[4px] border border-border">
                          <Clock className="w-3 h-3" /> {task.projectId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-destructive hover:bg-destructive/20 hover:text-destructive"
                    onClick={() => deleteTask(task.id)}
                  >
                    <Trash2 className="w-4 h-4 stroke-[2px]" />
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
