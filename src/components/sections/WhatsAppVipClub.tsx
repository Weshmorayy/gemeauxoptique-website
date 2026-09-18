import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MessageCircle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function WhatsAppVipClub() {
  return (
    <section className="py-16 bg-[#0D0F12] text-white relative overflow-hidden">
      {/* Gold ambient lighting */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#16181D] p-8 sm:p-12 rounded-3xl border border-[#C5A059]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#0D0F12] border border-[#C5A059]/40 text-[#ECC97B] text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4">
              <Sparkles size={13} className="text-[#C5A059]" />
              <span>Service Privilège &amp; Arrivages Dakar</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Envie d&apos;essayer une monture à domicile ou au bureau ?
            </h3>
            
            <p className="mt-3 text-gray-300 text-xs sm:text-sm leading-relaxed">
              Rejoignez notre service WhatsApp : nous vous envoyons des vidéos détaillées des modèles en lumière naturelle, vérifions votre morphologie et planifions la livraison express de votre coup de cœur partout à Dakar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent("Bonjour Gémeaux Optique, je souhaite des conseils pour un essayage et voir les nouveaux arrivages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg btn-bounce"
            >
              <MessageCircle size={17} />
              <span>Contacter sur WhatsApp</span>
            </a>
            
            <Link
              href="/boutique"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D0F12] hover:bg-white/10 text-white font-bold px-6 py-4 rounded-2xl text-xs uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>Voir le catalogue</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
