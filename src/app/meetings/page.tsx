"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { CalendarDays, Plus, Clock, Users, FileText, Video } from "lucide-react"
import { cn } from "@/lib/utils"

// Dummy Data
const DUMMY_MEETINGS = [
  { id: "1", title: "Sync Produk & Desain", date: "Hari Ini", time: "14:00 - 15:00", participants: 4, hasNote: true, type: "video" },
  { id: "2", title: "Review Arsitektur Frontend", date: "Besok", time: "10:00 - 11:30", participants: 2, hasNote: false, type: "offline" },
  { id: "3", title: "1-on-1 CTO", date: "23 Jul 2026", time: "16:00 - 17:00", participants: 2, hasNote: false, type: "video" },
]

export default function MeetingsPage() {
  const [filter, setFilter] = React.useState<'upcoming' | 'past'>('upcoming')

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold">Rapat & Jadwal</h1>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Catatan interaksi sosial dan pertemuan profesional.
            </p>
          </div>
          <Button variant="default">
            <Plus className="w-4 h-4 mr-2 stroke-[2px]" />
            Jadwal Baru
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 border-b-2 border-border pb-4">
          <Button 
            variant="ghost" 
            className={cn("h-8 px-4 rounded-[8px] font-bold", filter === 'upcoming' && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm")}
            onClick={() => setFilter('upcoming')}
          >
            Akan Datang
          </Button>
          <Button 
            variant="ghost" 
            className={cn("h-8 px-4 rounded-[8px] font-bold", filter === 'past' && "bg-secondary text-secondary-foreground border-2 border-border shadow-retro-sm")}
            onClick={() => setFilter('past')}
          >
            Selesai
          </Button>
        </div>

        {/* Meeting List Pattern */}
        {DUMMY_MEETINGS.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <CalendarDays className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Tidak ada jadwal rapat</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Kalender Anda bersih. Gunakan waktu untuk fokus pada deep work.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DUMMY_MEETINGS.map((meeting) => (
              <div 
                key={meeting.id} 
                className="flex flex-col p-4 border-2 border-border bg-card rounded-[12px] shadow-retro-md hover:-translate-y-[2px] hover:shadow-retro-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 border-2 border-border bg-muted rounded-[8px]">
                    {meeting.type === 'video' ? <Video className="w-5 h-5 stroke-[2px]" /> : <Users className="w-5 h-5 stroke-[2px]" />}
                  </div>
                  <span className={cn(
                    "text-xs font-bold px-2 py-1 border-2 border-border rounded-[6px]",
                    meeting.date === "Hari Ini" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {meeting.date}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">{meeting.title}</h3>
                
                <div className="space-y-2 mt-auto pt-4 border-t-2 border-border/50 text-sm font-body text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{meeting.participants} Orang</span>
                    </div>
                    {meeting.hasNote ? (
                      <span className="flex items-center gap-1 text-primary font-bold text-xs">
                        <FileText className="w-3 h-3" /> Notulen Ada
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Plus className="w-3 h-3" /> Buat Notulen
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  )
}
