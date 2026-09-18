import React, { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BoutiqueCatalogue from '@/components/sections/BoutiqueCatalogue';
import { generatePageMetadata } from '@/lib/seo';
import { Sparkles } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: "Boutique & Solaires — Toutes nos montures",
  description: "Découvrez l'ensemble de notre catalogue de lunettes de soleil, montures anti-lumière bleue et montures optiques à Dakar.",
  path: "/boutique",
});

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Header />
      
      {/* Header Banner */}
      <div className="bg-[#0D0F12] text-white py-14 border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#16181D] border border-[#C5A059]/30 text-[#ECC97B] text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles size={12} className="text-[#C5A059]" />
            <span>Catalogue Officiel Dakar</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Boutique &amp; Collections Optiques
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            Solaires haute couture dès 10.000 F, montures pour écrans et montages de verres de précision sur mesure.
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="py-20 text-center text-xs font-bold text-gray-500">Chargement du catalogue...</div>}>
        <BoutiqueCatalogue />
      </Suspense>

      <Footer />
    </main>
  );
}
