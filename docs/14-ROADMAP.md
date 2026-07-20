# Product Roadmap
**Project Name:** Catatan Kerja Dimas
**Document Version:** 2.0.0 (Simplified Focus)

---

## Sprint 0: Foundation
- **Tujuan:** Membangun infrastruktur awal dan konfigurasi proyek.
- **Task Utama:**
  - Setup Next.js App Router & Tailwind CSS v4.
  - Setup pustaka shadcn/ui.
  - Pemetaan Design Tokens ke `globals.css`.
  - Layout dasar & penyetelan Theme (Light/Dark Mode).

## Sprint 1: App Shell
- **Tujuan:** Menyusun cangkang antarmuka yang akan membungkus seluruh aplikasi.
- **Task Utama:**
  - Sidebar dinamis & Header navigasi.
  - Konstruksi Dashboard statis.
  - Membangun antarmuka dasar Papan Editor dan Command Palette.

## Sprint 2: Core Features
- **Tujuan:** Fungsionalitas inti pencatatan.
- **Task Utama:**
  - Struktur hierarki: Notes (All Notes, Folder, Favorites, Archive, Trash).
  - Integrasi mesin TipTap Rich Text Editor (distraction-free).
  - Search (Pencarian lokal).
  - Fitur Autosave.

## Sprint 3: Productivity Features
- **Tujuan:** Menghidupkan entitas sekunder penunjang alur kerja produktif.
- **Task Utama:**
  - Tasks (Today, Upcoming, Completed, Reminder).
  - Calendar (Ikhtisar waktu).
  - Meeting (Jadwal pertemuan dan integrasi Notulen).

## Sprint 4: Infrastructure & Local First
- **Tujuan:** Konfigurasi tingkat lanjut, Bookmarks, dan kapabilitas Luring.
- **Task Utama:**
  - Bookmarks (Menyimpan referensi eksternal).
  - Settings (Appearance, Editor, Backup, Import, Export, Keyboard Shortcut).
  - Implementasi PWA.
  - Mode Luring (Offline Mode via IndexedDB).

## Sprint 5: Backend & Sync
- **Tujuan:** Verifikasi standar ketahanan kelas industrial dengan server cadangan.
- **Task Utama:**
  - Setup Cloudflare Workers + D1 + Drizzle.
  - Autentikasi ketat Edge Middleware.
  - Sinkronisasi latar belakang yang andal.
  - Optimasi performa dan Load Time.
