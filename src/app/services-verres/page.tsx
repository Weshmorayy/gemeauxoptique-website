import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig, lensOptionsConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';
import { 
  FileText, 
  Camera, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const metadata = generatePageMetadata({
  title: "Verres Correcteurs & Montage sur Ordonnance — Gémeaux Optique",
  description: "Faites monter vos verres de vue médicaux unifocaux, anti-reflet ou anti-lumière bleue sur ordonnance médicale à Dakar.",
  path: "/services-verres",
});

export default function ServicesVerresPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Header />

      {/* Header */}
      <div className="bg-[#0D0F12] text-white py-16 border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#16181D] border border-[#C5A059]/30 text-[#ECC97B] text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4">
              <FileText size={13} className="text-[#C5A059]" />
              <span>Atelier de Taillage &amp; Montage Dakar</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Vos verres correcteurs taillés sur mesure selon votre ordonnance.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
              Myopie, hypermétropie, astigmatisme ou simple fatigue visuelle : transmettez-nous votre ordonnance ophtalmologique via WhatsApp pour un devis et un montage certifié sous 24 à 48 heures.
            </p>
            <div className="pt-6">
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite faire un devis pour des verres de vue avec mon ordonnance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg btn-bounce"
              >
                <Camera size={16} />
                <span>Envoyer mon ordonnance par photo</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lens Options Breakdown Grid */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#9B7B34]">
              Catalogue des Traitements
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0D0F12] mt-1">
              Nos Options de Traitement de Verres
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lensOptionsConfig.map((lens) => (
              <div
                key={lens.id}
                className="bg-[#F8F7F4] p-6 rounded-3xl border border-gray-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#0D0F12] flex items-center justify-center font-bold text-xs">
                      ✦
                    </span>
                    <span className="text-xs font-black text-[#0D0F12]">
                      {lens.price === 0 ? "Inclus" : `+${formatPriceFCFA(lens.price)}`}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0D0F12] mb-2">
                    {lens.name}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {lens.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/60 mt-4">
                  <Link
                    href="/boutique"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9B7B34] hover:underline"
                  >
                    <span>Choisir une monture</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#9B7B34]">
              Questions Fréquentes
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0D0F12] mt-1">
              Tout savoir sur la commande de vos verres
            </h2>
          </div>

          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-serif font-bold text-sm text-[#0D0F12] flex items-center gap-2">
                  <HelpCircle size={16} className="text-[#C5A059] flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
