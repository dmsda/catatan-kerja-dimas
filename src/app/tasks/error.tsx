"use client"

import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

export default function TasksError({
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
        <AlertTriangle className="w-16 h-16 text-destructive stroke-[2px]" />
        <h2 className="text-2xl font-heading font-bold text-destructive">Galat Daftar Tugas</h2>
        <p className="text-muted-foreground font-body max-w-md">
          Sistem gagal mensinkronisasi daftar tugas Anda. Data aman tersimpan di pangkalan data luring.
        </p>
        <Button variant="destructive" onClick={() => reset()} className="mt-4">
          Muat Ulang Modul
        </Button>
      </div>
    </AppLayout>
  )
}
