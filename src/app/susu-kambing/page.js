"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SusuKambingPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/katalog?tab=susu");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 text-center">
        <div className="max-w-md space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#15803d] flex items-center justify-center mx-auto border border-emerald-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">
            Mengarahkan ke Katalog Susu BPOM...
          </h1>
          <p className="text-xs text-slate-500">
            Seluruh etalase produk resmi Susu Kambing Etawa BPOM Joglo Makmur kini terpusat di Katalog Resmi.
          </p>
          <div className="pt-2">
            <Link
              href="/katalog?tab=susu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#15803d] text-white font-bold text-xs shadow-sm"
            >
              <span>Buka Katalog Susu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
