# DEPLOYMENT GUIDE - KRENOVA 2026 Website

## 🚀 Panduan Lengkap Deploy Website

### Pilihan Hosting yang Direkomendasikan

#### 1. **Hosting Gratis** (untuk development/testing)
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com
- **Firebase Hosting**: https://firebase.google.com

#### 2. **Hosting Berbayar** (untuk production)
- **Hostinger**: Mulai dari Rp 50.000/bulan
- **Niagahoster**: Mulai dari Rp 70.000/bulan
- **Domainesia**: Mulai dari Rp 60.000/bulan
- **Dewaweb**: Mulai dari Rp 80.000/bulan

---

## 📦 Deploy via Vercel (Paling Mudah)

### Step 1: Setup Git Repository
```bash
cd d:\Krenova
git init
git add .
git commit -m "Initial KRENOVA website"
```

### Step 2: Push ke GitHub
```bash
# Buat repository baru di github.com
# Kemudian:
git remote add origin https://github.com/username/krenova.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy via Vercel
```bash
1. Kunjungi https://vercel.com
2. Sign up dengan GitHub account
3. Click "Import Project"
4. Pilih repository "krenova"
5. Click "Deploy"
6. Website live dalam hitungan detik!
```

**Keuntungan Vercel:**
- ✅ Gratis untuk static site
- ✅ Auto deploy saat push ke GitHub
- ✅ Free SSL certificate
- ✅ CDN global (cepat di mana saja)
- ✅ Analytics built-in
- ✅ Staging environment

---

## 📦 Deploy via Netlify

### Step 1: Connect GitHub
```bash
1. Kunjungi https://netlify.com
2. Sign up dengan GitHub
3. Click "New site from Git"
4. Authorize Netlify untuk akses GitHub
5. Pilih repository "krenova"
```

### Step 2: Configure Build Settings
```
Build command: (leave empty untuk static site)
Publish directory: . (atau /)
```

### Step 3: Deploy
```
Click "Deploy site"
Website langsung live!
```

---

## Deploy ke Hosting Lokal (Hostinger/Niagahoster)

### Step 1: Download dan Extract
```bash
1. Download semua file website
2. Extract ke folder lokal
```

### Step 2: Setup FTP Connection
```bash
# Tools yang bisa digunakan:
- FileZilla (https://filezilla-project.org/)
- WinSCP (untuk Windows)
- Cyberduck (untuk macOS)

# Konfigurasi FTP:
Host: ftp.krenova.com (dari provider hosting)
Username: cpanel_user
Password: cpanel_password
Port: 21
```

### Step 3: Upload File
```bash
1. Buka FileZilla
2. Masuk dengan FTP credentials
3. Navigate ke folder "public_html"
4. Upload semua file ke folder tersebut
5. Verify upload sukses
```

### Step 4: Setup Domain
```bash
1. Login ke cPanel hosting
2. Buka "Addon Domains" atau "Parked Domains"
3. Masukkan domain: krenova.com
4. Point ke folder: public_html
5. Wait 24-48 jam untuk DNS propagation
```

### Step 5: Setup SSL Certificate
```bash
1. Di cPanel, buka "AutoSSL" atau "SSL Certificates"
2. Install free SSL dari Let's Encrypt
3. Wait untuk certificate issued (5-10 menit)
4. Website akan auto-redirect ke HTTPS
```

---

## Post-Deployment Checklist

### 1. Test Website
- [ ] Homepage load dengan cepat
- [ ] Semua link berfungsi
- [ ] Images tampil dengan baik
- [ ] Mobile responsiveness OK
- [ ] CSS dan JS di-load sempurna
- [ ] No console errors (F12)

### 2. Setup Security
```bash
# Update robots.txt (sudah ada)
# Update sitemap.xml (sudah ada)
# Enable HTTPS (mandatory)
# Setup firewall (jika ada)
# Setup auto-backup
```

### 3. Performance Optimization
```bash
# Check page speed:
https://pagespeed.web.dev/

# Target score: 90+

# Tips:
- Enable Gzip compression
- Enable browser caching
- Optimize images
- Minify CSS/JS
- Use CDN
```

### 4. SEO Setup
```bash
1. Submit sitemap ke Google Search Console
2. Verify website ownership
3. Setup robots.txt
4. Monitor keyword rankings
5. Check for broken links
6. Setup Google Analytics
7. Enable Search Console notifications
```

### 5. Email Configuration
```bash
# Setup email di cPanel:
1. Create email account: support@krenova.com
2. Setup email forwarding (jika perlu)
3. Configure SMTP for contact forms
4. Setup auto-reply messages
```

### 6. Backup Strategy
```bash
# Setup auto-backup:
- Daily backup via hosting provider
- Weekly backup manual download
- Database backup (jika ada)
- Version control via Git
```

---

## Monitoring & Maintenance

### Tools Monitoring Gratis
1. **Uptime Monitoring**: https://uptimerobot.com/
2. **Performance Monitoring**: https://web.dev/measure/
3. **SEO Monitoring**: https://search.google.com/search-console
4. **Analytics**: https://analytics.google.com/
5. **Error Tracking**: https://sentry.io/

### Setup Uptime Monitoring
```bash
1. Visit https://uptimerobot.com
2. Sign up
3. Click "Add New Monitor"
4. Type: HTTP(s)
5. URL: https://krenova.com
6. Interval: 5 minutes
7. Get alerts jika website down
```

### Setup Google Analytics
```bash
# Add ke <head> section di index.html:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_XXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_XXXX');
</script>
```

---

## Security Best Practices

### 1. HTTPS/SSL
- ✅ Enforce HTTPS (semua traffic redirect ke HTTPS)
- ✅ HSTS header enabled (Strict-Transport-Security)
- ✅ Certificate valid dan up-to-date

### 2. Headers Security
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Update & Patches
- Regularly update software
- Monitor security advisories
- Keep dependencies updated
- Test updates di staging first

### 4. Backup & Disaster Recovery
- Daily automated backups
- Weekly manual verification
- Test restore process monthly
- Keep backup off-site

---

## Troubleshooting Common Issues

### Issue 1: Website Not Loading
```bash
# Solution:
1. Check file permissions (644 untuk files, 755 untuk folders)
2. Check .htaccess syntax
3. Verify DNS pointing correctly
4. Check server error logs
5. Clear browser cache
```

### Issue 2: CSS/JS Not Loading
```bash
# Solution:
1. Check file paths di HTML
2. Check file permissions
3. Check for typo di href/src
4. Clear cache dan hard refresh (Ctrl+Shift+R)
5. Check console errors (F12)
```

### Issue 3: Images Not Showing
```bash
# Solution:
1. Verify image files uploaded
2. Check image paths correct
3. Check image file permissions
4. Verify image format supported
5. Check image dimensions
```

### Issue 4: Slow Loading Speed
```bash
# Solution:
1. Enable Gzip compression
2. Optimize dan compress images
3. Minify CSS dan JavaScript
4. Enable browser caching
5. Use CDN untuk static assets
6. Reduce server response time
```

### Issue 5: HTTPS Certificate Error
```bash
# Solution:
1. Ensure certificate installed correctly
2. Check domain matches certificate
3. Check certificate not expired
4. Clear browser cache
5. Wait for DNS propagation (24h)
```

---

## Support & Help

### Contact Hosting Provider
- Email support dengan clear description
- Provide error messages & logs
- Mention website URL & domain
- Attach screenshots jika perlu

### Community Resources
- Stack Overflow: https://stackoverflow.com/
- Reddit r/webdev: https://reddit.com/r/webdev/
- Mozilla Developer: https://developer.mozilla.org/
- Google Web Fundamentals: https://developers.google.com/web

---

## Cost Estimation (Per Tahun)

### Opsi Budget
```
Domain (.com/.id)     : Rp 150.000 - 300.000
Hosting (minimal)     : Rp 600.000 - 1.200.000
SSL Certificate       : GRATIS (Let's Encrypt)
Email Hosting         : Rp 300.000 - 600.000
CDN (opsional)        : Rp 200.000 - 500.000
---
Total Tahun Pertama   : Rp 1.250.000 - 2.600.000
```

### Opsi Premium
```
Domain Premium        : Rp 300.000 - 500.000
Hosting Premium       : Rp 2.400.000 - 6.000.000
SSL Dedicated         : Rp 500.000 - 1.500.000
Email Professional    : Rp 1.200.000 - 2.400.000
CDN Global            : Rp 500.000 - 1.500.000
Backup & Security     : Rp 500.000 - 1.000.000
---
Total Tahun Pertama   : Rp 5.400.000 - 13.000.000
```

---

## Final Checklist

Sebelum go-live, pastikan:

- [ ] Semua file terupload dengan benar
- [ ] Website accessible via domain
- [ ] HTTPS/SSL certificate active
- [ ] Mobile responsiveness tested
- [ ] All links verified working
- [ ] Images load correctly
- [ ] Performance optimized (PageSpeed 90+)
- [ ] Google Search Console verified
- [ ] Analytics tracking setup
- [ ] Backup system configured
- [ ] Monitoring/uptime alerts active
- [ ] Contact form working (jika ada)
- [ ] Email notifications configured
- [ ] 404 page customized (opsional)
- [ ] Robots.txt dan sitemap.xml present

---

**Status**: Ready for Production  
**Version**: 1.0  
**Last Updated**: Februari 2026

