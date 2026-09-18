import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { 
  Monitor, 
  ShieldCheck, 
  CheckCircle2, 
  Moon, 
  Eye, 
  Zap, 
  ArrowRight, 
  MessageCircle, 
  Laptop,
  Smartphone
} from 'lucide-react';

export const metadata = generatePageMetadata({
  title: "Verres Anti-Lumière Bleue — Protection Écran & Santé Visuelle",
  description: "Protégez vos yeux des écrans et ordinateurs à Dakar avec nos verres anti-lumière bleue 420nm certifiés.",
  path: "/anti-lumiere-bleue",
});

const blueLightProducts = siteConfig.products.filter(p => p.category === 'anti-lumiere-bleue' || p.category === 'optiques-vue');

export default function AntiLumiereBleuePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Header />

      {/* Hero Header */}
      <div className="bg-[#0D0F12] text-white py-16 lg:py-20 border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#16181D] border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-4">
              <Monitor size={13} />
              <span>Santé Oculaire &amp; Télétravail à Dakar</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Bouclier Anti-Lumière Bleue pour vos journées sur écran.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
              Vos yeux méritent le meilleur traitement. Nos verres 420nm bloquent les rayonnements toxiques émis par smartphones, ordinateurs et tablettes pour travailler confortablement sans fatigue.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/boutique?cat=anti-lumiere-bleue"
                className="gold-gradient-bg text-[#0D0F12] px-7 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg btn-bounce"
              >
                <span>Voir les montures équipées</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite des informations sur vos lunettes anti-lumière bleue.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16181D] hover:bg-white/10 text-white border border-white/20 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>Conseil WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Scientific Breakdown */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#9B7B34]">
              Technologie Optique
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0D0F12] mt-1">
              Pourquoi la lumière bleue fatigue vos yeux ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8F7F4] p-7 rounded-3xl border border-gray-200/80">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5">
                <Laptop size={22} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#0D0F12] mb-2">
                Éblouissement &amp; Picotements
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                La lumière bleue se disperse facilement dans l&apos;œil, créant un flou d&apos;accommodation permanent qui oblige vos muscles oculaires à forcer en continu.
              </p>
            </div>

            <div className="bg-[#F8F7F4] p-7 rounded-3xl border border-gray-200/80">
              <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/15 text-[#9B7B34] flex items-center justify-center mb-5">
                <Moon size={22} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#0D0F12] mb-2">
                Troubles du Sommeil
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                L&apos;exposition tardive aux écrans trompe votre cerveau en simulant le soleil de midi, bloquant la sécrétion naturelle de mélatonine.
              </p>
            </div>

            <div className="bg-[#F8F7F4] p-7 rounded-3xl border border-gray-200/80">
              <div className="w-12 h-12 rounded-2xl bg-[#06D6A0]/10 text-[#06D6A0] flex items-center justify-center mb-5">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-serif font-bold text-base text-[#0D0F12] mb-2">
                Protection Rétinienne Long Terme
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Le filtre Gémeaux 420nm absorbe les ondes courtes les plus nocives tout en conservant une transparence parfaite sans teinte jaune criarde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models Showcase */}
      <section className="py-16 bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D0F12]">
                Nos montures anti-lumière bleue vedettes
              </h2>
              <p className="text-xs text-gray-500 mt-1">Disponibles immédiatement avec livraison en 24h à Dakar.</p>
            </div>
            <Link
              href="/boutique?cat=anti-lumiere-bleue"
              className="text-xs font-bold uppercase tracking-wider text-[#9B7B34] hover:underline"
            >
              Tout voir →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blueLightProducts.map((product) => (
              <div key={product.id} className="bg-white p-5 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="h-56 w-full rounded-2xl bg-[#0D0F12] overflow-hidden mb-4 relative">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-[#0D0F12] text-[#C5A059] border border-[#C5A059]/40 text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                      Filtre 420nm
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0D0F12]">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.shape} · {product.material}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="font-serif text-lg font-black text-[#0D0F12]">{product.price.toLocaleString('fr-FR')} F CFA</span>
                  <Link
                    href="/boutique?cat=anti-lumiere-bleue"
                    className="gold-gradient-bg text-[#0D0F12] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-sm"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
