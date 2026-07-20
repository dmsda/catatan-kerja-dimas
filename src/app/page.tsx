import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Plus, Clock, FileText, CheckSquare } from "lucide-react"

// Dummy data
const recentNotes = [
  { id: 1, title: "Rancangan Database", time: "2 jam yang lalu" },
  { id: 2, title: "Log Harian", time: "Kemarin" },
  { id: 3, title: "Idea: AI Workflow", time: "2 hari yang lalu" },
]

const todayTasks = [
  { id: 1, title: "Review PRD", completed: false },
  { id: 2, title: "Setup Next.js Project", completed: true },
]

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-1">Selamat Datang, Dimas.</h1>
            <p className="text-muted-foreground font-body">
              Fokus pada tugas hari ini. Anda memiliki <strong className="text-foreground">1 tugas</strong> yang belum selesai.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">
              <CheckSquare className="mr-2 w-4 h-4" />
              Tugas Baru
            </Button>
            <Button variant="default">
              <Plus className="mr-2 w-4 h-4" />
              Catatan Baru
            </Button>
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
              <Button variant="ghost" size="sm" className="h-8">
                Lihat Semua
              </Button>
            </div>
            
            {/* List Pattern */}
            <ul className="space-y-3">
              {recentNotes.map((note) => (
                <li key={note.id} className="flex items-center justify-between group cursor-pointer p-2 -mx-2 rounded-[8px] hover:bg-muted transition-colors">
                  <span className="font-bold text-sm">{note.title}</span>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="w-3 h-3" />
                    {note.time}
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
              {todayTasks.map((task) => (
                <li key={task.id} className="flex items-center gap-3">
                  <div className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center shrink-0 ${task.completed ? 'bg-accent border-accent text-accent-foreground' : 'border-border bg-background'}`}>
                    {task.completed && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </div>
                  <span className={`text-sm font-bold ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
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
