# Wireframe (Text-Based)
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Layout Global (App Shell)
Semua halaman akan berjalan di dalam kerangka navigasi dasar ini.

```text
+-----------------------------------------------------------------------------+
| [Cmd+K] Search...                                     [User Avatar/Settings]|
+-----------------------------------------------------------------------------+
|                 |                                                           |
|  SIDEBAR        |   MAIN CONTENT AREA                                       |
|                 |                                                           |
|  Dashboard      |   [ Header Halaman (Misal: Semua Catatan) ]               |
|                 |                                                           |
|  Catatan        |   +---------------------------------------------------+   |
|   - Folder      |   |                                                   |   |
|   - Arsip       |   |                                                   |   |
|                 |   |  Konten Dinamis (List / Grid / Editor)            |   |
|  Task           |   |                                                   |   |
|   - Hari Ini    |   |                                                   |   |
|   - Selesai     |   |                                                   |   |
|                 |   +---------------------------------------------------+   |
|  Artikel        |                                                           |
|  Meeting        |                                                           |
|  Knowledge      |                                                           |
|  Prompt         |                                                           |
|  Bookmark       |                                                           |
|  Files          |                                                           |
|                 |                                                           |
|  ---            |                                                           |
|  Settings       |                                                           |
+-----------------+-----------------------------------------------------------+
```

## 2. Dashboard (`/dashboard`)
Halaman ringkasan pusat.

```text
-------------------------------------------------------------------------------
Dashboard
-------------------------------------------------------------------------------

[ Quick Note Input (Tekan Enter untuk menyimpan cepat) ]

+--------------------------+  +--------------------------+
| Today's Tasks      [1/5] |  | Recent Notes             |
|                          |  |                          |
| [x] Task 1 (Selesai)     |  | - Konstitusi Proyek      |
| [ ] Task 2 (Merah/Tinggi)|  | - Ide Desain Baru        |
| [ ] Task 3 (Hijau/Rendah)|  | - Draft Email Klien      |
+--------------------------+  +--------------------------+

+--------------------------+  +--------------------------+
| Statistics               |  | Shortcuts / Reminders    |
|                          |  |                          |
| Notes Created: 142       |  | Cmd+N : New Note         |
| Tasks Done: 54           |  | Cmd+K : Search           |
| Streak: 5 Days           |  | Cmd+T : New Task         |
+--------------------------+  +--------------------------+
```

## 3. Editor Catatan (`/notes/[id]`)
Ruang kerja utama yang bersih, berpusat pada penulisan (*distraction-free*).

```text
-------------------------------------------------------------------------------
[< Back]   [Folder: Project X]   [Status: Saved (Hijau)]        [Delete] [Archive]
-------------------------------------------------------------------------------
                                                                      
  # Judul Catatan Utama                                               
                                                                      
  Mulai mengetik di sini...                                           
                                                                      
  (Isi TipTap Rich Text Editor)                                       
  - List item 1                                                       
  - List item 2                                                       
                                                                      
  (Semua elemen antarmuka di luar kertas ini disamarkan/hilang saat mengetik)
                                                                      
```

## 4. Manajemen Tugas (`/tasks`)

```text
-------------------------------------------------------------------------------
Tasks
-------------------------------------------------------------------------------

[ + Tambah Tugas Baru... ]

[ Tab: Hari Ini ] [ Tab: Minggu Ini ] [ Tab: Selesai ]

+-----------------------------------------------------------------------------+
| [ ] Menyelesaikan desain dokumen UI Guidelines               [Badge: Tinggi]|
+-----------------------------------------------------------------------------+
| [ ] Membayar tagihan domain bulanan                          [Badge: Sedang]|
+-----------------------------------------------------------------------------+
| [x] Membaca dokumentasi arsitektur D1                        [Badge: Selesai]
+-----------------------------------------------------------------------------+
```
