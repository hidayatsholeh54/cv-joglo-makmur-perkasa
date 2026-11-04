import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "CV Joglo Makmur Perkasa | Ekosistem Peternakan Modern, Qurban & Susu Kambing BPOM",
  description:
    "Pusat pengadaan ternak pemerintah (kambing & sapi ber-SKKH resmi), katalog Qurban & Aqiqah terverifikasi dokter hewan, kemitraan kandang rakyat, serta hilirisasi Susu Kambing Etawa Bubuk BPOM di Yogyakarta.",
  keywords: [
    "CV Joglo Makmur Perkasa",
    "Pengadaan Ternak Pemerintah",
    "Jual Kambing Qurban Jogja",
    "Paket Aqiqah dan Bibit Kambing PE",
    "Susu Kambing Etawa Bubuk BPOM",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
