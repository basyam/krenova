# KRENOVA 2026 - Lomba Karya Ilmiah
# Website Landing Page - Panduan Setup

## Struktur Folder

```
krenova/
├── index.html                 # Halaman utama
├── manifest.json              # PWA Manifest
├── .htaccess                  # Server configuration (Apache)
├── robots.txt                 # SEO robots file
├── sitemap.xml                # XML sitemap
├── css/
│   └── styles.css             # Stylesheet utama
├── js/
│   └── script.js              # JavaScript utama
├── assets/
│   ├── images/                # Folder gambar
│   └── icons/                 # Folder icon PWA
└── README.md                  # File ini
```

## Quick Start

### 1. Instalasi Lokal
```bash
# Clone atau download project
# Buka folder project

# Untuk testing lokal, gunakan Live Server di VS Code
# atau gunakan Python HTTP Server:
python -m http.server 8000

# Akses via browser: http://localhost:8000
```

### 2. Deploy ke Production
```bash
# Upload semua file ke web hosting Anda
# Pastikan .htaccess file terupload dengan benar
# Set permissions folder assets ke 755
```

## Fitur Utama

- ✅ **Responsive Design** - Sempurna di desktop, tablet, dan mobile
- ✅ **Fast Loading** - Optimasi gambar dan CSS/JS
- ✅ **Mobile First** - Desain diutamakan untuk mobile
- ✅ **PWA Ready** - Service Worker dan manifest.json
- ✅ **SEO Optimized** - Meta tags dan struktur semantic
- ✅ **Accessibility** - WCAG 2.1 compliant
- ✅ **Modern UI** - Gradient, animations, dan smooth transitions

## Browser Support

- ✓ Chrome/Edge 90+
- ✓ Firefox 88+
- ✓ Safari 14+
- ✓ iOS Safari 14+
- ✓ Chrome Android

## Customization

### Mengubah Teks
Edit file `index.html` langsung untuk mengubah:
- Nama kompetisi
- Deskripsi
- Jadwal
- Kategori
- Kontak

### Menambah Gambar
1. Simpan gambar di folder `assets/images/`
2. Edit `index.html` dan tambahkan:
```html
<img src="assets/images/nama-gambar.jpg" alt="Deskripsi">
```

## Konfigurasi Kontak

Edit bagian Contact Section di `index.html`:
- Email: support@krenova.com
- Phone: +62 812 XXXX XXXX
- Address: Jl. Inovasi No. 123
- Social Media: Facebook, Twitter, Instagram, YouTube

## Fitur yang Dapat Ditambahkan

1. **Database Registration** - Sistem pendaftaran online
2. **Email Integration** - Kirim email otomatis ke peserta
3. **Admin Dashboard** - Panel admin untuk manage konten
4. **Payment Gateway** - Integrasi pembayaran (jika ada biaya)
5. **Photo Gallery** - Galeri foto kompetisi
6. **Blog/News** - Berita dan artikel terkait kompetisi
7. **Leaderboard** - Ranking peserta secara real-time
8. **Certificate Generator** - Pembuat sertifikat otomatis

## Keamanan

- Hindari share informasi sensitif di client-side
- Gunakan HTTPS untuk production
- Validasi semua input di server-side
- Gunakan firewall dan SSL certificate
- Regular update dependencies jika menggunakan framework

## Performance Tips

1. **Image Optimization**
   - Gunakan format WebP
   - Compress gambar sebelum upload
   - Gunakan responsive images

2. **Caching**
   - Browser caching via .htaccess
   - CDN untuk static assets
   - Service Worker untuk offline access

3. **Code Splitting**
   - Lazy load gambar
   - Defer non-critical JavaScript
   - Minimize CSS/JS

## SEO Optimization

File sudah include:
- Meta description
- Open Graph tags
- robots.txt
- sitemap.xml
- Structured data (schema.org)

Untuk better SEO:
1. Submit sitemap ke Google Search Console
2. Verify domain ownership
3. Monitor keywords
4. Create quality content
5. Build backlinks

## Testing Checklist

- [ ] Test di berbagai browser
- [ ] Test responsiveness di mobile
- [ ] Check page speed (PageSpeed Insights)
- [ ] Test form submission
- [ ] Check all links work
- [ ] Test image loading
- [ ] Validate HTML/CSS
- [ ] Test accessibility (keyboard nav)
- [ ] Check SEO tags
- [ ] Test PWA installation

## Support & Updates

Untuk update versi terbaru:
1. Periksa folder dokumentasi
2. Baca changelog
3. Follow update instructions
4. Test di staging sebelum production

## File Descriptions

| File | Deskripsi |
|------|-----------|
| `index.html` | Halaman HTML utama dengan struktur lengkap |
| `css/styles.css` | Stylesheet dengan responsive design |
| `js/script.js` | Interaktivitas, navbar, scroll effects |
| `manifest.json` | PWA configuration untuk mobile app |
| `sw.js` | Service Worker untuk offline support |
| `.htaccess` | Server config (caching, security, compression) |
| `robots.txt` | SEO guidance untuk search engines |

## Color Palette



## Analytics Integration

Untuk menambah Google Analytics:
```html
<!-- Tambahkan sebelum </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

**Last Updated**: Februari 2026  
**Version**: 1.0  
**Status**: Production Ready

