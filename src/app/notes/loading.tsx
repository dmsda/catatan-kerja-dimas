import { AppLayout } from "@/components/layout/AppLayout"

export default function NotesLoading() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="h-8 w-48 bg-muted rounded"></div>
          <div className="h-10 w-32 bg-muted rounded-[10px]"></div>
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-20 w-full border-2 border-border bg-card rounded-[12px] p-4 flex flex-col justify-center space-y-2">
              <div className="h-5 w-1/3 bg-muted rounded"></div>
              <div className="h-4 w-1/4 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
