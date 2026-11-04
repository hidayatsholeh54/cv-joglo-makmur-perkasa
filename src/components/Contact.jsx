"use client";

import { siteConfig } from "@/data/content";

export default function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Sisi Kiri: Informasi Kantor & Legal */}
          <div className="lg:col-span-5 bg-[var(--color-joglo-dark)] p-8 sm:p-12 text-white flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-[var(--color-joglo-accent)] uppercase">
                Hubungi Kami
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">
                Konsultasikan Kebutuhan Tender Anda
              </h3>
              <p className="mt-4 text-sm text-emerald-100/80 leading-relaxed">
                Tim administrasi dan teknisi veteriner kami siap membantu penyusunan spesifikasi, ketersediaan kuota, serta kalkulasi logistik ke daerah Anda.
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <div>
                  <span className="text-xs text-[var(--color-joglo-accent)] font-semibold block uppercase">Kantor &amp; Farm Transit:</span>
                  <p className="font-medium text-white mt-0.5">{siteConfig.address}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-joglo-accent)] font-semibold block uppercase">WhatsApp Resmi:</span>
                  <p className="font-medium text-white mt-0.5">{siteConfig.phone}</p>
                </div>
                <div>
                  <span className="text-xs text-[var(--color-joglo-accent)] font-semibold block uppercase">Email Administrasi / Penawaran:</span>
                  <p className="font-medium text-white mt-0.5">{siteConfig.email}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-emerald-900/80 text-xs text-emerald-200">
              Terbuka untuk kemitraan dinas peternakan, BUMD, dan yayasan pengadaan seluruh Indonesia.
            </div>
          </div>

          {/* Sisi Kanan: Form Tanya Penawaran Cepat */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white flex flex-col justify-center">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Kirim Pesan Langsung ke Tim Sales</h4>
            <p className="text-sm text-gray-500 mb-6">
              Isi data di bawah ini untuk terhubung langsung dengan perwakilan CV Joglo Makmur Perkasa via WhatsApp.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const nama = form.nama.value;
                const instansi = form.instansi.value;
                const kebutuhan = form.kebutuhan.value;
                const text = encodeURIComponent(
                  `Halo CV Joglo Makmur Perkasa,\nSaya: ${nama} (${instansi})\nIngin menanyakan pengadaan ternak:\n${kebutuhan}`
                );
                window.open(`https://wa.me/6285162581872?text=${text}`, "_blank");
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    name="nama"
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Bambang"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-joglo-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Instansi / Dinas / Perusahaan</label>
                  <input
                    name="instansi"
                    type="text"
                    required
                    placeholder="Contoh: Dinas Ketahanan Pangan"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-joglo-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Detail Kebutuhan / Wilayah Pengiriman</label>
                <textarea
                  name="kebutuhan"
                  rows={3}
                  required
                  placeholder="Contoh: Pengadaan 150 ekor kambing betina bibit ke Kalimantan Timur..."
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[var(--color-joglo-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[var(--color-joglo-primary)] hover:bg-[var(--color-joglo-dark)] shadow-md transition-all duration-200"
              >
                Kirim via WhatsApp Resmi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
