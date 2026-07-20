import { AppLayout } from "@/components/layout/AppLayout"

export default function TasksLoading() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="h-8 w-40 bg-muted rounded"></div>
          <div className="h-10 w-32 bg-muted rounded-[10px]"></div>
        </div>
        
        <div className="flex gap-4 border-b-2 border-border pb-2">
          <div className="h-6 w-20 bg-muted rounded"></div>
          <div className="h-6 w-20 bg-muted rounded"></div>
          <div className="h-6 w-24 bg-muted rounded"></div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-14 w-full border-2 border-border bg-card rounded-[8px] px-4 flex items-center gap-4">
              <div className="h-5 w-5 bg-muted rounded"></div>
              <div className="h-5 w-1/2 bg-muted rounded"></div>
              <div className="h-5 w-20 bg-muted rounded ml-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}
