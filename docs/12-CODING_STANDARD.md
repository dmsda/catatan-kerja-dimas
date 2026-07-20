# Coding Standard
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Arsitektur Folder (Next.js App Router)
Keseragaman penataan laci kode (*repository*) harus dipegang teguh. DILARANG membuat direktori acak.
```text
/app               # Halaman routing, Layouts, Server Actions
/components
  /ui              # Komponen primitif shadcn (Button, Input) - JANGAN DIUBAH SEMBARANGAN
  /modules         # Komponen spesifik fitur (TaskCard, NoteEditor)
  /layout          # Komponen shell (Sidebar, Header)
/lib               # Fungsi utilitas, format tanggal, logika bisnis
/db                # Skema Drizzle ORM, koneksi D1, migrasi
/store             # Manajemen state global (Zustand)
/types             # Definisi TypeScript interface / type statis
```

## 2. Aturan TypeScript
- `strict: true` pada `tsconfig.json`.
- Penggunaan `any` secara tegas berstatus ILEGAL. Jika tidak tahu tipenya, gunakan `unknown` dan validasi menggunakan *Zod*.
- Ekspor tipe menggunakan struktur antar-muka (*Interface*) jika diperluas, atau tipe (*Type*) untuk *Union/Intersection*.

## 3. Komponen React & Server Components (RSC)
- **Komposisi Default:** Anggap semua komponen adalah **Server Components** (*RSC*) secara bawaan. Bebas memanggil Drizzle langsung di dalam komponen ini untuk injeksi data tanpa API.
- **Komponen Interaktif:** Tambahkan deklarasi `"use client"` HANYA pada *leaf components* (ujung rantai) yang membutuhkan status `useState`, `useEffect`, atau interaksi klik (`onClick`).
- **Pemisahan:** Pisahkan komponen pembungkus halaman (RSC) dengan komponen antarmuka yang berat (*Client*).

## 4. Penamaan (Naming Conventions)
- **File Komponen (`.tsx`):** PascalCase (cth: `NoteEditor.tsx`, `CommandPalette.tsx`).
- **File Utilitas/Kait (`.ts`):** camelCase (cth: `useDebounce.ts`, `formatDate.ts`).
- **Variabel/Fungsi:** camelCase (cth: `fetchTasks`, `isSidebarOpen`).
- **Konstanta / Token Konfigurasi:** UPPER_SNAKE_CASE (cth: `MAX_UPLOAD_SIZE`, `DEFAULT_THEME`).

## 5. CSS & Styling (Tailwind v4)
- **Jangan Menulis Inline CSS:** Semua bentuk gaya visual diinjeksi via `className` Tailwind.
- **Design Tokens:** Gunakan rujukan variabel CSS untuk warna `bg-primary`, `text-secondary`, dan batas pinggir `border-neutral-900`. Dilarang *hardcode* (`bg-[#D90000]`).
- **CN Utility:** Gabungkan dan pecahkan konflik *class* Tailwind lintas komponen (saat dioverride) melalui utilitas `cn()` bawaan shadcn.

## 6. Linting & Formatting
- **ESLint & Prettier:** Jalankan pada mode paksa sebelum melakukan *commit* (`pre-commit hook`).
- **Impor Bersih:** Kelompokkan *import statement* (React dulu, lalu Pustaka Pihak Ketiga, lalu Komponen Internal `/components`, dan terakhir Utilitas `/lib`).

## 7. Penulisan Pesan Commit (Git)
Gunakan *Conventional Commits*:
- `feat: menambahkan fitur Command Palette lokal`
- `fix: memperbaiki error margin negatif pada Editor`
- `refactor: membersihkan skema Drizzle pada modul Task`
- `docs: memperbarui 01-PRD.md dan Brand Guidelines`
