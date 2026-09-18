'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, SunMedium, Monitor, Eye } from 'lucide-react';

const collections = [
  {
    title: "Le Bar à Solaires 10.000 F",
    subtitle: "Inspirations Haute Couture & Géométrie",
    description: "Des verres dégradés UV400, des montures hexagonales métalliques et des acétates biseautés pour affronter la lumière dakaroise avec panache.",
    image: "/images/products/solaire-fendi-hexagone-blue.jpg",
    link: "/boutique?cat=solaires",
    badge: "Solaires UV400",
    badgeColor: "bg-[#C5A059] text-[#0D0F12]",
    icon: SunMedium,
  },
  {
    title: "Collection Écrans & Anti-Lumière Bleue",
    subtitle: "Protection Visuelle Spécial Télétravail",
    description: "Verres filtrants 420nm neutralisant la lumière bleue des ordinateurs et smartphones. Moins de fatigue, zéro picotement et un look sophistiqué.",
    image: "/images/products/monture-burberry-anti-lumiere.jpg",
    link: "/anti-lumiere-bleue",
    badge: "Protection 420nm",
    badgeColor: "bg-[#0D0F12] text-[#C5A059] border border-[#C5A059]/40",
    icon: Monitor,
  },
  {
    title: "Montures Optiques de Vue",
    subtitle: "Montage Verres Correcteurs sur Ordonnance",
    description: "Formes rondes intemporelles, clubmaster en acier brossé et acétates écaille. Transmettez votre ordonnance médicale pour un montage sur mesure.",
    image: "/images/editorial/monture-ronde-flatlay.jpg",
    link: "/services-verres",
    badge: "Optique de Vue",
    badgeColor: "bg-white text-[#0D0F12]",
    icon: Eye,
  },
];

export default function CuratedDropsSection() {
  return (
    <section className="py-20 bg-[#F8F7F4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#9B7B34] mb-3">
              <Sparkles size={14} className="text-[#C5A059]" />
              <span>Univers &amp; Collections Gémeaux</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D0F12] leading-tight">
              Trois signatures pour habiller votre regard.
            </h2>
          </div>
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0D0F12] hover:text-[#9B7B34] transition-colors border-b-2 border-[#C5A059] pb-1 w-fit"
          >
            <span>Voir toute la boutique</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#0D0F12] mb-6 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <span className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#9B7B34] uppercase tracking-wider mb-2">
                    <Icon size={14} />
                    <span>{item.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0D0F12] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0D0F12] group-hover:text-[#9B7B34] group-hover:translate-x-1 transition-all pt-4 border-t border-gray-100"
                >
                  <span>Découvrir la sélection</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
