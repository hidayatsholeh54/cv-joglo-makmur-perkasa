"use client";

import Link from "next/link";

/**
 * BrandLogoIcon - SVG Logogram Resmi CV Joglo Makmur Perkasa
 * Menampilkan stilasi Rumah Joglo Emas Luhur (Royal Gold Heritage).
 * Simbol otentik kemakmuran, martabat, dan pengayoman tradisi Yogyakarta.
 * Didesain 100% vektor murni bergradasi logam emas berkilau (ultra tajam di semua layar).
 */
export function BrandLogoIcon({ className = "w-10 h-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo Resmi Joglo Emas CV Joglo Makmur Perkasa"
    >
      <defs>
        {/* Gradasi Emas Utama (Royal Metallic Gold) */}
        <linearGradient id="jmpRoyalGold" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#d97706" />
          <stop offset="90%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* Gradasi Kilau Cahaya Emas Terang (Gold Highlight) */}
        <linearGradient id="jmpGoldGleam" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#d97706" />
          <stop offset="35%" stopColor="#fef9c3" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="80%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Gradasi Emas Bagian Atap Sayap (Broad Eaves Gold) */}
        <linearGradient id="jmpEavesGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="20%" stopColor="#fbbf24" />
          <stop offset="65%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>

        {/* Gradasi Pilar Saka Guru */}
        <linearGradient id="jmpPillarGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="30%" stopColor="#fef08a" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>

        {/* Bayangan Halus di Bawah Atap */}
        <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#78350f" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Kontainer Elegan dengan Sentuhan Ivory Lembut & Bingkai Emas Tipis */}
      <rect
        x="3"
        y="3"
        width="94"
        height="94"
        rx="22"
        fill="#fffdf7"
        stroke="#fef08a"
        strokeWidth="1.5"
      />

      {/* Group Rumah Joglo Emas */}
      <g filter="url(#softGlow)">
        {/* 1. Mahkota Puncak Joglo (Makutha Luhur Keraton) */}
        <circle cx="50" cy="11" r="2.8" fill="url(#jmpGoldGleam)" />
        <path
          d="M 50 12 C 51.5 12 52.5 13.5 52 15 L 48 15 C 47.5 13.5 48.5 12 50 12 Z"
          fill="url(#jmpRoyalGold)"
        />

        {/* 2. Atap Brunjung Atas (Tajuk Khas Joglo Bertingkat) */}
        <path
          d="M 45 16 C 47.5 14.5 52.5 14.5 55 16 L 66 31 C 67.2 32.5 66.2 34 64 34 L 36 34 C 33.8 34 32.8 32.5 34 31 Z"
          fill="url(#jmpGoldGleam)"
        />

        {/* Garis Aksen Tumpang Sari di Punggung Atap Atas */}
        <path
          d="M 42 24 L 58 24"
          stroke="#fef9c3"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 3. Balok Transisi Tingkat (Blandar Tengah) */}
        <rect
          x="32"
          y="34"
          width="36"
          height="2.5"
          rx="1"
          fill="#92400e"
        />

        {/* 4. Atap Penanggap Bawah (Sayap Pelindung Membentang Megah) */}
        <path
          d="M 32 36 L 68 36 L 86 52 C 87.5 53.2 86.8 55 84 55 L 16 55 C 13.2 55 12.5 53.2 14 52 Z"
          fill="url(#jmpEavesGold)"
        />

        {/* Garis Kilau Cahaya di Sepanjang Bubungan Sayap Bawah */}
        <path
          d="M 33 37.5 L 67 37.5"
          stroke="#fef9c3"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* 5. Balok Kolom Blandar Utama (Di Bawah Atap) */}
        <rect
          x="20"
          y="56"
          width="60"
          height="3"
          rx="1.5"
          fill="url(#jmpRoyalGold)"
        />

        {/* 6. Tiang Saka Guru (4 Pilar Kokoh) */}
        {/* Pilar Luar Kiri */}
        <rect
          x="25"
          y="59"
          width="5"
          height="23"
          rx="2"
          fill="url(#jmpPillarGold)"
        />
        {/* Pilar Tengah Kiri */}
        <rect
          x="39"
          y="60"
          width="4"
          height="22"
          rx="1.5"
          fill="url(#jmpPillarGold)"
        />
        {/* Pilar Tengah Kanan */}
        <rect
          x="57"
          y="60"
          width="4"
          height="22"
          rx="1.5"
          fill="url(#jmpPillarGold)"
        />
        {/* Pilar Luar Kanan */}
        <rect
          x="70"
          y="59"
          width="5"
          height="23"
          rx="2"
          fill="url(#jmpPillarGold)"
        />

        {/* Ornamen Tumpang Sari Tengah (Aksen Arsitektur Luhur di Antara Pilar) */}
        <path
          d="M 44 65 L 56 65 M 46 68 L 54 68"
          stroke="url(#jmpRoyalGold)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* 7. Pondasi Umpak Batu Emas (Lantai Dasar Penyangga Kokoh) */}
        <rect
          x="16"
          y="82"
          width="68"
          height="4.5"
          rx="2.25"
          fill="url(#jmpRoyalGold)"
        />
        {/* Lis Kilau Umpak */}
        <rect
          x="20"
          y="82.5"
          width="60"
          height="1"
          rx="0.5"
          fill="#fef9c3"
        />
      </g>
    </svg>
  );
}

/**
 * BrandLogo - Komponen Brand Logo Lengkap (Joglo Emas Luhur + Tipografi Berwibawa)
 */
export default function BrandLogo({
  variant = "navbar", // "navbar" | "footer" | "icon"
  href = "/",
}) {
  if (variant === "icon") {
    return <BrandLogoIcon className="w-10 h-10" />;
  }

  const content = (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      {/* Simbol Joglo Emas Luhur */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform duration-200 group-hover:scale-105">
        <BrandLogoIcon className="w-full h-full drop-shadow-xs" />
      </div>

      {/* Tipografi Logotype Kokoh & Berwibawa */}
      <div className="flex flex-col select-none">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-heading font-black tracking-tight text-slate-900 text-lg sm:text-xl lg:text-[22px]">
            JOGLO
          </span>
          <span className="font-heading font-black tracking-tight text-[#15803d] text-lg sm:text-xl lg:text-[22px]">
            MAKMUR
          </span>
        </div>
        <span className="block text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 mt-1 leading-none">
          CV Joglo Makmur Perkasa
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0">
        {content}
      </Link>
    );
  }

  return content;
}
