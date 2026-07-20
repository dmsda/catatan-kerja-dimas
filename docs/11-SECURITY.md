# Security & Authentication
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Single-Tenant Authentication
Aplikasi "Catatan Kerja Dimas" menolak kerumitan autentikasi massal (seperti OAuth Sosial untuk ribuan *users*). Sistem keamanannya didasarkan pada Otorisasi Pribadi Absolut.
- **Sistem Kredensial:** Kata sandi master (*Master Password*) yang sangat kuat, disimpan sebagai *hash* argon2/bcrypt.
- **Manajemen Sesi:** Setelah berhasil masuk, aplikasi menetapkan token JWT statis berumur panjang (mis. 30 hari) di dalam *Cookie HTTPOnly*. Token diverifikasi murni di *Edge* (Cloudflare Workers Middleware).

## 2. Perlindungan Akses (*Gatekeeping*)
- Seluruh direktori rute aplikasi (kecuali `/login`) dilindungi secara paksa oleh *Middleware Next.js*.
- Tidak ada perizinan *Role* (Admin, User). Begitu Anda masuk, Anda memegang hak veto pada pangkalan data (*God Mode*).
- Jika ada upaya peretasan atau injeksi rute oleh aktor asing, sistem merespons dengan HTTP 404/401 keras tanpa memberikan sinyal arsitektur server.

## 3. Integritas Pangkalan Data & Enkripsi
- **In-Transit:** 100% transmisi data ke Cloudflare D1 diamankan dengan *TLS 1.3 / SSL*.
- **At-Rest (Server):** Pangkalan data di server dienkripsi oleh standar bawaan layanan Cloudflare.
- **Di Perangkat Lokal (IndexedDB):** Mengingat komputer adalah milik perorangan, data di memori klien disimpan dalam bentuk teks biasa demi memastikan indeks algoritma pencarian lokal (MiniSearch) merespons dalam kecepatan milidetik.
- **Mitigasi Serangan (OWASP):** Menghindari *Cross-Site Scripting* (XSS) secara ketat dengan memastikan *Rich Text Editor* (TipTap) dan React melakukan sanitasi tag HTML berbahaya (seperti `<script>`) sebelum merender catatan (*DOM Purify*).

## 4. Perlindungan Endpoint (Rate Limiting)
- Cloudflare *WAF (Web Application Firewall)* dikonfigurasi untuk membatasi lalu lintas API. Mengingat hanya 1 manusia (Dimas) yang mengetik, lonjakan API lebih dari 200 *requests* per menit akan diblokir otomatis untuk mencegah serangan DDoS atau skrip rusak.

## 5. Strategi Pencadangan (Backup)
- Menghindari penguncian vendor (*Vendor Lock-in*). Data tak ternilai tidak boleh raib jika infrastruktur Cloudflare jatuh.
- Terdapat fungsi "Unduh Pencadangan Darurat" (Emergency Backup) berbentuk 1 file berformat `JSON` raksasa yang berisi rekam jejak setiap kata dari semua catatan, tugas, dan *prompt* pengguna, diamankan secara pribadi ke dalam Hardisk/SSD luring (lokal) pengguna.
