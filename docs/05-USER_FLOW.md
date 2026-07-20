# User Flow
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Flow Utama: Core Productivity (Notes)
Alur ketika Dimas membuka aplikasi untuk pertama kali dan membuat catatan baru.

```text
Buka Aplikasi
      ↓
(Jika belum login) Tampil Halaman Login Otentikasi Tunggal
      ↓
Dashboard (Melihat Ringkasan Hari Ini)
      ↓
Tekan Shortcut `Cmd+N` (Atau klik tombol "New Note")
      ↓
Halaman Editor Terbuka (Fokus tanpa gangguan)
      ↓
Mengetik Catatan (Sistem melakukan Autosave ke IndexedDB lokal setiap beberapa detik)
      ↓
Menambahkan Label / Memasukkan ke dalam Folder (opsional)
      ↓
Kembali ke Dashboard / Pindah ke Menu Lain (Sinkronisasi D1 berjalan transparan di background)
```

## 2. Flow: Manajemen Tugas (Tasks)
Alur pengelolaan tugas mulai dari pembuatan hingga penyelesaian.

```text
Berada di Halaman Dashboard atau /tasks
      ↓
Ketik pada Input "Quick Task" lalu tekan Enter
      ↓
Tugas otomatis muncul di daftar "Hari Ini" dengan status "To Do"
      ↓
(Opsional) Klik pada Tugas untuk membuka rincian di sisi kanan (Drawer/Panel)
      ↓
Menambahkan Deskripsi, Sub-task, atau mengubah Prioritas
      ↓
Selesai Bekerja → Klik Checkbox (Status berubah menjadi "Completed")
      ↓
Tugas dicoret, otomatis pindah ke tab "Selesai", progress harian di Dashboard meningkat
```

## 3. Flow: Pencarian Instan (Search)
Alur penemuan kembali (retrieval) informasi dari seluruh basis data.

```text
Sedang berada di halaman mana pun
      ↓
Tekan `Cmd+K`
      ↓
Command Palette Muncul (Modal sentral dengan bayangan tebal gaya retro)
      ↓
Ketik kata kunci (misalnya "Project X")
      ↓
Hasil pencarian (didukung MiniSearch lokal) muncul secara instan < 50ms
      ↓
Gunakan Panah Atas/Bawah (Keyboard) untuk memfokuskan kursor pada hasil
      ↓
Tekan `Enter`
      ↓
Dialihkan ke Halaman Editor Catatan / Rincian Tugas yang dicari
```

## 4. Flow: Offline Mode
Alur transisi jaringan secara mulus ketika koneksi internet hilang.

```text
Koneksi Internet Terputus
      ↓
Toast notifikasi warna Kuning muncul: "Bekerja secara offline. Perubahan disimpan lokal."
      ↓
Dimas tetap bisa membuat, mengedit, dan menghapus catatan (Aksi ditandai dengan flag 'pending')
      ↓
Koneksi Internet Kembali Terhubung
      ↓
Sistem otomatis mengeksekusi semua perubahan 'pending' ke API (menggunakan sinkronisasi latar)
      ↓
Toast notifikasi warna Hijau muncul: "Semua data telah disinkronkan."
```
