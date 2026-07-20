"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Plus, CheckSquare, Clock, AlertCircle, Trash2, Calendar as CalendarIcon, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTasksStore } from "@/store/useTasksStore"

export default function UpcomingTasksPage() {
  const tasks = useTasksStore(state => state.tasks)
  const toggleTask = useTasksStore(state => state.toggleTask)
  const deleteTask = useTasksStore(state => state.deleteTask)

  const isToday = (timestamp: number | null) => {
    if (!timestamp) return false
    const today = new Date().setHours(0,0,0,0)
    const taskDate = new Date(timestamp).setHours(0,0,0,0)
    return today === taskDate
  }
  
  // Upcoming = has a dueDate that is NOT today, or is active (we'll just show active tasks not today)
  const upcomingTasks = tasks.filter(t => !t.completed && !isToday(t.dueDate))
    .sort((a, b) => (a.dueDate || Infinity) - (b.dueDate || Infinity))

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
            <Clock className="w-8 h-8 stroke-[2px]" />
            Mendatang
          </h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Persiapan untuk hari-hari selanjutnya.
          </p>
        </div>

        {/* Task List */}
        {upcomingTasks.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <Clock className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Jadwal Kosong</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Tidak ada tugas mendatang. Fokus penuh pada Hari Ini.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div 
                key={task.id} 
                className="group flex items-center justify-between p-3 sm:p-4 border-2 border-border rounded-[10px] shadow-retro-sm bg-card hover:-translate-y-[2px] hover:shadow-retro-md transition-all"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Checkbox Retro */}
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="w-6 h-6 border-2 flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-border bg-background hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                  </button>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                    <span className="text-base font-bold font-sans text-foreground">
                      {task.title}
                    </span>
                    
                    <div className="flex items-center gap-3 mt-1 sm:mt-0 text-xs font-body">
                      {task.priority === 'high' && (
                        <span className="flex items-center gap-1 text-destructive font-bold">
                          <AlertCircle className="w-3 h-3" /> Tinggi
                        </span>
                      )}
                      {task.dueDate && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <CalendarIcon className="w-3 h-3" /> 
                          {new Date(task.dueDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
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
