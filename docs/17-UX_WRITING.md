# UX Writing Guidelines
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Prinsip Utama Teks
Teks antarmuka di "Catatan Kerja Dimas" bukan sekadar tulisan, ia adalah roda penggerak *Retro Digital Workspace*. Salinan teks wajib:
- **Profesional & Utilitarian:** Menghindari bahasa yang terlalu santai, kekanak-kanakan, atau berlebihan (Haram menggunakan tanda seru berlebihan "!").
- **Kering & Efisien:** Tidak berbasa-basi. Teks dirancang untuk sistem operasi kerja pribadi yang diakses ratusan kali sehari.
- **Berorientasi Aksi (Action-oriented):** Gunakan kata kerja aktif imperatif yang mengawali kalimat aksi.

## 2. Tone of Voice
- ❌ Salah: *Yey! Catatan Anda berhasil disimpan ke cloud kita!*
- ✅ Benar: *Catatan tersimpan.*
- ❌ Salah: *Hmm, sepertinya Anda belum menulis tugas apapun hari ini. Yuk buat sekarang!*
- ✅ Benar: *Tidak ada tugas hari ini. Ketik tugas baru.*

## 3. Komponen Antarmuka (Standarisasi)

### Button (Tombol Aksi)
Maksimal 1 hingga 2 kata. Tanpa titik.
- `Simpan`
- `Buat Tugas`
- `Arsip`
- `Batal` (Bukan 'Batalkan Aksi')
- `Hapus Permanen` (Merah/Destructive)

### Toast / Notifikasi
Muncul singkat (100-150ms). Maksimal 5-7 kata.
- **Success:** `Tugas diselesaikan.` | `Data berhasil disinkronisasi.`
- **Error:** `Gagal menyimpan. Periksa jaringan.` | `Berkas terlalu besar (Maks. 5MB).`
- **Warning:** `Bekerja dalam mode luring.`

### Empty States
Layar kosong bukan error, melainkan kanvas bersih. Informatif tanpa menggurui.
- **Catatan Kosong:** `Belum ada catatan. Tekan Cmd+N untuk memulai draf.`
- **Pencarian Gagal:** `Hasil pencarian tidak ditemukan. Coba kata kunci lain.`
- **Daftar Tugas Bersih:** `Seluruh tugas selesai. Anda bisa beristirahat.`

### Error States & Validation
Menunjuk letak kesalahan tanpa memojokkan pengguna (karena aplikasi digunakan sendiri).
- **Form Error:** `Judul tidak boleh kosong.`
- **404:** `Direktori tidak ditemukan.`

### Dialogs (Pop-ups Konfirmasi)
Header jelas, deskripsi singkat (jika perlu), dan aksi tombol tak membingungkan.
- **Header:** `Hapus Catatan?`
- **Body:** `Catatan "Konsep Desain" akan dipindahkan ke Tong Sampah. Anda memiliki waktu 30 hari untuk memulihkannya.`
- **Buttons:** `Batal` (Kuning/Secondary) dan `Hapus` (Merah/Primary).
*(Hindari menamai tombol dengan "Ya" atau "Tidak" karena ambigu).*
