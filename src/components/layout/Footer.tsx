import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Phone, MapPin, Mail, MessageCircle, ShieldCheck, SunMedium } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0F12] text-white pt-16 pb-12 border-t border-[#C5A059]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/brand/logo.png"
                alt={siteConfig.name}
                className="h-14 w-auto object-contain rounded-full border border-[#C5A059]/40 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg tracking-wider text-white uppercase leading-none">
                  GÉMEAUX
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] font-bold uppercase mt-1 leading-none">
                  OPTIQUE
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <span className="inline-block bg-[#16181D] text-[#C5A059] border border-[#C5A059]/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Optique &amp; Solaires Dakar
              </span>
            </div>
          </div>

          {/* Multi-Page Navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#C5A059] uppercase tracking-wider mb-4">
              Univers &amp; Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors">
                  Accueil Lookbook
                </Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:text-[#C5A059] transition-colors">
                  Boutique &amp; Catalogue Complet
                </Link>
              </li>
              <li>
                <Link href="/anti-lumiere-bleue" className="hover:text-[#C5A059] transition-colors">
                  Verres Anti-Lumière Bleue (Écrans)
                </Link>
              </li>
              <li>
                <Link href="/services-verres" className="hover:text-[#C5A059] transition-colors">
                  Montage Verres sur Ordonnance
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
                  Contact, Essayage &amp; Livraison
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Orders */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#C5A059] uppercase tracking-wider mb-4">
              Commandes &amp; Essayage
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[#C5A059] flex-shrink-0" />
                <span>{siteConfig.phonePrimary}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} className="text-[#25D366] flex-shrink-0" />
                <span>WhatsApp : {siteConfig.phoneSecondary}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[#C5A059] flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location.address}</span>
              </p>
            </div>
          </div>

          {/* Hours & Assurance */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#C5A059] uppercase tracking-wider mb-4">
              Horaires &amp; Engagements
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              {siteConfig.location.hours}
            </p>
            <div className="bg-[#16181D] p-3.5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-white">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span className="font-bold">Verres certifiés anti-UV &amp; 420nm</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Paiements sécurisés par Wave, Orange Money et Espèces.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Gémeaux Optique Dakar. Tous droits réservés.</p>
          <p>Maison d&apos;optique, verres de précision et solaires au Sénégal.</p>
        </div>
      </div>
    </footer>
  );
}
