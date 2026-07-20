# Brand Guidelines
**Project Name:** Catatan Kerja Dimas
**Tagline:** Personal Work Operating System
**Document Version:** 1.0.0

---

## 1. Brand Positioning
Catatan Kerja Dimas diposisikan secara eksklusif sebagai **Private Productivity Software** atau *"digital workspace"* pribadi. Produk ini bukan SaaS komersial, bukan aplikasi perusahaan, bukan untuk kolaborasi tim, bukan media sosial, dan bukan aplikasi *chatting*. Aplikasi ini adalah ruang suci (*sacred space*) digital bagi satu individu untuk berpikir, menulis, dan bekerja tanpa campur tangan entitas luar.

## 2. Brand Personality
Karakter merek ini memancarkan kesan yang kuat, fungsional, dan dapat diandalkan:
- **Fokus:** Menyingkirkan gangguan (*noise*) visual; hanya menampilkan apa yang benar-benar esensial.
- **Produktif:** Mendorong aksi, efisiensi waktu, dan penyelesaian tugas.
- **Retro:** Mengambil akar dari perangkat lunak utilitas era 90-an yang murni mengutamakan fungsi.
- **Minimalis:** Menghindari ornamen dan elemen dekoratif yang tidak melayani fungsi struktural.
- **Cepat:** Memberikan kesan kilat (*snappy*), merespons instan tanpa jeda pemikiran.
- **Personal:** Disesuaikan untuk alur kerja satu individu, bukan kompromi desain untuk korporat.
- **Bersih:** Tata letak yang tertata rapi, seperti meja kerja yang baru dibersihkan.
- **Human:** Tidak kaku seperti robot; margin yang membulat tipis memberikan sentuhan ergonomis.
- **Hangat:** Penggunaan warna latar analog/kertas memberikan nuansa yang ramah di mata.
- **Terorganisir:** Menganut sistem hierarki informasi yang ketat, logis, dan dapat diprediksi.

## 3. Brand Values
1. **Simplicity:** Keindahan yang lahir dari kesederhanaan operasi dan arsitektur visual.
2. **Focus:** Antarmuka yang secara aktif membantu pengguna menolak distraksi dunia luar.
3. **Clarity:** Tidak ada ambiguitas dalam navigasi, label tombol, maupun *feedback* status.
4. **Speed:** Kecepatan adalah fitur inti; aplikasi harus bergerak secepat rentang atensi pengguna.
5. **Ownership:** Kendali absolut atas data dan ruang kerja, menjunjung tinggi privasi data lokal.
6. **Consistency:** Bahasa visual (warna, elemen, tata letak) yang konsisten di semua rute aplikasi.
7. **Reliability:** Perangkat lunak yang bekerja andal di segala kondisi (khususnya *offline*).
8. **Longevity:** Desain abadi (*timeless*) yang fungsional dan tidak mudah usang oleh tren sesaat.

## 4. Design Philosophy
**Retro Digital Workspace**
Gaya visual ini mengambil inspirasi luhur dari perintis antarmuka digital: *Windows 95, Macintosh System 7, IBM ThinkPad, GameBoy UI*, dan *Terminal UNIX*, namun dibalut dengan presisi arsitektur modern ala *Notion, Obsidian, Linear*, dan *Raycast*.
Hasil akhirnya adalah *software* yang terasa modern di sisi *usability* (resolusi tinggi, spasi yang lega), namun memiliki "jiwa" masa lalu yang lugas. Filosofi ini dengan tegas menolak tren *skeuomorphism* (meniru benda nyata secara 3D), *glassmorphism* (efek kaca buram), dan *neumorphism* (bayangan plastis/lembut). Pendekatan ini menganut fungsionalisme utilitarian di mana batas bingkai dan tombol terlihat seperti blok informasi yang nyata dan dapat diandalkan.

## 5. Brand Colors & Color Rules

Palet warna utama adalah **satu-satunya sumber kebenaran**. Tidak diperkenankan menambah, mengubah, atau menyuntikkan warna HEX lain ke dalam komponen aplikasi tanpa persetujuan strategis.

### Primary: Merah (`#D90000`)
- **Filosofi & Psikologi:** Melambangkan energi, aksi, dan keberanian. Bertindak sebagai *anchor* visual yang mendorong eksekusi keputusan seketika.
- **Penggunaan (Maksimal 15-20% layar):** Tombol aksi primer (*Call to Action*), *active state* modul, logo, dan tindakan penghapusan/kritis.
- **Kapan tidak digunakan:** Jangan pernah digunakan sebagai warna *background* dominan atau teks panjang.
- **Contoh:** Latar tombol "Simpan Catatan".

### Secondary: Kuning (`#FFEA93`)
- **Filosofi & Psikologi:** Warna kertas *sticky note* dan layar CRT lawas. Menghadirkan kehangatan kognitif dan menstimulasi ingatan tanpa membuat mata lelah (dibanding warna neon).
- **Penggunaan:** Latar belakang sorotan (*highlight/search result*), *card* yang sedang dipilih (*selected*), peringatan non-kritis (*warning*), dan elemen pencerah *retro*.
- **Kapan tidak digunakan:** Sebagai warna dasar (*body background*) seluruh aplikasi, atau warna fon *body*.
- **Contoh:** Teks hasil pencarian (MiniSearch) yang di-blok oleh *background* kuning.

### Accent: Hijau (`#8DB355`)
- **Filosofi & Psikologi:** Simbol produktivitas, kelancaran (*flow*), dan penyelesaian. Mengambil ruh dari monitor monokrom hijau (*terminal phosphor*).
- **Penggunaan:** Modul berstatus sukses, *Completed Task*, indikator *online*, progres (*progress bar*), dan lencana (*badge*).
- **Kapan tidak digunakan:** Sebagai indikator kegagalan (*error*) atau batas struktural.
- **Contoh:** Indikator *Checkbox* pada daftar *Task* yang telah diselesaikan.

### Neutral: Hitam (`#000000`)
- **Filosofi & Psikologi:** Ketegasan batas, kontras tinta mutlak, dan pengarsipan permanen.
- **Penggunaan:** Tipografi global, bingkai wadah (*Border 2px*), bayangan struktur (*Solid Shadow*), outline ikon, dan latar peredup *overlay*.
- **Kapan tidak digunakan:** Sebagai warna latar utama (*canvas* kertas tempat mengetik harus tetap putih bersih).
- **Contoh:** Garis pemisah antara *Sidebar* dan Area Konten.

## 6. Typography Personality
Tipografi yang diplih menjembatani celah antara efisiensi ruang kerja lama dengan kenyamanan baca optik masa kini.

- **Heading (IBM Plex Sans / Space Grotesk):** Digunakan untuk judul besar dan metrik. Memberikan nuansa *engineering*, presisi mekanis, bentuk yang kotak dan struktural yang menjiwai mesin masa lalu.
- **Body (Inter):** Digunakan untuk teks deskriptif, narasi paragraf panjang, dan penulisan catatan. Bersih, netral, sangat mudah dibaca (*legible*), tidak akan mengganggu fokus pikiran pengguna saat menelusuri ide.
- **Code (JetBrains Mono):** Digunakan secara khusus untuk blok skrip kode (`<pre>`), parameter *Command Palette*, dan aksen meta-data. Mewakili estetika pengkodean terminal otentik.

## 7. Iconography
- **Standar:** `Lucide Icons`.
- **Style:** Berbasis garis murni (*Outline*).
- **Spesifikasi:** *Stroke width* ketebalan konstan `2px` (menyeimbangkan harmoni *border* UI 2px hitam).
- **Sudut:** *Rounded* (tepian ikon membulat halus) agar terasa inklusif.
- **Konsistensi:** Penggunaan minimalis dan *flat*, tidak ada elemen ikon yang diarsir (*filled*) ganda atau memakai warna gradasi.

## 8. Illustration Style
- **Gaya:** *Pixel Inspired*, *Flat Illustration*, *Retro Utility*, *Simple Geometry*.
- **Format:** Seni dua dimensi (2D) sederhana yang digambar menggunakan bingkai (*outline*) hitam tebal (2px) dan diisi oleh palet *Primary/Secondary*.
- **Larangan (DON'Ts):** Secara mutlak dilarang menggunakan karakter atau ilustrasi tiga dimensi (3D), ilustrasi deformasi proporsi bergaya *Corporate Memphis* (lengan besar, kepala kecil), atau vektor abstrak bergradien.

## 9. Shape Language
- **Card/Container:** Geometri persegi panjang (*Rectangle*), sudut tidak terlalu tajam dengan radius `10–12px`. Menggunakan *border* hitam `2px` murni dan *shadow* bayangan blok tajam.
- **Button:** Berbentuk *rounded rectangle*. **Dilarang** membuatnya melengkung sempurna (*fully pill-shaped*), pinggiran harus terdefinisi seperti tombol fisik utilitas perangkat keras lama.

## 10. Visual Language
- **Layout & Grid:** Tata ruang modular dan stabil. Disusun atas *Grid* 12 kolom yang presisi; menyelaraskan secara harfiah.
- **White Space:** Bernapas, mengarahkan mata pada pusat kanvas (*editor* tipTap dibatasi pada *max-width: 800px* di tengah, memberikan ruang negatif yang tenang di sayap kiri-kanan).
- **Alignment:** Rata Kiri (*Left-Aligned*). Mudah dipindai sistem optik manusia dengan cepat.
- **Elevation:** Tinggi hirarki objek semata-mata dikendalikan oleh jarak lemparan *solid shadow* (cth: tombol `4px`, *dropdown* `8px`) berwarna `#000000`. Tidak ada Gaussian Blur pada *box-shadow*.

## 11. Motion Personality
- **Perilaku Animasi:** *Snappy*, mekanis, ringkas.
- **Durasi Waktu:** Amat singkat (sekitar `100–150ms`).
- **Efek Hover:** Translasi lurus ke arah sumbu-Y (`translateY(-2px)`) yang menyebabkan *shadow* membesar seketika seolah tombol memantul *tactile*.
- **Batasan:** Menolak *fade-in* lambat, *spring animations* lentur, atau transisi hiperaktif antar halaman.

## 12. Tone of Voice
Semua salinan antar-muka (*UI Copywriting*) berkomunikasi dalam bahasa Indonesia. Nadanya: Singkat, Jelas, Ramah, Profesional, Tidak Kaku, Tidak Bertele-tele.

**Contoh Implementasi:**
- **Button:** `Simpan Catatan` / `Buat Tugas`
- **Toast:** `Tugas selesai.` / `Perubahan tersimpan.`
- **Dialog Konfirmasi:** `Hapus catatan ini?` (Menghindari keribetan: *Apakah Anda yakin ingin...*)
- **Empty State:** `Belum ada catatan. Tekan Cmd+N untuk memulai.`
- **Error Message:** `Gagal menyimpan. Periksa koneksi lokal Anda.`
- **Konfirmasi Aksi:** `Hapus` / `Batal`

## 13. Brand Dos (Wajib Dilakukan)
- Wajib menggunakan warna CSS Variables (Token) untuk menjaga isolasi desain.
- Wajib menggunakan *outline* fokus (garis putus-putus atau *border* merah) saat navigasi via keyboard (*Tab*).
- Wajib memastikan jarak (*spacing*) dan ruang negatif selaras mengikuti kelipatan 4px/8px standar.
- Wajib menyederhanakan kalimat, menggunakan prinsip diksi yang bermakna fungsional.

## 14. Brand Don'ts (Dilarang Mutlak)
- Dilarang memasukkan efek visual *blur* (CSS `backdrop-filter: blur` atau `box-shadow blur radius`).
- Dilarang menambahkan sembarang warna eksternal (biru, ungu, oranye muda) ke dalam komponen.
- Dilarang merancang tombol dalam bentuk lingkaran murni penuh (*capsule* besar).
- Dilarang menggunakan animasi transisi yang melebihi batas *200ms*.

## 15. Accessibility (WCAG AA Compliance)
- **Kontras Optik:** Kombinasi *font* Hitam `#000000` di atas Merah `#D90000`, Kuning `#FFEA93`, maupun Hijau `#8DB355` menghasilkan rasio di ambang minimum *WCAG 2.1 AA* untuk teks tebal/komponen. Pada layar konten putih, kontras teks mencapai level tertinggi mutlak.
- **Typography:** Pemilihan font bertipe *sans-serif* yang terkalibrasi tinggi (Inter, IBM Plex) mencegah ketegangan visual pada mata berastigmatisme.
- **Spacing:** Titik sasaran sentuh (*touch target/hitbox*) pada UI harus terpusat minimal 44x44 piksel pada peramban *mobile*.
- **Semantik Warna:** Warna tidak pernah menjadi indikator satu-satunya; pesan kesuksesan akan menyertakan tanda centang (`lucide/check`), peringatan memiliki tanda silang/seru.

## 16. Future Evolution
Bahasa *Retro Digital Workspace* memiliki fondasi yang *timeless* (tak lekang oleh zaman). Dalam iterasi ke depan, seiring penambahan alat pintar AI, *brand* ini dapat berekspansi menghadirkan estetika terminal: **Mode Gelap Total (Dark Mode)**, di mana latar beralih sepenuhnya ke Hitam Netral `#000000`, sedangkan warna Merah, Kuning, dan Hijau berperan sebagai warna *phosphor glow* bersinar terang—tetap teguh memelihara geometri 2px *Solid Border* dan absennya efek modern transparan. Sistem identitas dirancang tangguh menerima skalabilitas ini tanpa mematahkan karakter utamanya.
