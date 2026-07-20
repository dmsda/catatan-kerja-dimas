# Information Architecture (IA)
**Project Name:** Catatan Kerja Dimas

Dokumen ini menjelaskan struktur navigasi, hierarki data, dan pengorganisasian menu pada aplikasi.

---

## 1. Sitemaps & Navigasi Utama

Aplikasi menggunakan pola **Sidebar Navigasi Tetap (Fixed Left Sidebar)**.

### Hirarki Menu (Simplified Focus)
```text
Dashboard

Notes
├── All Notes
├── Folder
├── Favorites
├── Archive
└── Trash

Tasks
├── Today
├── Upcoming
├── Completed
└── Reminder

Workspace
├── Meetings
├── Calendar
└── Bookmarks

Settings
├── Appearance
├── Editor
├── Backup
├── Import
├── Export
└── Keyboard Shortcut
```

---

## 2. Struktur Data Layar Utama

### Dashboard (`/`)
Layar pijakan pertama. Modul yang tampil:
1. **Greeting & Ringkasan:** (Mis: "Anda memiliki 3 tugas tertunda").
2. **Catatan Terakhir:** Akses cepat ke dokumen yang baru saja diedit.
3. **Tugas Hari Ini:** Daftar periksa cepat tanpa harus masuk ke menu Tasks.

### Modul Catatan (`/notes`)
- **Tampilan:** Daftar ringkas berurut waktu, fungsi cari cepat, filter folder.
- **Layar Spesifik (`/notes/[id]`):** Layar editor purna (*Full-screen editor*) dengan tipografi bebas distraksi. Auto-save ke IndexedDB setiap 2 detik.

### Modul Tugas (`/tasks`)
- **Tampilan:** Tata letak tipe Daftar *(List)* yang mencantumkan kotak centang (Checkbox).
- Mengakomodasi metadata: Kategori, Prioritas (Merah/Kuning/Hijau), dan Tenggat Waktu (Reminder).

### Modul Ekstra
- **Meetings (`/meetings`):** Daftar kronologis jadwal harian. Menautkan jadwal ke Catatan spesifik (Notulen).
- **Calendar (`/calendar`):** Ikhtisar penanggalan untuk melihat tenggat waktu skala makro (Tugas & Rapat).
- **Bookmarks (`/bookmarks`):** Perpustakaan tautan esensial.

---

## 3. Aturan Pengalaman Pengguna (UX Rules)

1. **Kedalaman Akses Maksimal 3 Klik:** Pengguna tidak boleh mengklik lebih dari tiga kali untuk membuat dan mulai mengetik di dalam Catatan Baru.
2. **Pola Universal Toolbar:** Setiap halaman utama (Notes, Tasks, Meetings) wajib memiliki bilah fungsi di sudut kanan atas yang berisi: Tombol "Tambah Baru".
3. **Penyusutan (*Collapsible*):** Pada peramban tablet atau seluler, Sidebar disembunyikan dalam menu hamburger.
