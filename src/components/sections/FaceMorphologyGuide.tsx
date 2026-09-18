'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

const faceShapes = [
  {
    id: "rond",
    label: "Visage Rond",
    idealShapes: "Montures Rectangulaires & Hexagonales",
    description: "Des angles nets et des lignes géométriques pour structurer, allonger et affiner les courbes du visage.",
    recommendedModel: "Fendi Armor Gold ou Hexagonale",
    link: "/boutique?shape=Carr%C3%A9e%20%2F%20Rectangulaire",
    avoid: "Éviter les montures parfaitement rondes de petite taille.",
  },
  {
    id: "carre",
    label: "Visage Carré / Anguleux",
    idealShapes: "Montures Rondes, Ovales & Aviateur",
    description: "Des courbes douces et des contours fins pour adoucir la mâchoire prononcée et harmoniser les traits.",
    recommendedModel: "Monture Ronde Studio ou Aviateur Gold",
    link: "/boutique?shape=Ronde%20%2F%20Ovale",
    avoid: "Éviter les montures carrées trop épaisses qui durcissent les traits.",
  },
  {
    id: "ovale",
    label: "Visage Ovale",
    idealShapes: "Toutes les formes vous subliment !",
    description: "La morphologie la plus polyvalente. Osez les modèles oversize, géométriques ou papillon selon votre style.",
    recommendedModel: "Burberry Oversize ou Fendi Hexagone",
    link: "/boutique",
    avoid: "Attention simplement à ce que la monture ne soit pas plus large que vos tempes.",
  },
  {
    id: "coeur",
    label: "Visage Cœur / Triangle",
    idealShapes: "Montures Papillon (Cat-Eye) & Demi-cerclées",
    description: "Des lignes ascendentes ou demi-cerclées qui équilibrent un front large avec un menton fin.",
    recommendedModel: "Burberry Écaille Papillon ou Clubmaster",
    link: "/boutique?shape=Cat-Eye%20%2F%20Papillon",
    avoid: "Éviter les montures trop chargées sur la partie supérieure.",
  },
];

export default function FaceMorphologyGuide() {
  const [activeShape, setActiveShape] = useState(faceShapes[0]);

  return (
    <section className="py-20 bg-[#F8F7F4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#9B7B34] mb-3">
            <Sparkles size={14} className="text-[#C5A059]" />
            <span>Guide Visagisme &amp; Morphologie</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0D0F12]">
            Quelle monture pour votre visage ?
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-3">
            Sélectionnez la forme de votre visage pour découvrir les recommandations des opticiens Gémeaux.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {faceShapes.map((shape) => {
            const isSelected = activeShape.id === shape.id;
            return (
              <button
                key={shape.id}
                onClick={() => setActiveShape(shape)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#0D0F12] text-[#ECC97B] shadow-lg border border-[#C5A059]/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {shape.label}
              </button>
            );
          })}
        </div>

        {/* Recommendation Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-gray-200 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#9B7B34]">
                Formes Idéales Recommandées
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0D0F12] mt-1">
                {activeShape.idealShapes}
              </h3>
            </div>
            <span className="bg-[#0D0F12] text-[#ECC97B] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-[#C5A059]/30 w-fit">
              {activeShape.label}
            </span>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-gray-700 text-sm leading-relaxed">
              {activeShape.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-[#06D6A0] uppercase tracking-wider flex items-center gap-1.5">
                  <Check size={14} />
                  <span>Modèle Coup de Cœur</span>
                </p>
                <p className="text-xs font-bold text-[#0D0F12] mt-1">
                  {activeShape.recommendedModel}
                </p>
              </div>

              <div className="bg-[#F8F7F4] p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Conseil d&apos;Opticien
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {activeShape.avoid}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Link
              href={activeShape.link}
              className="gold-gradient-bg text-[#0D0F12] px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-sm btn-bounce"
            >
              <span>Voir les montures adaptées</span>
              <ArrowRight size={14} />
            </Link>

            <span className="text-xs text-gray-400 hidden sm:inline">
              Essayage possible sur Dakar
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
