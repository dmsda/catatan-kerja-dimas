# Panduan Deployment Cloudflare (DimasOS)

Karena kita menggunakan arsitektur **Next.js 16 (App Router)** dan basis data **Cloudflare D1 (SQLite Edge)**, cara paling optimal dan gratis untuk membuat aplikasi ini *online* adalah melalui **Cloudflare Pages**.

Berikut adalah langkah-langkah mutlak yang harus Anda ikuti secara berurutan.

---

## Tahap 1: Persiapan Repositori (GitHub)
Cloudflare Pages bekerja dengan cara menarik kode Anda langsung dari GitHub.
1. Buka terminal di VSCode Anda.
2. Inisialisasi Git dan dorong kode ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DimasOS"
   git branch -M main
   git remote add origin https://github.com/dmsda/catatan-kerja-dimas.git
   git push -u origin main
   ```

---

## Tahap 2: Pembuatan Database (Cloudflare D1)
Kita perlu membuat pangkalan data fisik di infrastruktur Cloudflare.
1. Pastikan Anda sudah login ke Cloudflare via terminal:
   ```bash
   npx wrangler login
   ```
2. Buat pangkalan data D1 baru:
   ```bash
   npx wrangler d1 create dimas_os_db
   ```
3. Cloudflare akan merespons dengan menampilkan informasi konfigurasi. **Salin `database_id` yang muncul.**
4. Buka file `wrangler.toml` di proyek Anda, dan ubah `database_id` menjadi ID yang baru saja Anda salin:
   ```toml
   [[d1_databases]]
   binding = "DB"
   database_name = "dimas_os_db"
   database_id = "MASUKKAN-ID-DARI-TERMINAL-DI-SINI"
   ```

---

## Tahap 3: Migrasi Skema (Drizzle ke D1)
Sekarang kita perlu mencetak tabel (Notes, Tasks, Bookmarks) ke dalam database yang baru dibuat.
1. Bangkitkan file migrasi lokal SQL:
   ```bash
   npx drizzle-kit generate
   ```
2. Eksekusi tabel tersebut langsung ke *Cloudflare D1* Anda:
   ```bash
   npx wrangler d1 execute dimas_os_db --local --file=./drizzle/0000_...sql
   npx wrangler d1 execute dimas_os_db --remote --file=./drizzle/0000_...sql
   ```
   *(Catatan: Ganti `0000_...sql` dengan nama file aktual yang terbentuk di dalam folder `/drizzle/` Anda)*.

---

## Tahap 4: Konfigurasi `@cloudflare/next-on-pages`
Untuk menjalankan Next.js di infrastruktur Cloudflare, kita butuh adaptor khusus.
1. Instal adaptor:
   ```bash
   npm install @cloudflare/next-on-pages
   ```
2. Buka `package.json` dan ubah perintah `"build"`:
   ```json
   "scripts": {
     "dev": "next dev",
     "build": "npx @cloudflare/next-on-pages",
     "start": "next start",
     "lint": "next lint"
   }
   ```
3. Jangan lupa `git add .`, `git commit`, dan `git push` perubahan ini ke GitHub.

---

## Tahap 5: Deployment di Dashboard Cloudflare
1. Buka peramban dan masuk ke **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Di menu kiri, pilih **Workers & Pages**, lalu klik tombol **Create application**.
3. Pilih tab **Pages**, lalu klik **Connect to Git**.
4. Pilih repositori GitHub Anda (`catatan-kerja-dimas`).
5. Pada halaman **Set up builds and deployments**:
   - **Framework preset:** Pilih `Next.js`.
   - **Build command:** `npm run build`
   - **Build output directory:** `.vercel/output/static`
6. Buka bagian **Environment variables (Advanced)** dan tambahkan variabel ini:
   - **Variable name:** `SYNC_SECRET`
   - **Value:** `masukkan-pin-rahasia-anda-disini` (Pastikan rahasia dan sulit ditebak).
7. Klik **Save and Deploy**.

---

## Tahap 6: Menghubungkan D1 ke Pages (Binding)
Setelah deploy pertama selesai (mungkin akan sedikit gagal di fungsi API karena belum disambungkan), lakukan ini:
1. Tetap di dashboard Cloudflare, buka proyek Pages Anda.
2. Masuk ke tab **Settings** -> **Functions** -> **D1 database bindings**.
3. Klik **Add binding**:
   - **Variable name:** `DB`
   - **D1 database:** Pilih `dimas_os_db`.
4. Pergi ke tab **Deployments**, klik titik tiga pada deployment terakhir, lalu pilih **Retry deployment**.

---

## Selesai! 🎉
Aplikasi Anda kini sudah *online* dengan arsitektur Edge murni. 
- URL akan diberikan oleh Cloudflare (contoh: `https://catatan-dimas.pages.dev`).
- Buka aplikasi dari HP Anda, masuk ke **Settings > Sync**, masukkan `SYNC_SECRET` yang tadi Anda buat, lalu tekan **Sinkronkan Sekarang**. Semua memori luring Anda akan terlempar ke *Cloudflare D1*!
