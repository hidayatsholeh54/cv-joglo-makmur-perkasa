# Anti-AI Slop & Clean Engineering Rules
# CV Joglo Makmur Perkasa Web Platform

## 1. Copywriting & Tone of Voice
- **Lugas, Nyata, dan Bernas:** Gunakan bahasa perdagangan nyata Indonesia (cash/tunai, DP 50%, timbang bobot kg, volume liter, BPOM MD, perahan segar, garansi sehat, antar se-DIY).
- **Dilarang Keras Menggunakan AI Slop Phrases:**
  - JANGAN PERNAH gunakan kata klise AI seperti: *"Di era digital yang serba cepat"*, *"Solusi holistik terdepan"*, *"Ekosistem peternakan terintegrasi yang berdaya saing"*, *"Komitmen tanpa kompromi"*, *"Menghadirkan revolusi"*, dll.
  - Tulis kalimat pendek, padat, dan berbicara langsung ke intinya (punchy, app-style copywriting).
- **Ketentuan Syariah & Medis:**
  - Hewan qurban/aqiqah 100% syar'i, sehat terawat, bebas cacat, cukup umur (poel).
  - Gunakan istilah natural: *"Pemeriksaan Dokter Hewan"*, *"Jaminan Kesehatan & Bebas Penyakit"*. Jangan menggunakan istilah *"sertifikat SKKH"*.
- **Tanpa Tabungan Qurban & Tanpa Beban Titip Rawat:** Transaksi ternak murni jual beli tunai atau DP 50% untuk booking fisik/ear-tag dengan pengantaran langsung ke alamat tujuan pemesan.

## 2. Desain UI/UX & Visual Standard
- **Standar Apple, Shopify, dan Segari:** Tampilan wajib bersih, bernapas (spacious), elegan, dan tidak sesak.
- **Zero Redundancy (Anti-Badge Overload):**
  - Dilarang menumpuk badge/pill jika informasi tersebut sudah tertulis pada judul atau foto.
  - Jangan gunakan teks template atau slogan yang diulang-ulang di setiap kartu produk (seperti *"Gurih Tanpa Bau Prengus"* di setiap item).
  - Hindari badge mengambang di sudut-sudut kartu kecuali benar-benar fungsional (seperti diskon promo atau nomor eartag).
- **Konsistensi Layout & Tipografi:**
  - Seluruh judul seksi (heading) dan margin wajib konsisten rata kiri (`text-left`) mengikuti pembungkus utama (`container-nusa`).
  - Dilarang membuat seksi yang tiba-tiba bergeser menjadi `text-center` atau menyempit `max-w-4xl mx-auto` sehingga merusak garis batas layout halaman.
  - Komponen FAQ di semua halaman wajib menggunakan desain accordion interaktif seragam dengan chevron berputar.

## 3. Akurasi Data & Aset Foto
- **Foto Wajib 100% Relevan dengan Komoditas:**
  - Hewan kambing/domba/sapi wajib menggunakan foto asli ternak yang relevan (dilarang menggunakan foto ayam, burung, atau pemandangan abstrak seperti awan, langit, atau laut).
  - Susu cair dan susu bubuk harus menampilkan kemasan atau perahan susu nyata.
- **State Persistence (Zustand):**
  - Setiap kali ada penambahan atau perbaikan data pada `src/data/initial-db.js`, wajib menaikkan versi kunci penyimpanan localStorage di `src/store/useAppStore.js` (`name: "joglo-makmur-storage-vX"`) agar browser klien langsung memuat data terbaru.

## 4. Kualitas Kode
- Tulis kode React / Next.js yang bersih, to-the-point, dan minim boilerplate yang tidak perlu.
- Pastikan build selalu sukses (`npm run build`) tanpa error atau lint warning.
