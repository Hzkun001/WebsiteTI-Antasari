# Website TI

Website ini adalah aplikasi web berbasis [Next.js](https://nextjs.org/) dengan berbagai komponen interaktif dan animasi modern, seperti Silk background, animasi teks, proximity variable font, dan lain-lain.

## Fitur Utama

- **Silk Background**: Animasi latar belakang berbasis WebGL/Three.js.
- **RotatingText & SplitText**: Animasi teks dinamis.
- **VariableProximity**: Efek proximity pada variable font.
- **ClickSpark**: Efek spark saat klik.
- **LogoWall**: Showcase logo.
- **AnimatedContent**: Reveal animasi konten saat scroll.
- **Navbar**: Navigasi utama responsif.

## Requirement

- Node.js v18 atau lebih baru
- npm v9 atau lebih baru (atau gunakan yarn/pnpm)
- Koneksi internet (untuk instalasi font dan dependensi)
- (Opsional) Git, jika ingin clone dari repository

## Instalasi

1. **Clone repository**
    ```bash
    git clone <url-repo-anda>
    cd website\ TI
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```
    atau jika menggunakan yarn:
    ```bash
    yarn install
    ```

3. **Jalankan development server**
    ```bash
    npm run dev
    ```
    atau:
    ```bash
    yarn dev
    ```

4. **Buka di browser**
    ```
    http://localhost:3000
    ```

## Struktur Folder

```
website TI/
├── app/
│   ├── components/
│   │   ├── AnimatedContent/
│   │   ├── CircularText/
│   │   ├── ClickSpark/
│   │   ├── LogoWall/
│   │   ├── Navbar/
│   │   ├── RotatingText/
│   │   ├── Silk/
│   │   ├── SplitText/
│   │   └── VariableProximity/
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── images/
│       └── logo/
├── package.json
└── ...
```

## Konfigurasi Font

Agar efek variable font berjalan, pastikan font variable (misal Roboto Flex, Inter, atau GeistVF) sudah diimport di `app/globals.css`.  
Contoh import Google Fonts variable:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
body {
  font-family: 'Roboto Flex', sans-serif;
}
```

## Build untuk Produksi

```bash
npm run build
npm start
```

## Catatan

- Jika ada error terkait React hooks, pastikan semua komponen yang memakai hooks berada di dalam Client Component (`"use client"` di paling atas file).
- Untuk efek proximity, pastikan browser mendukung variable font dan font sudah diimport.
- Jika ingin deploy ke Vercel, cukup klik "Import Project" di [Vercel](https://vercel.com/) dan ikuti instruksi.

---

**Selamat mengembangkan Website TI!**
