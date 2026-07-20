# Database Architecture
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Database Stack
- **Database Engine:** Cloudflare D1 (Serverless SQLite).
- **ORM:** Drizzle ORM.
- **Paradigm:** Relational (SQL), Single-Tenant (Tanpa tabel `users` atau `organizations`).

## 2. Table Definitions (Drizzle Schema)

### 2.1. `notes`
Menyimpan seluruh catatan teks, ide, dan notulen.
- `id`: string (UUID, Primary Key)
- `title`: string (Not Null, default 'Untitled')
- `content_json`: text (Menyimpan struktur block TipTap)
- `content_html`: text (Render statis untuk pencarian/ekspor cepat)
- `folder_id`: string (Foreign Key -> `folders.id`)
- `is_pinned`: boolean (Default false)
- `is_archived`: boolean (Default false)
- `created_at`: integer (Timestamp Unix)
- `updated_at`: integer (Timestamp Unix)

### 2.2. `folders`
Sistem hierarki folder untuk Notes, Bookmarks, dll.
- `id`: string (UUID, PK)
- `name`: string (Not Null)
- `parent_id`: string (FK -> `folders.id`, Nullable, untuk sub-folder)
- `created_at`: integer

### 2.3. `tasks`
Manajemen aksi operasional dan pengingat.
- `id`: string (UUID, PK)
- `title`: string (Not Null)
- `description`: text (Catatan spesifik tugas)
- `status`: string (Enum: `'todo'`, `'in_progress'`, `'done'`)
- `priority`: string (Enum: `'low'`, `'medium'`, `'high'`)
- `due_date`: integer (Timestamp, Nullable)
- `note_id`: string (FK -> `notes.id`, Nullable, menautkan tugas ke rapat/catatan)
- `created_at`: integer
- `updated_at`: integer

### 2.4. `prompts`
Gudang kalimat instruksi Kecerdasan Buatan.
- `id`: string (UUID, PK)
- `title`: string (Not Null)
- `prompt_text`: text (Not Null)
- `ai_engine`: string (Enum: `'gpt'`, `'claude'`, `'gemini'`, `'cursor'`)
- `category`: string (Label: 'coding', 'seo', 'writing')
- `created_at`: integer

### 2.5. `articles`
Manajemen naskah terpublikasi (*Long-form*).
- `id`: string (UUID, PK)
- `title`: string
- `outline_text`: text
- `content`: text
- `status`: string (Enum: `'idea'`, `'draft'`, `'review'`, `'published'`)
- `target_publish_date`: integer
- `created_at`: integer

### 2.6. `files` (Aset Lokal)
Mendata metadata gambar/PDF yang dikelola ke Cloudflare R2 atau IndexedDB.
- `id`: string (UUID, PK)
- `file_name`: string
- `file_type`: string (MIME type)
- `size_bytes`: integer
- `url`: string (URL penyedia eksternal/lokal)
- `created_at`: integer

### 2.7. `settings`
Menyimpan konfigurasi pengguna dalam JSON tunggal (*Key-Value Store* ringan).
- `id`: string (PK, Hardcoded 'default')
- `preferences_json`: text (Menyimpan tema, hotkeys, editor font size)
- `updated_at`: integer

## 3. Relationships & Indexes
- **Indexes:** Dibuat indeks pada kolom `updated_at` (untuk sinkronisasi luring/daring *Last-Write-Wins*), kolom `status` pada tugas, dan `title` pada catatan.
- **Relasi:** Semua Foreign Keys menggunakan `ON DELETE SET NULL` atau `CASCADE` sesuai kebutuhan, untuk menjaga integritas graf *Knowledge Base*.
