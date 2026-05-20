# PRD: Visi Klinik Mata — Klinik Mata Spesialis

## 1. Brand Identity

**Nama Brand:** Visi Klinik Mata
**Alasan Naming:** "Visi" = penglihatan (bahasa Indonesia), juga bermakna "visi/cita-cita" — double meaning yang strong. Indonesian-warm, langsung deliver value (penglihatan), professional, mudah diingat. Cocok untuk klinik mata yang positioning komprehensif dari pemeriksaan rutin sampai surgery.

**Tagline:** *"Pelihara Visi Anda, Untuk Masa Depan Yang Jernih."*

**Target Audience:**
- Anak & remaja (myopia control, mata juling)
- Profesional dewasa (refraction, dry eye, computer vision syndrome)
- Patient pre-Lasik (refractive surgery)
- Patient katarak (lansia, dewasa)
- Patient diabetes (diabetic retinopathy)
- Patient glaucoma (early detection & treatment)
- Patient yang butuh kacamata & contact lens

**Brand Voice:**
- Tone: Profesional medis, caring, edukatif, accessible
- Style copywriting: Clear medical info, normalize eye care, family-oriented
- Avoid: Bahasa medis berlebihan tanpa explanation, fear-mongering

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (subtle, medical)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (medical clean, eye care)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo medical, nav, CTA "Book Pemeriksaan" |
| 2 | Hero | React island `client:load` | Profesional medical + family-friendly |
| 3 | Eye Conditions | React island `client:visible` | Myopia, katarak, glaucoma, dry eye, dll |
| 4 | Services | React island `client:visible` | 8 layanan utama |
| 5 | Lasik & Refractive Surgery | React island `client:visible` | Highlight Lasik (high-value service) |
| 6 | Our Ophthalmologists | React island `client:visible` | Tim dokter Sp.M (Spesialis Mata) |
| 7 | Technology | React island `client:visible` | Equipment medical-grade |
| 8 | Optical Shop | React island `client:visible` | In-clinic optical shop |
| 9 | Pricing | `.astro` static | Indikatif pricing |
| 10 | When To See Eye Doctor | React island `client:visible` | Edukasi kapan harus periksa |
| 11 | Testimonial | React island `client:visible` | Patient stories (post-Lasik, katarak) |
| 12 | FAQ | React island `client:visible` | FAQ eye care |
| 13 | Booking CTA | React island `client:idle` | Form janji pemeriksaan |
| 14 | Footer | `.astro` static | Cabang, kontak, BPJS, asuransi |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Layanan • Lasik • Dokter • Kacamata • Lokasi
- CTA: **Book Pemeriksaan**

### Hero
- **Headline:** Mata Sehat, Hidup Lebih Jernih.
- **Subheadline:** Klinik mata spesialis dengan layanan komprehensif: pemeriksaan rutin, Lasik, operasi katarak, treatment retina, kacamata anak hingga lansia.
- **CTA Primary:** Book Pemeriksaan
- **CTA Secondary:** Konsultasi Lasik

Trust badges: "15+ Dokter Sp.M Bersertifikat" • "5 Cabang Jabodetabek" • "BPJS & Asuransi Partner" • "Teknologi Wavelight FS200 Lasik"

### Eye Conditions
- **Heading:** Kondisi Mata Yang Kami Tangani
- **Subheading:** Klik untuk pelajari & lihat treatment yang tersedia.

Grid 8 condition cards:

**👁️ Refraction Errors**
- Minus (myopia), plus (hyperopia)
- Silinder (astigmatism)
- Presbyopia (mata tua)

**👶 Myopia Control Anak**
- Atropine drops
- Ortho-K (contact lens malam)
- MiSight contact lens

**👴 Katarak**
- Phacoemulsification surgery
- Multifokal IOL implant
- Day-surgery, recovery cepat

**🌑 Glaucoma**
- Early detection (intraocular pressure)
- Medication & surgery
- Lifetime monitoring

**🩸 Diabetic Retinopathy**
- Screening untuk diabetic patient
- Laser & injection treatment
- Anti-VEGF therapy

**💧 Dry Eye Syndrome**
- Computer vision syndrome
- Meibomian gland dysfunction
- IPL therapy & punctal plug

**👀 Mata Juling (Strabismus)**
- Pada anak & dewasa
- Bedah otot mata
- Vision therapy

**🔬 Floater & Retinal Detachment**
- Posterior vitreous detachment
- Retinal tear & detachment
- Vitrectomy surgery

### Services
- **Heading:** Layanan Lengkap
- 8 service cards:

**🔍 Pemeriksaan Mata Komprehensif**
- Refraction test (auto refraktor)
- Tonometry (tekanan intraokular)
- Slit lamp examination
- Funduscopy
- *Rp 250k - 500k*

**👁️ Lasik & Refractive Surgery**
- Femto-LASIK (Wavelight FS200)
- SMILE (no-blade)
- PRK (untuk kornea tipis)
- *Mulai Rp 15 jt / mata*

**⚪ Cataract Surgery**
- Phacoemulsification
- IOL implant (monofokal, multifokal, toric)
- Day surgery 20 menit
- *Mulai Rp 8 jt / mata*

**💉 Retina Treatment**
- Anti-VEGF injection
- Retinal laser
- Vitrectomy
- *Mulai Rp 3 - 15 jt*

**👶 Pediatric Ophthalmology**
- Mata juling
- Lazy eye (amblyopia)
- Myopia control
- *Konsultasi Rp 350k*

**🌑 Glaucoma Management**
- Pemeriksaan tekanan
- OCT optic nerve
- Visual field test
- Medication & surgery
- *Mulai Rp 500k*

**💧 Dry Eye Clinic**
- LipiView assessment
- IPL therapy
- Punctal plug
- *Mulai Rp 1 jt*

**👓 Optical Shop In-House**
- Frame premium & affordable
- Lensa Zeiss, Essilor, Hoya
- Contact lens fitting
- One-stop solution

### Lasik & Refractive Surgery
- **Heading:** Bebas Kacamata Dengan Lasik
- **Subheading:** Teknologi Wavelight FS200 — Lasik dengan blade-free, akurasi tinggi, recovery cepat.

3 Lasik option cards:

**⚡ Femto-LASIK** ⭐ Most Popular
*Rp 15 jt / mata*
- Wavelight FS200 femtosecond
- 100% blade-free
- Recovery 24-48 jam
- Untuk minus -1 sampai -10

**🔬 SMILE**
*Rp 25 jt / mata*
- Small incision, minimal invasive
- Recovery lebih cepat
- Cocok untuk lifestyle aktif (atlet, dll)
- Untuk minus -1 sampai -10

**🔆 PRK**
*Rp 12 jt / mata*
- Untuk kornea tipis
- Recovery lebih lama (5-7 hari)
- Permanent result

**Syarat Lasik:**
- Usia ≥ 18 tahun
- Refraksi stabil 1 tahun terakhir
- Tidak hamil/menyusui
- Tidak ada kondisi kornea kontradiksi

**CTA:** Konsultasi Lasik Gratis (termasuk Lasik eligibility test)

### Our Ophthalmologists
- **Heading:** Tim Dokter Spesialis Mata
- **Subheading:** Semua bersertifikat Sp.M (Spesialis Mata), beberapa dengan sub-spesialisasi.

Grid 10 dokter cards:
- **dr. Andreas Hartono, Sp.M(K)** — Spesialis Mata Konsultan, Lasik & Refractive
- **dr. Sari Wulandari, Sp.M** — Pediatric Ophthalmology
- **dr. Reza Pratama, Sp.M(K)** — Vitreoretinal Surgery
- **dr. Maya Setiawati, Sp.M** — Cataract & Anterior Segment
- **dr. Bayu Kurniawan, Sp.M** — Glaucoma Specialist
- **dr. Linda Wijaya, Sp.M(K)** — Oculoplastic Surgery (kelopak mata)
- **dr. Andre Hartanto, Sp.M** — Cornea & External Disease
- **dr. Nina Indriani, Sp.M** — General Ophthalmology
- **dr. Daniel Kusuma, Sp.M(K)** — Neuro-Ophthalmology
- **dr. Tika Larasati, Sp.M** — Dry Eye & Ocular Surface

Per card: foto, nama dengan gelar, sub-spesialisasi, jadwal praktik

### Technology
- **Heading:** Teknologi Diagnostic & Surgical Modern
- 6 tech cards:

**🔬 OCT (Optical Coherence Tomography)** — Heidelberg Spectralis
Imaging retina & optic nerve resolusi tinggi.

**⚡ Wavelight FS200 + EX500** — Alcon (US)
Platform Lasik kelas dunia, blade-free femtosecond.

**👁️ Auto Refractor & Topography**
Pemeriksaan refraksi akurat, mapping kornea untuk Lasik eligibility.

**💧 LipiView & LipiFlow** — TearScience
Diagnostic & treatment dry eye dari root cause.

**🔆 Visual Field Analyzer** — Humphrey HFA3
Standar gold detection glaucoma.

**🩺 Phacoemulsification Unit** — Centurion Alcon
Surgery katarak presisi tinggi.

### Optical Shop
- **Heading:** Optical Shop In-Clinic
- **Body:** Setelah pemeriksaan, langsung fitting kacamata atau contact lens — no need ke optical lain.

3 optical highlight:

**👓 Frame Collection**
- Frame premium: Ray-Ban, Oakley, Persol
- Frame affordable: brand lokal
- Frame anak (durable, fun design)
- Custom fitting

**🔍 Lensa Premium**
- Zeiss (Jerman) — premium clarity
- Essilor (Prancis) — multifokal expertise
- Hoya (Jepang) — anti-reflective

**👁️ Contact Lens**
- Soft daily, monthly
- Toric (silinder)
- Multifocal
- Color contact (medical-grade)
- Fitting & training included

### Pricing
- **Heading:** Pricing Reference
- **Subheading:** Indikatif. Untuk BPJS & asuransi: cek koordinasi kami.

| Service | Harga | Catatan |
|---------|-------|---------|
| Pemeriksaan komprehensif | Rp 250k - 500k | + dokter spesialis |
| Konsultasi Sp.M | Rp 250k - 400k | Per visit |
| Refraction + kacamata | Rp 250k + frame/lensa | |
| Lasik (Femto) | Rp 15 jt / mata | Free konsultasi |
| Lasik (SMILE) | Rp 25 jt / mata | Free konsultasi |
| Cataract surgery + IOL mono | Rp 8 - 12 jt / mata | |
| Cataract surgery + IOL multifokal | Rp 15 - 25 jt / mata | |
| Anti-VEGF injection | Rp 3 - 6 jt / sesi | |
| Glaucoma surgery | Rp 10 - 20 jt | |
| Strabismus surgery | Rp 8 - 15 jt | |
| OCT scan | Rp 600k - 900k | |

**BPJS Coverage:**
- Pemeriksaan & treatment dasar
- Cataract surgery (IOL monofokal standar)
- Glaucoma medication (formularium nasional)
- *Perlu rujukan FKTP*

### When To See Eye Doctor
- **Heading:** Kapan Sebaiknya Periksa Mata?
- 6 case cards:

**👶 Anak (3-6 tahun)**
First eye check sebelum masuk sekolah — deteksi mata juling, refraction error.

**🎓 Sekolah & Remaja**
Setiap 1-2 tahun, especially if main HP/komputer banyak. Cek myopia progression.

**💼 Dewasa (20-40)**
Setiap 2 tahun jika no issue. Setiap tahun jika pakai kacamata/lensa kontak.

**👴 Lansia (40+)**
Setiap tahun. Risk presbyopia, katarak, glaucoma meningkat.

**🩸 Diabetic Patient**
Setiap tahun (atau 6 bulan jika ada retinopathy). Diabetes risk besar untuk eye disease.

**🚨 Emergency Signs**
Penglihatan tiba-tiba kabur, floater banyak baru muncul, flash of light, mata merah hebat — segera ke dokter mata.

### Testimonial
- **Heading:** Cerita Pasien Kami
- 4 testimonial:

> "Pakai kacamata sejak SMP, sekarang 32 tahun. Akhirnya berani Lasik di Visi. dr. Andreas detail jelasin syarat & risiko. 1 hari recovery, sekarang melihat dunia tanpa kacamata!"
> — **Reza, 32 tahun, post-Femto LASIK**

> "Mama saya 68 tahun, katarak bilateral. Surgery di Visi pakai IOL multifokal, sekarang bisa baca koran tanpa kacamata baca. Tetangga sampai nanya operasi di mana."
> — **Bu Nina, anak pasien katarak**

> "Anak saya 7 tahun didiagnosis amblyopia (lazy eye). dr. Sari sabar handle anak, kasih plan vision therapy 6 bulan. Hasilnya signifikan."
> — **Pak Bayu, ayah pasien anak**

> "Diabetic 15 tahun, dapat retinopathy stadium 2. Treatment anti-VEGF injection rutin di Visi sudah 2 tahun, kondisi stabil."
> — **Pak Bambang, 58 tahun, diabetic patient**

### FAQ
- **Heading:** FAQ
Accordion:
1. Lasik aman gak? → Lasik adalah procedure yang sudah dilakukan jutaan worldwide dengan safety record tinggi. Risk minor minimal jika dilakukan dokter berpengalaman.
2. Setelah Lasik, mata bisa minus lagi gak? → Hasil Lasik permanen untuk kondisi refraksi saat ini. Tapi presbyopia (mata tua) tetap bisa terjadi pada usia 40+.
3. Operasi katarak BPJS bagaimana? → BPJS cover phacoemulsification + IOL monofokal standar. Upgrade ke IOL multifokal/toric: top-up pribadi.
4. Anak myopia, harus pakai kacamata? → Tergantung minus. Minus < 1 mungkin tidak harus pakai full-time. Konsultasi dokter pediatric ophthalmology.
5. Berapa lama harus pakai kacamata setelah didiagnosis? → Bisa selamanya (kecuali Lasik). Kacamata membantu fokus, bukan obat.
6. Dry eye bisa sembuh? → Dry eye bisa dikelola (managed), tidak 100% "sembuh". Tergantung penyebab — IPL therapy efektif untuk meibomian gland dysfunction.

### Booking CTA
- **Heading:** Book Pemeriksaan Mata
- **Body:** Pemeriksaan komprehensif 45-60 menit. Hasil & rekomendasi langsung dari dokter.
- Form: Nama, WhatsApp, Email, Layanan (dropdown: General checkup, Lasik konsultasi, Katarak konsultasi, Glaucoma, Anak, Dry eye), Dokter preferensi (optional), Cabang, Tanggal preferensi
- **CTA:** Book Sekarang

Alternative: **WhatsApp Direct** untuk pertanyaan cepat

### Footer
- Tagline: *"See clearly. Live brightly."*
- Cabang: 5 lokasi (Jakarta Selatan, Jakarta Pusat, BSD, Bekasi, Surabaya)
- Jam: Senin-Sabtu 08:00-20:00, Minggu 09:00-15:00 (poliklinik)
- Insurance partners: BPJS, Allianz, AXA, Cigna, Mandiri Inhealth, Prudential
- Sertifikasi: Kemenkes RI, PERDAMI member (Perhimpunan Dokter Spesialis Mata Indonesia)
- Sosmed: IG (@visi.klinikmata), YouTube (eye care education)

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/ophthalmologist-eye-exam | "Pemeriksaan mata dokter" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/eye%20clinic%20professional/ | "Eye clinic modern" | 1920x1080 |
| Condition - Refraction | Unsplash | https://unsplash.com/s/photos/glasses-prescription-eye | "Refraction error" | 600x600 |
| Condition - Myopia child | Pexels | https://www.pexels.com/search/child%20glasses%20eye%20test/ | "Myopia anak" | 600x600 |
| Condition - Cataract | Unsplash | https://unsplash.com/s/photos/cataract-elderly-eye | "Katarak lansia" | 600x600 |
| Condition - Glaucoma | Pexels | https://www.pexels.com/search/glaucoma%20test%20eye/ | "Glaucoma exam" | 600x600 |
| Condition - Diabetic Retinopathy | Unsplash | https://unsplash.com/s/photos/diabetic-eye-exam | "Diabetic retinopathy" | 600x600 |
| Condition - Dry Eye | Pexels | https://www.pexels.com/search/dry%20eye%20computer/ | "Dry eye syndrome" | 600x600 |
| Condition - Strabismus | Unsplash | https://unsplash.com/s/photos/child-strabismus-eye | "Mata juling anak" | 600x600 |
| Condition - Floater | Pexels | https://www.pexels.com/search/eye%20floater%20exam/ | "Floater treatment" | 600x600 |
| Service - Exam | Unsplash | https://unsplash.com/s/photos/comprehensive-eye-exam | "Pemeriksaan komprehensif" | 800x600 |
| Service - Lasik | Pexels | https://www.pexels.com/search/lasik%20surgery/ | "Lasik procedure" | 800x600 |
| Service - Cataract | Unsplash | https://unsplash.com/s/photos/cataract-surgery-modern | "Cataract surgery" | 800x600 |
| Service - Retina | Pexels | https://www.pexels.com/search/retina%20treatment/ | "Retina treatment" | 800x600 |
| Service - Pediatric | Unsplash | https://unsplash.com/s/photos/pediatric-eye-doctor | "Pediatric eye doctor" | 800x600 |
| Service - Glaucoma | Pexels | https://www.pexels.com/search/glaucoma%20screening/ | "Glaucoma screening" | 800x600 |
| Service - Dry Eye | Unsplash | https://unsplash.com/s/photos/dry-eye-treatment-ipl | "Dry eye clinic" | 800x600 |
| Service - Optical | Pexels | https://www.pexels.com/search/optical%20shop%20glasses/ | "Optical shop" | 800x600 |
| Lasik - Wavelight | Unsplash | https://unsplash.com/s/photos/lasik-machine-modern | "Wavelight Lasik" | 1200x800 |
| Lasik - SMILE | Pexels | https://www.pexels.com/search/eye%20surgery%20laser/ | "SMILE laser" | 1200x800 |
| Doctor portraits | Pexels | https://www.pexels.com/search/asian%20doctor%20portrait%20professional/ | "Dokter Sp.M" | 600x800 |
| Tech - OCT | Unsplash | https://unsplash.com/s/photos/OCT-machine-ophthalmology | "OCT machine" | 800x600 |
| Tech - Auto Refractor | Pexels | https://www.pexels.com/search/auto%20refractor%20eye/ | "Auto refractor" | 800x600 |
| Tech - Phaco Unit | Unsplash | https://unsplash.com/s/photos/phacoemulsification | "Phaco unit" | 800x600 |
| Optical shop interior | Pexels | https://www.pexels.com/search/optical%20store%20glasses%20frame/ | "Optical shop interior" | 1200x800 |
| Testimonial - Lasik | Unsplash | https://unsplash.com/s/photos/man-without-glasses-confident | "Post Lasik patient" | 600x800 |
| Testimonial - Elderly | Pexels | https://www.pexels.com/search/elderly%20happy%20reading/ | "Post katarak patient" | 600x800 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Medical-professional, subtle, family-friendly. No flashy.

### Hero (React island, `client:load`)
```tsx
// Professional warm reveal
const medicalProfessionalReveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.15 }
  }
}
```

### Eye Conditions Grid (React island, `client:visible`)
- 8 cards reveal stagger
- Hover: card lift `y: -6`, icon scale subtle
- Click → smooth scroll to relevant treatment

### Services Grid (React island, `client:visible`)
- 8 service cards reveal stagger
- Hover: card lift + icon color shift + accent border
- Price tag: subtle reveal

### Lasik Section (React island, `client:visible`)
- 3 Lasik option cards reveal stagger
- "Most Popular" emphasized (`scale: 1.05`)
- Hover: card lift + border accent
- Eligibility checklist: stagger reveal with checkmark draw

### Ophthalmologists Grid (React island, `client:visible`)
- 10 dokter cards stagger reveal
- Hover: image fade slight + schedule slide-up
- Sub-spesialisasi badges: smooth reveal

### Technology Cards (React island, `client:visible`)
- 6 tech cards reveal stagger
- Brand name badge: subtle emphasis
- Hover: card lift + device image scale

### Optical Shop (React island, `client:visible`)
- 3 optical highlight cards reveal
- Frame brand logos: stagger reveal
- Hover: subtle scale

### When To See Eye Doctor (React island, `client:visible`)
- 6 case cards reveal stagger (age-based progression)
- Emergency case: subtle pulse emphasis
- Icon: scale subtle on visible

### Testimonial Carousel (React island, `client:visible`)
- Auto-rotate 8s
- Slide transition smooth
- Patient story tag (Lasik, katarak, anak): emphasis
- Pause on hover

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate
- Soft accent on open

### Booking Form
- Multi-step smooth transition
- Service dropdown: animated chips
- Submit: subtle morph

### Scroll Reveal Pattern (reusable)
```tsx
const medicalFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Conditions, Services, Lasik, Ophthalmologists, Technology, Optical, When to See, Testimonial, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Visi Klinik Mata — Klinik Mata Spesialis Jakarta, Lasik & Katarak
- **Description:** Klinik mata spesialis dengan 15+ dokter Sp.M. Lasik Wavelight FS200, operasi katarak, treatment retina, mata anak, glaucoma. 5 cabang Jabodetabek + Surabaya.
- **Keywords:** klinik mata jakarta, lasik jakarta, operasi katarak, dokter mata, dokter Sp.M, glaucoma jakarta, kacamata anak, klinik mata BPJS
- **OG Image:** Hero shot pemeriksaan mata dengan logo (1200x630)
- **Schema:** `MedicalClinic` + `MedicalSpecialty` (Ophthalmology) + `Physician` + `MedicalProcedure` schema
