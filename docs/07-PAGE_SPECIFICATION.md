# Page Specification
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Dashboard (`/dashboard`)
Pusat kendali dan layar ringkasan awal saat aplikasi dibuka.
**Elemen Wajib:**
- **Quick Note / Quick Task Input:** Kotak input tunggal di bagian paling atas untuk menampung teks pendek secara instan.
- **Today's Tasks Widget:** Daftar tugas yang ditargetkan selesai hari ini. Mendukung centang langsung (*checkbox*) untuk menyelesaikan tugas tanpa pindah halaman.
- **Recent Notes Widget:** Daftar tautan ke 5-10 catatan yang paling terakhir dimodifikasi.
- **Statistics Widget:** Area matriks performa (contoh: Jumlah catatan bulan ini, persentase penyelesaian tugas, dan grafik garis harian yang simpel).
- **Shortcut Cheatsheet:** Pengingat panduan *keyboard shortcut* esensial (Cmd+K, Cmd+N, dll).

## 2. Notes Index (`/notes`)
Halaman direktori daftar seluruh catatan.
**Elemen Wajib:**
- **Header Actions:** Tombol utama "New Note (Cmd+N)", tombol "Filter", dan *dropdown* "Sort" (Terbaru, Terlama, Alfabetis).
- **Note Card / List Row:** Mengandung judul catatan, kutipan pendek baris pertama (*excerpt*), waktu terakhir dimodifikasi, dan nama folder. Menggunakan gaya solid border hitam 2px (Retro Style).
- **Folder Tree:** Area di sisi navigasi untuk menyaring daftar catatan berdasarkan hierarki folder.

## 3. Editor Catatan (`/notes/[id]`)
Ruang khusus menulis teks panjang (*focused writing*).
**Elemen Wajib:**
- **Top Bar:** Tombol "Back", *dropdown selector* untuk Folder, teks indikator sinkronisasi ("Menyimpan...", "Tersimpan Lokal", "Sinkronisasi Berhasil"), dan menu opsi (... ) yang memuat Arsip, Ekspor PDF/MD, dan Hapus.
- **TipTap Canvas:** Area editor teks sentral. Lebar maksimal 800px (terpusat) agar teks nyaman dibaca secara ergonomis.
- **Meta Properties Panel:** (Dapat dilipat/disembunyikan) Area input spesifik untuk mengedit Tag, tenggat waktu tugas yang berkaitan dengan catatan, dan pengingat.

## 4. Task Management (`/tasks`)
Halaman daftar tugas terdedikasi, berfokus pada manajemen aksi.
**Elemen Wajib:**
- **Task Input (Header):** Masukan teks besar untuk penambahan tugas baru.
- **Task List (Tabs):** Navigasi berbasis tab (Hari Ini, Minggu Ini, Belum Selesai, Selesai).
- **Task Item Row:** *Checkbox* interaktif besar (Hitam/Putih), Teks tugas utama, Indikator/Badge Prioritas (Merah/Kuning/Hijau), label tenggat waktu (*Due date*).
- **Task Detail Drawer:** Panel tambahan di sebelah kanan (muncul jika sebuah tugas diklik), untuk menambah sub-tugas (*sub-tasks*), deskripsi panjang, dan tombol Hapus (Warna Merah).

## 5. Command Palette (Global UI)
Modal pencarian super dan peluncur aksi (Action Launcher) yang dapat dipanggil di seluruh rute.
**Elemen Wajib:**
- **Search Input:** Input masif di tengah layar (Dialog sentral dengan *Shadow Level 2: 8px 8px 0 hitam*).
- **Results List:** Daftar hasil berpaginasi atau scroll, dipisah berdasarkan modul (Notes, Tasks, Navigation).
- **Highlighting:** Teks spesifik dari kata kunci yang dicari disorot dengan warna kuning (`#FFEA93`).
- **Keyboard Navigation:** Navigasi 100% tanpa mouse (`Arrow Up/Down` dan `Enter`).
