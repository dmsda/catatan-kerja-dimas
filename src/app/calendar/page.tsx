"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useTasksStore } from "@/store/useTasksStore"
import { useMeetingsStore } from "@/store/useMeetingsStore"

const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = React.useState(() => {
    const d = new Date()
    d.setDate(1) // Always start at 1st of month
    return d
  })

  const tasks = useTasksStore(state => state.tasks)
  const meetings = useMeetingsStore(state => state.meetings)

  const monthName = currentDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  
  // Calculate starting day (0 = Sunday in JS, we want 0 = Senin)
  let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  let startingDayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Kalender</h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Ikhtisar waktu dan tenggat kerja bulanan.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevMonth}>
              <ChevronLeft className="w-5 h-5 stroke-[2px]" />
            </Button>
            <Button variant="outline" className="font-bold min-w-[150px]">
              {monthName}
            </Button>
            <Button variant="outline" size="icon" onClick={nextMonth}>
              <ChevronRight className="w-5 h-5 stroke-[2px]" />
            </Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border-2 border-border bg-card shadow-retro-md rounded-[12px] overflow-hidden flex flex-col">
          {/* Days Header */}
          <div className="grid grid-cols-7 border-b-2 border-border bg-muted">
            {DAYS_OF_WEEK.map(day => (
              <div key={day} className="p-3 text-center text-sm font-bold font-heading border-r-2 border-border last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 bg-background">
            {/* Empty slots for starting offset */}
            {Array.from({ length: startingDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[120px] p-2 border-r-2 border-b-2 border-border bg-muted/30"></div>
            ))}

            {/* Actual Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1
              const currentBoxDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum).setHours(0,0,0,0)
              const todayTime = new Date().setHours(0,0,0,0)
              const isToday = currentBoxDate === todayTime
              
              // Find events for this day
              const dayTasks = tasks.filter(t => t.dueDate && new Date(t.dueDate).setHours(0,0,0,0) === currentBoxDate)
              const dayMeetings = meetings.filter(m => new Date(m.date).setHours(0,0,0,0) === currentBoxDate)

              return (
                <div 
                  key={dayNum} 
                  className={`min-h-[120px] p-2 border-r-2 border-b-2 border-border flex flex-col group hover:bg-muted/50 transition-colors cursor-pointer relative ${
                    isToday ? 'bg-secondary/20' : ''
                  }`}
                >
                  <span className={`text-sm font-bold w-7 h-7 flex items-center justify-center rounded-[6px] mb-2 ${
                    isToday ? 'bg-primary text-primary-foreground border-2 border-border shadow-retro-sm' : 'text-foreground'
                  }`}>
                    {dayNum}
                  </span>
                  
                  <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
                    {dayMeetings.map((ev, idx) => (
                      <div 
                        key={`m-${idx}`} 
                        className="text-[10px] px-1.5 py-1 rounded-[4px] border border-border font-bold truncate bg-secondary text-secondary-foreground"
                        title={ev.title}
                      >
                        {ev.time.split(' ')[0]} {ev.title}
                      </div>
                    ))}
                    {dayTasks.map((ev, idx) => (
                      <div 
                        key={`t-${idx}`} 
                        className={`text-[10px] px-1.5 py-1 rounded-[4px] border border-border font-bold truncate ${ev.completed ? 'opacity-50 line-through bg-muted' : 'bg-destructive text-destructive-foreground'}`}
                        title={ev.title}
                      >
                        {ev.title}
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-4 h-4 text-muted-foreground stroke-[2px]" />
                  </div>
                </div>
              )
            })}
            
            {/* Padding at the end of grid */}
            {Array.from({ length: (7 - ((daysInMonth + startingDayOffset) % 7)) % 7 }).map((_, i) => (
              <div key={`end-${i}`} className="min-h-[120px] p-2 border-r-2 border-b-2 border-border bg-muted/30 last:border-r-0"></div>
            ))}
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
