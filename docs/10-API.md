# API & Sync Architecture
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Arsitektur Komunikasi
Aplikasi ini tidak menggunakan API tradisional berbasis REST yang menembak ke server Node.js. Karena *Single-Tenant* dan *Offline-First*, pendekatan utamanya adalah:
**Server Actions (Next.js) + Cloudflare Workers RPC + TanStack Query + IndexedDB.**

## 2. Pola Sinkronisasi (Offline-First Sync)
1. **Mutasi Lokal Cepat:** Ketika pengguna membuat `Catatan` baru, TanStack Query secara instan menyimpan datanya ke browser IndexedDB dan memperbarui UI seketika (Optimistic UI).
2. **Antrean Latar Belakang (Queue):** Permintaan jaringan (`POST`, `PATCH`, `DELETE`) dikirim ke tumpukan antrean sinkronisasi pekerja web (*Service Worker*).
3. **Penyelarasan Cloud (Sync):** Jika ada koneksi, tumpukan dieksekusi secara berurutan ke Cloudflare D1. Resolusi konflik menggunakan metode *Last-Write-Wins* berbasis *Timestamp* (Kolom `updated_at`).

## 3. Daftar Endpoint (Server Actions / API Routes)
Semua fungsi akan di-ekspos baik via Next.js Server Actions (RSC) atau endpoint API standar (`/api/...`) untuk komunikasi peramban klien.

### A. Notes API (`/api/notes`)
- `GET /` : Menarik riwayat sinkronisasi parsial (*Delta sync*) sejak _timestamp_ terakhir.
- `POST /` : Menerima *payload* objek catatan tunggal/banyak.
- `PATCH /:id` : Memperbarui judul/isi dengan struktur delta parsial.
- `DELETE /:id` : Mem-flag status `is_archived` atau *hard delete*.

### B. Tasks API (`/api/tasks`)
- `GET /` : Menarik seluruh tugas harian (status non-done).
- `POST /` : Menyimpan tugas baru.
- `PATCH /:id/status` : Beralih *toggle* status ceklis dengan cepat.

### C. Search Endpoint (`/api/search`)
- Mayoritas pencarian dilakukan murni di *client-side* (MiniSearch). API ini hanya diakses pada pemuatan pertama (*cold boot*) untuk membangun indeks pencarian dari seluruh korpus DB.

## 4. Validasi Data (Zod)
Sebelum masuk ke Drizzle ORM, setiap aliran data dari klien WAJIB menabrak tembok pertahanan Zod (Validasi *Schema*).
Contoh:
```typescript
const NoteSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(255).default("Untitled"),
  content_json: z.string().optional(),
  folder_id: z.string().uuid().nullable(),
  is_pinned: z.boolean().default(false),
});
```

## 5. Standar Respons Kesalahan (Error Handling)
Format penanganan standar untuk menolak anomali sistem:
```json
{
  "success": false,
  "error_code": "VALIDATION_FAILED",
  "message": "Judul catatan melebihi 255 karakter.",
  "data": null
}
```
