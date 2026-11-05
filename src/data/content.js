export const siteConfig = {
  name: "CV Joglo Makmur Perkasa",
  shortName: "Joglo Makmur",
  tagline: "Peternakan Terpadu, Pengadaan Nasional & Edu-Inovasi Susu Kambing",
  city: "Yogyakarta, Indonesia",
  address: "Nglinggo Barat, Pagerharjo, Samigaluh, Kabupaten Kulon Progo, D.I. Yogyakarta 55673",
  phone: "+62 851-6258-1872",
  whatsappUrl: "https://wa.me/6285162581872?text=Halo%20CV%20Joglo%20Makmur%20Perkasa,%20saya%20ingin%20konsultasi%20layanan",
  email: "info@joglomakmurperkasa.co.id",

  navLinks: [
    { label: "Beranda", href: "/" },
    { label: "Pengadaan & Portofolio", href: "/pengadaan" },
    { label: "Pembibitan & Farm", href: "#pembibitan" },
    { label: "Program Qurban", href: "#qurban" },
    { label: "Produk Olahan & Edukasi", href: "#produk" },
    { label: "Kontak", href: "#kontak" },
  ],

  stats: [
    { value: "15.000+", label: "Ternak Terdistribusi Antar-Pulau" },
    { value: "100%", label: "Lolos Uji Medis & Sehat Terawat" },
    { value: "14+", label: "Provinsi Jangkauan Distribusi" },
    { value: "25+", label: "Kunjungan Edukasi Dinas & Kampus" },
  ],

  // 4 Pilar Layanan Utama
  mainServices: [
    {
      id: "pengadaan",
      title: "Pengadaan Tender & Logistik Antar-Pulau",
      badge: "Layanan Unggulan",
      desc: "Rekanan resmi pengadaan bibit/ternak dinas pemerintah dan korporat skala besar dengan armada animal welfare ke Kalimantan, Sumatra, Sulawesi, dll.",
      hasDetailPage: true,
      detailUrl: "/pengadaan",
      points: [
        "SOP Pemeriksaan pelabuhan asal & tujuan",
        "Pemeriksaan berkala dokter hewan",
        "Lengkap dokumen legalitas NIB & Uji Medis"
      ]
    },
    {
      id: "pembibitan",
      title: "Pembibitan & Transit Farm Modern",
      badge: "Kandang Transit Jogja",
      desc: "Sentra seleksi, aklimatisasi, dan pemuliaan bibit unggul kambing (PE, Jawa Randu) dan sapi (PO, Bali) dengan biosecurity ketat bebas PMK.",
      hasDetailPage: false,
      points: [
        "Pakan silase & konsentrat berstandar uji",
        "Sterilisasi dan vaksinasi berkala",
        "Kapasitas tampung ratusan ekor"
      ]
    },
    {
      id: "qurban",
      title: "Program Qurban Bergaransi",
      badge: "Musiman & Korporat",
      desc: "Penyediaan hewan qurban berbobot timbang hidup transparan untuk instansi, yayasan, dan masjid dengan fasilitas titip rawat gratis sampai Hari H.",
      hasDetailPage: false,
      points: [
        "Sertifikat sehat dokter hewan",
        "Layanan antar sampai lokasi penyembelihan",
        "Opsi potong & kemas higienis"
      ]
    },
    {
      id: "produk-inovasi",
      title: "Hilirisasi Susu & Edukasi Peternakan",
      badge: "Inovasi & Riset",
      desc: "Unit hilirisasi produk susu kambing bernutrisi tinggi serta pusat kunjungan studi banding dinas peternakan, pemda, dan universitas.",
      hasDetailPage: false,
      points: [
        "Susu Kambing Bubuk BPOM (Milkku 250g)",
        "Susu Kambing Cair Murni (Segar & Frozen)",
        "Es Krim Susu Kambing (Fokus Riset & Edukasi)",
        "Paket Kunjungan Studi / Praktek Lapangan"
      ]
    }
  ],

  // Produk Inovasi Olahan
  products: [
    {
      name: "Susu Kambing Bubuk Alami",
      status: "Terdaftar Resmi & Siap Pesan",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      desc: "Diproses secara higienis dari susu kambing segar pilihan peternakan Joglo Makmur Perkasa. Kaya nutrisi, ramah pencernaan, tanpa bau prengus.",
      features: ["Kemasan Higienis", "Tanpa Pengawet Berbahaya", "Pilihan Rasa Original & Cokelat", "Tersedia Retail & Grosir"]
    },
    {
      name: "Es Krim Susu Kambing (Gelato)",
      status: "Tahap Pengembangan & Obyek Kunjungan Edukasi",
      statusColor: "bg-amber-100 text-amber-900 border-amber-300",
      desc: "Inovasi diversifikasi olahan susu kambing bertekstur lembut dan nikmat. Menjadi daya tarik utama dalam kunjungan studi banding dinas pertanian/peternakan serta magang riset universitas.",
      features: ["Formula Bebas Bau Prengus", "Nilai Gizi Tinggi Anak-Dewasa", "Spot Ikonik Edu-Farm Joglo", "Kolaborasi Uji Mutu Bersama Akademisi"]
    }
  ],

  commodities: [
    {
      name: "Kambing & Domba Potong/Bibit",
      desc: "Kambing Jawa Randu, Kejobong, PE (Peranakan Etawa), dan Domba Gibas berbobot presisi sesuai spek kontrak dinas.",
      spec: "Bobot 20 - 45 kg | Bebas Cacat | Sertifikat Sehat Dokter Hewan"
    },
    {
      name: "Sapi Potong & Bakalan",
      desc: "Sapi PO (Peranakan Ongole), Limousin, Simmental, dan Sapi Bali kualitas terjamin untuk program bantuan populasi & qurban skala korporat.",
      spec: "Bobot 250 - 550 kg | Ear-tag Resmi | Uji Lab Darah Bebas Penyakit"
    }
  ],

  workflow: [
    { step: "01", title: "Review Kebutuhan & KAK Tender", desc: "Menganalisis spesifikasi jenis hewan, rentang bobot, dan persyaratan dinas." },
    { step: "02", title: "Seleksi & Perawatan di Jogja", desc: "Pemeriksaan kesehatan menyeluruh oleh dokter hewan dan vaksinasi." },
    { step: "03", title: "Pemeriksaan Dokter Hewan Resmi", desc: "Pemeriksaan medis menyeluruh untuk memastikan hewan prima sebelum keberangkatan." },
    { step: "04", title: "Pengiriman Aman Antar-Pulau", desc: "Armada darat/kapal roro khusus dengan pakan dan supir ekspedisi berpengalaman." },
    { step: "05", title: "Serah Terima Berita Acara (BAST)", desc: "Pemeriksaan ulang fisik di lokasi tujuan dan penandatanganan serah terima." }
  ],

  // Data Dokumentasi Pengadaan untuk Halaman Khusus /pengadaan
  portfolioActivities: [
    {
      id: "proj-1",
      title: "Pengiriman 250 Ekor Kambing Bibit ke Kalimantan Timur",
      category: "Tender Pemerintah",
      date: "Oktober 2024",
      location: "Yogyakarta ➔ Balikpapan / PPU",
      desc: "Program ketahanan pangan dinas peternakan. Melalui pelabuhan Tanjung Perak Surabaya menuju Pelabuhan Semayang dengan tingkat mortalitas 0%.",
      tags: ["Kambing PE", "Kapal Roro", "Pemeriksaan Dokter Hewan", "BAST Selesai"]
    },
    {
      id: "proj-2",
      title: "Pengadaan 60 Ekor Sapi Bakalan ke Sumatra Selatan",
      category: "Tender Pengadaan",
      date: "Agustus 2024",
      location: "Yogyakarta ➔ Pelabuhan Merak ➔ Bakauheni ➔ Palembang",
      desc: "Distribusi armada truk sekat animal welfare dengan pengawalan supir ekspedisi berpengalaman sepanjang jalur darat dan penyeberangan selat.",
      tags: ["Sapi PO & Limousin", "Truk Khusus Ternak", "Uji Lab PMK Negatif"]
    },
    {
      id: "proj-3",
      title: "Penanganan Transit & Aklimatisasi 180 Ekor Domba Bantuan Dinas",
      category: "Sentra Transit",
      date: "Desember 2024",
      location: "Farm Transit Joglo Makmur, Kulon Progo",
      desc: "Proses isolasi transit 14 hari, pemberian vitamin, penandaan ear-tag resmi, dan penimbangan bobot sebelum pelepasan armada dinas.",
      tags: ["Kandang Transit", "Ear Tag", "Vitamin & Vaksinasi"]
    },
    {
      id: "proj-4",
      title: "Kunjungan Studi Banding Dinas & Fakultas Peternakan Universitas",
      category: "Edu-Farm & Inovasi",
      date: "Rutin Bulanan",
      location: "Pusat Olahan Susu Joglo Makmur",
      desc: "Kunjungan lapangan pembelajaran manajemen kandang modern, pakan silase, dan demo pencicipan inovasi es krim susu kambing.",
      tags: ["Riset Kampus", "Kunjungan Dinas", "Demo Es Krim"]
    }
  ]
};
