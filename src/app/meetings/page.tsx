"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { CalendarDays, Plus, Clock, Users, FileText, Video, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMeetingsStore } from "@/store/useMeetingsStore"

export default function MeetingsPage() {
  const [filter, setFilter] = React.useState<'upcoming' | 'past'>('upcoming')
  const meetings = useMeetingsStore(state => state.meetings)
  const toggleNoteStatus = useMeetingsStore(state => state.toggleNoteStatus)
  const deleteMeeting = useMeetingsStore(state => state.deleteMeeting)

  const isPast = (date: number) => {
    const today = new Date().setHours(0,0,0,0)
    const meetingDate = new Date(date).setHours(0,0,0,0)
    return meetingDate < today
  }

  const isToday = (date: number) => {
    const today = new Date().setHours(0,0,0,0)
    const meetingDate = new Date(date).setHours(0,0,0,0)
    return meetingDate === today
  }

  const displayedMeetings = meetings
    .filter(m => filter === 'upcoming' ? !isPast(m.date) : isPast(m.date))
    .sort((a, b) => filter === 'upcoming' ? a.date - b.date : b.date - a.date)

  const formatMeetingDate = (date: number) => {
    if (isToday(date)) return "Hari Ini"
    return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }

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
        {displayedMeetings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-border rounded-[12px] bg-card/50">
            <CalendarDays className="w-12 h-12 mb-4 text-muted-foreground stroke-[2px]" />
            <h3 className="text-xl font-heading font-bold mb-2">Tidak ada jadwal rapat</h3>
            <p className="text-sm font-body text-muted-foreground mb-6 max-w-sm">
              Kalender Anda bersih. Gunakan waktu untuk fokus pada deep work.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedMeetings.map((meeting) => (
              <div 
                key={meeting.id} 
                className="group flex flex-col p-4 border-2 border-border bg-card rounded-[12px] shadow-retro-md hover:-translate-y-[2px] hover:shadow-retro-lg transition-all relative"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive" onClick={() => deleteMeeting(meeting.id)}>
                    <Trash2 className="w-4 h-4 stroke-[2px]" />
                  </Button>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 border-2 border-border bg-muted rounded-[8px]">
                    {meeting.type === 'video' ? <Video className="w-5 h-5 stroke-[2px]" /> : <Users className="w-5 h-5 stroke-[2px]" />}
                  </div>
                  <span className={cn(
                    "text-xs font-bold px-2 py-1 border-2 border-border rounded-[6px] mr-8",
                    isToday(meeting.date) ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {formatMeetingDate(meeting.date)}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2 pr-6">{meeting.title}</h3>
                
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
                    <button 
                      onClick={() => toggleNoteStatus(meeting.id)}
                      className="focus:outline-none hover:opacity-80 transition-opacity"
                    >
                      {meeting.hasNote ? (
                        <span className="flex items-center gap-1 text-primary font-bold text-xs">
                          <FileText className="w-3 h-3" /> Notulen Ada
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Plus className="w-3 h-3" /> Buat Notulen
                        </span>
                      )}
                    </button>
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
