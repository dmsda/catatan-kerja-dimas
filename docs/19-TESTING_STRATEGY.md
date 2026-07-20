# Testing Strategy
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Objektif & Filosofi Pengujian
Sebagai sistem "Second Brain" yang menampung informasi kritis pribadi, integritas data (*zero data loss*) dan kecepatan adalah kunci. Pengujian ditekankan pada sinkronisasi *offline-to-online* yang sempurna dan fungsionalitas mutlak tanpa degradasi layar putih (Crash).

## 2. Dimensi Pengujian

### A. Unit Testing (Vitest)
Fokus pada fungsi-fungsi terisolasi yang mengelola logika bisnis murni tanpa merender antarmuka.
- **Target Cakupan (Target Coverage):** > 80% pada direktori `/lib`.
- **Komponen Kritis:**
  - Fungsi utilitas *Date & Time* (penjadwalan tenggat waktu tugas).
  - Algoritma pemecah tipe Markdown ke JSON (parser TipTap).
  - Logika indeks lokal *MiniSearch*.
  - Mekanisme rekonsiliasi sinkronisasi data *Last-Write-Wins*.

### B. Integration Testing
Memastikan ikatan antara React Server Components, Drizzle ORM, dan State Management lokal (Zustand) tidak bocor.
- **Mocking:** Melakukan tiruan lingkungan (Mock DB) SQLite di memori lokal (untuk mensimulasikan D1).
- **Test Case:** Memastikan sebuah tugas (Task) yang disimpan di basis data lokal berhasil dibaca oleh Drizzle dan di-render di tabel daftar harian tanpa galat tipe.

### C. End-to-End (E2E) Testing (Playwright)
Validasi skenario "Kehidupan Nyata" (User Flows).
- **Skenario 1 (Core Loop):** Buka aplikasi -> Ketik "Cmd+N" -> Isi Note -> Autosave -> Cek di *Recent Notes*.
- **Skenario 2 (Task Management):** Centang (*Check*) satu tugas di *Dashboard* -> Tugas harus tercoret -> Status diubah menjadi *Completed*.
- **Skenario 3 (Offline Resilience - Paling Penting):**
  1. Mulai sesi Playwright *online*.
  2. Alihkan jaringan browser ke *Offline Mode*.
  3. Buat catatan baru ("Catatan Luring").
  4. Aplikasi tidak boleh melempar halaman 500/Crash.
  5. Nyalakan jaringan ke *Online Mode*.
  6. Data "Catatan Luring" harus segera terlempar ke API (*Background Sync*).

### D. Accessibility (A11y) Testing
- **Audit Otomatis:** Menjalankan ekstensi `axe-core` atau verifikasi rasio *Lighthouse CI* sebagai blok langkah pipa pengerjaan otomatis (CI Pipeline).
- **Syarat Mutlak:** Bebas masalah kontras warna; atribut `aria-label` hadir pada semua ikon aksi interaktif; modal membatasi fokus tabbing (*focus trapping*).

### E. Performance Profiling
- **Batasan Skala:** Menginjeksi *database dummy* lokal berkapasitas `10.000` baris *Notes* panjang untuk memastikan komponen UI *List* dan algoritma pencari (*Command Palette*) tidak memicu perlambatan laju bingkai animasi (*frame drop* di bawah 60 FPS).
