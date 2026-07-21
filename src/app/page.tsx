"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Plus, Clock, FileText, CheckSquare } from "lucide-react"
import { useTasksStore } from "@/store/useTasksStore"
import { useNotesStore } from "@/store/useNotesStore"
import Link from "next/link"

export default function DashboardPage() {
  const tasks = useTasksStore(state => state.tasks)
  const toggleTask = useTasksStore(state => state.toggleTask)
  const notes = useNotesStore(state => state.notes)

  // Get active tasks (not completed)
  const activeTasks = tasks.filter(t => !t.completed).sort((a, b) => b.createdAt - a.createdAt)
  const todayTasks = activeTasks.slice(0, 5) // Show top 5

  // Get recent notes (not in trash)
  const recentNotes = notes.filter(n => !n.isTrash).sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 5)

  // Helper for relative time
  const formatTime = (ts: number) => {
    const diff = Date.now() - ts
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours < 1) return 'Baru saja'
    if (hours < 24) return `${hours} jam yang lalu`
    const days = Math.floor(hours / 24)
    if (days === 1) return 'Kemarin'
    return `${days} hari yang lalu`
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-1">Selamat Datang, Dimas.</h1>
            <p className="text-muted-foreground font-body">
              Fokus pada tugas hari ini. Anda memiliki <strong className="text-foreground">{activeTasks.length} tugas</strong> yang belum selesai.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/tasks">
              <Button variant="secondary">
                <CheckSquare className="mr-2 w-4 h-4" />
                Tugas Baru
              </Button>
            </Link>
            <Link href="/notes">
              <Button variant="default">
                <Plus className="mr-2 w-4 h-4" />
                Catatan Baru
              </Button>
            </Link>
          </div>
        </section>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card: Recent Notes */}
          <section className="col-span-1 lg:col-span-2 border-2 border-border shadow-retro-md rounded-[12px] bg-card p-5">
            <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-4">
              <h2 className="font-heading font-bold text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 stroke-[2px]" />
                Catatan Terakhir
              </h2>
              <Link href="/notes">
                <Button variant="ghost" size="sm" className="h-8">
                  Lihat Semua
                </Button>
              </Link>
            </div>
            
            {/* List Pattern */}
            <ul className="space-y-3">
              {recentNotes.length === 0 ? (
                <li className="text-sm text-muted-foreground py-4">Belum ada catatan.</li>
              ) : recentNotes.map((note) => (
                <li key={note.id} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-[8px] hover:bg-muted transition-colors">
                  <span className="font-bold text-sm truncate pr-4">{note.title}</span>
                  <div className="flex items-center text-xs text-muted-foreground gap-1 whitespace-nowrap">
                    <Clock className="w-3 h-3" />
                    {formatTime(note.updatedAt)}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Card: Today Tasks */}
          <section className="col-span-1 border-2 border-border shadow-retro-md rounded-[12px] bg-card p-5">
            <div className="flex items-center justify-between border-b-2 border-border pb-4 mb-4">
              <h2 className="font-heading font-bold text-lg flex items-center gap-2">
                <CheckSquare className="w-5 h-5 stroke-[2px]" />
                Fokus Hari Ini
              </h2>
            </div>
            
            {/* Task Pattern */}
            <ul className="space-y-3">
              {todayTasks.length === 0 ? (
                <li className="text-sm text-muted-foreground py-4">Semua tugas selesai! 🎉</li>
              ) : todayTasks.map((task) => (
                <li key={task.id} className="flex items-center gap-3">
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center shrink-0 transition-colors focus:outline-none ${task.completed ? 'bg-accent border-accent text-accent-foreground' : 'border-border bg-background hover:bg-muted'}`}
                  >
                    {task.completed && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </button>
                  <span className={`text-sm font-bold truncate ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {task.title}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          
        </div>
      </div>
    </AppLayout>
  )
}
