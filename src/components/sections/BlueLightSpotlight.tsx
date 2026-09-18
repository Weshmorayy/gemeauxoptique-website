'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Monitor, CheckCircle2, ArrowRight, Zap, Moon } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function BlueLightSpotlight() {
  return (
    <section className="py-20 bg-[#0D0F12] text-white relative overflow-hidden border-b border-[#C5A059]/20">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive comparison card */}
          <div className="lg:col-span-6 relative">
            <div className="bg-[#16181D] rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl relative">
              <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden mb-6 bg-black">
                <img
                  src="/images/products/verres-anti-lumiere-bleue-demonstration.jpg"
                  alt="Démonstration filtration verre anti-lumière bleue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ECC97B]">
                    <ShieldCheck size={16} className="text-[#C5A059]" />
                    <span>Filtration Spectrale 420nm Active</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-[#0D0F12] p-4 rounded-2xl border border-white/5">
                  <p className="text-2xl sm:text-3xl font-black gold-gradient-text">-90%</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Lumière Bleue Nocive</p>
                </div>
                <div className="bg-[#0D0F12] p-4 rounded-2xl border border-white/5">
                  <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wider mt-1">Clarté Visuelle &amp; Zéro Reflet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copywriting & Concrete Health benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#16181D] border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <Monitor size={14} />
              <span>Santé Oculaire &amp; Écrans à Dakar</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Passez 8h sur écran sans migraine ni fatigue.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Téléphones, ordinateurs portables, tablettes : l&apos;émission continue de lumière bleue perturbe la rétine et détruit la mélatonine responsable de votre sommeil. Nos verres anti-lumière bleue filtrent sélectivement les rayons agressifs sans dénaturer les couleurs réelles.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">Soulagement immédiat des yeux secs et rouges</p>
                  <p className="text-xs text-gray-400">Idéal pour les développeurs, comptables, créatifs et étudiants.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Moon size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">Endormissement naturel et sommeil réparateur</p>
                  <p className="text-xs text-gray-400">Maintien de votre rythme circadien même après une session nocturne.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-white">Disponible sans correction ou avec vos dioptries</p>
                  <p className="text-xs text-gray-400">Montable sur toutes nos montures Burberry, Fendi et signature.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/anti-lumiere-bleue"
                className="gold-gradient-bg text-[#0D0F12] px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg btn-bounce"
              >
                <span>Découvrir les modèles Écrans</span>
                <ArrowRight size={14} />
              </Link>
              
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite commander des lunettes anti-lumière bleue.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Commander sur WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
