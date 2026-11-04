"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  UserCheck,
  LogIn,
  LogOut,
  ShoppingBag,
} from "lucide-react";
import { useAppStore } from "@/store/useAppStore";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [googleName, setGoogleName] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [googleWhatsapp, setGoogleWhatsapp] = useState("");

  const pathname = usePathname();

  const currentUser = useAppStore((s) => s.currentUser);
  const users = useAppStore((s) => s.users);
  const orders = useAppStore((s) => s.orders);
  const switchDemoUser = useAppStore((s) => s.switchDemoUser);
  const loginWithGoogle = useAppStore((s) => s.loginWithGoogle);
  const logout = useAppStore((s) => s.logout);

  const unpaidCount = orders.filter(
    (o) =>
      currentUser &&
      o.user_id === currentUser.id &&
      (o.payment_status === "UNPAID" ||
        o.payment_status === "WAITING_VERIFICATION")
  ).length;

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!googleEmail.trim()) return;
    loginWithGoogle({
      name: googleName.trim() || googleEmail.split("@")[0],
      email: googleEmail.trim(),
      whatsapp: googleWhatsapp.trim() || "081234567890",
    });
    setLoginModalOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Katalog", href: "/katalog" },
    { label: "Pengadaan", href: "/pengadaan" },
    { label: "Kemitraan", href: "/partner" },
    { label: "Cek Paspor QR", href: "/layanan" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <>
      {/* MAIN PUBLIC HEADER (Tampil Lengkap Sebelum & Sesudah Login, Ala nusaQu) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container-nusa h-16 lg:h-20 flex items-center justify-between gap-6">
          {/* Brand Logo Resmi (Vektor SVG Joglo Makmur + Tipografi Berwibawa) */}
          <BrandLogo href="/" />

          {/* Desktop Navigation Links (Lengkap & Ramping 6 Menu) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-slate-600">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));

              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="relative group py-2">
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 transition-colors ${
                        isActive
                          ? "text-[#15803d] font-bold"
                          : "hover:text-[#15803d]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-80">
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block p-3.5 rounded-xl hover:bg-emerald-50/70 transition"
                          >
                            <div className="text-sm font-bold text-slate-900">
                              {sub.title}
                            </div>
                            <div className="text-[13px] text-slate-500 mt-0.5">
                              {sub.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[#15803d] font-bold"
                      : "hover:text-[#15803d]"
                  }`}
                >
                  {item.label}
                  {item.label === "Member Area" && unpaidCount > 0 && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[12px] font-bold bg-amber-100 text-amber-800 rounded-full">
                      {unpaidCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area: Login Button or Logged-In User Chip */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/pesanan-saya"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#15803d] hover:bg-emerald-100 transition"
                >
                  <UserCheck className="w-4 h-4" />
                  <span className="max-w-[130px] truncate">
                    {currentUser.full_name}
                  </span>
                  {unpaidCount > 0 && (
                    <span className="px-1.5 py-0.5 bg-[#15803d] text-white rounded-full text-[12px]">
                      {unpaidCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={logout}
                  title="Keluar Akun"
                  className="p-2 rounded-full text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginModalOpen(true)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-sm shadow-sm transition cursor-pointer gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/pesanan-saya"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {unpaidCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#15803d] text-white text-[12px] font-bold flex items-center justify-center">
                  {unpaidCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pesanan-saya"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-[#15803d]"
              >
                Member Area
              </Link>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {currentUser ? (
                <div className="flex items-center justify-between bg-emerald-50 px-4 py-2.5 rounded-xl">
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {currentUser.full_name}
                    </div>
                    <div className="text-[13px] text-slate-500">
                      {currentUser.email}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-xs font-bold text-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#15803d] text-white font-bold text-sm"
                >
                  Login dengan Google
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* MODAL MASUK / LOGIN GOOGLE MEWAH & BERSIH */}
      {loginModalOpen && (
        <div
          onClick={() => setLoginModalOpen(false)}
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 transition-opacity"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Tombol X Tutup Modal yang Jelas */}
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition cursor-pointer"
              aria-label="Tutup Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Modal */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#15803d]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15803d]">
                  PORTAL EKOSISTEM
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">
                  Masuk ke Akun Anda
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Akses riwayat pesanan, sertifikat kurban digital, laporan timbangan mingguan mitra, dan invoice resmi CV Joglo Makmur Perkasa.
            </p>

            {/* Tombol Utama: Lanjutkan dengan Google Asli */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => {
                  loginWithGoogle({
                    name: "Sholeh Hidayat",
                    email: "hidayatsholeh54@gmail.com",
                    whatsapp: "085162581872",
                  });
                  setLoginModalOpen(false);
                }}
                className="w-full py-3.5 px-4 rounded-2xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm flex items-center justify-center gap-3 transition shadow-xs cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Lanjutkan dengan Google</span>
              </button>

              <div className="relative flex items-center justify-center py-2">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3 text-[11px] font-semibold text-slate-400 absolute">
                  atau via email
                </span>
              </div>

              {/* Form Masuk Email Alternatif */}
              <form onSubmit={handleCustomLogin} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Masukkan alamat email Anda..."
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#15803d] focus:bg-white transition"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl bg-[#15803d] hover:bg-[#14532d] text-white font-bold text-xs transition shadow-2xs cursor-pointer"
                >
                  Kirim Tautan Masuk
                </button>
              </form>
            </div>

            {/* Simulasi Akun Pengujian (Tersimpan Rapi di Bawah untuk Kebutuhan Demo) */}
            <details className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              <summary className="cursor-pointer hover:text-slate-600 font-semibold select-none flex items-center justify-between">
                <span>Mode Simulasi Pengujian (Demo Roles)</span>
                <span className="text-[10px] text-slate-400">▾</span>
              </summary>
              <div className="mt-3 space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {users.map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => {
                      switchDemoUser(u.id);
                      setLoginModalOpen(false);
                    }}
                    className="w-full text-left p-2.5 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/50 transition flex items-center justify-between cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800">
                        {u.full_name}
                      </div>
                      <div className="text-[10px] text-slate-400">{u.email}</div>
                    </div>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {u.role}
                    </span>
                  </button>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </>
  );
}
