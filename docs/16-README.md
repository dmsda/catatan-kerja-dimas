# Catatan Kerja Dimas
**Personal Work Operating System**

Aplikasi produktivitas harian berarsitektur *Offline-First* dan *Single-Tenant* yang direkayasa murni untuk menunjang kecepatan pikir, fokus kerja, dan kepemilikan data lokal absolut. Dirancang menggunakan filosofi antarmuka **Retro Digital Workspace** yang mengedepankan utilitas fungsional industrial di atas tren estetika dekoratif.

## 🚀 Tech Stack Utama
- **Framework:** Next.js 16 (App Router + RSC)
- **Language:** TypeScript (Strict Mode Mutlak)
- **Styling:** Tailwind CSS v4 + Ekstraksi shadcn/ui
- **Database:** Cloudflare D1 (Dialek SQLite via Drizzle ORM)
- **Local Storage:** IndexedDB (Sinkronisasi Offline-First)
- **State Management:** Zustand (Client) + TanStack Query (Server)
- **Editor:** TipTap (Headless Rich Text Engine)
- **Search Engine:** MiniSearch (100% Client-side index)

## 📂 Struktur Dokumentasi (Single Source of Truth)
Seluruh instruksi desain, permodelan basis data, gaya bahasa (UX Copy), hingga Undang-Undang AI Agent terkunci di dalam direktori `/docs`. 
**PERINGATAN UNTUK AGEN AI:** DILARANG keras menyentuh komponen, merakit berkas UI, atau memasang *library* pihak ketiga sebelum membaca fondasi arsitektural ini:
1. `00-PROJECT_CONSTITUTION.md` (Filosofi & Tabu Absolut)
2. `01-PRD.md` (Kebutuhan Fitur Modular Produk)
3. `03-DESIGN_SYSTEM.md` & `18-DESIGN_TOKENS.md` (Hukum Visual)
4. `09-DATABASE.md` (Skema Relasional Entitas)
5. `13-AI_RULES.md` (Panduan Kewajiban & Larangan Kode AI)

## ⚙️ Menjalankan Pengembangan Lokal
```bash
# 1. Pasang dependensi ekosistem
npm install

# 2. Setup pangkalan data lokal (Simulasi Wrangler/D1)
npm run db:setup
npm run db:migrate

# 3. Nyalakan mesin server pengembangan
npm run dev
```

## 🔒 Security & Privacy (Single-Tenant)
Proyek ini DEDIKASI TUNGGAL untuk satu pemilik (Single-Tenant). Tidak memiliki kerumitan arsitektur tabel multi-pengguna atau sistem keanggotaan/organisasi (RBAC). Data dilintaskan dan diselaraskan ke peramban pemiliknya melewati lapisan Cloudflare Edge Middleware yang terenkripsi. Hak atas data 100% bersemayam pada disk pemilik.
