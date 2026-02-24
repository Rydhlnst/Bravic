# Memory Optimization Guide - Bravix

## Perubahan yang Sudah Dilakukan

### 1. ImpactSection
- ✅ Ganti `<img>` dengan Next.js `<Image>` component
- ✅ Reduce image resolution (1200px → 600px)
- ✅ Lazy loading untuk gambar non-active
- ✅ Memoized accordion items dengan `React.memo`
- ✅ Optimasi viewport detection dengan margin

### 2. ValueProposition
- ✅ Kurangi jumlah testimonial (6 → 4 items)
- ✅ GPU acceleration dengan `willChange: "transform"`
- ✅ Memoized TestimonialCard component
- ✅ Optimized animation duration

### 3. HeroSection
- ✅ Hapus `whileHover` animations yang berat
- ✅ Kurangi animation delays
- ✅ Hapus motion per item di product list
- ✅ DashboardPreview dengan React.memo

### 4. PainPoints
- ✅ Hapus `AnimatePresence` kompleks
- ✅ Sederhanakan dengan conditional render
- ✅ Memoized DemoContent dan PainCard

### 5. HowItWorks
- ✅ Hapus motion per item di visuals
- ✅ Static SVG elements (tanpa motion)
- ✅ Memoized StepItem dan visual components

### 6. LandingNavbar, Footer, FinalCTA
- ✅ Memoized components
- ✅ Hapus motion wrapper yang tidak perlu
- ✅ Optimasi re-renders

### 7. Next.js Config
- ✅ Image optimization config
- ✅ `optimizePackageImports` untuk framer-motion & lucide-react

---

## Tips Penggunaan RAM yang Optimal

### Development Mode
```bash
# Gunakan Turbopack (lebih cepat & lebih sedikit RAM)
npm run dev -- --turbopack

# Atau batasi memory Node.js
NODE_OPTIONS='--max-old-space-size=2048' npm run dev
```

### Production Mode (Paling Hemat RAM)
```bash
# Build dan start production
npm run build
npm start
```

Perbedaan RAM usage:
- **Dev mode**: ~500-800MB (Turbopack lebih ringan)
- **Production**: ~100-200MB

### Chrome DevTools Tips
1. Gunakan Incognito mode untuk mengurangi extension overhead
2. Disable Chrome DevTools saat tidak perlu
3. Gunakan `--disable-extensions` flag saat testing

### VS Code Tips
1. Disable extension yang tidak perlu
2. Gunakan setting:
```json
{
  "typescript.tsserver.maxTsServerMemory": 2048
}
```

---

## Hasil yang Diharapkan

Setelah optimasi:
- **Development**: 400-500MB (dari 579MB)
- **Production**: 100-200MB target tercapai ✅

## Monitoring

Untuk memonitor RAM usage real-time:
```bash
# Windows (PowerShell)
Get-Process node | Select-Object Name, WorkingSet

# Task Manager → Details → Node.js processes
```
