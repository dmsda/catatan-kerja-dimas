"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"

// Dummy Data
const DAYS_OF_WEEK = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
const DUMMY_EVENTS: Record<number, { title: string; type: 'meeting' | 'task' | 'deadline' }[]> = {
  14: [{ title: "Sync Mingguan", type: "meeting" }],
  15: [{ title: "Deadline PRD", type: "deadline" }],
  18: [{ title: "Review Desain", type: "task" }],
  23: [{ title: "1-on-1 CTO", type: "meeting" }, { title: "Bayar Server", type: "task" }],
}

export default function CalendarPage() {
  const currentMonth = "Juli 2026"
  const totalDays = 31
  const startingDayOffset = 2 // Starts on Wednesday (0=Monday, 1=Tuesday, 2=Wednesday)

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
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-5 h-5 stroke-[2px]" />
            </Button>
            <Button variant="outline" className="font-bold min-w-[120px]">
              {currentMonth}
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-5 h-5 stroke-[2px]" />
            </Button>
            <Button variant="default" className="ml-2">
              <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
              Acara
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
            {Array.from({ length: totalDays }).map((_, i) => {
              const dayNum = i + 1
              const isToday = dayNum === 20 // Dummy today
              const events = DUMMY_EVENTS[dayNum] || []

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
                    {events.map((ev, idx) => (
                      <div 
                        key={idx} 
                        className={`text-xs px-1.5 py-1 rounded-[4px] border border-border font-bold truncate ${
                          ev.type === 'deadline' ? 'bg-destructive text-destructive-foreground' :
                          ev.type === 'meeting' ? 'bg-secondary text-secondary-foreground' : 'bg-background text-foreground'
                        }`}
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
            {Array.from({ length: (7 - ((totalDays + startingDayOffset) % 7)) % 7 }).map((_, i) => (
              <div key={`end-${i}`} className="min-h-[120px] p-2 border-r-2 border-b-2 border-border bg-muted/30 last:border-r-0"></div>
            ))}
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
