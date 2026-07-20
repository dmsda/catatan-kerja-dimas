# Product Requirements Document (PRD)

**Project Name:** Catatan Kerja Dimas
**Tagline:** Personal Work Operating System
**Document Version:** 2.0.0

---

## 1. Product Overview
**Catatan Kerja Dimas** adalah aplikasi web pribadi yang dirancang untuk menjadi pusat aktivitas kerja, dokumentasi, manajemen pengetahuan, pengelolaan tugas, dan pengembangan ide dalam satu tempat.
Aplikasi ini hanya digunakan oleh satu orang (Single Tenant). Tidak ada konsep *multi-user*, tidak ada organisasi, tidak ada *workspace* bersama, tidak ada fitur kolaborasi, dan tidak ada monetisasi. Aplikasi ini bertujuan secara absolut untuk meningkatkan produktivitas pribadi dan bertindak sebagai *"second brain"* digital yang tangguh.

## 2. Product Vision
Menjadi sistem saraf pusat digital yang memberdayakan pengguna untuk mengelola seluruh aspek pekerjaan, pengetahuan, dan pemikiran secara instan dalam satu platform yang super cepat, ringan, privat, dan nyaman digunakan setiap hari tanpa distraksi.

## 3. Product Mission
- Menyediakan alat produktivitas berbasis lokal (*offline-first*) yang merespons dalam hitungan milidetik.
- Menggabungkan elemen manajemen catatan, tugas, dan referensi tanpa beban kompleksitas kolaborasi tingkat korporat.
- Menghadirkan antarmuka pengguna yang fungsional, tak lekang oleh waktu, dan dirancang khusus untuk alur kerja individu.

## 4. Product Goals
- **Jangka Pendek:** Meluncurkan *Minimum Viable Product* (MVP) yang solid untuk menggantikan alat pencatat dan manajemen tugas dasar (seperti Notion/Todoist pribadi).
- **Jangka Menengah:** Mengintegrasikan seluruh kebutuhan alur kerja harian (Jadwal, Pengingat, *Prompt AI*, dan *Knowledge Base*) menjadi satu pengalaman *seamless*.
- **Jangka Panjang:** Menjadikan sistem ini *future-proof*, mandiri, dapat dicadangkan dalam format terbuka, dan menjadi alat esensial tanpa ketergantungan pada SaaS berbayar.

## 5. Target User
Aplikasi ini dirancang eksklusif untuk satu persona spesifik:

- **Nama:** Dimas (Pemilik Aplikasi)
- **Latar Belakang:** Profesional (Product Manager / Strategist / Technical Writer) yang menangani berbagai proyek digital, dokumentasi teknis, dan strategi produk yang memerlukan organisasi tingkat tinggi.
- **Aktivitas Harian:** Mengelola daftar pekerjaan yang padat, menulis artikel/laporan panjang, mengadakan/mencatat hasil rapat, serta menyimpan banyak referensi dan *prompt* AI.
- **Tantangan:** Sering mengalami *context switching* (beralih antar aplikasi), data tersebar di berbagai platform, biaya langganan aplikasi SaaS yang terus meningkat.
- **Kebutuhan:** *Single source of truth* untuk pikiran dan pekerjaan harian; pencarian instan; privasi data total; aplikasi yang tetap bekerja di kafe dengan koneksi buruk.
- **Perangkat yang Digunakan:** Laptop/Desktop macOS/Windows (layar lebar adalah medium utama), dengan tablet/ponsel untuk akses darurat (*Progressive Web App*).
- **Kebiasaan Bekerja:** Sangat bergantung pada *keyboard shortcuts*, menyukai struktur folder dan tag, membenci jeda *loading*, dan menghargai ruang layar yang bersih dari antarmuka berlebihan.
- **Tujuan Produktivitas:** Menghilangkan friksi dalam menulis, melacak status proyek secara visual, dan mempertahankan aliran kerja (*flow state*).

## 6. Problem Statement
Masalah nyata yang dialami oleh pengguna sebelum adanya produk ini:
1. **Fragmentasi Data:** Catatan ide ada di Apple Notes, tugas di Todoist, artikel panjang di Google Docs, dan tautan di *bookmark* browser.
2. **Lambatnya Temu Kembali (*Retrieval*):** Membutuhkan waktu terlalu lama untuk mencari informasi spesifik (misal: hasil *meeting* 3 bulan lalu).
3. **Kompleksitas yang Tidak Relevan:** Aplikasi modern terlalu sarat fitur kolaborasi tim yang membuat aplikasi lambat dan mahal untuk penggunaan pribadi.
4. **Ketergantungan Internet:** Mayoritas SaaS hancur kinerjanya atau tidak dapat diakses sama sekali ketika pengguna sedang *offline*.
5. **Aset AI Berserakan:** Tidak ada tempat tersentralisasi untuk mendokumentasikan *prompt* AI yang bagus dan berulang-ulang digunakan.

## 7. Solution
**Catatan Kerja Dimas** menyelesaikan masalah tersebut dengan:
1. **Pemusatan Modul:** Mengintegrasikan Catatan, *Task*, Notulen, dan *Prompt* dalam satu basis data tunggal yang saling terkait.
2. **Pencarian Kilat Luring:** Memanfaatkan indeks pencarian di sisi klien (browser) sehingga menemukan informasi memakan waktu kurang dari 50 milidetik.
3. **Arsitektur Single-Tenant:** Membuang logika sinkronisasi multi-pengguna yang berat, sehingga sistem menjadi sangat ramping dan cepat.
4. **Offline First:** Menyimpan data secara lokal menggunakan IndexedDB terlebih dahulu, memberikan respons instan terlepas dari kondisi jaringan.
5. **Modul Spesifik:** Menyediakan direktori khusus "Knowledge" dan "Prompt" yang dioptimalkan untuk dokumentasi pribadi terstruktur.

## 8. Core Value
1. **Cepat:** Tanpa *loading spinner*, segala interaksi merespons dalam hitungan milidetik.
2. **Fokus:** Desain UI yang meminimalkan *noise* visual untuk menjaga konsentrasi tinggi.
3. **Sederhana:** Tidak ada hirarki perizinan (*permissions*), ruang kerja (*workspace*), atau pengaturan pengguna yang rumit.
4. **Personal:** Aplikasi yang murni dirancang dan disesuaikan hanya untuk satu orang.
5. **Terintegrasi:** Berbagai modul (Task, Catatan, Bookmark) saling terhubung pada pangkalan data yang sama.

## 9. Design Philosophy
**Konsep: Retro Digital Workspace**
Filosofi desain ini menolak tren kontemporer seperti *glassmorphism* atau animasi berlebihan. Sebaliknya, ia merangkul estetika sistem operasi tahun 90-an (Windows 95, Macintosh System 7).
- **Alasan Visual:** Gaya *retro* memiliki garis pembatas (border solid hitam) dan kekakuan struktural yang secara kognitif memisahkan area kerja dengan sangat jelas. Bayangan solid memberi indikasi interaktivitas murni (tegas) tanpa membingungkan mata.
- **Dukungan Produktivitas:** Tidak adanya elemen tembus pandang atau gradien rumit berarti rendering browser sangat cepat (FPS tinggi). Otak tidak perlu memproses efek kedalaman yang ilusif, melainkan cukup warna solid (Merah/Kuning/Hijau) yang secara harfiah bertindak sebagai bahasa utilitas status.

## 10. Product Principles
1. **Offline First:** Data selalu aman di perangkat lokal sebelum sinkronisasi latar belakang.
2. **Keyboard Friendly:** Semua aksi utama (termasuk navigasi modul) dapat dijangkau dari *Command Palette*.
3. **Minimal Click:** Tindakan rutin (seperti menambah tugas) membutuhkan kurang dari 3 kali klik atau sekadar menekan *Enter*.
4. **Fast Search:** Penemuan informasi seketika (*instant retrieval*) sebagai tulang punggung navigasi.
5. **Auto Save:** Pengguna tidak perlu khawatir akan kehilangan data. Sistem menyimpannya secara otomatis di balik layar.
6. **Consistent UI:** Tombol sekunder selalu berwarna Kuning, batas antarmuka selalu hitam solid, dan ruang ketik polos transparan.
7. **Modular:** Setiap modul bekerja dengan baik secara independen namun dapat ditautkan satu sama lain (contoh: referensi Notes pada Meeting).
8. **Accessible:** Warna rasio kontras tinggi dan elemen navigasi mendukung standar aksesibilitas keyboard universal.
9. **Lightweight:** Mengurangi ukuran pengiriman JavaScript agar aplikasi memuat secepat kilat (*cold start*).
10. **Human Centered:** Antarmuka yang logis, tidak menyembunyikan aksi di balik tiga lapis menu tersembunyi.

## 11. Success Metrics
- **Waktu Membuka Aplikasi (TTI):** < 1.0 detik (dalam keadaan luring/di-cache).
- **Kecepatan Pencarian:** Hasil pencarian pertama muncul dalam < 50ms setelah pengetikan.
- **Waktu Menemukan Catatan:** Mengurangi waktu pencarian rata-rata dari 15 detik menjadi di bawah 3 detik.
- **Jumlah Klik Pembuatan Tugas:** < 2 klik dari halaman *Dashboard*.
- **Tingkat Penyelesaian Tugas:** Pertumbuhan konsisten dalam penyelesaian *Task* harian akibat kemudahan akses.
- **Stabilitas Aplikasi:** 0 insiden hilangnya data (*data loss*) selama fluktuasi transisi koneksi internet.

## 12. Functional Requirements

| Modul | Tujuan | Fitur Utama | Prioritas | Ketergantungan |
|-------|--------|-------------|-----------|----------------|
| **Dashboard** | Memberikan ringkasan kerja. | Tampilan metrik, *Quick Input*, Daftar tugas hari ini, Catatan terbaru. | Tinggi | Task, Notes |
| **Notes** | Menyimpan teks, ide, & draf. | Editor *Rich Text*, Kategorisasi folder, Label/Tag, Arsip. | Tinggi | Storage |
| **Tasks** | Manajemen prioritas kerja. | *Quick add*, status (To Do/Done), tingkat prioritas, tenggat waktu. | Tinggi | Storage |
| **Meeting** | Mengelola log rapat. | Format notulen baku, daftar partisipan, catatan simpulan. | Sedang | Tasks |
| **Knowledge** | *Second brain* / direktori referensi. | Struktur direktori hierarkis mendalam. | Sedang | Notes |
| **Prompt** | Menyimpan *prompt* AI. | Penyalinan satu klik (*copy*), penandaan kegunaan spesifik. | Tinggi | - |
| **Bookmark** | Manajer tautan eksternal. | Menyimpan URL, meta deskripsi ringkas, folder klasifikasi. | Rendah | Fetcher |
| **Files** | Menampung aset visual lokal. | Unggah dan manajemen gambar untuk disisipkan ke dalam Notes. | Sedang | Storage |
| **Reminder** | Pengingat tenggat waktu. | Indikator visual UI untuk tugas/meeting yang dekat dengan waktu sekarang. | Sedang | Tasks, Meeting |
| **Calendar** | Melihat waktu secara spasial. | Tampilan matriks waktu bagi *deadline* tugas dan acara. | Rendah | Tasks, Meeting |
| **Settings** | Konfigurasi inti. | Manajemen *backup/restore*, autentikasi sistem. | Tinggi | Auth |
| **Search** | Penemuan global instan. | *Command Palette* (Cmd+K), *full-text search* lokal. | Tinggi | Search Engine |
| **Backup/Restore**| Keamanan data mandiri. | Pembuatan dan pengembalian *snapshot* basis data lengkap via file JSON. | Tinggi | - |
| **Export/Import** | Mencegah *Vendor Lock-in*. | Ekstraksi ke format Markdown yang bebas. | Sedang | Parser |

## 13. Non Functional Requirements
- **Performance:** Skor *Lighthouse* 95+ (Performance, Accessibility, Best Practices). Tidak ada perpindahan (refresh) layar penuh saat navigasi (SPA *experience*).
- **Security:** Modul diamankan dengan otorisasi lapisan *Edge* yang ketat (token pribadi tunggal). Tahan dari injeksi SQL/XSS berkat validasi form.
- **Scalability:** Mampu menyimpan puluhan ribu catatan teks di *IndexedDB* tanpa memperlambat browser karena penggunaan algoritma *lazy loading*.
- **Maintainability:** Komponen-komponen UI saling independen dan dapat digunakan ulang (Atomic). Logika terpisah dari tampilan.
- **Reliability:** Toleransi terhadap kondisi luring seutuhnya tanpa penolakan (error) sistematis.
- **Offline Capability:** Arsitektur PWA tulen di mana Service Worker mengelola pengiriman data saat *online*.
- **Accessibility:** Sepenuhnya mendukung pembaca layar (*Screen Reader*) dan navigasi tombol *Tab* atau navigasi arah keyboard.
- **Responsiveness:** Tampilan web responsif yang beradaptasi dengan layar tablet dan *mobile*, sekalipun optimalisasinya adalah *Desktop First*.
- **Browser Support:** Kompatibel dengan versi terbaru keluarga Chromium dan Safari (*WebKit*).
- **PWA:** Dapat diinstal dan diluncurkan dari layar *desktop/home* sebagai aplikasi mandiri yang bebas bar peramban.

## 14. Product Scope
**In Scope:**
- CRUD penuh (Buat, Baca, Ubah, Hapus) untuk Catatan, Tugas, Artikel, Prompt.
- Penyimpanan lokal (IndexedDB) berserta sistem penyelarasan data ke server.
- Pengolahan editor teks (*Rich Text*).
- Indeksasi pencarian pada level peramban.

**Out of Scope:**
- Multi-pengguna, kolaborasi (kolom komentar, *co-editing*).
- Sistem peran admin, RBAC (*Role-Based Access Control*), atau organisasi (SaaS B2B).
- Integrasi penagihan dan langganan uang (*payment gateway*).
- Pembuatan aplikasi native berbasis *Electron* / *React Native*.

**Future Scope:**
- Integrasi eksekusi model Kecerdasan Buatan tertanam di klien (WebGPU AI lokal) untuk *summarization*.
- Implementasi *End-to-End Encryption* (E2EE) penuh secara lokal sebelum sampai di *cloud*.

## 15. Assumption
- Pengguna diasumsikan menggunakan peramban modern yang mendukung Service Workers, CSS Variables, dan IndexedDB 2.0.
- Pengguna secara mayoritas bekerja menggunakan *keyboard*, menjadikan Command Palette alat navigasi krusial.
- Aplikasi digunakan pada lingkungan perangkat keras standar (*laptop/PC*) untuk beban kerja sehari-hari, bukan *mobile only*.

## 16. Risk & Mitigation
| Risiko | Kategori | Strategi Mitigasi |
|--------|----------|-------------------|
| Penyimpanan memori lokal penuh karena besaran *history* teks. | Teknis | Sistem hanya menyimpan (me-*cache*) 1.000 dokumen teraktif di IndexedDB dan mengambil arsip statis dari server hanya saat diperlukan. |
| Lingkup proyek meluas secara dramatis (*Feature Creep*). | Produk | Mengacu pada PRD Konstitusi ini; tidak ada fitur sosial yang disetujui. |
| Kesulitan merender *Rich Text Editor* di PWA mobile lambat. | UX | TipTap tidak memuat *plugin* berat di peramban berlayar kecil, disederhanakan sebagai penampil utama. |
| Konflik data saat dua sesi peramban luring daring bersamaan. | Data | Sistem memakai logika resolusi *Last-Write-Wins* via stempel waktu terakhir (*Timestamp*). |
| Ketergantungan server terpusat mati. | Infrastruktur | Arsitektur *Serverless Edge* digunakan untuk ketersediaan 99.9%. |
| Hilangnya basis data lokal dan cloud sekaligus. | Backup | Menambahkan fitur penjadwalan *download* file JSON *backup* ke HDD lokal. |

## 17. Dependency
Keberhasilan produk bergantung pada pemanfaatan dan keandalan teknologi berikut:
- **Cloudflare (D1, Pages, Workers):** Infrastruktur komputasi tepi yang efisien dengan jeda latensi minimal.
- **Browser API:** Fungsionalitas inti menumpang pada kemampuan *IndexedDB* standar.
- **TipTap:** Stabilitas kerangka kerja editor naskah bebas (Headless Editor).
- **Drizzle ORM:** Transformasi dan kueri antar-sistem ke format relasional tepi (*edge relational*).
- **Next.js 16:** Keandalan pengiriman aset statis (RSC & App Router).

## 18. Release Strategy
- **MVP (Fase 1):** Autentikasi Pengguna Tunggal, Dashboard Utama, Sinkronisasi *Notes* secara Luring, Manajemen Penyimpanan.
- **v1.0 (Fase 2):** Modul *Tasks* (Prioritas & Centang), Command Palette fungsional, Direktori Folder penuh.
- **v1.5 (Fase 3):** Modul *Prompt Library*, Modul Notulen Rapat, *Bookmark*.
- **v2.0 (Fase 4):** Penyematan Berkas Visual (*Files*), *Calendar View*, Pengaturan Pencadangan (*Backup*).

## 19. Acceptance Criteria
Produk PRD ini dianggap Selesai, Lulus, dan Siap menjadi fondasi acuan arsitektural apabila:
- Menggambarkan 100% persyaratan produk (apa, siapa, dan mengapa) **tanpa** menyodorkan blok kode implementasi teknis.
- Menyajikan lingkup (*scope*) yang tegas serta batasan toleransi *multi-user* yang dilarang.
- Dapat digunakan secara mandiri oleh *Product Designer*, *Software Architect*, dan **AI Coding Agent** sebagai acuan utama yang tidak rancu untuk membangun struktur pangkalan data dan antarmuka.
