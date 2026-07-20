# Project Constitution (Master Rules)
**Project Name:** Catatan Kerja Dimas
**Role:** Single Source of Truth & AI Supreme Directives
**Document Version:** 1.0.0
**Date:** 20 July 2026

---

> **WARNING UNTUK AI AGENT:** Dokumen ini adalah Konstitusi Proyek. Anda WAJIB mematuhi seluruh aturan di dalam dokumen ini tanpa terkecuali sebelum menulis kode, mengubah arsitektur, atau menambah dependensi apa pun.

## 0. Brand Identity
**Nama Brand:** Catatan Kerja Dimas
**Design Style:** Retro Digital Workspace

**Brand Personality:**
- Produktif
- Minimalis
- Retro
- Cepat
- Fokus
- Rapi
- Human
- Personal

**Brand Colors (Single Source of Truth):**
- **Primary:** `#D90000`
- **Secondary:** `#FFEA93`
- **Accent:** `#8DB355`
- **Neutral:** `#000000`

## 1. Filosofi Produk
"Kecepatan, Privasi, dan Estetika."
Aplikasi ini dirancang untuk merespons secara instan, beroperasi secara luring penuh (offline-first), menjaga data tetap berada di bawah kendali absolut satu pengguna tunggal, dan memberikan pengalaman visual *retro* namun modern yang mendorong tingkat fokus maksimal.

## 2. Tujuan Aplikasi
Menciptakan *Personal Work Operating System* tanpa fitur kolaborasi, tanpa biaya langganan, dan tanpa kompleksitas yang tidak perlu, demi menjadi alat utama (*single source of truth*) produktivitas Dimas.

## 3. Prinsip Desain
- **Retro Digital Workspace:** Mengambil inspirasi dari OS klasik (Windows 95, Mac System 7, Terminal UNIX).
- **Non-Skeuomorphic:** Tidak menggunakan efek *glassmorphism*, *neumorphism*, atau bayangan berlebihan. Antarmuka harus tegas, struktural, namun terasa modern dan presisi.
- **Keyboard-Centric:** Navigasi utamanya mengandalkan *Command Palette* dan pintasan (*shortcuts*). Mouse adalah opsi sekunder.
- **Distraction-Free:** Antarmuka harus menyembunyikan elemen yang tidak perlu saat pengguna sedang mengetik/fokus.

## 4. Prinsip Pengembangan
- **Offline-First:** Aplikasi harus bisa hidup secara penuh tanpa koneksi internet.
- **Edge Computing:** Ketika terkoneksi, latensi harus seminimal mungkin menggunakan jaringan distribusi Edge.
- **Reusability Tinggi:** Tidak ada komponen UI yang diduplikasi. Setiap elemen harus dirancang modular.
- **Type Safety Maksimal:** Larangan mutlak menggunakan `any` pada TypeScript. Semua tipe dan skema harus divalidasi dengan ketat.
- **Single-Tenant Architecture:** Skema database dirancang tanpa tabel yang mengelola banyak pengguna secara kompleks (cukup satu otorisasi pemilik mutlak).

## 5. Aturan Pengambilan Keputusan
- Jika ada *trade-off* antara menambah fitur kolaborasi atau meningkatkan kecepatan lokal, **pilih kecepatan lokal**.
- Jika ada *trade-off* antara estetika modern yang berat (animasi berlebihan) dan *layout* sederhana yang instan, **pilih yang sederhana dan instan**.
- Setiap implementasi baru dan perubahan struktural tidak boleh sedikitpun merusak fungsi *offline-first*.

## 6. Tech Stack (TIDAK BOLEH DIUBAH)
Komponen teknologi inti ini **TIDAK BOLEH** diganti, dimodifikasi, atau digeser ke teknologi lain tanpa persetujuan tertulis secara eksplisit dari pengguna:
- **Framework Utama:** Next.js 16 (App Router)
- **Library UI Core:** React 19
- **Bahasa Pemrograman:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Backend/API:** Cloudflare Workers
- **Database:** Cloudflare D1
- **ORM:** Drizzle ORM
- **Hosting:** Cloudflare Pages
- **State Management:** Zustand (Client State), TanStack Query (Server State / Async)
- **Validation:** Zod
- **Form Handling:** React Hook Form
- **Offline Storage:** IndexedDB
- **Search Engine:** MiniSearch
- **Rich Text Editor:** TipTap

## 7. Daftar Dependensi yang Disetujui
- Library manipulasi waktu: `date-fns` atau `dayjs` (pilih salah satu dan gunakan secara konsisten).
- Ikonografi: `lucide-react`.
- Markdown Parser: `marked` atau `remark` (jika dibutuhkan konversi tambahan dari TipTap).
- Dilarang keras melakukan instalasi *library* di luar ekosistem yang disetujui di atas kecuali atas instruksi langsung dari pengguna.

## 8. Konvensi Penamaan (Naming Convention)
- **Files/Folders (React Components):** PascalCase (contoh: `CommandPalette.tsx`, `Button.tsx`).
- **Files/Folders (Utils, Hooks, Actions):** camelCase (contoh: `useDebounce.ts`, `formatDate.ts`).
- **Tabel Database (Drizzle):** snake_case, berbentuk jamak (contoh: `notes`, `tasks`).
- **Variabel/Fungsi:** camelCase (contoh: `fetchUserNotes`).
- **Konstanta Global/Environment:** UPPER_SNAKE_CASE (contoh: `MAX_UPLOAD_SIZE`, `API_ENDPOINT`).

## 9. Hal-Hal yang DILARANG KERAS
1. **DILARANG MENGGANTI ORM:** Drizzle ORM adalah pilihan mutlak. Jangan pernah menawarkan atau menggunakan Prisma, TypeORM, dll.
2. **DILARANG MENAMBAH LIBRARY PIHAK KETIGA TANPA ALASAN:** Jangan meng-install library UI tambahan (seperti MUI, Chakra UI, Ant Design). Tetap berpegang teguh pada Tailwind dan shadcn/ui.
3. **DILARANG MEMBUAT KOMPONEN DUPLIKAT:** Jangan membuat komponen `button.tsx` kustom mandiri jika sudah menginisialisasi `Button` dari shadcn/ui. Gunakan atau kembangkan komponen yang sudah ada.
4. **DILARANG MENGGUNAKAN `any` DI TYPESCRIPT:** Semua aliran data harus memiliki tipe yang jelas atau menggunakan tipe `unknown` yang kemudian divalidasi dengan Zod.
5. **DILARANG MENYELIPKAN INLINE CSS:** Selalu gunakan *utility classes* dari Tailwind CSS v4. Hindari membuat file `.css` terpisah kecuali untuk variabel global dan konfigurasi *base*.
6. **DILARANG MEMBUAT FITUR MULTI-USER:** Jangan membuat tabel `organizations` atau implementasi Role-Based Access Control (RBAC). Sistem ini eksklusif *single-tenant*.
7. **DILARANG MENGUBAH ARSITEKTUR HOSTING:** Jangan mencoba mengganti Cloudflare dengan Vercel, Netlify, atau setup Node.js tradisional tanpa izin mutlak.
