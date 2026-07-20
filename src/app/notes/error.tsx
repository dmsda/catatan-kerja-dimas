"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { AlertOctagon } from "lucide-react"
import { useEffect } from "react"

export default function NotesError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
        <AlertOctagon className="w-16 h-16 text-destructive stroke-[2px]" />
        <h2 className="text-2xl font-heading font-bold text-destructive">Gagal Memuat Catatan</h2>
        <p className="text-muted-foreground font-body max-w-md">
          Sistem tersandung saat membaca repositori luring Anda. Data Anda aman secara lokal.
        </p>
        <Button variant="destructive" onClick={() => reset()} className="mt-4">
          Muat Ulang
        </Button>
      </div>
    </AppLayout>
  )
}
