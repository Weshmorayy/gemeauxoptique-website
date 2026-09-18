'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Camera, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const steps = [
  {
    num: "01",
    title: "Choisissez votre monture",
    desc: "Sélectionnez votre modèle solaire ou optique parmi nos collections Fendi, Burberry ou Signature.",
  },
  {
    num: "02",
    title: "Envoyez votre ordonnance",
    desc: "Prenez en photo votre prescription ophtalmologique et transmettez-la nous directement par WhatsApp.",
  },
  {
    num: "03",
    title: "Taillage & Centrage de précision",
    desc: "Nos techniciens découpent et montent vos verres unifocaux, anti-reflets ou amincis au millimètre près.",
  },
  {
    num: "04",
    title: "Livraison 24h & Ajustement",
    desc: "Réceptionnez vos lunettes prêtes à porter à votre domicile ou bureau à Dakar avec son étui rigide.",
  },
];

export default function OpticianCraftSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Workflow */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#9B7B34] mb-3">
                <FileText size={14} className="text-[#C5A059]" />
                <span>Service Verres Médicaux &amp; Ordonnances</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0D0F12] leading-tight">
                Vos verres de vue montés sur mesure en 4 étapes simples.
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Pas besoin de vous déplacer en salle d&apos;attente : profitez de notre service d&apos;optique digitalisé à Dakar avec la garantie d&apos;un centrage professionnel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-[#F8F7F4] p-5 rounded-2xl border border-gray-200/70">
                  <span className="text-xl font-black text-[#C5A059] block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#0D0F12] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite vous envoyer mon ordonnance pour des verres de vue.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md btn-bounce"
              >
                <Camera size={15} />
                <span>Envoyer mon ordonnance sur WhatsApp</span>
              </a>

              <Link
                href="/services-verres"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-black py-3 px-4"
              >
                <span>En savoir plus sur nos verres</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0D0F12]">
              <img
                src="/images/editorial/lifestyle-homme-optique.jpg"
                alt="Opticien Gémeaux Optique Dakar ajustement de monture"
                className="w-full h-96 sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#0D0F12]/90 backdrop-blur-md p-4 rounded-2xl border border-[#C5A059]/30 w-full">
                  <p className="text-xs font-bold text-white">Atelier d&apos;optique partenaire à Dakar</p>
                  <p className="text-[11px] text-[#C5A059] mt-0.5">Contrôle qualité &amp; étui de protection offert</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
