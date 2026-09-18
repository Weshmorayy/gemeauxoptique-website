'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { formatPriceFCFA } from '@/lib/utils';
import { 
  Phone, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  Truck, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [modelOfInterest, setModelOfInterest] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Bonjour *Gémeaux Optique* 👋\n\n`;
    if (name) text += `• Nom : ${name}\n`;
    if (phone) text += `• Téléphone : ${phone}\n`;
    if (modelOfInterest) text += `• Monture qui m'intéresse : ${modelOfInterest}\n`;
    if (message) text += `• Message : ${message}\n`;

    const url = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Header />

      {/* Header */}
      <div className="bg-[#0D0F12] text-white py-14 border-b border-[#C5A059]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#16181D] border border-[#C5A059]/30 text-[#ECC97B] text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles size={12} className="text-[#C5A059]" />
            <span>Service Clientèle Dakar</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Contact &amp; Demande d&apos;Essayage
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            Discutez en direct avec nos opticiens pour choisir vos lunettes de soleil ou faire monter vos verres sur ordonnance.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Contact Info & Delivery Zones */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 rounded-3xl border border-gray-200 shadow-sm space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#0D0F12]">
                  Coordonnées directes
                </h3>

                <div className="space-y-4 text-xs text-gray-700">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#25D366]/10 text-[#1EBE5D] font-bold hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Direct : {siteConfig.phoneSecondary}</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phonePrimary}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8F7F4] hover:bg-gray-100 transition-colors"
                  >
                    <Phone size={18} className="text-[#C5A059]" />
                    <span className="font-bold text-gray-900">Appel : {siteConfig.phonePrimary}</span>
                  </a>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8F7F4]">
                    <MapPin size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">Dakar, Sénégal</p>
                      <p className="text-gray-500 mt-0.5">Livraison express à domicile &amp; expédition nationale</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8F7F4]">
                    <Clock size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">Horaires d&apos;ouverture</p>
                      <p className="text-gray-500 mt-0.5">{siteConfig.location.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Zones Table */}
              <div className="bg-[#0D0F12] text-white p-7 rounded-3xl border border-[#C5A059]/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ECC97B]">
                  <Truck size={16} className="text-[#C5A059]" />
                  <span>Tarifs &amp; Délais de Livraison</span>
                </div>

                <div className="space-y-2.5 divide-y divide-white/10">
                  {siteConfig.deliveryZones.map((zone) => (
                    <div key={zone.area} className="pt-2.5 first:pt-0 flex justify-between items-center text-xs">
                      <div>
                        <p className="font-bold text-white">{zone.area}</p>
                        <p className="text-[11px] text-gray-400">{zone.timeframe}</p>
                      </div>
                      <span className="font-black text-[#C5A059]">
                        {formatPriceFCFA(zone.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
                <div className="mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9B7B34]">
                    Formulaire Rapide
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0D0F12] mt-1">
                    Envoyez-nous votre demande
                  </h3>
                  <p className="text-xs text-gray-500 mt-2">
                    Remplissez ce court formulaire pour être redirigé avec votre message prêt sur WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSendWhatsApp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Amadou Fall"
                      className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 77 123 45 67"
                      className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Modèle ou service souhaité
                    </label>
                    <input
                      type="text"
                      value={modelOfInterest}
                      onChange={(e) => setModelOfInterest(e.target.value)}
                      placeholder="Ex: Solaire Fendi Gold, Verres anti-lumière bleue..."
                      className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Votre message ou question
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Précisez votre question, adresse de livraison ou demande d'ajustement..."
                      className="w-full bg-[#F8F7F4] border border-gray-200 rounded-2xl px-4 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-[#0D0F12] py-4 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md btn-bounce mt-4"
                  >
                    <Send size={15} />
                    <span>Envoyer ma demande sur WhatsApp</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
