# Design System
**Project Name:** Catatan Kerja Dimas
**Role:** Principal Product Designer / Design System Architect
**Document Version:** 3.0.0

---

## 1. Design System Goal
Dokumen Design System ini adalah fondasi absolut dan **sumber utama seluruh keputusan visual** selama siklus pengembangan aplikasi "Catatan Kerja Dimas". Seluruh halaman, seluruh komponen, dan seluruh interaksi wajib merujuk, tunduk, dan diimplementasikan berdasarkan aturan di dalam dokumen ini. Tidak ada justifikasi untuk melakukan deviasi desain di luar sistem yang telah ditentukan.

---

## 2. Design Principles

### Clarity (Kejelasan)
- **Definisi:** Antarmuka harus menyampaikan tujuan dan fungsinya tanpa ambiguitas.
- **Tujuan:** Pengguna tidak perlu menebak aksi apa yang akan terjadi saat menekan sebuah tombol.
- **Contoh Penerapan:** Menggunakan label tombol deskriptif seperti `Simpan Catatan` daripada hanya ikon disket.
- **Anti-pattern:** Menggunakan ikon yang samar tanpa label teks pendamping untuk aksi destruktif atau kritis.

### Simplicity (Kesederhanaan)
- **Definisi:** Mengeliminasi segala ornamen visual yang tidak fungsional.
- **Tujuan:** Mengurangi beban kognitif agar pengguna dapat langsung menulis dan fokus bekerja.
- **Contoh Penerapan:** Menyembunyikan elemen panel navigasi yang kompleks saat sedang mengetik (mode fokus).
- **Anti-pattern:** Menambahkan gradien warna, bayangan bercahaya, atau ilustrasi 3D pada latar belakang.

### Consistency (Konsistensi)
- **Definisi:** Menggunakan bahasa visual dan tata letak yang sama persis di seluruh rute dan interaksi.
- **Tujuan:** Membangun insting navigasi (*muscle memory*) yang kuat bagi pengguna.
- **Contoh Penerapan:** Selalu menggunakan Kuning (`#FFEA93`) untuk setiap *background highlight* di berbagai modul.
- **Anti-pattern:** Menggunakan warna hijau untuk peringatan, atau menggunakan padding acak (`13px`, `17px`) yang tidak mengikuti standar kelipatan.

### Speed (Kecepatan)
- **Definisi:** Estetika dan respons interaksi yang mendukung impresi kecepatan kilat.
- **Tujuan:** Aplikasi terasa secepat terminal lawas, menyingkirkan *friction* perangkat lunak.
- **Contoh Penerapan:** Transisi antar-halaman yang instan dan *snappy* (tanpa *loader* melingkar); durasi animasi 100-150ms.
- **Anti-pattern:** Penggunaan animasi *fade-in* yang terlalu lambat (misal 500ms) saat membuka modal pencarian.

### Focus (Fokus)
- **Definisi:** Memandu pandangan mata langsung ke wilayah konten sentral.
- **Tujuan:** Menjaga pengguna tetap terbenam dalam *flow state*.
- **Contoh Penerapan:** Editor naskah menggunakan kanvas terpusat dengan *margin* tebal di kiri-kanan.
- **Anti-pattern:** Menaruh banyak *banner* melayang, elemen promosi, atau bilah samping berkedip di dekat area ketik.

### Accessibility (Aksesibilitas)
- **Definisi:** Sistem dibangun agar tangguh digunakan bahkan tanpa presisi kursor tingkat tinggi atau pada kondisi mata lelah.
- **Tujuan:** Memenuhi standar *WCAG AA* untuk kenyamanan pemakaian jangka panjang harian.
- **Contoh Penerapan:** Kombinasi palet menjamin rasio kontras; *focus ring* selalu tampil jika menggunakan panah keyboard.
- **Anti-pattern:** Teks abu-abu muda (`#A3A3A3`) di atas latar belakang abu-abu tua (`#1F2937`).

### Reusability (Ketergunaan Ulang)
- **Definisi:** Sistem antarmuka disusun dari balok-balok (atomik) yang sama dan diurai ulang.
- **Tujuan:** Mempercepat siklus rekayasa (Frontend) dan mencegah duplikasi (*bloatware*).
- **Contoh Penerapan:** Sebuah `Button` sekunder dari modul Task adalah *file* komponen UI yang sama persis yang dipanggil oleh modul Notes.
- **Anti-pattern:** Memecah komponen tombol menjadi lima versi struktur HTML/React yang berbeda secara fungsionalitas.

### Predictability (Ketertebakan)
- **Definisi:** Tata letak dan perilaku sistem selalu berjalan selaras dengan intuisi rasional pengguna.
- **Tujuan:** Menciptakan rasa familier dan kendali ruang kerja yang penuh.
- **Contoh Penerapan:** Pintasan tombol *Esc* selalu membatalkan aksi, menutup *Modal*, atau menghapus *Command Palette*.
- **Anti-pattern:** Memindahkan lokasi tombol silang "X" kadang di kiri, kadang di kanan.

### Scalability (Skalabilitas)
- **Definisi:** Desain mengakomodasi pertumbuhan muatan teks atau item yang masif.
- **Tujuan:** Antarmuka (UI) tidak retak (*break*) sekalipun dokumen mencapai puluhan ribu karakter.
- **Contoh Penerapan:** Menggunakan mekanisme elipsis `...` pada judul yang kepanjangan, atau membatasi tinggi *dropdown* maksimal.
- **Anti-pattern:** *Modal* atau panel yang meregang ke bawah melebihi batas layar monitor pengguna.

### Maintainability (Pemeliharaan)
- **Definisi:** Memudahkan modifikasi sistematis secara terpusat jika strategi masa depan berubah.
- **Tujuan:** Merombak satu *Design Token* akan mereplikasikan efek tersebut ke seratus layar.
- **Contoh Penerapan:** Seluruh properti CSS diarahkan ke *variables* (`var(--color-primary)`).
- **Anti-pattern:** Menuliskan atribut warna *hardcode* dalam komponen halaman individual.

---

## 3. Design Tokens
Seluruh keputusan pembangunan UI harus memanggil referensi token. Dilarang HANYA bergantung pada angka.
- **Color:** Palet sistem utilitas.
- **Typography:** *Font-family*, skala peninggian metrik huruf.
- **Spacing:** Jaring spasi 4px.
- **Radius:** Derajat belok tepi kotak.
- **Border:** Ketebalan garis batas struktural.
- **Shadow:** Ketinggian ilusi proyeksi ruang.
- **Opacity:** Transparansi berlapis.
- **Animation & Transition:** Kurva kecepatan dan jeda.
- **Breakpoint:** Titik patahan grid responsif.
- **Container:** Margin pembatas lebar layar.
- **Z-index & Layer:** Hierarki tiga dimensi ruang.

---

## 4. Color System
Skala warna didefinisikan (Tints/Shades 50-900) untuk kebutuhan *background*, status hover, dan teks, namun HANYA di-derivasi (berakar) dari empat warna resmi agar *Retro Digital Workspace* tetap murni.

### Primary (Merah)
**Warna Dasar:** `#D90000`
- `primary-50`: `#FCE8E8`
- `primary-100`: `#F9CACA`
- `primary-300`: `#E87A7A`
- `primary-500` (Base): `#D90000`
- `primary-700`: `#A30000`
- `primary-900`: `#570000`

### Secondary (Kuning)
**Warna Dasar:** `#FFEA93`
- `secondary-50`: `#FFFDF2`
- `secondary-100`: `#FFF8D9`
- `secondary-300`: `#FFF1BA`
- `secondary-500` (Base): `#FFEA93`
- `secondary-700`: `#BFA440`
- `secondary-900`: `#665B1A`

### Accent (Hijau)
**Warna Dasar:** `#8DB355`
- `accent-50`: `#F4F7EE`
- `accent-100`: `#E4ECD5`
- `accent-300`: `#BCD598`
- `accent-500` (Base): `#8DB355`
- `accent-700`: `#5A7731`
- `accent-900`: `#34461B`

### Neutral (Hitam & Aksen Retro)
**Warna Dasar:** `#000000`
- `neutral-50`: `#FFFFFF` (Teks putih, Latar layar utama)
- `neutral-100`: `#F9FAFB` (Latar elemen ringan)
- `neutral-300`: `#D1D5DB` (Border input form)
- `neutral-500`: `#6B7280` (Teks sekunder/metadata/muted)
- `neutral-700`: `#374151` (Teks tajuk gelap)
- `neutral-900` (Base): `#000000` (Teks utama, Border tebal, Shadow)

---

## 5. Typography

### Font Family
- **Heading:** `IBM Plex Sans` (Alternatif: `Space Grotesk`)
- **Body:** `Inter`
- **Code:** `JetBrains Mono`

### Font Scale (Base: 16px)
- **H1:** `36px` / 2.25rem (Judul Dokumen Besar)
- **H2:** `30px` / 1.875rem (Judul Halaman)
- **H3:** `24px` / 1.5rem (Sub-Halaman)
- **H4:** `20px` / 1.25rem (Judul Kartu / Modul)
- **Body Large:** `18px` / 1.125rem (Teks Editor Utama)
- **Body Default:** `16px` / 1rem (Teks Antarmuka Umum)
- **Label / Button:** `14px` / 0.875rem (Tombol, Teks Data)
- **Caption:** `12px` / 0.75rem (Metadata, Timestamp, Hint)

### Tipografi Metrik
- **Line Height:** `1.2` (Heading), `1.6` (Body) — keseimbangan ketegasan vs keterbacaan paragraf.
- **Letter Spacing:** `-0.02em` (H1-H3), `-0.01em` (Label), `0em` (Body & Code).
- **Weight:** Murni `Regular (400)` untuk narasi panjang, dan `Bold (700)` untuk Heading/Aksi. Diupayakan membuang ketebalan transisi (Medium 500) demi efek maskulin masa silam.

---

## 6. Spacing System
Seluruh spasi, marjin, jeda paragraf, dan *padding* kaku bertumpu pada skala mutlak kelipatan `4px`.

| Unit CSS/TW | Pixel | Kapan Digunakan |
|-------------|-------|-----------------|
| `space-1` | 4px | Celah ikatan rapat (Ikon + Label di dalam satu tombol). |
| `space-2` | 8px | *Padding* dalam *Input Box*, daftar ul/li berdekatan. |
| `space-3` | 12px | Jeda internal komponen seperti kartu kecil (*micro-card*). |
| `space-4` | 16px | Standar emas pinggiran wadah, celah antar seksi modul minor. |
| `space-5` | 20px | Paragraf *spacing* dalam penulisan Editor. |
| `space-6` | 24px | *Gap* (jarak antar kolom grid), *Padding* batas layar. |
| `space-8` | 32px | Jarak lompat batas atas/bawah bab (*sections*). |
| `space-10` | 40px | Lebar tinggi interaksi tap/sentuh yang wajar (*Touch Target*). |
| `space-12` | 48px | Ruang lapang perantara hirarki (*breathing room*). |
| `space-16` | 64px | Margin eksternal ekstrim layar resolusi lebar. |
| `space-20` | 80px | Spasi penutup area *scroll* bawah (*padding-bottom*). |
| `space-24` | 96px | Isolasi Hero atau pemisah modul layar penuh. |

---

## 7. Grid System

### Desktop (> 1024px)
- **Container Max Width:** `1280px`
- **Columns:** 12
- **Gap:** `24px` (space-6)
- **Margin:** `auto` (terpusat/centered)
- **Responsive Rules:** Kolom kiri (sekitar 3 kolom / `250px` statis) didedikasikan untuk *Sidebar*. 9 kolom sisanya mendominasi *Content Area*.

### Tablet (768px - 1024px)
- **Container Max Width:** `100%`
- **Columns:** 8
- **Gap:** `16px` (space-4)
- **Margin:** `24px` (kiri & kanan menempel bezel layar)
- **Responsive Rules:** Sidebar diubah menjadi panel yang bisa melipat masuk (*collapsible panel*).

### Mobile (< 768px)
- **Container Max Width:** `100%`
- **Columns:** 4
- **Gap:** `12px` (space-3)
- **Margin:** `16px` (kiri & kanan)
- **Responsive Rules:** Menu hierarki utama tersembunyi; ruang kanvas 100% diperuntukkan bagi *task view* dan pengetikan.

---

## 8. Border System
- **Border Width:** Mutlak menggunakan nilai `2px` sebagai dasar pembatas kaku antar elemen aktif (Kartu, Tombol, Kolom). Garis tipis `1px` hanya diizinkan sebagai perantara baris sel tabel.
- **Border Radius:** Dipertahankan pada rentang `10px - 12px`. Bukan sudut melengkung sosis/pil (`999px`) dan juga bukan lancip tajam 90-derajat murni (`0px`).
- **Border Color:** Struktur makro dan objek interaktif WAJIB diikat oleh bingkai `neutral-900` (`#000000`).
- **Outline (Fokus):** Jika diakses via tabulator *keyboard*, fokus harus tergambar lewat garis pembatas di luar (*offset*) `2px solid var(--primary-500)`.

---

## 9. Shadow System (Retro Hard Shadow)
Gaya desain masa lampau (*Neo-brutalism*) membuang efek *Gaussian Blur*.
- **Small:** `2px 2px 0px #000000` (Kotak ceklis interaktif, Label, atau Tooltip mini).
- **Medium:** `4px 4px 0px #000000` (Kartu Daftar Tugas, Semua jenis Tombol Standar).
- **Large:** `8px 8px 0px #000000` (Jendela *Modal*, Area Pencarian *Command Palette*, Menu *Dropdown* terbuka).
- **Hover:** Efek melayang, elemen digeser ke atas `TranslateY(-2px)`, bayangan ditarik ke bawah-kanan (menambah 2px jarak bayangan).
- **Pressed:** Bayangan ditiadakan `0px 0px`, elemen didorong paksa ke `TranslateY(2px)` atau `0px` seolah tombol sakelar mekanis tenggelam ke plat besi.
- **Floating:** `12px 12px 0px #000000` (Hanya dipakai untuk *Toast Notifikasi* yang melayang di atas konten utama secara independen).

---

## 10. Elevation (Z-index Layering)
- `Layer 10` (`z-10`): Area kerja dasar (**Editor, Daftar Kartu, Tabel**).
- `Layer 20` (`z-20`): Panel navigasi menetap (**Sidebar, Header/Navbar**).
- `Layer 30` (`z-30`): Tindakan popup temporal (**Dropdown, Tooltip, Flyout**).
- `Layer 40` (`z-40`): Penghalang kognitif / peredup (**Backdrop/Overlay Hitam Transparan**).
- `Layer 50` (`z-50`): Interaksi sentral yang membajak layar (**Modal Dialog, Command Palette**).
- `Layer 60` (`z-60`): Sinyal kritis independen (**Toast Notification, Error Snackbars**).

---

## 11. Motion System
*Rules of Engagement:* Animasi pantang mengganggu produktivitas. *Zero-delay illusion.*
- **Durasi 100ms:** Transisi superkilat; efek tekanan tombol (*pressed*), hover *background color*.
- **Durasi 150ms:** Pembukaan modul UI; *dropdown*, laci (*drawer*) pendek, penggeseran transisi skala batas kartu.
- **Durasi 200ms:** Batas maksimal; masuknya *Modal* sentral dari kekosongan layar, atau animasi muat pertama kali (*scale in*).
- **Easing:** Sangat menyarankan profil murni `linear` atau `cubic-bezier(0, 0, 0.2, 1)` (akselerasi tegas lalu henti mendadak).
- **Slide:** *Toast* muncul dengan translasi ke atas (`TranslateY`) bukan terpental (*bounce*).
- **Larangan (Anti-pattern):** Tidak boleh mendesain animasi rotasi lambat 360 derajat, *fade-in* malas (300ms+), atau per yang memantul-mantul (*spring physics*).

---

## 12. Icon System
- **Pustaka Vektor:** Lucide Icons.
- **Aturan Ketat:** Wajib berupa garis pinggir *outline* tipis, 2 dimensi murni (tanpa lapisan arsir isi warna).
- **Ukuran Baku:**
  - `16`: Ikon tombol kecil pendamping teks, indikator *badge*.
  - `18`: Ikon fungsional dalam baris teks standar.
  - `20`: Menu navigasi Sidebar, *action bar*.
  - `24`: Tajuk besar (*Header Icons*), tombol utama *Dashboard*.
  - `32`: Ikon peringatan (*Empty States* atau *Error Pages*).
- **Spesifikasi Vektor:** *Stroke width* mutlak berukuran **2px**, berpenutup garis bundar (*round-cap* & *round-join*).
- **Warna Ikon:** Mayoritas hitam `#000000`, HANYA berubah putih jika berada di atas latar tombol Merah. Dilarang mewarnai ikon dengan kuning atau hijau terang secara individual, kecuali pada elemen lencana status.

---

## 13. Component Rules
- **Padding/Spacing:** Bidang sentuh harus terasa longgar. *Input form* wajib setinggi `40px` atau `48px` untuk kemudahan navigasi kursor.
- **Hover:** Tombol menderita *displacement* secara ruang geometris (+2px, Shadow menebal), bukan perubahan warna drastis. Teks *link* cukup mendapat garis bawah tebal (*underline 2px*).
- **Focus:** Diaktifkan hanya oleh *Tabulator*. Segera bungkus elemen komponen terfokus dengan *outline* merah (sebagai ganti efek pancaran biru OS bawaan).
- **Disabled:** Permukaan tombol menjadi `neutral-200`, bayangan `0px`, teks kelabu pudar, dan tidak merespon translasi `hover`.
- **Loading:** Teks "Mengirim..." disandingkan ikon putar kaku 150ms. Tidak ada panel pemblokir (*spinner blocking overlay*) untuk penyelarasan *background offline*.
- **Error/Success/Warning:** Merah (`Primary`), Hijau (`Accent`), Kuning (`Secondary`). Disematkan kuat di *Toast* atau pesan validasi di bawah *input field* (`14px`).

---

## 14. Layout Rules
- **Sidebar:** Bilah perintah statis di kiri. Pemisah *Border-R 2px hitam*. Menampung logo, modul indeks utama, dan preferensi akun.
- **Header:** Struktur menancap (*sticky bar*) di atap layar konten. Tempat *breadcumb*, *judul*, serta pintasan cepat ikon.
- **Content:** Kanvas pangkalan. Menyesuaikan panjang tak terhingga berkat pilar *scroll-y*.
- **Editor:** Kontainer *distraction-free* paling eksklusif. Maksimal lebar diatur kaku di `800px`, diapit pilar margin transparan di sisi kiri dan kanan.
- **Modal:** Kotak popup tebal memblokir antarmuka, *shadow 8px*. Tempat eksekusi spesifik (Contoh: Konfirmasi Penghapusan).
- **Drawer:** Mengusap dari tebing kanan. Menyuplai panel "Inspektor Data/Properti Meta" untuk modul penugasan *Task* tanpa harus berpindah alamat Rute.
- **Split View:** Tampilan dua kolom vertikal untuk manajer berkas berstruktur tinggi. (Dipisahkan oleh garis vertikal).

---

## 15. Responsive Rules
1. **Mobile (<768px):** Tipografi dikompres sedikit. Panel UI dipaksa melebur menjadi tumpukan vertikal tunggal (*single column stack*).
2. **Tablet (768px - 1024px):** Grid disesuaikan, namun utilitas bar *sidebar* mungkin digantikan menu navigasi cincin di sisi atas/bawah.
3. **Laptop (1024px - 1440px):** Lebar pandang paling strategis; UI terdedah sepenuhnya tanpa tumpukan berlapis.
4. **Desktop / Large Desktop (>1440px):** Perbesaran layar tidak berakibat kolom editor ikut melebar memanjang tak terkendali. Batas *max-width* dihormati untuk keamanan mata (ergonomi membaca).

---

## 16. Accessibility
Sistem dipaksa memastikan kepatuhan akses universal tinggi bagi *productivity worker* dengan beban layar ekstrem.
- **Kontras Warna:** Putih vs Hitam vs Merah (`#D90000`) melewati sertifikasi level AAA (*WCAG*).
- **Keyboard Navigation:** Komitmen perancangan agar pengguna dapat bernavigasi dari modul *Notes* ke *Task*, membuat tugas, dan menyimpannya murni hanya menggunakan papan ketik tanpa melirik *Mouse/Trackpad*.
- **Screen Reader (ARIA):** Ikon "Gear/Settings" wajib disuplai label `<button aria-label="Buka Pengaturan">`.
- **Focus Indicator:** Lingkar siluet penanda fokus warna primer yang memicu penglihatan instan (*instant visual feedback*).
- **Reduced Motion:** Keterikatan komponen animasi dipetakan dengan instruksi `prefers-reduced-motion: reduce`, menghapus *translateY* demi melindungi penderita *vestibular disorders*.

---

## 17. Dark Mode
- **Filosofi:** Mengakar pada tradisi layar Pijar Terminal UNIX (*Phosphor Monitor*); membalik hierarki optik tanpa kompromi estetika garis 90-an.
- **Aturan Transisi Warna:** Bukan invert acak (hitam putih ditukar), melainkan pendefinisian ulang matriks cahaya.
- **Token yang Berubah:**
  - Latar Layar: Menjadi *Deep Black* murni (`#000000`).
  - Teks & Batas (Border/Ikon): Menjadi Putih Netral (`#FFFFFF`) / Abu Tua (`#E5E7EB`).
  - Bayangan (*Shadow*): Diganti oleh kotak abu-abu terang padat `4px` yang berdiri menonjol dari *background* hitam pekat, atau diganti batas (*outline*) neon pudar.
- **Token yang Tetap (Core Colors):** Merah Utama, Kuning Sorotan, dan Hijau Status tidak diubah wujudnya, namun luminositasnya dikalibrasi minimal (kurangi *brightness* 15%) guna mencegah ketajaman *eye burn/strain* yang mematikan akibat latar hitam absolut.

---

## 18. Micro Interaction
- **Button:** Efek seperti panel mekanis; bayangan sirna ketika dipukul ke bawah (*klik*).
- **Checkbox:** Kotak hitam tebal membesar sekejap (3%) saat kursor melayang; usai divalidasi, isi kotak disiram Hijau/Merah solid secara tunai (*instant fill*).
- **Switch:** *Toggle Switch* tidak menggunakan pil bulat, melainkan geometri kapsul-kotak dengan keping pendorong blok (seperti gagang tuas listrik).
- **Input (Teks):** *Placeholder* memudar, garis batas dari hitam kelabu menjadi *Primary Red* 2px menekan tegas.
- **Dropdown:** Menu tidak meluncur secara perlahan; muncul dari ketiadaan di atas layar bagaikan kartu menu Windows lawas.
- **Command Palette (Cmd+K):** Fokus latar disamarkan cepat, masukan teks memicu hasil secara *real-time* (<50ms) selaras detak papan ketik berkat mesin indeks lokal.
- **Toast:** Panel geser dari dasar pojok mengonfirmasi data sinkron tanpa menutup elemen krusial antarmuka.
- **Tooltip:** Blok mini hitam tebal, keterangan teks putih 12px; dipanggil sesaat 0ms paska sorotan diam (*hover delay* pendek) demi percepatan instruksi.
- **Accordion:** Pembelahan daftar modul turun lurus; panah kecil berotasi tajam 90-derajat.
- **Editor:** Ruang bersih mutlak; properti UI tambahan (opsi *Heading*, Gambar) baru terpanggil di sisi margin tatkala disorot/didekati (*progressive disclosure*).

---

## 19. Empty States
Saat tidak ada aktivitas, halaman harus terasa *informative*, bukan terkesan rusak.
- **Loading:** Batang progres sehelai tipis minimalis 2px di atap (*NProgress style*).
- **Empty (0 Catatan):** Ilustrasi geometris 2D polos garis tepi, ditambah aksi CTA tombol utama *"Tulis pemikiran baru"*.
- **Offline:** Label retro statis Kuning di atap jendela (bukan penutup halaman yang membunuh interaksi CRUD).
- **No Result:** Panel teks putih kaku, `"Pencarian '...' tidak membuahkan hasil. Tekan Esc."`
- **No Connection:** Aplikasi menolak memberi peringatan berlebihan. Data direkam luring secara tak terlihat (*IndexedDB pending state*).

---

## 20. Error States
- **404 Halaman Tidak Ditemukan:** Panel besar, berbingkai monokrom tebal: `"Direktori ini hilang ditelan vakum. Kembali ke Pangkal (Dashboard)."`
- **500 Server Rusak (Crash):** Dialog modal kritis merah tebal: `"Sistem tersandung, namun berkas luring Anda di peramban ini tidak cacat. Muat ulang aplikasi."`
- **Network Error:** Gagal mengunggah foto. Toast kuning/merah kecil: `"Jaringan terputus, gambar batal dikirim ke D1."`
- **Validation (Form):** Tidak mengocok input form (*shaking effect*). Teks kaku 12px huruf merah menumpuk padat di dasar kotak isian: `"Judul ini wajib, Anda belum menamainya."`

---

## 21. Design Patterns
- **Card Pattern:** Batas 2px hitam, informasi inti besar di atas, jejak kaki navigasi metadata di ekor dasar.
- **List Pattern:** Tata indeks kolom baris, judul tebal rata kiri, tanggal usang di rata kanan. *Divider* horisontal memutus daftar (`neutral-200` tipis).
- **Editor Pattern:** Atap tipis indikator penyelarasan (Hijau), kanvas kertas virtual tak bertalian (margin negatif sangat lega), panel pengenal di dinding luar kanan jika disorot.
- **Dashboard Pattern:** Kisi modul lego (Matriks 2x2 atau 3x3 kaku), pemuatan angka performa tebal instan.
- **Sidebar Pattern:** Menu struktur pohon, direktori ditandai kuning kaku saat dijejaki, ikon 20px berderet rapi.
- **Search Pattern:** Input raksasa memblokir kesadaran ruang layar yang beralih cepat menembus tumpukan basis data lokal.
- **Table Pattern:** Kotak spreadsheet industri murni. 1px hitam kisi, tajuk kolom huruf kapital padat.
- **Settings Pattern:** Lembar formulir teknis, *switch* pengatur terisolasi, pelabelan penjelasan *caption* per baris.

---

## 22. Retro Digital Workspace
*Bagaimana semua fondasi di atas menyatu?*
- Sistem ini menekan ilusi bahwa Anda sedang mengoperasikan peralatan rekayasa *(Professional & Productive)* buatan ahli di masa puncak kejelasan UI dekade '90-an *(Retro & Minimal)* yang direkonstruksi di atas kecanggihan komputasi milidetik zaman peramban mutakhir *(Modern & Fast)*.

---

## 23. Design Checklist
Validasi mutlak sebelum serah terima *Mockup* akhir atau Modul Komponen React/Tailwind:
- [ ] Semua metrik ukuran/jarak merujuk mutlak ke turunan kelipatan `4px` (misal 16, 20, 24).
- [ ] Terdapat bayangan (*Box-shadow*) masif hitam murni `4px/8px` **TANPA blur** untuk hierarki kartu.
- [ ] Pinggiran batas bingkai (*Border-width*) elemen HANYA bernilai `2px` tegas hitam.
- [ ] Tombol dan kartu disekat oleh pinggiran elips tajam radius `10px - 12px` (tidak pil bulat panjang `50rem`).
- [ ] Uji respons tabulasi *keyboard* berhasil memicu *focus-ring* garis tebal.
- [ ] Skala warna elemen UI HANYA mengutip referensi token Primary Merah, Secondary Kuning, Accent Hijau, dan Neutral Hitam-Putih.
- [ ] Animasi hover terbukti sekadar memindahkan blok Y (*translate-Y*) secepat 150ms.

---

## 24. Anti Pattern (Hal yang Terlarang Keras)
Pelanggaran atas daftar berikut mencederai kontrak *Design System*.
- ❌ **Glassmorphism:** Aplikasi produktivitas sejati tak butuh ilusi latar belakang transparan/buram pembunuh framerate.
- ❌ **Blur Berlebihan:** Menonaktifkan opsi bayangan memudar/blur (Material Design Style).
- ❌ **Gradient Mencolok:** Pemakaian gradasi multi-warna linear dari pojok ke pojok diboikot. Warna retro adalah Blok Cat Solid.
- ❌ **Shadow Lembut:** Dilarang melembutkan bayangan tombol agar terlihat 'nyaman/plastik'.
- ❌ **Border Radius Terlalu Besar:** Kurva lingkar `50%` atau `999px` pada desain struktur.
- ❌ **Animasi Lambat:** Menyelipkan nilai CSS `transition-all duration-500` yang merusak laju *flow*.
- ❌ **Warna di Luar Token:** Menyelundupkan kode Biru Laut atau Ungu Gelap `HEX` di sela-sela kode React.
- ❌ **Hardcoded Spacing:** Menginjeksi angka seperti `margin-top: 17px` ketimbang mematuhi kelas token utilitas Tailwind `mt-4` (16px).
- ❌ **Inline Styling:** Mendikte visual pada aras JSX `<div style={{color:'red'}}>` memicu kekacauan integrasi sistem.

---

## 25. Quality Check Statement
Dokumen *Design System* ini dirancang ketat, memetakan secara fungsional seluruh rujukan utilitas parameter *framework* moderen semacam **Tailwind CSS v4** dan pustaka primitif aksesibilitas **shadcn/ui**. Pengembang Frontend dituntut merakit ulang sistem lapisan *shadcn/ui* bawaan untuk tunduk pada desain blok padat monolitik yang digariskan di sini tanpa perlu merubah logika bisnis aplikasi.
