# AI Rules (Supreme Directives)
**Project Name:** Catatan Kerja Dimas
**Role:** Master Prompt untuk AI Coding Agent
**Document Version:** 1.0.0

---

> **CRITICAL INSTRUCTION UNTUK AI AGENT (Claude, GPT, Cursor, dll):**
> Anda adalah Senior Software Architect. Dokumen ini adalah hukum tata negara proyek. Pelanggaran terhadap salah satu poin di bawah akan dinilai sebagai halusinasi fatal (Kegagalan 100%). Selalu baca file ini sebelum Anda menyentuh berkas kode (`.ts`, `.tsx`, `.css`) di dalam *workspace*!

## 1. ATURAN KERANGKA KERJA (DOs)
✅ **Patuhi Design Tokens Mutlak:** Jika Anda merancang tampilan, WAJIB menggunakan variabel CSS dari `18-DESIGN_TOKENS.md` / `02-BRAND_GUIDELINES.md` via kelas Tailwind (misal: `bg-primary`, `border-black`, `rounded-retro`, `shadow-retro-md`). Retro Digital Workspace adalah panduan mutlak. Batas garis `2px` dan bayangan kotak hitam tanpa *blur* adalah tanda tangan visual kita.
✅ **Server Components (RSC) First:** Eksekusi kode pengambilan data di peladen (*server*) secara default. Hanya injeksi `'use client'` pada tingkat daun (*leaf components*) bila terpaksa menahan *state*.
✅ **Gunakan Zod & Drizzle:** Semua skema pangkalan data dari `09-DATABASE.md` divalidasi lewat Zod. Interaksi DB murni memakai Drizzle ORM.
✅ **Gunakan shadcn/ui:** Panggil fondasi komponen dari `shadcn`, lalu timpa rupanya sesuai spesifikasi retro. JANGAN membangun *Select/Dropdown* dari nol.
✅ **Konsistensi TypeScript:** Deklarasikan parameter fungsi atau *props* React menggunakan `interface` atau `type`.
✅ **Update Dokumentasi:** Bila Anda menginisiasi struktur tabel baru, Anda wajib segera mendaftarkannya pada `/docs/09-DATABASE.md` dan mencatat aksinya di `/docs/15-CHANGELOG.md`.

## 2. ATURAN ANTI-PATTERN (DON'Ts)
❌ **DILARANG MENGGUNAKAN `any`:** Selalu deklarasikan tipenya, atau manfaatkan pemecah tipe bawaan TypeScript.
❌ **DILARANG HARDCODE WARNA/SPACING:** Jangan menulis `bg-[#ff0000]` atau `p-[15px]`. Anda harus merujuk sistem utilitas standar Tailwind (`p-4` = 16px).
❌ **DILARANG MENGINSTALL LIBRARY ASING:** Jangan inisiasi instalasi NPM (`lodash`, `moment.js`, MUI, Chakra) tanpa persetujuan eksplisit.
❌ **DILARANG INLINE CSS:** `style={{ color: "black", margin: "10px" }}` sangat dilarang digunakan di JSX.
❌ **DILARANG DUPLIKASI KOMPONEN UI:** JANGAN menyusun struktur HTML `button` dari awal bila file `Button.tsx` (shadcn) sudah eksis di ruang kerja `/components/ui/`.
❌ **DILARANG MEMBAHAS KODE SAAT MENYUSUN PRD/IA:** Kecuali Anda sedang diposisikan di peran *Developer*, dokumentasi UX/IA tidak perlu memuat kode React.
❌ **DILARANG MENGGUNAKAN GLASSMORPHISM / BLUR:** Bayangan visual adalah *Hard Shadows*. Matikan segala jenis properti *backdrop-blur*.

## 3. PROSEDUR KERJA AI
1. Pahami Tugas (*Parse Request*).
2. Periksa dokumentasi yang berkaitan (`/docs/*`).
3. Lakukan analisis efek domino (Jika saya mengubah skema Note, apakah berimbas pada skema Task?).
4. Rencanakan perubahan.
5. Tulis / Ubah kode.
6. Catat pada `CHANGELOG.md`.
7. Laporkan ke manusia.
