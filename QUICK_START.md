# KRENOVA Landing Page - Quick Start Guide

## Struktur File yang Telah Dibuat

```
d:\Krenova\
├── index.html                 ✓ Halaman utama landing page
├── panduan-peserta.html       ✓ Halaman panduan untuk peserta
├── manifest.json              ✓ PWA manifest
├── config.json                ✓ Konfigurasi website
├── sw.js                      ✓ Service Worker
├── robots.txt                 ✓ SEO robots directive
├── sitemap.xml                ✓ XML sitemap
├── .htaccess                  ✓ Server configuration
├── README.md                  ✓ Dokumentasi lengkap
├── QUICK_START.md             ✓ File ini
├── css/
│   └── styles.css             ✓ Stylesheet responsif
├── js/
│   └── script.js              ✓ JavaScript interaktivitas
└── assets/
    ├── images/                ✓ Folder untuk gambar
    └── icons/                 ✓ Folder untuk icon PWA
```

## Cara Menjalankan Website

### Opsi 1: Menggunakan Live Server (VS Code)
```bash
1. Buka folder d:\Krenova di VS Code
2. Install extension "Live Server" jika belum ada
3. Klik kanan di index.html → "Open with Live Server"
4. Website akan otomatis membuka di browser
```

### Opsi 2: Menggunakan Python HTTP Server
```bash
cd d:\Krenova
python -m http.server 8000
# Akses: http://localhost:8000
```

### Opsi 3: Menggunakan Node.js HTTP Server
```bash
cd d:\Krenova
npm install -g http-server
http-server
# Akses: http://localhost:8080
```

### Opsi 4: Menggunakan PHP Built-in Server
```bash
cd d:\Krenova
php -S localhost:8000
# Akses: http://localhost:8000
```

## Testing Responsiveness

### Browser DevTools (F12)
1. Buka index.html di browser
2. Tekan `F12` untuk membuka DevTools
3. Klik icon "Toggle device toolbar" atau `Ctrl+Shift+M`
4. Pilih device yang ingin ditest:
   - iPhone 12 Pro (390x844)
   - iPad Air (768x1024)
   - Samsung Galaxy S21 (360x800)
   - Desktop (1920x1080)

### Mobile Devices
- Upload ke hosting dan akses via smartphone
- Atau gunakan tunneling dengan ngrok:
  ```bash
  ngrok http 8000
  ```

## Customization

### Mengubah Warna Brand
Edit `css/styles.css` baris 5-11:
```css
:root {
    --primary-color: #6366f1;      /* Ubah ke warna favorit */
    --secondary-color: #ec4899;    /* Warna aksen */
    /* dst... */
}
```

### Mengubah Konten
Edit `index.html` untuk:
- Nama acara
- Deskripsi
- Kategori kompetisi
- Jadwal
- Informasi kontak
- Social media links

### Menambah Gambar/Logo
```bash
1. Simpan gambar di: assets/images/nama-file.jpg
2. Di index.html tambahkan:
   <img src="assets/images/nama-file.jpg" alt="Deskripsi">
```

## Checklist Sebelum Deploy

- [ ] Edit email kontak di index.html (sesuaikan data Anda)
- [ ] Ganti nomor telepon yang sesuai
- [ ] Update alamat dan lokasi
- [ ] Periksa semua link berfungsi
- [ ] Test di berbagai browser
- [ ] Test responsiveness di mobile
- [ ] Validasi HTML (W3C Validator)
- [ ] Jalankan PageSpeed Insights
- [ ] Setup Google Analytics (opsional)
- [ ] Setup Google Search Console
- [ ] Upload ke hosting yang sesuai

## Deploy ke Hosting

### 1. Siapkan Hosting
- Pilih hosting yang mendukung:
  - PHP 7.4+ atau Node.js
  - HTTPS/SSL (gratis via Let's Encrypt)
  - FTP atau Git integration

### 2. Upload File
```bash
# Via FTP:
- Gunakan Filezilla atau WinSCP
- Upload semua file ke folder public_html

# Via Git:
git init
git add .
git commit -m "Initial KRENOVA website"
git push origin main
```

### 3. Setup Domain
- Update DNS A record ke IP hosting
- Setup SSL certificate
- Setup email (jika ada)

### 4. Testing Production
- Akses website via domain Anda
- Check all links work
- Verify SSL certificate
- Monitor loading speed

## File Descriptions

| File | Fungsi |
|------|--------|
| `index.html` | Halaman utama dengan semua section |
| `panduan-peserta.html` | Panduan lengkap untuk calon peserta |
| `css/styles.css` | Styling dengan responsive design |
| `js/script.js` | Interaktivitas (menu, scroll, FAQ, dll) |
| `manifest.json` | Konfigurasi PWA (offline, install app) |
| `config.json` | Konfigurasi website (opsional) |
| `sw.js` | Service Worker untuk offline cache |
| `robots.txt` | SEO - guidance untuk search engines |
| `sitemap.xml` | XML sitemap untuk SEO |
| `.htaccess` | Server config (Apache) |

## Performance Tips

### Optimasi Gambar
```bash
# Gunakan tools:
- TinyPNG (compress)
- ImageOptim (macOS)
- FileOptimizer (Windows)
- ImageMagick (CLI)
```

### Validasi Code
```bash
# HTML: https://validator.w3.org/
# CSS: https://jigsaw.w3.org/css-validator/
# JS: https://jshint.com/
```

### Page Speed
```bash
# Check di: https://pagespeed.web.dev/
# Target: >90 score
```

## Dukungan & Update

Jika memerlukan bantuan:
1. Baca README.md untuk dokumentasi lengkap
2. Cek README.md untuk troubleshooting
3. Validasi code di W3C Validator
4. Check console browser (F12 > Console)

## Fitur yang Dapat Ditambahkan

1. **Database Integration** - Untuk manage peserta
2. **Registration Form** - Backend untuk pendaftaran online
3. **Payment Gateway** - Jika ada biaya pendaftaran
4. **Email Notifications** - Konfirmasi pendaftaran otomatis
5. **Admin Dashboard** - Kelola konten
6. **Photo Gallery** - Galeri foto acara
7. **Leaderboard** - Ranking peserta real-time
8. **Blog** - Berita dan artikel

## Troubleshooting

### Website tidak tampil
- Periksa path file di index.html
- Jalankan di http (bukan file://)
- Clear browser cache (Ctrl+Shift+Del)

### CSS/JS tidak dimuat
- Check console (F12 > Console)
- Periksa path ke file css/js
- Update link href/src dengan path yang benar

### Service Worker error
- Edit sw.js dan sesuaikan cache name
- Clear browser cache & cookies
- Reload page

### Responsive tidak bekerja
- Periksa viewport meta tag di <head>
- Test di browser DevTools device emulation
- Check CSS media queries

## Referensi Berguna

- **Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **Service Workers**: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- **Web Performance**: https://web.dev/performance/
- **SEO Best Practices**: https://developers.google.com/search
- **Accessibility**: https://www.w3.org/WAI/

---

**Status**: Ready to Deploy  
**Last Updated**: Februari 2026  
**Version**: 1.0  
