'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, ShieldCheck, SunMedium, MessageCircle } from 'lucide-react';

export default function HeroLookbook() {
  return (
    <section className="relative overflow-hidden bg-[#0D0F12] text-white pt-8 pb-16 lg:py-24 border-b border-[#C5A059]/20">
      {/* Subtle gold glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top gold badge */}
            <div className="inline-flex items-center gap-2 bg-[#16181D] border border-[#C5A059]/30 px-3.5 py-1.5 rounded-full shadow-sm">
              <Sparkles size={13} className="text-[#C5A059]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ECC97B]">
                Maison d&apos;Optique &amp; Solaires · Dakar
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-[1.12] tracking-tight">
              L&apos;élégance du regard,{' '}
              <span className="gold-gradient-text block mt-1">
                la précision de la vision.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              Des solaires haute couture aux montures de créateurs, associées à nos verres protecteurs anti-lumière bleue et correcteurs sur ordonnance. Sublimer votre personnalité au quotidien à Dakar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/boutique"
                className="gold-gradient-bg text-[#0D0F12] px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2.5 shadow-lg shadow-yellow-900/30 transition-all btn-bounce"
              >
                <span>Explorer la Collection</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite découvrir vos modèles et tarifs.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16181D] hover:bg-white/10 border border-[#C5A059]/40 text-white px-6 py-4 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all btn-bounce"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                <span>Conseil WhatsApp Direct</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="bg-[#16181D] p-3.5 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Solaires Tendances</p>
                <p className="text-sm font-black text-[#ECC97B] mt-0.5">Dès 10.000 F CFA</p>
              </div>
              <div className="bg-[#16181D] p-3.5 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Protection Écran</p>
                <p className="text-sm font-black text-white mt-0.5">Filtre 420nm Inclus</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-[#16181D] p-3.5 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Livraison Express</p>
                <p className="text-sm font-black text-[#25D366] mt-0.5">2h à 4h sur Dakar</p>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Editorial Diptyque Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card: Solaires Fendi Gold */}
              <div className="relative rounded-3xl overflow-hidden bg-[#16181D] shadow-2xl border-2 border-[#C5A059]/30 group">
                <div className="h-80 sm:h-96 w-full overflow-hidden bg-white">
                  <img
                    src="/images/products/solaire-fendi-gold-black.jpg"
                    alt="Solaire Fendi Haute Couture Dakar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Price Sticker */}
                <div className="absolute top-4 right-4 bg-[#0D0F12]/90 border border-[#C5A059]/40 text-[#ECC97B] px-3.5 py-1.5 rounded-full text-xs font-black shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <SunMedium size={14} className="text-[#C5A059]" />
                  <span>10.000 F CFA</span>
                </div>

                {/* Bottom Bar Info */}
                <div className="p-5 bg-gradient-to-t from-[#16181D] via-[#16181D] to-[#16181D]/90 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5A059]">
                      Édition Solaire
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">Fendi Armor Gold Black</h3>
                  </div>
                  <span className="text-xs bg-[#0D0F12] text-gray-300 font-bold px-3 py-1.5 rounded-xl border border-white/10">
                    UV400
                  </span>
                </div>
              </div>

              {/* Floating Second Card: Burberry Anti-Lumière Bleue */}
              <div className="absolute -bottom-6 -left-6 bg-[#0D0F12] p-3.5 rounded-2xl shadow-2xl border border-[#C5A059]/40 flex items-center gap-3.5 max-w-[240px] hidden sm:flex">
                <img
                  src="/images/products/monture-burberry-anti-lumiere.jpg"
                  alt="Monture Burberry Anti-Lumière Bleue"
                  className="w-14 h-14 object-cover rounded-xl bg-white flex-shrink-0"
                />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-wider text-[#C5A059]">Spécial Écrans</p>
                  <p className="text-xs font-bold text-white leading-tight">Burberry Oversize</p>
                  <p className="text-xs font-black text-[#ECC97B] mt-0.5">12.000 F CFA</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
