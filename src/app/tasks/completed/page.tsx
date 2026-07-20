"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Trash2, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTasksStore } from "@/store/useTasksStore"

export default function CompletedTasksPage() {
  const tasks = useTasksStore(state => state.tasks)
  const toggleTask = useTasksStore(state => state.toggleTask)
  const deleteTask = useTasksStore(state => state.deleteTask)
  
  const completedTasks = tasks.filter(t => t.completed)
    .sort((a, b) => b.updatedAt - a.updatedAt)

  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 stroke-[2px]" />
              Selesai
            </h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Rekam jejak produktivitas Anda.
            </p>
          </div>
        </div>

        {/* Task List */}
        {completedTasks.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <CheckCircle2 className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Belum ada tugas selesai</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Selesaikan tugas di menu Hari Ini untuk memindahkannya ke sini.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {completedTasks.map((task) => (
              <div 
                key={task.id} 
                className="group flex items-center justify-between p-3 sm:p-4 border-2 border-border/50 rounded-[10px] shadow-none bg-muted/30 transition-all opacity-70 hover:opacity-100"
              >
                <div className="flex items-center gap-4 flex-1">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="w-6 h-6 border-2 flex items-center justify-center shrink-0 bg-accent border-accent text-accent-foreground transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </button>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 flex-1">
                    <span className="text-base font-bold font-sans line-through text-muted-foreground">
                      {task.title}
                    </span>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 hidden sm:flex"
                    onClick={() => toggleTask(task.id)}
                  >
                    <RotateCcw className="w-3 h-3 mr-2 stroke-[2px]" />
                    Batalkan Selesai
                  </Button>
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
