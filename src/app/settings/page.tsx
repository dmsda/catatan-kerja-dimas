"use client"

import * as React from "react"
import { AppLayout } from "@/components/layout/AppLayout"
import { Button } from "@/components/ui/button"
import { Palette, FileText, HardDriveDownload, Download, Upload, Keyboard, Laptop, AlertTriangle, Database } from "lucide-react"
import { cn } from "@/lib/utils"

const SETTINGS_TABS = [
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'editor', label: 'Editor', icon: FileText },
  { id: 'backup', label: 'Backup', icon: HardDriveDownload },
  { id: 'import', label: 'Import', icon: Upload },
  { id: 'export', label: 'Export', icon: Download },
  { id: 'sync', label: 'Cloudflare Sync', icon: Database },
  { id: 'keyboard', label: 'Keyboard Shortcut', icon: Keyboard },
]

import { useSettingsStore } from "@/store/useSettingsStore"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = React.useState('appearance')
  const syncPin = useSettingsStore(state => state.syncPin)
  const setSyncPin = useSettingsStore(state => state.setSyncPin)

  const handleExportData = () => {
    try {
      const data = {
        notes: localStorage.getItem('dimas-notes-storage'),
        tasks: localStorage.getItem('dimas-tasks-storage'),
        bookmarks: localStorage.getItem('dimas-bookmarks-storage')
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `dimas-os-backup-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Gagal mengekspor data", error)
    }
  }

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string
        const data = JSON.parse(content)
        
        if (data.notes) localStorage.setItem('dimas-notes-storage', data.notes)
        if (data.tasks) localStorage.setItem('dimas-tasks-storage', data.tasks)
        if (data.bookmarks) localStorage.setItem('dimas-bookmarks-storage', data.bookmarks)
        
        alert("Data berhasil diimpor! Halaman akan dimuat ulang.")
        window.location.reload()
      } catch (error) {
        alert("Gagal membaca file backup. Pastikan formatnya benar.")
      }
    }
    reader.readAsText(file)
  }

  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-heading font-bold">Settings</h1>
          <p className="text-muted-foreground font-body text-sm mt-1">
            Konfigurasi pusat sistem operasi kerja pribadi Anda.
          </p>
        </div>

        {/* Settings Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Settings Sidebar */}
          <div className="w-full md:w-[250px] flex-shrink-0 flex flex-col gap-1">
            {SETTINGS_TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-[8px] text-sm font-bold text-left transition-all border-2",
                    isActive 
                      ? "bg-secondary text-secondary-foreground border-border shadow-retro-sm" 
                      : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border"
                  )}
                >
                  <Icon className="w-4 h-4 stroke-[2px]" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Settings Content */}
          <div className="flex-1">
            
            {activeTab === 'appearance' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div>
                  <h2 className="text-xl font-heading font-bold mb-2">Tema Aplikasi</h2>
                  <p className="text-sm font-body text-muted-foreground mb-4">
                    Pilih skema warna antarmuka. Sistem ini mendukung Mode Gelap murni tanpa kontras blur.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Theme Cards (Light, Dark, System) */}
                    <div className="border-2 border-border p-4 rounded-[10px] bg-card cursor-pointer shadow-retro-sm hover:-translate-y-[2px] transition-transform">
                      <div className="font-bold text-sm text-center">Terang</div>
                    </div>
                    <div className="border-2 border-border p-4 rounded-[10px] bg-card cursor-pointer shadow-retro-sm ring-2 ring-primary ring-offset-2 ring-offset-background hover:-translate-y-[2px] transition-transform">
                      <div className="font-bold text-sm text-center">Gelap (Terminal)</div>
                    </div>
                    <div className="border-2 border-border p-4 rounded-[10px] bg-card cursor-pointer shadow-retro-sm hover:-translate-y-[2px] transition-transform">
                      <div className="font-bold text-sm text-center">Ikuti Sistem</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'export' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="p-6 border-2 border-border rounded-[12px] bg-card shadow-retro-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-[8px] border-2 border-border">
                      <Download className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold">Ekspor Data Lokal</h2>
                      <p className="text-sm text-muted-foreground">Unduh seluruh catatan, tugas, dan tautan dalam format JSON.</p>
                    </div>
                  </div>
                  
                  <p className="text-sm font-body mb-6 p-4 bg-muted border-2 border-border rounded-[8px]">
                    Karena aplikasi ini bersifat Offline-First dan menyimpan data di peramban Anda, 
                    sangat disarankan untuk melakukan ekspor data secara berkala sebagai bentuk cadangan (Backup) luring.
                  </p>

                  <Button variant="default" onClick={handleExportData}>
                    <Download className="w-4 h-4 mr-2" />
                    Unduh File JSON
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'import' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="p-6 border-2 border-destructive/20 rounded-[12px] bg-destructive/5 shadow-none">
                  <div className="flex items-center gap-3 mb-4 text-destructive">
                    <div className="p-2 bg-background rounded-[8px] border-2 border-destructive/20">
                      <Upload className="w-6 h-6 stroke-[2px]" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold">Impor Data Lokal</h2>
                      <p className="text-sm opacity-80">Timpa seluruh data saat ini dengan file cadangan.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 items-start p-4 mb-6 bg-background border-2 border-destructive/20 rounded-[8px]">
                    <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-sm font-body text-destructive">
                      <strong>Peringatan Berbahaya:</strong> Mengimpor data akan menimpa dan menghapus seluruh catatan dan tugas yang ada di peramban Anda saat ini secara permanen. Pastikan Anda mengimpor berkas JSON yang tepat.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold">Pilih berkas JSON (.json)</label>
                    <input 
                      type="file" 
                      accept=".json"
                      onChange={handleImportData}
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-[8px] file:border-2 file:border-border
                        file:text-sm file:font-bold file:bg-background file:text-foreground
                        hover:file:bg-muted cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sync' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="p-6 border-2 border-border rounded-[12px] bg-card shadow-retro-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-secondary rounded-[8px] border-2 border-border">
                      <Database className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-xl font-heading font-bold">Cloudflare D1 Sync</h2>
                      <p className="text-sm text-muted-foreground">Arsitektur Sinkronisasi Luring</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-background border-2 border-border rounded-[8px]">
                      <span className="font-bold text-sm">Status Luring (IndexedDB/Local)</span>
                      <span className="text-xs font-bold bg-green-500/20 text-green-500 px-2 py-1 rounded-[4px] border border-green-500/50">Terisolasi & Aman</span>
                    </div>
                    
                    <div className="p-4 bg-muted border-2 border-border rounded-[8px] space-y-3">
                      <label className="text-sm font-bold block">PIN Sinkronisasi Utama</label>
                      <input 
                        type="password"
                        placeholder="Masukkan kunci otorisasi backend..."
                        value={syncPin}
                        onChange={(e) => setSyncPin(e.target.value)}
                        className="w-full bg-background border-2 border-border rounded-[8px] px-3 h-10 font-bold outline-none focus:border-primary"
                      />
                      <p className="text-xs text-muted-foreground">PIN ini digunakan sebagai Bearer Token saat melempar data ke Cloudflare D1. Jika salah, server akan menolak akses.</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-border flex justify-end">
                    <Button variant="default" onClick={async () => {
                      if (!syncPin) {
                        alert("Harap masukkan PIN Sinkronisasi terlebih dahulu.")
                        return
                      }
                      
                      try {
                        const dataPayload = {
                          type: "all_data",
                          data: {
                            notes: localStorage.getItem('dimas-notes-storage'),
                            tasks: localStorage.getItem('dimas-tasks-storage'),
                            bookmarks: localStorage.getItem('dimas-bookmarks-storage')
                          }
                        }
                        const res = await fetch('/api/sync', {
                          method: 'POST',
                          headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${syncPin}` 
                          },
                          body: JSON.stringify(dataPayload)
                        })
                        
                        if(res.ok) {
                          alert("Data tersinkronisasi ke D1 dengan sempurna!")
                        } else if(res.status === 401) {
                          alert("Akses Ditolak: PIN Sinkronisasi salah.")
                        } else {
                          alert(`Gagal: ${res.statusText}`)
                        }
                      } catch (e) {
                        alert("Gagal menghubungi Server API.")
                      }
                    }}>
                      Sinkronkan Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
