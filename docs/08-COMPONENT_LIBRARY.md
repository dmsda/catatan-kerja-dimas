# Component Library
**Project Name:** Catatan Kerja Dimas
**Document Version:** 2.0.0

---

## 1. Component Rules & Overrides
Semua komponen antarmuka (*UI Components*) akan diinisialisasi melalui CLI `shadcn/ui`, namun di-override secara radikal menggunakan file CSS dan properti Tailwind CSS v4 untuk mematuhi *Brand Guidelines* bergenre *Retro Digital Workspace*. DILARANG keras menggunakan properti *border-radius* kapsul (pil) atau *box-shadow* blur.

## 2. Core Components

### Button
Tombol adalah alat eksekusi utama. Dirancang kaku seperti tombol sakelar mesin industri.
- **Variant Primary:** Latar `var(--color-primary)` (#D90000), Teks Putih, Border 2px hitam, Shadow kaku `4px 4px 0 #000000`.
- **Variant Secondary:** Latar `var(--color-secondary)` (#FFEA93), Teks Hitam, Border 2px hitam, Shadow kaku `4px 4px 0 #000000`.
- **Variant Ghost/Outline:** Latar transparan (putih saat di-hover), Border 2px hitam, Shadow `2px 2px 0 #000000`.
- **State Active/Pressed:** Animasi memantul (menghujam layar). Elemen turun ke `TranslateY(2px)`, *box-shadow* direduksi menjadi `0px 0px 0px`.

### Input & Textarea
Medan masukan teks (formulir).
- **Base Style:** Latar belakang putih, Border hitam murni `2px`, teks hitam `16px` (Inter).
- **Focus Ring:** Saat diklik, garis luar bukan warna biru macOS, melainkan `outline: 2px solid var(--color-primary)` dengan jarak `offset 2px`.
- **Disabled:** Latar abu-abu terang (`neutral-100`), teks samar, tidak bisa diklik.

### Card
Balok pembungkus informasi modular.
- **Style:** Border hitam `2px`, latar putih, *Shadow* keras `4px 4px 0 #000000`, Radius `10-12px`.
- **Struktur Isi:** Bebas (digunakan untuk daftar tugas, metrik *dashboard*, dll).

### Dialog / Modal
Jendela timbul peringatan atau *Command Palette*.
- **Backdrop Overlay:** Hitam transparan (opacity `0.5` s/d `0.7`), tanpa `backdrop-blur`.
- **Dialog Box:** Penampang putih besar di tengah layar, Shadow raksasa `8px 8px 0 #000000`, menimpa segalanya (`z-index: 50`).

### Checkbox & Switch
Komponen untuk mencentang tugas harian.
- **Checkbox:** Kotak tegas 20x20px, border 2px. *State Checked:* Terisi warna hijau `#8DB355` penuh dengan ikon centang putih tebal.
- **Switch:** *Toggle* berbentuk kapsul bersudut (*rounded-md*, bukan *rounded-full*), tuas putih memblokir sirkuit hitam.

### Badge / Tag
Label penanda statis.
- **Style:** Miniatur *Card* tanpa shadow. Border 2px, teks 12px tebal.
- **Success:** Latar Hijau `#8DB355`. **Warning:** Latar Kuning `#FFEA93`. **Danger:** Latar Merah `#D90000`.

### TipTap Editor Canvas
Perkakas penulisan tak terbatas.
- **Style:** Polos murni seperti kanvas. Judul (H1) amat besar (36px). Menu alat pemformatan teks (*bold, italic*) bergaya *floating toolbar* retro warna hitam (teks putih).

## 3. Implementation Note
Komponen di `/components/ui/` adalah suci. Modifikasi dilakukan sekali secara terpusat. Halaman di `/app/` hanya boleh memanggil komponen ini, tidak merakit elemen `div` kustom yang meniru properti komponen.
