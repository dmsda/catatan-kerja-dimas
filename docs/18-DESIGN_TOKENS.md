# Design Tokens (Implementation Map)
**Project Name:** Catatan Kerja Dimas
**Document Version:** 1.0.0

---

## 1. Referensi Konfigurasi Sistem (Tailwind CSS v4 / Figma)
Spesifikasi teknis ini diterjemahkan dari `02-BRAND_GUIDELINES.md` dan `03-DESIGN_SYSTEM.md`. Dokumen ini menjadi jangkar deklarasi variabel CSS untuk mesin *styling*. AI Agent wajib memastikan `globals.css` persis merefleksikan nilai-nilai ini.

## 2. Root CSS Variables
Salin/Tempel referensi ini untuk mendefinisikan lapisan basis proyek web (`@layer base`).

```css
:root {
  /* ========================================================
     BRAND COLORS (Single Source of Truth)
  ======================================================== */
  --color-primary: #D90000;
  --color-secondary: #FFEA93;
  --color-accent: #8DB355;
  --color-neutral-black: #000000;
  --color-neutral-white: #FFFFFF;

  /* ========================================================
     APPLICATION SEMANTICS
  ======================================================== */
  --background: #FFFFFF; /* atau #F9FAFB */
  --foreground: #000000;
  
  --card: #FFFFFF;
  --card-foreground: #000000;

  --popover: #FFFFFF;
  --popover-foreground: #000000;

  --border: #000000;
  --input: #000000;
  --ring: #D90000; /* Merah mendominasi interaksi fokus (Focus Ring) */

  /* Semantic Buttons (Mapping shadcn) */
  --primary: #D90000;
  --primary-foreground: #FFFFFF;
  
  --secondary: #FFEA93;
  --secondary-foreground: #000000;
  
  --destructive: #D90000; /* Merah krisis */
  --destructive-foreground: #FFFFFF;

  --muted: #F3F4F6;
  --muted-foreground: #6B7280;

  /* ========================================================
     RETRO STRUCTURAL TOKENS
  ======================================================== */
  --radius-retro: 10px; /* Radius kotak industrial modern */
  --border-width-retro: 2px;
  
  /* Hard Shadows (No Blur) */
  --shadow-retro-sm: 2px 2px 0px #000000;
  --shadow-retro-md: 4px 4px 0px #000000;
  --shadow-retro-lg: 8px 8px 0px #000000;
  --shadow-retro-float: 12px 12px 0px #000000;

  /* ========================================================
     TYPOGRAPHY STACK
  ======================================================== */
  /* Di-map melalui tailwind config theme.fontFamily */
  --font-heading: 'IBM Plex Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 3. Dark Mode Configuration (Opsional / Future)
Sistem ini siap diinjeksi kelas `.dark` dengan logika inversi warna latar dan teks (*Phosphor Terminal Style*).
```css
.dark {
  --background: #000000;
  --foreground: #FFFFFF;
  --card: #111111;
  --card-foreground: #FFFFFF;
  --border: #FFFFFF;
  --input: #FFFFFF;
  
  --shadow-retro-sm: 2px 2px 0px #333333;
  --shadow-retro-md: 4px 4px 0px #333333;
  --shadow-retro-lg: 8px 8px 0px #333333;
}
```

## 4. Spacing Rules (Tailwind Defaults)
Skala spasi mutlak menggunakan kelas bawaan Tailwind (kelipatan 4px/0.25rem).
- `p-1` (4px)
- `p-2` (8px)
- `p-4` (16px) - *Standar padding komponen*
- `p-6` (24px) - *Standar margin/gap layout*
- Dilarang membuat skala baru melalui *arbitrary values* seperti `p-[17px]`.
